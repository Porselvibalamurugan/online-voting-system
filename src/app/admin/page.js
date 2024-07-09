import AdminForm from "@/components/adminForm/adminForm";
import AdminPost from "@/components/adminPost/AdminPost";
import { getPosts } from "@/lib/data";
import styles from "./admin.module.css";
import React from "react";

export default async function Admin() {
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <AdminPost posts={posts} />
      </div>
      <div className={styles.form}>
        <AdminForm />
      </div>
    </div>
  );
}
