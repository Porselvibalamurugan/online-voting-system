"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
export const Check = ({ count }) => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      if (count >= 1) {
        router.push("/");
      }
    }, 500);
  }, []);
  return <div></div>;
};
