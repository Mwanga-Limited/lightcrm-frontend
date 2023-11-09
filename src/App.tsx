import BucketPage from '@components/Bucket';
import Home from '@components/DashboardPages/Home';
import Login from '@components/Login';
import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom';
// import ProtectedRoutes from 'utils/ProtectedRoute';
import { ABOUT, BUCKET, DASHBOARD, HOME, LOGIN, PRICING } from 'utils/routes';

function App() {
  return (
    <>
      <Toaster />

      <Routes>
        <Route path={HOME} element={<Login />} />
        <Route path={LOGIN} element={<Login />} />
        <Route path={BUCKET} element={<BucketPage />} />
        <Route path={DASHBOARD} element={<Home />} />
        <Route path={ABOUT} element={<>Hi I am a About page</>} />
        <Route path={PRICING} element={<>Hi I am a pricing page</>} />
        <Route path={'message'} element={<>Hi I am a message page</>} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

function NoMatch() {
  return (
    <div className="min-h-screen grid place-items-center p-5 text-center">
      <div>
        <h2 className="text-2xl text-purpleColor">404: Page Not Found!</h2>
        <p>Ensure the url is correct.</p>
      </div>
    </div>
  );
}
export default App;
