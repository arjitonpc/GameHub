import { useState } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";

const Sudoku = () => {
  const [grid] = useState(
    Array(9).fill(null).map(() => Array(9).fill(0))
  );

  return (
    <div className="min-h-screen pt-24 pb-12">
      <AnimatedBackground />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 glow-text-blue">
            Sudoku Arena
          </h1>
          <p className="text-xl text-muted-foreground">
            Solve the puzzle using logic and backtracking
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card/80 backdrop-blur-lg border border-primary/30 rounded-2xl p-8 glow-border-blue">
            <div className="grid grid-cols-9 gap-1 mb-8">
              {grid.map((row, i) =>
                row.map((cell, j) => (
                  <div
                    key={`${i}-${j}`}
                    className={`
                      aspect-square flex items-center justify-center
                      bg-background border border-primary/20
                      hover:bg-primary/10 transition-all
                      ${(Math.floor(i / 3) + Math.floor(j / 3)) % 2 === 0 ? 'bg-primary/5' : ''}
                      ${cell !== 0 ? 'text-primary font-bold' : 'text-muted-foreground'}
                    `}
                  >
                    {cell !== 0 ? cell : ''}
                  </div>
                ))
              )}
            </div>

            <div className="flex gap-4">
              <Button className="flex-1 bg-gradient-to-r from-primary to-secondary">
                New Game
              </Button>
              <Button variant="outline" className="flex-1 border-primary/50">
                Solve
              </Button>
            </div>
          </div>

          <div className="mt-8 bg-card/50 backdrop-blur-lg border border-secondary/30 rounded-xl p-6 glow-border-purple">
            <h3 className="text-2xl font-bold mb-4 glow-text-purple">
              DSA Concept: Backtracking
            </h3>
            <p className="text-muted-foreground">
              Sudoku solving uses a backtracking algorithm that tries different numbers
              in empty cells, recursively exploring possibilities until a solution is found.
              If a conflict occurs, it backtracks and tries a different number.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sudoku;
