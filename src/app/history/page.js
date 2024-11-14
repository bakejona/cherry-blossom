"use client";
import styles from "./History.module.css";

export default function HistoryPage() {
  return (
    <main className={styles.historyPage}>
      <section className={styles.hero}>
        <img src="/history-hero.jpeg" alt="Cherry Blossom History" className={styles.heroImage} />
      </section>
      <h1 className={styles.title}>The History of Cherry Blossoms</h1>
      <div className={styles.section}>
        <h2>Origins</h2>
        <p>
          The cherry blossom tree is native to East Asia, with Japan being the most famous for its sakura varieties. The tradition of hanami, or flower viewing, has been celebrated for over a thousand years.
        </p>
      </div>
      <div className={styles.section}>
        <h2>Cultural Significance</h2>
        <p>
          In Japan, cherry blossoms symbolize the fleeting nature of life, reminding us to appreciate the beauty of the present moment. They are celebrated during the cherry blossom festivals, attracting millions of visitors each year.
        </p>
      </div>
      <div className={styles.section}>
        <h2>Cherry Blossom Festivals</h2>
        <p>
          The cherry blossom festival, or sakura matsuri, is a vibrant celebration featuring food stalls, cultural performances, and picnics under the blooming trees. These festivals are held in various locations around the world.
        </p>
      </div>
      <div className={styles.section}>
        <h2>Conservation Efforts</h2>
        <p>
          With the impact of climate change, efforts are being made to conserve cherry blossom trees and their habitats. Organizations are working to protect these iconic trees for future generations to enjoy.
        </p>
      </div>
    </main>
  );
}