import { authProvider } from '@/features/supabase/authProvider';
import { supabaseClient } from '@/features/supabase/supabaseClient';
import ThemeConfigProvider from '@/features/theme/ThemeConfigProvider';
import { notificationProvider } from '@refinedev/antd';
import { Authenticated, Refine } from '@refinedev/core';
import routerBindings, {
  CatchAllNavigate,
  UnsavedChangesNotifier,
} from '@refinedev/react-router-v6';
import { dataProvider, liveProvider } from '@refinedev/supabase';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

import ForgotPasswordPage from '@/features/auth/forgot-password/ForgotPasswordPage';
import LoginPage from '@/features/auth/login/LoginPage';
import SignupPage from '@/features/auth/signup/SignupPage';
import ComplaintPage from '@/features/help/ComplaintPage';
import HomePage from '@/features/home/HomePage';
import ListingDetailsPage from '@/features/listingDetails/ListingDetailsPage';
import ListingsPage from '@/features/listings/ListingsPage';
import PricingPage from '@/features/pricing/PricingPage';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeConfigProvider>
        <Refine
          authProvider={authProvider}
          dataProvider={dataProvider(supabaseClient)}
          liveProvider={liveProvider(supabaseClient)}
          notificationProvider={notificationProvider}
          options={{
            reactQuery: {
              devtoolConfig: false,
            },
          }}
          routerProvider={routerBindings}
        >
          <Routes>
            <Route index element={<HomePage />} />
            <Route element={<ListingsPage />} path="/listings" />
            <Route element={<ListingDetailsPage />} path="/listings/:id" />
            <Route element={<PricingPage />} path="/pricing" />
            <Route element={<ComplaintPage />} path="/help/complaint" />
            <Route
              element={
                <Authenticated fallback={<CatchAllNavigate to="/auth/login" />}>
                  <Outlet />
                </Authenticated>
              }
            ></Route>
            <Route element={<Authenticated fallback={<Outlet />} />}>
              <Route element={<LoginPage />} path="/auth/login" />
              <Route element={<SignupPage />} path="/auth/signup" />
              <Route
                element={<ForgotPasswordPage />}
                path="/auth/forgot-password"
              />
            </Route>
          </Routes>
          <UnsavedChangesNotifier />
        </Refine>
      </ThemeConfigProvider>
    </BrowserRouter>
  );
}
