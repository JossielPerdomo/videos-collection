import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ErrorPage } from './error-page';
import { VideoList } from './components/videos/VideoList';
import { VideoForm } from './components/videos/VideoForm';

import 'bootswatch/dist/solar/bootstrap.min.css';
import { Root } from './routes/Root';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <VideoList />
      },
      {
        path: "new-video",
        element: <VideoForm />
      },
      {
        path: "update/:id",
        element: <VideoForm />
      },
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
