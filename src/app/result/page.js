import { getPosts } from "@/lib/data";
import Image from "next/image";
import styles from "./result.module.css";
import Sparkle from "@/components/Sparkles/Sparkle";
export default async function Result() {
  const posts = await getPosts();
  const count = posts.map((post) => post.count);
  const max = Math.max.apply(null, count);
  const array = posts.filter((post) => post.count === max);
  return (
    <div className={styles.container}>
      <Sparkle/>
      <div className={styles.txt}>
        <strong>Congratulations to the Winner!</strong>
      </div>
      {array.map((item, index) => (
        <div key={index} className={styles.box}>
          <Image
            src={item.img}
            height={300}
            width={300}
            alt="symbol"
            className={styles.img}
          />
          <div className={styles.txtcontainer}>
            <p>
              <strong>{item.name} </strong> received
              <strong> {item.count} </strong>
              and has been choosen as the winner!
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
