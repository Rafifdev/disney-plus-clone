import {
  createUserWithEmailAndPassword,
  getAuth,
  type User,
} from "firebase/auth";
import { useState } from "react";

interface Params {
  onError?: (error: string) => void;
  onSuccess?: (user: User) => void;
}

const useAuth = (params: Params = {}) => {
  const { onError, onSuccess } = params;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const createUser = async (email: string, password: string) => {
    const auth = getAuth();

    try {
      setError("");
      setLoading(true);
      const response = await createUserWithEmailAndPassword(auth, email, password);
      setLoading(false);
      if (typeof onSuccess === "function") {
        onSuccess(response.user);
      }
    } catch (error: any) {
      setError(error.message);
      setLoading(false);

      if (typeof onError === "function") {
        onError(error.message);
      }
    }
    setLoading(false);
  };

  // const login = (email: string, password: string) => {};

  // const logout = (email: string, password: string) => {};

  return {
    createUser,
    // login,
    // logout,
    loading,
    error,
  };
};

export default useAuth;
