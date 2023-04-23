import { authProvider } from '@/features/supabase/authProvider';
import { supabaseClient } from '@/features/supabase/supabaseClient';
import ThemeProvider from '@/features/theme/ThemeProvider';
import { notificationProvider } from '@refinedev/antd';
import { Refine } from '@refinedev/core';
import routerBindings, {
  UnsavedChangesNotifier,
} from '@refinedev/react-router-v6';
import { dataProvider, liveProvider } from '@refinedev/supabase';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ForgotPasswordPage from '@/features/auth/forgot-password/ForgotPasswordPage';
import LoginPage from '@/features/auth/login/LoginPage';
import SignupPage from '@/features/auth/signup/SignupPage';
import HomePage from '@/features/home/HomePage';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Refine
          authProvider={authProvider}
          dataProvider={dataProvider(supabaseClient)}
          liveProvider={liveProvider(supabaseClient)}
          routerProvider={routerBindings}
          notificationProvider={notificationProvider}
        >
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/signup" element={<SignupPage />} />
            <Route
              path="/auth/forgot-password"
              element={<ForgotPasswordPage />}
            />
          </Routes>
          <UnsavedChangesNotifier />
        </Refine>
      </BrowserRouter>
    </ThemeProvider>
  );
}
