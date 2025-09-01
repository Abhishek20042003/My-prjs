import React from "react";

const About = () => (
  <section className="max-w-3xl mx-auto">
    <h2 className="text-3xl font-bold mb-4">About Me</h2>
    <p className="mb-4 text-gray-700 leading-relaxed">
      Hi! I'm a passionate traveler exploring the world one country at a time. On this site, I share my journeys, photos, and experiences from the last two years!
    </p>
    <img
      src="/images/my-profile.jpg"
      alt="Profile"
      className="rounded-lg shadow-lg mx-auto"
      style={{ maxWidth: "300px" }}
    />
  </section>
);

export default About;
