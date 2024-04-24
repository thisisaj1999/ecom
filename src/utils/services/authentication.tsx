import { useState, useEffect, useContext, createContext, PropsWithChildren } from 'react';
import { AuthInstance } from './firebase';

const AuthContext = createContext<any | null>(null);

export const ProvideAuth = ({ children }:PropsWithChildren<{}>) => {
  const Auth = useProvideAuth();
  return <AuthContext.Provider value={Auth}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProvideAuth() {
    const [User, setUser] = useState<any | []>([]);
    const [Profile, setProfile] = useState<any | []>([]);
    const [Token, setToken] = useState<any | []>([]);

    useEffect(() => {
        const LocalProfile = JSON.parse(localStorage.getItem('Profile') || '""');

        if (LocalProfile != null && LocalProfile != 'null' && LocalProfile != Profile) {
            setProfile(LocalProfile);
        }

        AuthInstance.onAuthStateChanged(AuthInstance.Handle, async function (_User) {
            handleUser(_User);
        });
    }, []);

    // const RefreshToken = () => {
    //     setTimeout(async () => {
    //         const SessionTokenManager: any = User?.stsTokenManager;

    //         if (SessionTokenManager != undefined) {
    //             const ExpiresIn = (parseInt(SessionTokenManager.expirationTime / 1000) - parseInt(Date.now() / 1000)) / 60;

    //             if (ExpiresIn <= 1) {
    //                 const newToken = await GetToken(User);
    //                 setToken(newToken);
    //             }
    //         }

    //         RefreshToken();
    //     }, 10000);
    // };

    // useEffect(() => {
    //     if (User != null) {
    //         RefreshToken();
    //     }
    // }, [User]);

    // const CurrentUser = () => {
    //     try {
    //         return firebase.auth().currentUser;
    //     } catch (error) {
    //         console.log(error)
    //     }

    //     return null;
    // };

    const GetToken = async (User: any) => {
        try {
            return await User.getIdToken();
        } catch (error) {
            return null;
        }
    };

    const handleUser = async (_User: any) => {
        if (_User) {
            setToken(await GetToken(_User));
            setUser(_User);
        } else {
            setUser(null);
            setProfile(null);

            // if (window != undefined) {
            //     OneTap();
            // }
        }
    };

    const ProcessError = (Code:string) => {
        switch (Code) {
            case "auth/account-exists-with-different-credential":
                return "Account exists with different provider credential.";
            case "auth/popup-blocked":
                return "Popup has been blocked by the browser."
            case "auth/network-request-failed":
                return "There has been a network request error.";
            case "auth/too-many-requests":
                return "Requests are blocked from the device due to unusual activity. Trying again after some delay would unblock.";
            case "auth/user-token-expired":
                return "The user's credential has expired.";
            default:
                return false;
        }
    };

    const SignInGoogle = async () => {
        try {
            await AuthInstance.setPersistence(AuthInstance.Handle, AuthInstance.browserLocalPersistence);

            const Provider = new AuthInstance.GoogleAuthProvider();
            const Response = await AuthInstance.signInWithPopup(AuthInstance.Handle, Provider);

            handleUser(Response.user);

            return true;
        } catch (error: any) {
            return ProcessError(error.code);
        }
    };

    const SignIn = async (Email: string, Password: string) => {
        try {
            await AuthInstance.setPersistence(AuthInstance.Handle, AuthInstance.browserLocalPersistence);
            const Response = await AuthInstance.signInWithEmailAndPassword(AuthInstance.Handle, Email, Password);

            return {
                Payload: Response,
                Success: true
            }
        } catch (error: any) {
            return {
                Success: false,
                Error: error.message
            }
        }
    };

    const SignUp = async (Email: string, Password: string) => {
        try {
            await AuthInstance.setPersistence(AuthInstance.Handle, AuthInstance.browserLocalPersistence);
            const Response = await AuthInstance.createUserWithEmailAndPassword(AuthInstance.Handle, Email, Password);

            return {
                Payload: Response,
                Success: true
            }
        } catch (error: any) {
            return {
                Success: false,
                Error: error.message
            }
        }
    };

    const SignOut = async () => {
        try {
            await AuthInstance.signOut(AuthInstance.Handle);
            localStorage.removeItem('Profile');
            localStorage.setItem('isAuth', String(false));
            handleUser(false);

            return true;
        } catch (error) {
            return false;
        }
    };

    // const OneTap = () => {
    //     const handleCredentialResponse = (response: any) => {
    //         AuthInstance.signInWithCredential(AuthInstance.Handle, AuthInstance.GoogleAuthProvider.credential(response.credential)).then(Response => {
    //             handleUser(Response);

    //         }).catch(error => {
    //             console.log(error);
    //         })
    //     };

    //     const client_id = "218052965024-7pdv6i56vjff295eeagkff6ab28u3i1s.apps.googleusercontent.com"

    //     window?.google?.accounts.id.initialize({
    //         client_id,
    //         callback: handleCredentialResponse,
    //         auto_select: false,
    //         context: "use",
    //         prompt_parent_id: "put-google-one-tap-here-plz",
    //     });

    //     window?.google?.accounts.id.prompt((notification) => {
    //     })
    // };

    return {
        User,
        Profile,
        Token,
        SignUp,
        SignIn,
        SignInGoogle,
        SignOut,
    }
};