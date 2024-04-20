import Gallery from './pages/Gallery';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Donate from './pages/Donate';
import NGOs from './pages/NGOs';
import NGOPage from './pages/NGOPage';
import ProtectedRoute from './pages/ProtectedRoute';
import { AuthProvider } from './hooks/useAuth';
import Footer from './components/Footer';
import Faq from './pages/Faq';
import Register from './pages/Register';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={
      <AuthProvider>
        <Navbar />
        <Footer />
      </AuthProvider>
    }>
      <Route index element={<Home />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="faq" element={<Faq />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="donate" element={<ProtectedRoute>
        <Donate />
      </ProtectedRoute>} />
      <Route path="ngos" element={
        <ProtectedRoute>
          <NGOs />
        </ProtectedRoute>
      } />
      <Route path="ngos/:id" element={
        <ProtectedRoute>
          <NGOPage />
        </ProtectedRoute>
      } />
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
