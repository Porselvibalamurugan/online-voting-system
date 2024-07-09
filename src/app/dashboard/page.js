import { getPosts } from "@/lib/data";
import styles from "./dashboard.module.css";
import Image from "next/image";
import { PostCard } from "@/components/postCard/postCard";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { getUser } from "@/lib/data";
async function getData() {
  const res = await fetch(process.env.URL + "api", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("something went wrong");
  }
}
export default async function Dashboard() {
  const posts = await getPosts();
  const session = await auth();
  const user = await getUser(session?.id);

  return (
    <div>
      <div className={styles.topic}>
        <div>Demon Slayer Characters Championship 2024</div>
        <p>
          A competition to determine the most popular character from the 'Demon
          Slayer' series.
        </p>
        <p>November 2024 (Exact dates to be announced)</p>

        {user?.count >= 1 ? (
          <div className={styles.vote}>Already Voted!</div>
        ) : (
          <Link href="/dashboard/voting" className={styles.button}>
            Click to Vote
          </Link>
        )}
      </div>
      <div className={styles.dashboard}>
        {posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </div>
  );
}
