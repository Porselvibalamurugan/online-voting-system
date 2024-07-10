import Link from "next/link";
import styles from "./home.module.css";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <header className={styles.head}>
        <div className={`${styles.welcome} ${styles.show}`}>Welcome</div>
        <div className={`${styles.welcome} ${styles.later}`}>
          <span>to the Online Voting System </span>
        </div>
        <p className={styles.msg}>
          Your voice matters! Cast your vote securely and easily.
        </p>
      </header>
      <div className={styles.container}>
        <div className={styles.imgcontainer}>
          <Image
            src="/1.jpg"
            alt="vote"
            height={500}
            width={500}
            className={styles.image}
          />
        </div>
        <div className={styles.textcontainer}>
          <div>
            <span style={{ "--d": "1s" }}>
              Our online voting system provides a secure and
            </span>
            <span style={{ "--d": "1.5s" }}>
              user-friendly platform for elections. Whether you're
            </span>
            <span style={{ "--d": "2.0s" }}>
              voting for student council,board members, or any
            </span>
            <span style={{ "--d": "2.5s" }}>
              other election, we ensure your vote is counted fairly
            </span>
            <span style={{ "--d": "3.0s" }}>and accurately.</span>
          </div>
        </div>
      </div>
      <div className={styles.msgcontainer}>
        <span style={{ "--d": "2.5s" }}>
          Register now to participate in upcoming elections or log in to manage
          your elections
        </span>
        <span style={{ "--d": "3s" }}>
          if you are an admin. Use the navigation links above to get started.
        </span>
      </div>
    </div>
  );
}
