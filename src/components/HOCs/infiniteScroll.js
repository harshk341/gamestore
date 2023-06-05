import React, { useEffect } from 'react';
import { selectGamesState } from 'src/slices/gamesSlice';
import { useDispatch, useSelector } from 'src/store';

const infiniteScroll = (Component, nextCallBack, debounce = 0) => {
  const InnerComponent = props => {
    const { nextUrl } = useSelector(selectGamesState);
    const dispatch = useDispatch();
    useEffect(() => {
      const handleScroll = () => {
        if (
          window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 50
        ) {
          setTimeout(() => {
            dispatch(nextCallBack(nextUrl));
          }, debounce);
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [dispatch, nextUrl]);

    return <Component {...props} />;
  };
  return InnerComponent;
};

export default infiniteScroll;
