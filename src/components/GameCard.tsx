import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GameCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: "blue" | "purple" | "green";
  path: string;
}

const GameCard = ({ title, description, icon: Icon, color, path }: GameCardProps) => {
  const glowClass = {
    blue: "glow-border-blue",
    purple: "glow-border-purple",
    green: "glow-border-green",
  }[color];

  const textClass = {
    blue: "text-primary",
    purple: "text-secondary",
    green: "text-accent",
  }[color];

  return (
    <div className="group relative animate-slide-up">
      <div className={`absolute inset-0 ${glowClass} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl`} />
      
      <div className="relative bg-card border border-border rounded-xl p-8 hover:scale-105 transition-all duration-500 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent blur-3xl" />
        
        <div className="relative z-10">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <Icon className={`w-20 h-20 ${textClass} animate-float`} />
              <div className={`absolute inset-0 ${glowClass} blur-xl opacity-50 animate-glow-pulse`} />
            </div>
          </div>

          <h3 className={`text-3xl font-bold mb-3 ${textClass} text-center`}>
            {title}
          </h3>
          
          <p className="text-muted-foreground text-center mb-6 min-h-[3rem]">
            {description}
          </p>

          <div className="flex flex-col gap-3">
            <Button
              asChild
              className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
            >
              <Link to={path}>Play Now</Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              className="w-full border-primary/50 hover:bg-primary/10"
            >
              <Link to={`${path}/dsa`}>Learn DSA</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
