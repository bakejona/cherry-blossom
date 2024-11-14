"use client";
import Link from "next/link";
import styles from "./nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/" className={styles.navItem}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/locations" className={styles.navItem}>
            Locations
          </Link>
        </li>
        <li>
          <Link href="/events" className={styles.navItem}>
            Events
          </Link>
        </li>
        <li>
          <Link href="/gallery" className={styles.navItem}>
            Gallery
          </Link>
        </li>
        <li>
          <Link href="/history" className={styles.navItem}>
            History
         </Link>
        </li>
        <li>
          <Link href="/faq" className={styles.navItem}>
            FAQ
         </Link>
        </li>
        <li>
          <Link href="/contact" className={styles.navItem}>
            Contact
         </Link>
        </li>
      </ul>

      <div className={styles.logo}>🌸 Cherry Blossom</div>
    </nav>
  );
}
