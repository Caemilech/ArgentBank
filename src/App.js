import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Error from './pages/Error';
import "./index.css"

export default function App () {
    const isConnected = useSelector((state) => state.auth.isConnected);

    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='login' element={isConnected ? <Navigate to="/profile"/> : <Login />} />
                <Route 
                    path='profile' 
                    element={isConnected ? <Profile /> : <Navigate to="/login" />} 
                />
                <Route path='*' element={<Error />} />
            </Routes>
            <Footer />
        </div>
    )  
}