export interface RoadmapStep {
  step: number;
  title: string;
  description: string;
}

export const roadmapSteps: RoadmapStep[] = [
  {
    step: 1,
    title: "Discover Your Passion",
    description:
      "Explore different acting styles and find what excites you most.",
  },
  {
    step: 2,
    title: "Build Your Foundation",
    description:
      "Take acting classes and practice regularly to hone your skills.",
  },
  {
    step: 3,
    title: "Gain Experience",
    description:
      "Participate in local theater, student films, or online projects.",
  },
  {
    step: 4,
    title: "Create Your Portfolio",
    description:
      "Prepare a headshot, resume, and demo reel to showcase your talent.",
  },
  {
    step: 5,
    title: "Network & Audition",
    description: "Connect with industry professionals and attend auditions.",
  },
];
