"use client";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <main>
      <div className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1>Welcome to the Cherry Blossom Garden</h1>
            <p>Experience the beauty of nature, one petal at a time.</p>
            <button className={styles.ctaButton}>Explore More</button>
          </div>
        </section>

        <section className={styles.about}>
          <h2>About Us</h2>
          <p>
            We celebrate the delicate beauty of cherry blossoms through art,
            nature, and community. Our goal is to bring peace and tranquility to
            your day.
          </p>
        </section>

        <section className={styles.cta}>
          <h2>Join the Blossom Movement</h2>
          <p>
            Sign up for our newsletter and receive updates on the latest cherry
            blossom events, news, and inspiration.
          </p>
        </section>

        <footer className={styles.footer}>
          <p>&copy; 2024 Cherry Blossom Co. | All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
