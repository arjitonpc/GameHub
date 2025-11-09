import AnimatedBackground from "@/components/AnimatedBackground";

const Chess = () => {
  const board = Array(8).fill(null).map(() => Array(8).fill(null));

  return (
    <div className="min-h-screen pt-24 pb-12">
      <AnimatedBackground />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 glow-text-purple">
            Chess Arena
          </h1>
          <p className="text-xl text-muted-foreground">
            Strategic gameplay powered by Object-Oriented Programming
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-card/80 backdrop-blur-lg border border-secondary/30 rounded-2xl p-8 glow-border-purple">
            <div className="grid grid-cols-8 gap-0 mb-8 border-4 border-secondary/50 rounded-lg overflow-hidden">
              {board.map((row, i) =>
                row.map((_, j) => (
                  <div
                    key={`${i}-${j}`}
                    className={`
                      aspect-square flex items-center justify-center
                      hover:bg-secondary/20 transition-all cursor-pointer
                      ${(i + j) % 2 === 0 ? 'bg-background' : 'bg-secondary/10'}
                    `}
                  >
                    {/* Chess pieces will be added here */}
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="mt-8 bg-card/50 backdrop-blur-lg border border-primary/30 rounded-xl p-6 glow-border-blue">
            <h3 className="text-2xl font-bold mb-4 glow-text-blue">
              DSA Concept: OOP & 2D Arrays
            </h3>
            <p className="text-muted-foreground">
              Chess implementation uses Object-Oriented Programming where each piece
              is an object with its own movement rules. The board is represented as a
              2D array, and move validation uses matrix traversal algorithms to check
              valid positions and capture mechanics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chess;
