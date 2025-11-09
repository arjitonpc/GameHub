import { useState, useEffect, useCallback } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";

const GRID_SIZE = 20;
const CELL_SIZE = 20;

interface Position {
  x: number;
  y: number;
}

const Snake = () => {
  const [snake, setSnake] = useState<Position[]>([{ x: 10, y: 10 }]);
  const [food, setFood] = useState<Position>({ x: 15, y: 15 });
  const [direction, setDirection] = useState<"UP" | "DOWN" | "LEFT" | "RIGHT">("RIGHT");
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);

  const generateFood = useCallback(() => {
    const newFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
    setFood(newFood);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;

    const gameLoop = setInterval(() => {
      setSnake((prevSnake) => {
        const head = prevSnake[0];
        let newHead: Position;

        switch (direction) {
          case "UP":
            newHead = { x: head.x, y: head.y - 1 };
            break;
          case "DOWN":
            newHead = { x: head.x, y: head.y + 1 };
            break;
          case "LEFT":
            newHead = { x: head.x - 1, y: head.y };
            break;
          case "RIGHT":
            newHead = { x: head.x + 1, y: head.y };
            break;
        }

        // Check collision with walls
        if (
          newHead.x < 0 ||
          newHead.x >= GRID_SIZE ||
          newHead.y < 0 ||
          newHead.y >= GRID_SIZE
        ) {
          setIsPlaying(false);
          return prevSnake;
        }

        const newSnake = [newHead, ...prevSnake];

        // Check if food is eaten
        if (newHead.x === food.x && newHead.y === food.y) {
          setScore((s) => s + 10);
          generateFood();
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, 150);

    return () => clearInterval(gameLoop);
  }, [isPlaying, direction, food, generateFood]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isPlaying) return;
      
      switch (e.key) {
        case "ArrowUp":
          if (direction !== "DOWN") setDirection("UP");
          break;
        case "ArrowDown":
          if (direction !== "UP") setDirection("DOWN");
          break;
        case "ArrowLeft":
          if (direction !== "RIGHT") setDirection("LEFT");
          break;
        case "ArrowRight":
          if (direction !== "LEFT") setDirection("RIGHT");
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isPlaying, direction]);

  const startGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    setDirection("RIGHT");
    setScore(0);
    generateFood();
    setIsPlaying(true);
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <AnimatedBackground />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 glow-text-green">
            Snake Arena
          </h1>
          <p className="text-xl text-muted-foreground">
            Retro arcade powered by queue-based collision detection
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-card/80 backdrop-blur-lg border border-accent/30 rounded-2xl p-8 glow-border-green">
            <div className="flex justify-between items-center mb-6">
              <div className="text-2xl font-bold glow-text-green">
                Score: {score}
              </div>
              <Button
                onClick={startGame}
                className="bg-gradient-to-r from-accent to-primary"
              >
                {isPlaying ? "Restart" : "Start Game"}
              </Button>
            </div>

            <div
              className="relative bg-background border-4 border-accent/50 rounded-lg overflow-hidden"
              style={{
                width: GRID_SIZE * CELL_SIZE,
                height: GRID_SIZE * CELL_SIZE,
                margin: "0 auto",
              }}
            >
              {/* Food */}
              <div
                className="absolute bg-accent rounded-full glow-border-green"
                style={{
                  width: CELL_SIZE - 2,
                  height: CELL_SIZE - 2,
                  left: food.x * CELL_SIZE,
                  top: food.y * CELL_SIZE,
                }}
              />

              {/* Snake */}
              {snake.map((segment, i) => (
                <div
                  key={i}
                  className="absolute bg-primary rounded-sm"
                  style={{
                    width: CELL_SIZE - 2,
                    height: CELL_SIZE - 2,
                    left: segment.x * CELL_SIZE,
                    top: segment.y * CELL_SIZE,
                    opacity: 1 - i * 0.05,
                  }}
                />
              ))}
            </div>

            {!isPlaying && score > 0 && (
              <div className="text-center mt-6 text-xl text-muted-foreground">
                Game Over! Use arrow keys to play.
              </div>
            )}
          </div>

          <div className="mt-8 bg-card/50 backdrop-blur-lg border border-secondary/30 rounded-xl p-6 glow-border-purple">
            <h3 className="text-2xl font-bold mb-4 glow-text-purple">
              DSA Concept: Queues & Collision Detection
            </h3>
            <p className="text-muted-foreground">
              Snake uses a queue data structure to manage body segments. Each move adds
              a new head to the front and removes the tail (dequeue), creating smooth
              movement. Collision detection uses coordinate comparison algorithms to check
              if the snake hits walls, itself, or food items.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Snake;
