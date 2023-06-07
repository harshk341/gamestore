import React, { useEffect } from 'react';

const infiniteScroll = (Component, debounce = 0) => {
  const InnerComponent = props => {
    const { nextUrl, fetchGamesOnNeed, collectionKey } = props;
    useEffect(() => {
      const handleScroll = () => {
        if (
          window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 50
        ) {
          setTimeout(() => {
            fetchGamesOnNeed(nextUrl, collectionKey);
          }, debounce);
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [nextUrl, collectionKey, fetchGamesOnNeed]);

    return <Component {...props} />;
  };
  return InnerComponent;
};

export default infiniteScroll;
