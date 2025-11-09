import AnimatedBackground from "@/components/AnimatedBackground";
import { Brain, GitBranch, Network } from "lucide-react";

const DSA = () => {
  const concepts = [
    {
      title: "Backtracking",
      game: "Sudoku",
      icon: GitBranch,
      color: "blue",
      description:
        "A recursive algorithm that tries to build a solution incrementally, abandoning solutions that fail to satisfy constraints.",
      example: "Used in Sudoku to try different numbers in cells until a valid solution is found.",
    },
    {
      title: "Object-Oriented Programming",
      game: "Chess",
      icon: Network,
      color: "purple",
      description:
        "A programming paradigm based on objects that contain data and methods. Each chess piece is an object with specific behaviors.",
      example: "Each chess piece (King, Queen, Rook) is a class with unique movement rules.",
    },
    {
      title: "Queue & Collision Detection",
      game: "Snake",
      icon: Brain,
      color: "green",
      description:
        "Queue manages snake body segments in FIFO order. Collision detection checks if coordinates overlap with walls or body.",
      example: "Snake body uses a queue where head is enqueued and tail is dequeued each move.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <AnimatedBackground />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 glow-text-purple">
            DSA Concepts
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Understanding the algorithms and data structures behind each game
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {concepts.map((concept, index) => {
            const Icon = concept.icon;
            const glowClass = {
              blue: "glow-border-blue",
              purple: "glow-border-purple",
              green: "glow-border-green",
            }[concept.color];

            const textClass = {
              blue: "text-primary",
              purple: "text-secondary",
              green: "text-accent",
            }[concept.color];

            return (
              <div
                key={index}
                className={`bg-card/80 backdrop-blur-lg border border-${concept.color}/30 rounded-2xl p-8 ${glowClass} animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <Icon className={`w-16 h-16 ${textClass}`} />
                    <div className={`absolute inset-0 ${glowClass} blur-xl opacity-50`} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <h2 className={`text-3xl font-bold ${textClass}`}>
                        {concept.title}
                      </h2>
                      <span className="px-4 py-1 bg-primary/20 rounded-full text-sm">
                        {concept.game}
                      </span>
                    </div>

                    <p className="text-lg text-muted-foreground mb-4">
                      {concept.description}
                    </p>

                    <div className="bg-background/50 rounded-lg p-4 border border-primary/10">
                      <p className="text-sm">
                        <span className="font-semibold text-primary">Example: </span>
                        {concept.example}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DSA;
