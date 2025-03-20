import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

// Array of dinosaurs with name, description, and image URL
const dinosaurs = [
  {
    name: "Tyrannosaurus Rex",
    description:
      'The "king of the tyrant lizards," T. Rex was one of the largest land predators ever. It lived in the Late Cretaceous period.',
    imageUrl:
      "https://placehold.co/600x400/000000/FFFFFF?text=Tyrannosaurus+Rex",
  },
  {
    name: "Stegosaurus",
    description:
      "Recognizable by its bony plates and spiked tail, Stegosaurus was a large, herbivorous dinosaur from the Late Jurassic period.",
    imageUrl: "https://placehold.co/600x400/222222/FFFFFF?text=Stegosaurus",
  },
  {
    name: "Triceratops",
    description:
      "Known for its three horns and large bony frill, Triceratops was a herbivore that lived during the Late Cretaceous period.",
    imageUrl: "https://placehold.co/600x400/444444/FFFFFF?text=Triceratops",
  },
  {
    name: "Brachiosaurus",
    description:
      "One of the tallest dinosaurs, Brachiosaurus was a herbivore with a very long neck, living in the Late Jurassic period.",
    imageUrl: "https://placehold.co/600x400/666666/FFFFFF?text=Brachiosaurus",
  },
  {
    name: "Velociraptor",
    description:
      "A carnivorous dinosaur that lived during the Late Cretaceous period. It was smaller than often depicted in movies, but still a formidable predator.",
    imageUrl: "https://placehold.co/600x400/888888/FFFFFF?text=Velociraptor",
  },
];

const SolutionA = () => {
  const [currentDinoIndex, setCurrentDinoIndex] = useState(0);

  // Function to calculate the day of the year
  const getDayOfYear = () => {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);
    const start = new Date(now.getFullYear(), 0, 0);
    const diff =
      tomorrow -
      start +
      (start.getTimezoneOffset() - tomorrow.getTimezoneOffset()) * 60 * 1000;
    const oneDay = 1000 * 60 * 60 * 24;
    const day = Math.floor(diff / oneDay);
    return day;
  };

  // Update the dinosaur index based on the day of the year
  useEffect(() => {
    const dayOfYear = getDayOfYear();
    setCurrentDinoIndex(dayOfYear % dinosaurs.length);
  }, []);

  const currentDino = dinosaurs[currentDinoIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white p-4 sm:p-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
            Dino of the Day
          </h1>
          <p className="text-lg sm:text-xl text-gray-300">
            Discover a new dinosaur every day!
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 sm:p-6 shadow-xl border border-white/10">
          <div className="space-y-4">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                {currentDino.name}
              </h2>
              <p className="text-gray-300">{currentDino.description}</p>
            </div>
            <div className="flex justify-center">
              <img
                src={currentDino.imageUrl}
                alt={currentDino.name}
                className="w-full h-auto rounded-lg border border-white/10 shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            className="text-white hover:bg-white/20 transition-colors duration-300 border-white/20"
            onClick={() =>
              setCurrentDinoIndex((currentDinoIndex + 1) % dinosaurs.length)
            }
          >
            Show Another Dinosaur
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SolutionA;
