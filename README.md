# Cherry Blossom Project

## Project Members

Megan Palmquist & Johnathon Baker

### Overview

Our project contains a collection of pages dedicated to the beauty of cherry blossoms 🌸. Users can explore various locations known for their cherry blossoms, learn about upcoming events, and contribute by adding new locations.

### Megan's Features

- **Home Page**: An introduction to the project and its theme.
- **Locations Page**: A list of cherry blossom locations with detailed descriptions.
- **Events Page**: Information about upcoming cherry blossom events.

### Nested Routes

This project utilizes nested routes to organize related content efficiently. Here’s a breakdown of the nested routes and their descriptions:

1. **Home Page (`/`)**

   - The landing page that welcomes users to the Cherry Blossom Garden. It provides an overview of the project and invites users to explore more.

2. **Locations Page (`/locations`)**

   - This page displays a list of cherry blossom locations. Each location card provides a brief description and an image. Users can click on "More Info" to navigate to a detailed view of each location.

3. **Location Detail Page (`/locations/[id]`)**

   - This is a dynamic route where `[id]` corresponds to the specific location. Each location has a detailed description, an image, and additional information about what makes it special. If a user tries to access a location that doesn't exist, a "Location Not Found" message will be displayed.

4. **Events Page (`/events`)**
   - This page lists all upcoming events related to cherry blossoms. Each event card includes the event name, date, description, and a link to the event's website for more details.

### Adding a New Location

Users can add new cherry blossom locations through the form available on the Locations page. The form collects the location name, description, and image URL. Upon submission, the new location data is logged to the console, and the form resets for further entries.

### Technologies Used

- **React**: For building the user interface.
- **Next.js**: For server-side rendering and routing.
- **CSS Modules**: For styling components.
