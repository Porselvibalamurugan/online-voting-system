import React from "react";
import styles from "./postcard.module.css";
import Image from "next/image";
export const PostCard = ({post}) => {
  return (<div className={styles.container}>
<div>
  <Image src={post && post.img}
  height={400}
  width={400}
  className={styles.image}
  />
  </div>
    <div className={styles.textContainer}>
      <div>Candidate Name:{post.name}</div>
      <div>Party:{post.party}</div>
      <div>symbol:{post.symbol}</div>
      <div className={styles.desc}>{post.description}</div>
    </div>
    </div>);
};
