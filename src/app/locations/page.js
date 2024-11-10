"use client";
import { useState } from "react";
import styles from "./Locations.module.css";

const initialLocations = [
  {
    id: "1",
    name: "Kyoto, Japan",
    description: "Famous for its cherry blossoms in spring.",
    image: "/kyoto.jpg", // Image path (from public folder)
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
  // State to manage locations
  const [locations, setLocations] = useState(initialLocations);

  // State for the form inputs
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission to add a new location
  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate a new location object
    const newLocation = {
      id: (locations.length + 1).toString(), // Generate a new ID (in a real app, you might use a UUID)
      name: formData.name,
      description: formData.description,
      image: formData.image,
    };

    // Add the new location to the list
    setLocations([...locations, newLocation]);

    // Clear the form
    setFormData({
      name: "",
      description: "",
      image: "",
    });
  };

  // Handle deleting a location
  const handleDelete = (id) => {
    const updatedLocations = locations.filter((location) => location.id !== id);
    setLocations(updatedLocations);
  };

  return (
    <div className={styles.locationsPage}>
      <h1 className={styles.title}>Cherry Blossom Locations</h1>

      {/* Locations List */}
      <div className={styles.locationsList}>
        {locations.map((location) => (
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
              <button
                className={styles.deleteButton}
                onClick={() => handleDelete(location.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Location Form */}
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
