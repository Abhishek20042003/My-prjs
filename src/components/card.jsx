import React from "react";

const Card = ({ place }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <img src={place.image} alt={place.title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-1">{place.title}</h2>
      <p className="text-sm text-gray-500 mb-2"><strong>{place.country}</strong> — {place.date}</p>
      <p className="text-gray-700 mb-3">{place.description}</p>
      <a href={place.googleMapLink} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline text-sm font-medium">
        View on Map
      </a>
    </div>
  </div>
);

export default Card;
