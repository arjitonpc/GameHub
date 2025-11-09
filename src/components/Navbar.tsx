import { Link, useLocation } from "react-router-dom";
import { Gamepad2, Home, Trophy, BookOpen, Info } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/games", label: "Games", icon: Gamepad2 },
    { path: "/dsa", label: "DSA Concepts", icon: BookOpen },
    { path: "/leaderboard", label: "Leaderboard", icon: Trophy },
    { path: "/about", label: "About", icon: Info },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-primary/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Gamepad2 className="w-8 h-8 text-primary glow-text-blue transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-glow-pulse" />
            </div>
            <span className="text-2xl font-bold glow-text-blue">GameHub</span>
          </Link>

          <div className="flex items-center gap-1 md:gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-primary/20 text-primary glow-border-blue"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden md:inline">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
