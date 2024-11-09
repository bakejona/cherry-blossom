"use client";
import { useState } from "react";
import styles from "./locations.css";

export default function Locations() {
  const [locations, setLocations] = useState([
    {
      name: "Kyoto",
      country: "Japan",
      description: "A beautiful park known for its cherry blossoms.",
    },
    {
      name: "Washington D.C.",
      country: "USA",
      description: "Famous for the Tidal Basin cherry blossoms.",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    country: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.country && formData.description) {
      setLocations([...locations, formData]);
      setFormData({ name: "", country: "", description: "" }); // Reset form
    }
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.pageTitle}>Cherry Blossom Locations</h1>

      <section className={styles.formSection}>
        <h2 className={styles.formTitle}>Add a New Location</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Location Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="e.g., Kyoto"
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              placeholder="e.g., Japan"
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              placeholder="Add a brief description"
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Add Location
          </button>
        </form>
      </section>

      <section className={styles.locationsList}>
        <h2>Existing Locations</h2>
        {locations.length === 0 ? (
          <p>No locations available yet. Add one above!</p>
        ) : (
          <ul className={styles.locationItems}>
            {locations.map((location, index) => (
              <li key={index} className={styles.locationItem}>
                <h3>{location.name}</h3>
                <p>{location.country}</p>
                <p>{location.description}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
