import React from "react";
import styles from "./adminPost.module.css";
import { deletePost } from "@/lib/action";
export default function AdminPost({ posts }) {
  return (
    <div className={styles.container}>
      {posts.map((item) => (
        <div className={styles.box} key={item.id}>
          <div className={styles.box1}>{item.name}</div>
          <form className={styles.box2} action={deletePost}>
            <input type="hidden" name="id" value={item._id} />
            <button className={styles.btn}>Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
}
