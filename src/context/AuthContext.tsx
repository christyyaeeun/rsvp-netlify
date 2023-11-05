import React, { createContext, useContext, useState, useEffect } from 'react';
import Guest from '../types/Guest';

export const BASE_URL = 'https://rsvp-flask-backend-69d9db094480.herokuapp.com'


interface AuthContextProps {
    loggedInUser: string | null;
    login: (userData: { firstName: string; lastName: string }) => boolean;
    logout: () => void;
    checkIfInvited: (firstName: string) => boolean;
    addGuest: (newGuest: Guest) => { success: boolean; message: string };
}

const AuthContext = createContext<AuthContextProps>({
    loggedInUser: null,
    login: () => false,
    logout: () => { },
    checkIfInvited: () => false,
    addGuest: (newGuest: Guest) => ({ success: false, message: '' }), // Updated default return
});

export const useAuth = () => {
    return useContext(AuthContext);
};

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [guestList, setGuestList] = useState<any[]>([]);
    const [loggedInUser, setLoggedInUser] = useState<string | null>(null);

    const login = ({ firstName, lastName }: { firstName: string; lastName: string }): boolean => {
        const userExists = checkIfInvited(firstName);
        if (userExists) {
            setLoggedInUser(firstName);
            return true;
        }
        return false;
    };

    const logout = (): void => {
        setLoggedInUser(null);

    };

    const checkIfInvited = (firstName: string): boolean => {
        return guestList.some((guest) => guest.firstName === firstName);
    };

    const addGuest = (newGuest: Guest) => {
        if (loggedInUser === 'admin') {
            setGuestList([...guestList, newGuest]);
            return { success: true, message: 'Guest added successfully' };
        }
        return { success: false, message: 'Permission denied. Only admin users can add guests.' };
    };

    useEffect(() => {
        const fetchGuestList = async () => {
            try {
                // const response = await fetch('http://127.0.0.1:5000/api/guestList');
                const response = await fetch(`${BASE_URL}/api/guestList`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setGuestList(data);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchGuestList();
    }, []);

    return (
        <AuthContext.Provider value={{ loggedInUser, login, logout, checkIfInvited, addGuest }}>
            {children}
        </AuthContext.Provider>
    );
};
