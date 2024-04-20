import Gallery from './pages/Gallery';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { AuthProvider } from './hooks/useAuth';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={
      <AuthProvider>
        <Navbar />
      </AuthProvider>
    }>
      <Route index element={<Gallery />} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Route>
  )
);


function App({ routes }) {

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
