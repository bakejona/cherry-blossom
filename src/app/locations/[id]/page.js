import styles from "./LocationInfo.module.css";

const locationData = [
  {
    id: "1",
    name: "Kyoto, Japan",
    description: "Famous for its cherry blossoms in spring.",
    image: "/kyoto.jpg",
  },
  {
    id: "2",
    name: "Washington, DC",
    description: "The National Mall is home to iconic cherry blossoms.",
    image: "/washington-dc.jpg",
  },
  {
    id: "3",
    name: "Paris, France",
    description: "Cherry blossoms along the Seine are a sight to behold.",
    image: "/paris.jpg",
  },
];

export default function LocationInfo({ params }) {
  const { id } = params;
  const location = locationData.find((loc) => loc.id === id);

  if (!location) {
    return <h1>Location Not Found</h1>;
  }

  return (
    <main className={styles.locationPage}>
      <div className={styles.imageWrapper}>
        <img
          src={location.image}
          alt={location.name}
          className={styles.image}
        />
        <div className={styles.infoWrapper}>
          <h1 className={styles.locationName}>{location.name}</h1>
          <p className={styles.locationDescription}>{location.description}</p>
        </div>
      </div>
    </main>
  );
}
