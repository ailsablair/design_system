/**
 * Test utility to verify ResizeObserver error handling is working
 * This should be used in development to confirm error suppression
 */

/**
 * Deliberately trigger a ResizeObserver error to test suppression
 * This should NOT appear in console if error handling is working
 */
export const testResizeObserverErrorHandling = (): void => {
  if (typeof window === 'undefined') return;
  
  console.log('🧪 Testing ResizeObserver error handling...');
  
  // Test 1: Direct console.error with ResizeObserver message
  console.error('ResizeObserver loop completed with undelivered notifications.');
  
  // Test 2: Simulate an actual ResizeObserver that might cause loops
  const testElement = document.createElement('div');
  testElement.style.width = '100px';
  testElement.style.height = '100px';
  testElement.style.position = 'absolute';
  testElement.style.top = '-9999px';
  document.body.appendChild(testElement);
  
  const observer = new ResizeObserver((entries) => {
    // Intentionally trigger rapid size changes that could cause loops
    for (const entry of entries) {
      if (entry.target instanceof HTMLElement) {
        const currentWidth = parseFloat(entry.target.style.width);
        entry.target.style.width = `${currentWidth + 1}px`;
      }
    }
  });
  
  observer.observe(testElement);
  
  // Clean up after a short delay
  setTimeout(() => {
    observer.disconnect();
    document.body.removeChild(testElement);
    console.log('✅ ResizeObserver error handling test completed');
  }, 100);
};

/**
 * Check if ResizeObserver error handling is properly initialized
 */
export const checkResizeObserverErrorHandling = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  return !!(window as any).__resizeObserverSetupComplete;
};
