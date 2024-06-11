"use client"
import Link from "next/link";
import styles from "./navlink.module.css";
import { usePathname } from "next/navigation";

export function Navlink({ link }) {
  const path = usePathname();
  return (
    <Link
      href={link.path}
      className={`${styles.container} ${path === link.path && styles.active}`}
    >
      {link.title}
    </Link>
  );
}
