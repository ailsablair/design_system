import { initImmediateSuppression } from '../src/utils/immediateResizeObserverSuppression';

// Manager-side console filter to suppress noisy internal event logs
// Targets messages like:
// "%c manager %c received %cstorybook/instrumenter/sync%c but was unable to determine the source of the event"
// and "%c manager %c received %cstoryRenderPhaseChanged%c but was unable to determine the source of the event"

(function () {
  try {
    initImmediateSuppression();

    const original = {
      debug: console.debug.bind(console),
      log: console.log.bind(console),
      info: console.info.bind(console),
      warn: console.warn.bind(console),
      error: console.error.bind(console),
    };

    const isNoise = (args: Parameters<typeof console.debug>): boolean => {
      try {
        const text = args
          .map((a) => {
            if (typeof a === 'string') return a;
            if (a && typeof a.message === 'string') return a.message;
            try { return String(a); } catch { return ''; }
          })
          .join(' ')
          .toLowerCase();

        if (!text.includes('manager') || !text.includes('received')) return false;
        if (text.includes('storybook/instrumenter/sync')) return true;
        if (text.includes('storyrenderphasechanged')) return true;
        return false;
      } catch {
        return false;
      }
    };

    const wrap = (fn: (...args: Parameters<typeof console.debug>) => void) =>
      (...args: Parameters<typeof console.debug>) => {
        if (isNoise(args)) return; // suppress only the targeted noise
        fn(...args);
      };

    console.debug = wrap(original.debug);
    console.log = wrap(original.log);
    console.info = wrap(original.info);
    // keep warnings unless they match the noise filter
    console.warn = wrap(original.warn);
    console.error = wrap(original.error);
  } catch {
    // no-op if anything goes wrong; do not break manager
  }
})();
