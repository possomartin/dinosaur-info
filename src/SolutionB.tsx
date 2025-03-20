import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const dinosaurs = [
  {
    name: "Tyrannosaurus Rex",
    fact: "T-Rex had a bite force of over 12,000 pounds, making it one of the strongest biters in history.",
    image: "https://example.com/t-rex.jpg",
  },
  {
    name: "Triceratops",
    fact: "Triceratops had three horns and a large frill to protect itself from predators.",
    image: "https://example.com/triceratops.jpg",
  },
  {
    name: "Velociraptor",
    fact: "Velociraptors were smaller than portrayed in movies, about the size of a turkey!",
    image: "https://example.com/velociraptor.jpg",
  },
  {
    name: "Brachiosaurus",
    fact: "Brachiosaurus had a long neck and was one of the tallest dinosaurs, reaching up to 40 feet.",
    image: "https://example.com/brachiosaurus.jpg",
  },
];

const getDailyDinosaur = () => {
  const index = new Date().getDate() % dinosaurs.length;
  return dinosaurs[index];
};

const SolutionB = () => {
  const [dinosaur, setDinosaur] = useState(getDailyDinosaur());

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen p-4 bg-green-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Card className="max-w-md p-4 shadow-lg rounded-2xl bg-white">
        <img
          src={dinosaur.image}
          alt={dinosaur.name}
          className="w-full h-64 object-cover rounded-xl"
        />
        <CardContent className="text-center mt-4">
          <h2 className="text-2xl font-bold">{dinosaur.name}</h2>
          <p className="text-gray-700 mt-2">{dinosaur.fact}</p>
        </CardContent>
      </Card>
      <Button
        onClick={() => setDinosaur(getDailyDinosaur())}
        className="mt-4 bg-blue-500 text-white hover:bg-white hover:text-blue-500 cursor-pointer hover:inset-shadow-lg"
      >
        Refresh Dinosaur
      </Button>
    </motion.div>
  );
};

export default SolutionB;
