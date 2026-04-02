import React, { createContext, useContext, useState, useRef, useEffect, useCallback } from 'react';
import Loader from '../components/ui/Loader';

const LoadingContext = createContext({ show: () => {}, hide: () => {}, isLoading: false });

export function useLoading() {
  return useContext(LoadingContext);
}

export default function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const activeRef = useRef(0);

  const show = useCallback(() => {
    activeRef.current += 1;
    setIsLoading(true);
  }, []);

  const hide = useCallback(() => {
    activeRef.current = Math.max(0, activeRef.current - 1);
    if (activeRef.current === 0) setIsLoading(false);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.__loaderPatched) return;
    window.__loaderPatched = true;

    // Patch fetch
    if (window.fetch) {
      window.__origFetchForLoader = window.fetch;
      window.fetch = async function (...args) {
        activeRef.current += 1;
        setIsLoading(true);
        try {
          const res = await window.__origFetchForLoader.apply(this, args);
          return res;
        } finally {
          activeRef.current -= 1;
          if (activeRef.current === 0) setIsLoading(false);
        }
      };
    }

    // Patch XMLHttpRequest send
    if (window.XMLHttpRequest && window.XMLHttpRequest.prototype) {
      const proto = window.XMLHttpRequest.prototype;
      if (!proto.__origSendForLoader) {
        proto.__origSendForLoader = proto.send;
        proto.send = function (...args) {
          activeRef.current += 1;
          setIsLoading(true);
          this.addEventListener('loadend', () => {
            activeRef.current -= 1;
            if (activeRef.current === 0) setIsLoading(false);
          });
          return proto.__origSendForLoader.apply(this, args);
        };
      }
    }

    return () => {
      // restore originals if present
      if (window.__origFetchForLoader) {
        window.fetch = window.__origFetchForLoader;
        delete window.__origFetchForLoader;
      }
      if (window.XMLHttpRequest && window.XMLHttpRequest.prototype) {
        const proto = window.XMLHttpRequest.prototype;
        if (proto.__origSendForLoader) {
          proto.send = proto.__origSendForLoader;
          delete proto.__origSendForLoader;
        }
      }
      delete window.__loaderPatched;
    };
  }, []);

  return (
    <LoadingContext.Provider value={{ show, hide, isLoading }}>
      {children}
      {isLoading && <Loader fullscreen={true} />}
    </LoadingContext.Provider>
  );
}
