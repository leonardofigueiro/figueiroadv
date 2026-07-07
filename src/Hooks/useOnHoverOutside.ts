import { useEffect, RefObject } from 'react';


export function useOnHoverOutside(ref: RefObject<HTMLLIElement | null>, handler: Function) {
  useEffect(
    () => {
      const listener = (event:Event) => {
        if (!ref.current || ref.current.contains(event.target as Node)) {
          return;
        }
        handler(event);
      };
      document.addEventListener('mouseover', listener);
      return () => {
        document.removeEventListener('mouseout', listener);
      };
    },
    [ref, handler]
  );
}