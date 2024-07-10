"use client";
import { useFormState } from "react-dom";
import Image from "next/image";
import React from "react";
import styles from "./votingform.module.css";
import { addCount } from "@/lib/action";

export default function Votingform({ posts }) {
  const [state, formAction] = useFormState(addCount, undefined);
  return (
    <div>
      {!state?.success ? (
        <form className={styles.form} action={formAction}>
          <div className={styles.text}>Vote for the Candidates</div>
          {posts.map((item, index) => (
            <div key={index} className={styles.container}>
              <div className={styles.imgcontainer}>
                <Image
                  src={item.img}
                  height={60}
                  width={60}
                  className={styles.img}
                />
              </div>
              <div className={styles.input}>
                <input
                  type="radio"
                  name="name"
                  value={item.name}
                  id={item.name}
                  required
                />
                <label htmlFor={item.name}>{item.name}</label>
              </div>
            </div>
          ))}
          <button className={styles.button}>Vote</button>
        </form>
      ) : (
        <div className={styles.result}>Thank You For Voting</div>
      )}
    </div>
  );
}
