// Manager-side console filter to suppress noisy internal event logs
// Targets messages like:
// "%c manager %c received %cstorybook/instrumenter/sync%c but was unable to determine the source of the event"
// and "%c manager %c received %cstoryRenderPhaseChanged%c but was unable to determine the source of the event"

(function () {
  try {
    const original = {
      debug: console.debug.bind(console),
      log: console.log.bind(console),
      info: console.info.bind(console),
      warn: console.warn.bind(console),
    };

    const isNoise = (args: any[]): boolean => {
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

    const wrap = (fn: (...args: any[]) => void) =>
      (...args: any[]) => {
        if (isNoise(args)) return; // suppress only the targeted noise
        fn(...args);
      };

    console.debug = wrap(original.debug);
    console.log = wrap(original.log);
    console.info = wrap(original.info);
    // keep warnings unless they match the noise filter
    console.warn = wrap(original.warn);
  } catch {
    // no-op if anything goes wrong; do not break manager
  }
})();
