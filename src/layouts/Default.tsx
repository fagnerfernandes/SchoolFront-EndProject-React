import React from 'react';
import { useLocation } from 'react-router-dom';

const Default = () => {
  const mainContent: any = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    if (document.scrollingElement) {
      document.scrollingElement.scrollTop = 0;
    }
    if (mainContent.current) {
      mainContent.current.scrollTop = 0;
    }
  }, [location]);

  return (
    <>
      <div className="main-content" ref={mainContent}></div>
    </>
  );
};

export default Default;
