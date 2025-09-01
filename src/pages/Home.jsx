import React from "react";
import { places } from "../data/places";
import Card from "../components/Card";

const Home = () => (
  <div>
    <h2 className="text-3xl font-bold mb-6">Where I've Been (2024–2025)</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {places.map(place => (
        <Card key={place.id} place={place} />
      ))}
    </div>
  </div>
);

export default Home;
