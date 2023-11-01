import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ProtectedRoutes from 'utils/ProtectedRoute';
import { ABOUT, DASHBOARD, HOME, LOGIN, PRICING } from 'utils/routes';

function App() {
  return (
    <>
      <Router>
        <Toaster />

        <Routes>
          <Route path={HOME} element={<>Hi I am a Home page</>} />
          <Route path={LOGIN} element={<>Hi I am a Login page</>} />
          <Route path={DASHBOARD} element={<>Hi I am a DASHBOARD page</>} />
          <Route path={ABOUT} element={<>Hi I am a About page</>} />
          <Route path={PRICING} element={<>Hi I am a pricing page</>} />
          <Route path={'message'} element={<>Hi I am a message page</>} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </>
  );
}

function NoMatch() {
  return (
    <div className="min-h-screen grid place-items-center p-5 text-center">
      <div>
        <h2 className="text-2xl text-primary-20">404: Page Not Found!</h2>
        <p>Ensure the url is correct.</p>
      </div>
    </div>
  );
}
export default App;
