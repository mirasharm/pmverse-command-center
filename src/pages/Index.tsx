import { Link } from "react-router-dom";
import { FileText, Shield, BookOpen, Megaphone, Sparkles } from "lucide-react";

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
    <div className="min-h-screen bg-background relative overflow-hidden">
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
      
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="relative w-full max-w-6xl aspect-square flex items-center justify-center">
          {/* Central Header */}
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            <div className="text-center space-y-4 max-w-md">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                  PMverse
                </span>
              </h1>
              <p className="text-sm md:text-base text-gray-400 font-light">
                AI-Powered Product Management Suite
              </p>
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
                  {/* Planet */}
                  <div 
                    className={`${tool.size} rounded-full bg-gradient-to-br ${tool.planetColor} ${tool.glowColor} relative overflow-hidden transition-all duration-300 group-hover:scale-125`}
                    style={{
                      animation: `float 6s ease-in-out infinite`,
                      animationDelay: tool.delay,
                    }}
                  >
                    {/* Banded texture (Jupiter-like) */}
                    {tool.type === "banded" && (
                      <div className="absolute inset-0 opacity-60">
                        <div className="absolute w-full h-[15%] bg-black/30 top-[8%]" />
                        <div className="absolute w-full h-[12%] bg-white/15 top-[25%]" />
                        <div className="absolute w-full h-[18%] bg-black/25 top-[42%]" />
                        <div className="absolute w-full h-[14%] bg-white/10 top-[63%]" />
                        <div className="absolute w-full h-[10%] bg-black/20 top-[80%]" />
                        {/* Great Red Spot */}
                        <div className="absolute top-[35%] left-[55%] w-[28%] h-[20%] rounded-full bg-[#d4a574]/60 blur-sm" />
                      </div>
                    )}
                    
                    {/* Stormy texture (Neptune-like) */}
                    {tool.type === "stormy" && (
                      <div className="absolute inset-0 opacity-60">
                        <div className="absolute top-[18%] left-[12%] w-[38%] h-[28%] rounded-full bg-white/25 blur-lg" />
                        <div className="absolute bottom-[22%] right-[18%] w-[42%] h-[32%] rounded-full bg-black/40 blur-xl" />
                        <div className="absolute top-[48%] left-[28%] w-[28%] h-[22%] rounded-full bg-white/15 blur-lg" />
                        <div className="absolute bottom-[40%] left-[50%] w-[20%] h-[15%] rounded-full bg-black/30 blur-md" />
                      </div>
                    )}
                    
                    {/* Rocky texture (Mars-like) */}
                    {tool.type === "rocky" && (
                      <div className="absolute inset-0 opacity-50">
                        {/* Large craters */}
                        <div className="absolute top-[15%] left-[20%] w-[22%] h-[22%] rounded-full bg-black/40 blur-md" />
                        <div className="absolute bottom-[28%] right-[22%] w-[18%] h-[18%] rounded-full bg-black/35 blur-sm" />
                        <div className="absolute top-[42%] right-[32%] w-[15%] h-[15%] rounded-full bg-black/30 blur-sm" />
                        {/* Medium craters */}
                        <div className="absolute bottom-[18%] left-[28%] w-[20%] h-[20%] rounded-full bg-black/30 blur-md" />
                        <div className="absolute top-[58%] left-[12%] w-[12%] h-[12%] rounded-full bg-black/25 blur-sm" />
                        {/* Light spots */}
                        <div className="absolute top-[35%] left-[60%] w-[15%] h-[15%] rounded-full bg-white/15 blur-md" />
                      </div>
                    )}
                    
                    {/* Shadow to add depth */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/40" />
                    
                    {/* Icon in center */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <Icon className="h-8 w-8 text-white/90 drop-shadow-lg" />
                    </div>
                    
                    {/* Rings (Saturn-like) */}
                    {tool.type === "ringed" && (
                      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                        <div className="absolute w-[135%] h-[35%] border-t-[8px] border-b-[8px] border-[#d4a574]/40 rounded-full rotate-[-15deg]" style={{ boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.3)' }} />
                        <div className="absolute w-[125%] h-[30%] border-t-[6px] border-b-[6px] border-[#c08550]/30 rounded-full rotate-[-15deg]" />
                      </div>
                    )}
                    
                    {/* Orbit ring */}
                    <div className="absolute inset-0 rounded-full border border-white/10 scale-110 group-hover:scale-125 transition-transform duration-300" />
                  </div>
                  
                  {/* Planet label */}
                  <div className="text-center space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-sm font-semibold text-white whitespace-nowrap">
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
              className="rounded-full border border-white/5"
              style={{
                width: '560px',
                height: '560px',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
