import { Grid3x3, Castle, Worm } from "lucide-react";
import GameCard from "@/components/GameCard";
import AnimatedBackground from "@/components/AnimatedBackground";

const Games = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <AnimatedBackground />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 glow-text-blue">
            Game Collection
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Choose your challenge and master the algorithms behind each game
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
      </div>
    </div>
  );
};

export default Games;
