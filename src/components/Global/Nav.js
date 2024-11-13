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
      </ul>

      <div className={styles.logo}>🌸 Cherry Blossom</div>
    </nav>
  );
}
