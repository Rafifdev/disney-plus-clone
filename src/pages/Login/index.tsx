import type React from "react";
import { useState } from "react";
import styles from "./index.module.css"

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPasssword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login");
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
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Input your username"
          autoComplete="additional-name"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPasssword(e.target.value)}
          placeholder="Input your password"
          autoComplete="current-password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
