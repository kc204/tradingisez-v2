// src/components/shared/TradingViewWidget.tsx
'use client';

import React, { useEffect, useRef } from 'react';

interface TradingViewWidgetProps {
  scriptSrc: string;
  config: object;
  widgetKey: string; // Unique key for the container and React's reconciliation
}

const TradingViewWidget: React.FC<TradingViewWidgetProps> = ({
  scriptSrc,
  config,
  widgetKey
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentContainer = containerRef.current;
    
    // Check if the script is already appended to this specific container to prevent duplicates
    if (currentContainer && !currentContainer.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = scriptSrc;
      script.async = true;
      // The TradingView widget script reads its configuration from its own textContent
      script.textContent = JSON.stringify(config, null, 2);

      currentContainer.appendChild(script);
    }

    // Cleanup function: When the component unmounts or dependencies change,
    // remove the script and any DOM elements the script might have created inside our container.
    return () => {
      if (currentContainer) {
        while (currentContainer.firstChild) {
          currentContainer.removeChild(currentContainer.firstChild);
        }
      }
    };
  }, [scriptSrc, config, widgetKey]); // Re-run if these props change

  // This div acts as a container where the TradingView script will inject the widget.
  // Added h-full and w-full to ensure it attempts to fill its parent.
  return <div ref={containerRef} id={`tv-widget-container-${widgetKey}`} className="tradingview-widget-container-wrapper h-full w-full" />;
};

export default TradingViewWidget;
