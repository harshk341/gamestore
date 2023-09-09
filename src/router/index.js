import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import { BaseLayout } from 'src/components';
import {
  GAMES_PATH,
  INDEX_PATH,
  GAME_PATH,
  LOGIN_PATH,
  SIGNUP_PATH
} from 'src/constants/api';

const Loader = Component => props =>
  (
    <Suspense fallback={<></>}>
      <Component {...props} />
    </Suspense>
  );

const Games = Loader(lazy(() => import('src/pages/Games')));
const Game = Loader(lazy(() => import('src/pages/Game')));
const Login = Loader(lazy(() => import('src/pages/Login')));
const SignUp = Loader(lazy(() => import('src/pages/Signup')));

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
      },
      {
        path: GAME_PATH,
        element: <Game />
      },
      {
        path: LOGIN_PATH,
        element: <Login />
      },
      {
        path: SIGNUP_PATH,
        element: <SignUp />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to={INDEX_PATH} replace={true} />
  }
];

export default router;
