import { Grid3x3, Castle, Worm } from "lucide-react";
import GameCard from "@/components/GameCard";
import AnimatedBackground from "@/components/AnimatedBackground";

const Home = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <AnimatedBackground />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 glow-text-blue">
            Welcome to GameHub
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Enter the futuristic gaming arena where entertainment meets education.
            Master classic games while learning Data Structures & Algorithms.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <GameCard
            title="Sudoku"
            description="Logic puzzles powered by backtracking algorithms"
            icon={Grid3x3}
            color="blue"
            path="/sudoku"
          />
          
          <GameCard
            title="Chess"
            description="Strategic battles using OOP and 2D arrays"
            icon={Castle}
            color="purple"
            path="/chess"
          />
          
          <GameCard
            title="Snake"
            description="Retro arcade with queue-based collision detection"
            icon={Worm}
            color="green"
            path="/snake"
          />
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block bg-card/50 backdrop-blur-lg border border-primary/30 rounded-2xl p-8 glow-border-blue">
            <h2 className="text-3xl font-bold mb-4 glow-text-purple">
              Level Up Your Skills
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Each game is carefully designed to demonstrate core computer science concepts.
              Play, learn, and understand the algorithms that power modern software.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
