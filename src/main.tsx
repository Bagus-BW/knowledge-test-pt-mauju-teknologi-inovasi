import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';


import "@styles/_index.css";

import router from '@/router/Router';

import { Toaster } from '@/components/atoms/sonner';
import { MyProfileProvider } from './providers/MyProfileProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CookiesProvider>
      <MyProfileProvider>
        <RouterProvider router={router} />
        <Toaster />
      </MyProfileProvider>
    </CookiesProvider>
  </StrictMode>
)
