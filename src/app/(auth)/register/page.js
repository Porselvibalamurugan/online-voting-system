import { Registerform } from "@/components/registerform/Registerform";
import React from "react";
import styles from "./register.module.css";
export default function Register() {
  return (
    <div className={styles.container}>
      <Registerform />
    </div>
  );
}
