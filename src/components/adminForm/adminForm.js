"use client";
import React from "react";
import styles from "./adminForm.module.css";
import { useFormState } from "react-dom";
import { addCandidate } from "@/lib/action";
export default function AdminForm() {
  const [state, formAction] = useFormState(addCandidate, undefined);

  return (
    <form className={styles.form} action={formAction}>
      <div className={styles.txt}>Add Candidate</div>
      <div>
        <input type="text" name="name" placeholder="Enter candidate name" required/>
      </div>
      <div>
        <input type="text" name="party" placeholder="Enter party" required />
      </div>
      <div>
        <input type="text" name="img" placeholder="Enter symbol(Image)" required />
      </div>
      <div>
        <textarea className={styles.area}
          rows={5}
          columns={50}
          name="description"
          placeholder="Enter Description"
        />
      </div>
      <div>
        <button className={styles.btn}>Add</button>
      </div>
      <div>{state?.error}</div>
    </form>
  );
}
