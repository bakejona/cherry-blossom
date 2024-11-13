"use client";
import styles from "./events.module.css";
import Link from "next/link";

const eventsData = [
  {
    id: "1",
    name: "Cherry Blossom Festival",
    date: "2024-04-01",
    description: "A beautiful festival celebrating cherry blossoms.",
    website: "https://nationalcherryblossomfestival.org/",
    image: "/cherryBFestival.jpg",
  },
  {
    id: "2",
    name: "Hanami Picnic",
    date: "2024-04-05",
    description: "Enjoy a picnic under the cherry blossom trees.",
    website: "https://fukushima.travel/blogs/hanami-picnic-under-the-sakura/3",
    image: "/han.jpg",
  },
  {
    id: "3",
    name: "Cherry Blossom Night",
    date: "2024-04-10",
    description: "An evening event with lights and music.",
    website:
      "https://www.japan.travel/en/ph/special-features/cherry-blossom-festival-night-japan/",
    image: "/night.jpg",
  },
];

export default function EventsPage() {
  return (
    <div className={styles.eventsPage}>
      <h1 className={styles.title}>All Events</h1>

      <div className={styles.eventList}>
        {eventsData.map((event) => (
          <Link
            key={event.id}
            href={event.website}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.eventCard}
          >
            <img
              src={event.image}
              alt={event.name}
              className={styles.eventImage}
            />
            <h2 className={styles.eventName}>{event.name}</h2>
            <p className={styles.eventDescription}>{event.description}</p>
          </Link>
        ))}
      </div>

      <p className={styles.eventInfo}>
        Join us in celebrating the beauty of cherry blossoms! These events are a
        perfect opportunity to enjoy the stunning floral displays, participate
        in cultural activities, and create lasting memories with friends and
        family. Don't miss out on the magic of spring!
      </p>
    </div>
  );
}
