import Link from "next/link";
import React from "react";
function NotFound() {
  return (
    <div>
      <h2>Not found!</h2>
      <p>Sorry, the page you are looking for does not exit. </p>
      <Link href="/">Return Home </Link>
    
    </div>
  );
}
export default NotFound;
