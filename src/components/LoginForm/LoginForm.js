"use client";
import { useFormState } from "react-dom";
import { login } from "@/lib/action";
import styles from "./loginForm.module.css";
import Link from "next/link";
export const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);
  return (
    <form className={styles.form} action={formAction}>
      <div className={styles.login}>Login</div>
      <div>
        <label>UserName:</label>
        <input
          type="text"
          name="username"
          placeholder="Enter UserName"
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          required
        />
      </div>
      <div>
        <button>Login</button>
      </div>
      <div>{state?.error}</div>
      <Link href="/register" className={styles.link}>
        {"Don't have an account?  "}
        <b>Register</b>
      </Link>
    </form>
  );
};
