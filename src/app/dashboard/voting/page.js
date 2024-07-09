import React from "react";
import Votingform from "@/components/votingForm/Votingform";
import styles from "./voting.module.css";
import { getPosts, getUser } from "@/lib/data";
import { Check } from "@/components/Check";
import { auth } from "@/lib/auth";
export default async function Voting() {
  const session = await auth();
  const user = await getUser(session?.id);
  const posts = await getPosts();
  return (
    <div className={styles.form}>
      <Votingform posts={posts} />
      <Check count={user?.count} />
    </div>
  );
}
