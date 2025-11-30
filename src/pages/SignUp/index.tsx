import type React from "react";
import { useState } from "react";
import styles from "./index.module.css";
import useAuth from "../../hooks/useAtuh";
import { useNavigate } from "react-router-dom";

function SingUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const { createUser, error, loading } = useAuth({
    onSuccess: () => {
      navigate("/")
    }
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createUser(email, password, name);
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
          required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Input your username"
        />
        <input
          required
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Input your email"
        />
        <input
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Input your password"
        />
        <button type="submit">{loading ? "Loading..." : "Sing Up"}</button>
        {error && <span className={styles.errorText}>{error}</span>}
      </form>
    </div>
  );
}

export default SingUp;
