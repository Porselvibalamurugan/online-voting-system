import { LoginForm } from "@/components/LoginForm/LoginForm";
import styles from "./loginpage.module.css";
export default function Login() {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
}
