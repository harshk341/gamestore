import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import { BaseLayout } from 'src/components';
import { GAMES_PATH, INDEX_PATH } from 'src/constants/api';

const Loader = Component => props =>
  (
    <Suspense fallback={<></>}>
      <Component {...props} />
    </Suspense>
  );

const Games = Loader(lazy(() => import('src/pages/Games')));

const router = [
  {
    path: INDEX_PATH,
    element: <BaseLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="games" replace />
      },
      {
        path: GAMES_PATH,
        element: <Games />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to={INDEX_PATH} replace={true} />
  }
];

export default router;
