import { useEffect, useState } from "react";
import {  getAuth, onAuthStateChanged, type User } from "firebase/auth";

function useAuthState() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    console.log("Auth state chaged");
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return user;
}

export default useAuthState;
