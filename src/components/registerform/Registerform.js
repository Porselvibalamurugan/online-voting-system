"use client";
import { useFormState } from "react-dom";
import { register } from "@/lib/action";
import styles from "./Registerform.module.css";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const Registerform = () => {
  const [state, formAction] = useFormState(register, undefined);
  const router = useRouter();
  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);
  return (
    <form className={styles.form} action={formAction}>
      <div className={styles.register}>Register</div>
      <div>
        <label>Name: </label>
        <input
          type="text"
          name="username"
          placeholder="Enter UserName"
          required
        />
      </div>

      <div>
        <label>Email:</label>
        <input type="email" name="email" placeholder="Enter Email" required />
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
        <label>Re-Password:</label>
        <input
          type="password"
          name="passwordRepeat"
          placeholder="Re- enter Password"
          required
        />
      </div>
      <div>
        <button>Register</button>
      </div>
      <div>{state?.error}</div>

      <Link href="/login" className={styles.link}>
        {"Already have an account?  "}
        <b>Login</b>
      </Link>
    </form>
  );
};
