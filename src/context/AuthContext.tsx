'use client'
import { getProfileAPI } from "@/service/api";
import { UserType } from "@/type/user";
import clearCookie from "@/utils/auth";
import { getToken } from "@/utils/auth";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

export interface AuthContextType {
    isLoading: boolean;
    user: UserType | null;
    authToken?: string;
    setAuthToken: (token: string) => void;
    login: (userID: string, password: string) => void;
    logout: () => void;
    getProfile: () => void;
};

const AuthContext = createContext<Partial<AuthContextType>>({});

function AuthProvider({ children }: any) {

    const router = useRouter();

    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState<UserType | null>(null);
    const [authToken, setAuthToken] = useState('');

    useEffect(() => {
        getProfile();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function logout() {
        setUser(null);
        setAuthToken('');
        clearCookie();
        router.refresh();
    }

    async function getProfile() {
        const token = getToken();
        if (!!token) {
            setAuthToken(token);
            const user = await getProfileAPI(token);
            setUser(user);
            return
        }
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{
            user,
            authToken,
            setAuthToken,
            getProfile,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}
const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth }; 