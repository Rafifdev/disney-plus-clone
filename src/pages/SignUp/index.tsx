import type React from "react";
import { useState } from "react";
import styles from "./index.module.css";
import useAuth from "../../hooks/useAtuh";

function SingUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { createUser, error, loading } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createUser(email, password);
  };

  return (
    <div className={styles.container}>
      <h1
        style={{
          color: "white",
          textAlign: "center",
        }}
      >
        Sing Up
      </h1>
      <form onSubmit={handleSubmit} className={styles.formWrapper}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Input your username"
          autoComplete="email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Input your password"
          autoComplete="current-password"
        />
        <button type="submit">{loading ? "Loading..." : "Sing Up"}</button>
        {error && <span className={styles.errorText}>{error}</span>}
      </form>
    </div>
  );
}

export default SingUp;
