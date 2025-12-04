import { Suspense, lazy } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar';
import PageViewWrapper from './components/page-view-wrapper';
import RouteLoading from './components/route-loading';
import { NAVIGATION_PATH } from './constants/navigation-path';

const HomePage = lazy(() => import('./pages/home-page'));
const PortfolioPage = lazy(() => import('./pages/portfolio-page'));
const NotFoundPage = lazy(() => import('./pages/not-found-page'));

const App = () => {
  return (
    <div className="app_root">
      <Sidebar />

      <Routes>
        <Route
          path={NAVIGATION_PATH.HOME}
          element={
            <PageViewWrapper>
              <Suspense fallback={<RouteLoading />}>
                <HomePage />
              </Suspense>
            </PageViewWrapper>
          }
        />
        <Route
          path={NAVIGATION_PATH.PORTFOLIO}
          element={
            <PageViewWrapper>
              <Suspense fallback={<RouteLoading />}>
                <PortfolioPage />
              </Suspense>
            </PageViewWrapper>
          }
        />
        <Route
          path="*"
          element={
            <PageViewWrapper>
              <Suspense fallback={<RouteLoading />}>
                <NotFoundPage />
              </Suspense>
            </PageViewWrapper>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
