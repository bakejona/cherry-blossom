"use client";
import { useState } from "react";
import styles from "./Locations.module.css";

const initialLocations = [
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

export default function Locations() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add logic here to handle the new location submission,
    // such as sending it to a server or updating the state.
    console.log("New Location Submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", description: "", image: "" });
  };

  return (
    <div className={styles.locationsPage}>
      <h1 className={styles.title}>Cherry Blossom Locations</h1>

      <div className={styles.locationsList}>
        {initialLocations.map((location) => (
          <div
            key={location.id}
            className={styles.locationCard}
            style={{ backgroundImage: `url(${location.image})` }}
          >
            <div className={styles.overlay}>
              <h2 className={styles.locationName}>{location.name}</h2>
              <p className={styles.locationDescription}>
                {location.description}
              </p>
              <a href={`/locations/${location.id}`} className={styles.moreInfo}>
                More Info
              </a>
            </div>
          </div>
        ))}
      </div>

      <h2 className={styles.title}>Add a New Location</h2>
      <form className={styles.addLocationForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Location Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="image">Image URL</label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Add Location
        </button>
      </form>
    </div>
  );
}
