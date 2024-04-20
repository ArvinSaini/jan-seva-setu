import { createContext, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from './useLocalStorage';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage('user', null);
    const navigate = useNavigate();

    const login = async (data) => {
        fetch('http://localhost:3000/login', {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    alert(data.error);
                    return;
                }
                setUser(data);
                console.log(data);
                navigate('/ngos');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const register = async (data) => {
        fetch('http://localhost:3000/register', {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    alert(data.error);
                    return;
                }
                setUser(data);
                navigate('/ngos');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const donate = async (data) => {
        fetch('http://localhost:3000/donate', {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    alert(data.error);
                    return;
                }
                alert('A team will pick up the donation item from the given address at given time. Thank you for your donation!');
                navigate('/donate');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const logout = () => {
        fetch('http://localhost:3000/logout')
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    alert(data.error);
                    return;
                }
                setUser(null);
            })
            .catch((err) => {
                console.log(err);
            });
        navigate('/', { replace: true });
    };


    const value = useMemo(
        () => ({
            user,
            register,
            donate,
            login,
            logout,
        }),
        [user]
    );
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};
