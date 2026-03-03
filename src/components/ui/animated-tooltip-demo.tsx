"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Damsith Rathnayake",
    designation: "HR Manager@InQube Global",
    image:
      "./damsith.jpeg",
  },
  {
    id: 2,
    name: "Chanuka Rajasinghe",
    designation: "Solutions Specialist@hSenid ",
    image:
      "./chanuka.jpeg",
  },
  {
    id: 3,
    name: "Sandun Mohottige",
    designation: "Senior QA Lead@99x",
    image:
      "./sadun.jpeg",
  },
  {
    id: 4,
    name: "Priyankara Bandara Athukorale",
    designation: "Chairman@Sungreen Resort & Spa",
    image:
      "./priyankara.jpeg",
  },
  {
    id: 5,
    name: "-",
    designation: "",
    image:
      "./",
  },
  {
    id: 6,
    name: "-",
    designation: "-",
    image:
      "./",
  },
  
];

export default function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
