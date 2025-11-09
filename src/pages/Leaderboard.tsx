import AnimatedBackground from "@/components/AnimatedBackground";
import { Trophy, Medal, Award } from "lucide-react";

const Leaderboard = () => {
  const mockLeaderboard = [
    { rank: 1, name: "CyberMaster", score: 9850, game: "Chess" },
    { rank: 2, name: "QuantumSolver", score: 9720, game: "Sudoku" },
    { rank: 3, name: "PixelSnake", score: 9560, game: "Snake" },
    { rank: 4, name: "AlgoKnight", score: 9340, game: "Chess" },
    { rank: 5, name: "LogicPro", score: 9180, game: "Sudoku" },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-accent glow-text-green" />;
      case 2:
        return <Medal className="w-6 h-6 text-primary glow-text-blue" />;
      case 3:
        return <Award className="w-6 h-6 text-secondary glow-text-purple" />;
      default:
        return <span className="text-muted-foreground font-bold">#{rank}</span>;
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <AnimatedBackground />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 glow-text-green">
            Leaderboard
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Top players across all game modes
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card/80 backdrop-blur-lg border border-accent/30 rounded-2xl p-8 glow-border-green">
            <div className="space-y-4">
              {mockLeaderboard.map((player, index) => (
                <div
                  key={index}
                  className={`
                    flex items-center gap-6 p-6 rounded-xl
                    bg-background/50 border border-primary/20
                    hover:border-primary/50 hover:bg-primary/5
                    transition-all duration-300
                    ${index < 3 ? 'glow-border-blue' : ''}
                  `}
                >
                  <div className="w-12 flex justify-center">
                    {getRankIcon(player.rank)}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-primary">
                      {player.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Best at: {player.game}
                    </p>
                  </div>

                  <div className="text-right">
                    <div className="text-3xl font-bold glow-text-green">
                      {player.score.toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Total Score
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center bg-card/50 backdrop-blur-lg border border-primary/30 rounded-xl p-6">
            <p className="text-muted-foreground">
              Play games to earn points and climb the leaderboard! 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
