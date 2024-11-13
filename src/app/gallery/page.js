"use client";
import Head from "next/head";
import styles from "./gallery.module.css";

export default function Gallery() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cherry Blossom Gallery</title>
        <meta
          name="description"
          content="A collection of beautiful cherry blossom images."
        />
      </Head>

      <h1 className={styles.heading}>Cherry Blossom Gallery</h1>
      <p className={styles.description}>
        Explore a collection of stunning cherry blossom photographs from around
        the world. Feel the serenity and tranquility that these beautiful
        flowers bring.
      </p>

      <div className={styles.galleryGrid}>
        <div>
          <img
            src="/cb1.jpg"
            alt="Cherry Blossom 1"
            className={styles.galleryImage}
          />
        </div>
        <div>
          <img
            src="/cb2.jpg"
            alt="Cherry Blossom 2"
            className={styles.galleryImage}
          />
        </div>
        <div>
          <img
            src="/cb3.jpg"
            alt="Cherry Blossom 3"
            className={styles.galleryImage}
          />
        </div>
        <div>
          <img
            src="/cb4.jpg"
            alt="Cherry Blossom 4"
            className={styles.galleryImage}
          />
        </div>
        <div>
          <img
            src="/cb5.jpg"
            alt="Cherry Blossom 4"
            className={styles.galleryImage}
          />
        </div>
        <div>
          <img
            src="/cb6.jpg"
            alt="Cherry Blossom 4"
            className={styles.galleryImage}
          />
        </div>
        <div>
          <img
            src="/cb7.jpg"
            alt="Cherry Blossom 4"
            className={styles.galleryImage}
          />
        </div>
        <div>
          <img
            src="/cb8.jpg"
            alt="Cherry Blossom 4"
            className={styles.galleryImage}
          />
        </div>
        <div>
          <img
            src="/cb9.jpg"
            alt="Cherry Blossom 4"
            className={styles.galleryImage}
          />
        </div>
        <div>
          <img
            src="/cb10.jpg"
            alt="Cherry Blossom 4"
            className={styles.galleryImage}
          />
        </div>
        <div>
          <img
            src="/cb11.jpg"
            alt="Cherry Blossom 4"
            className={styles.galleryImage}
          />
        </div>
        <div>
          <img
            src="/cb12.jpg"
            alt="Cherry Blossom 4"
            className={styles.galleryImage}
          />
        </div>
      </div>
    </div>
  );
}
