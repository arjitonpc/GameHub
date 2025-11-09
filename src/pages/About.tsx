import AnimatedBackground from "@/components/AnimatedBackground";
import { Code2, Gamepad2, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <AnimatedBackground />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 glow-text-blue">
            About GameHub
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Where gaming meets computer science education
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          <div className="bg-card/80 backdrop-blur-lg border border-primary/30 rounded-2xl p-8 glow-border-blue">
            <div className="flex items-start gap-6">
              <Gamepad2 className="w-16 h-16 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Futuristic Gaming Experience
                </h2>
                <p className="text-lg text-muted-foreground">
                  GameHub transforms classic games into an immersive cyberpunk arena.
                  With cutting-edge animations, neon aesthetics, and smooth transitions,
                  every interaction feels like stepping into a futuristic esports tournament.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card/80 backdrop-blur-lg border border-secondary/30 rounded-2xl p-8 glow-border-purple">
            <div className="flex items-start gap-6">
              <Code2 className="w-16 h-16 text-secondary flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-bold text-secondary mb-4">
                  Built with Modern Tech
                </h2>
                <p className="text-lg text-muted-foreground">
                  Powered by React, TypeScript, and Tailwind CSS with Framer Motion
                  for animations. Each component is crafted with attention to performance
                  and visual appeal, ensuring a smooth 60fps experience across all devices.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card/80 backdrop-blur-lg border border-accent/30 rounded-2xl p-8 glow-border-green">
            <div className="flex items-start gap-6">
              <GraduationCap className="w-16 h-16 text-accent flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-bold text-accent mb-4">
                  Learn DSA Through Play
                </h2>
                <p className="text-lg text-muted-foreground">
                  Every game demonstrates fundamental computer science concepts:
                  backtracking in Sudoku, object-oriented design in Chess, and
                  queue management in Snake. Learn by playing, understand by doing.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center bg-card/50 backdrop-blur-lg border border-primary/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 glow-text-purple">
              Mission Statement
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              To create an engaging platform where gamers can enjoy classic games
              while naturally learning the algorithms and data structures that power
              modern software. Education should be fun, interactive, and visually stunning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
