import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * This wrapper ensures that navigating between routes, the page scrolling always starts at the top
 */
export default function ScrollStartTop({ children }: React.PropsWithChildren) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children as JSX.Element;
}
