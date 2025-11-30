import type React from "react";
import { useState } from "react";
import styles from "./index.module.css";
import useAuth from "../../hooks/useAtuh";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");
  const navigate = useNavigate()
  const { login, loading, error } = useAuth({
    onSuccess: () => {
      navigate("/");
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login(email, password);
  };
  return (
    <div className={styles.container}>
      <h1
        style={{
          color: "white",
          textAlign: "center",
        }}
      >
        Login
      </h1>
      <form onSubmit={handleSubmit} className={styles.formWrapper}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Input your email"
          autoComplete="additional-name"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPasssword(e.target.value)}
          placeholder="Input your password"
          autoComplete="current-password"
        />
        <button type="submit">{loading ? "Loading..." : "Login"}</button>
        <span className={styles.errorText}>{error}</span>
        <Link className={styles.signupText} to={"/signup"}>No account yet? Sign up here</Link>
      </form>
    </div>
  );
}

export default Login;
