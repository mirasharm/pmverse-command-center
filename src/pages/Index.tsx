import { Link } from "react-router-dom";
import { FileText, Shield, BookOpen, Megaphone, Sparkles } from "lucide-react";

const asteroids = [
  { size: 8, top: '15%', left: '20%', duration: 45 },
  { size: 12, top: '75%', left: '15%', duration: 60 },
  { size: 6, top: '25%', left: '80%', duration: 50 },
  { size: 10, top: '85%', left: '70%', duration: 55 },
  { size: 7, top: '40%', left: '10%', duration: 48 },
  { size: 9, top: '60%', left: '85%', duration: 52 },
  { size: 5, top: '10%', left: '50%', duration: 58 },
  { size: 11, top: '90%', left: '45%', duration: 47 },
];

const tools = [
  {
    title: "PRD Co-writer",
    description: "Collaborate with AI to craft comprehensive product requirement documents",
    icon: FileText,
    path: "/prd-cowriter",
    planetColor: "from-[#c2b5a3] via-[#8b7355] to-[#5c4a3a]",
    glowColor: "shadow-[0_0_30px_rgba(194,181,163,0.4)]",
    size: "w-40 h-40",
    delay: "0s",
    type: "banded", // Jupiter-like
  },
  {
    title: "PRD Reviewer",
    description: "Get AI-powered feedback on your product requirement documents",
    icon: Shield,
    path: "/prd-reviewer",
    planetColor: "from-[#d4a574] via-[#c08550] to-[#8b5a2b]",
    glowColor: "shadow-[0_0_30px_rgba(212,165,116,0.4)]",
    size: "w-44 h-44",
    delay: "1.5s",
    type: "ringed", // Saturn-like
  },
  {
    title: "Mini Educator",
    description: "Learn and share PM knowledge with AI-powered insights",
    icon: BookOpen,
    path: "/educator",
    planetColor: "from-[#4a7ba7] via-[#2e5984] to-[#1a3a5c]",
    glowColor: "shadow-[0_0_30px_rgba(74,123,167,0.4)]",
    size: "w-36 h-36",
    delay: "3s",
    type: "stormy", // Neptune-like
  },
  {
    title: "Release PR",
    description: "Create multi-format release communications in seconds",
    icon: Megaphone,
    path: "/release-pr",
    planetColor: "from-[#b8724e] via-[#8b4513] to-[#5c2e0f]",
    glowColor: "shadow-[0_0_30px_rgba(184,114,78,0.4)]",
    size: "w-44 h-44",
    delay: "4.5s",
    type: "rocky", // Mars-like
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden font-orbitron">
      {/* Starry background */}
      <div className="absolute inset-0 bg-black">
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 3 + 0.5 + 'px',
              height: Math.random() * 3 + 0.5 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `twinkle ${Math.random() * 3 + 2}s infinite ${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Asteroids */}
      {asteroids.map((asteroid, i) => (
        <div
          key={`asteroid-${i}`}
          className="absolute rounded-full bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 opacity-40"
          style={{
            width: asteroid.size + 'px',
            height: asteroid.size + 'px',
            top: asteroid.top,
            left: asteroid.left,
            animation: `drift ${asteroid.duration}s infinite linear`,
            boxShadow: '0 0 10px rgba(156, 163, 175, 0.3)',
          }}
        />
      ))}
      
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="relative w-full max-w-6xl aspect-square flex items-center justify-center">
          {/* Central Header */}
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            <div className="text-center space-y-4 max-w-md">
              <h1 className="text-5xl md:text-7xl font-black tracking-widest">
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                  PMverse
                </span>
              </h1>
              <p className="text-xs md:text-sm text-muted-foreground font-light tracking-[0.3em] uppercase">
                AI-Powered Product Management Suite
              </p>
              <div className="flex items-center justify-center gap-1">
                <Sparkles className="h-3 w-3 text-primary animate-pulse" />
                <Sparkles className="h-2 w-2 text-accent animate-pulse delay-75" />
                <Sparkles className="h-3 w-3 text-secondary animate-pulse delay-150" />
              </div>
            </div>
          </div>

          {/* Orbiting Planets */}
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            const angle = (index * 360) / tools.length;
            const orbitRadius = 280;
            
            return (
              <Link 
                key={tool.path} 
                to={tool.path}
                className="absolute group pointer-events-auto"
              >
                <div 
                  className="relative flex flex-col items-center gap-3"
                  style={{
                    transform: `rotate(${angle}deg) translateX(${orbitRadius}px) rotate(-${angle}deg)`,
                  }}
                >
                  {/* Outer orbit ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-150 group-hover:scale-[1.7] group-hover:border-primary/40 transition-all duration-500" />
                  
                  {/* Planet */}
                  <div 
                    className={`${tool.size} rounded-full bg-gradient-to-br ${tool.planetColor} ${tool.glowColor} relative overflow-hidden transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_50px_rgba(59,130,246,0.6)]`}
                    style={{
                      animation: `float 6s ease-in-out infinite`,
                      animationDelay: tool.delay,
                    }}
                  >
                    {/* Banded texture (Jupiter-like) */}
                    {tool.type === "banded" && (
                      <div className="absolute inset-0 opacity-70">
                        <div className="absolute w-full h-[15%] bg-black/40 top-[8%] blur-[1px]" />
                        <div className="absolute w-full h-[12%] bg-white/20 top-[25%] blur-[1px]" />
                        <div className="absolute w-full h-[18%] bg-black/35 top-[42%] blur-[1px]" />
                        <div className="absolute w-full h-[14%] bg-white/15 top-[63%] blur-[1px]" />
                        <div className="absolute w-full h-[10%] bg-black/30 top-[80%] blur-[1px]" />
                        {/* Great Red Spot */}
                        <div className="absolute top-[35%] left-[55%] w-[28%] h-[20%] rounded-full bg-[#e8b686]/70 blur-md" />
                        <div className="absolute top-[37%] left-[57%] w-[22%] h-[16%] rounded-full bg-[#d4a574]/80 blur-sm" />
                      </div>
                    )}
                    
                    {/* Stormy texture (Neptune-like) */}
                    {tool.type === "stormy" && (
                      <div className="absolute inset-0 opacity-70">
                        {/* Large storm systems */}
                        <div className="absolute top-[18%] left-[12%] w-[38%] h-[28%] rounded-full bg-white/30 blur-xl" />
                        <div className="absolute bottom-[22%] right-[18%] w-[42%] h-[32%] rounded-full bg-black/50 blur-2xl" />
                        <div className="absolute top-[48%] left-[28%] w-[28%] h-[22%] rounded-full bg-white/20 blur-xl" />
                        <div className="absolute bottom-[40%] left-[50%] w-[20%] h-[15%] rounded-full bg-black/40 blur-lg" />
                        {/* Smaller cloud details */}
                        <div className="absolute top-[30%] right-[25%] w-[18%] h-[14%] rounded-full bg-white/15 blur-md" />
                        <div className="absolute bottom-[35%] right-[40%] w-[15%] h-[12%] rounded-full bg-black/25 blur-lg" />
                      </div>
                    )}
                    
                    {/* Rocky texture (Mars-like) */}
                    {tool.type === "rocky" && (
                      <div className="absolute inset-0 opacity-60">
                        {/* Large craters with depth */}
                        <div className="absolute top-[15%] left-[20%] w-[22%] h-[22%] rounded-full bg-black/50 blur-md">
                          <div className="absolute top-1 left-1 w-[80%] h-[80%] rounded-full bg-white/10 blur-sm" />
                        </div>
                        <div className="absolute bottom-[28%] right-[22%] w-[18%] h-[18%] rounded-full bg-black/45 blur-sm">
                          <div className="absolute top-0.5 left-0.5 w-[70%] h-[70%] rounded-full bg-white/8 blur-sm" />
                        </div>
                        <div className="absolute top-[42%] right-[32%] w-[15%] h-[15%] rounded-full bg-black/40 blur-sm" />
                        {/* Medium craters */}
                        <div className="absolute bottom-[18%] left-[28%] w-[20%] h-[20%] rounded-full bg-black/40 blur-md" />
                        <div className="absolute top-[58%] left-[12%] w-[12%] h-[12%] rounded-full bg-black/35 blur-sm" />
                        <div className="absolute top-[70%] right-[15%] w-[10%] h-[10%] rounded-full bg-black/30 blur-sm" />
                        {/* Highlands and valleys */}
                        <div className="absolute top-[35%] left-[60%] w-[25%] h-[18%] rounded-full bg-white/12 blur-lg" />
                        <div className="absolute bottom-[45%] left-[40%] w-[20%] h-[15%] rounded-full bg-black/20 blur-lg" />
                      </div>
                    )}
                    
                    {/* Terminator line (day/night divide) and shadows */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/60" />
                    <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-black/30" />
                    
                    {/* Icon in center */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <Icon className="h-8 w-8 text-white/90 drop-shadow-lg group-hover:scale-110 transition-transform" />
                    </div>
                    
                    {/* Rings (Saturn-like) */}
                    {tool.type === "ringed" && (
                      <div className="absolute inset-0 flex items-center justify-center overflow-visible">
                        <div className="absolute w-[135%] h-[35%] border-t-[8px] border-b-[8px] border-[#d4a574]/40 rounded-full rotate-[-15deg]" style={{ boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.3), 0 0 20px rgba(212,165,116,0.2)' }} />
                        <div className="absolute w-[125%] h-[30%] border-t-[6px] border-b-[6px] border-[#c08550]/30 rounded-full rotate-[-15deg]" />
                      </div>
                    )}
                    
                    {/* Atmospheric glow */}
                    <div className="absolute inset-0 rounded-full bg-gradient-radial from-transparent via-transparent to-transparent" style={{ boxShadow: `inset -10px -10px 30px rgba(0,0,0,0.5), inset 10px 10px 30px rgba(255,255,255,0.1)` }} />
                  </div>
                  
                  {/* Planet label */}
                  <div className="text-center space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-sm font-bold text-white whitespace-nowrap tracking-wider drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">
                      {tool.title}
                    </h3>
                  </div>
                </div>
              </Link>
            );
          })}

          {/* Orbit path indicator */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div 
              className="rounded-full border border-primary/10"
              style={{
                width: '560px',
                height: '560px',
                boxShadow: '0 0 40px rgba(59, 130, 246, 0.1)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
