import { Link } from "react-router-dom";
import { FileText, Shield, BookOpen, Megaphone, Sparkles } from "lucide-react";

const tools = [
  {
    title: "PRD Co-writer",
    description: "Collaborate with AI to craft comprehensive product requirement documents",
    icon: FileText,
    path: "/prd-cowriter",
    planetColor: "from-[#4a5568] via-[#2d3748] to-[#1a202c]",
    glowColor: "shadow-[0_0_30px_rgba(74,85,104,0.4)]",
    size: "w-48 h-48",
    delay: "0s",
  },
  {
    title: "PRD Reviewer",
    description: "Get AI-powered feedback on your product requirement documents",
    icon: Shield,
    path: "/prd-reviewer",
    planetColor: "from-[#c05621] via-[#9c4221] to-[#7c2d12]",
    glowColor: "shadow-[0_0_30px_rgba(192,86,33,0.4)]",
    size: "w-52 h-52",
    delay: "1.5s",
  },
  {
    title: "Mini Educator",
    description: "Learn and share PM knowledge with AI-powered insights",
    icon: BookOpen,
    path: "/educator",
    planetColor: "from-[#2563eb] via-[#1e40af] to-[#1e3a8a]",
    glowColor: "shadow-[0_0_30px_rgba(37,99,235,0.4)]",
    size: "w-44 h-44",
    delay: "3s",
  },
  {
    title: "Release PR",
    description: "Create multi-format release communications in seconds",
    icon: Megaphone,
    path: "/release-pr",
    planetColor: "from-[#dc2626] via-[#991b1b] to-[#7f1d1d]",
    glowColor: "shadow-[0_0_30px_rgba(220,38,38,0.4)]",
    size: "w-56 h-56",
    delay: "4.5s",
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
                style={{
                  animation: `orbit 40s linear infinite`,
                  animationDelay: `-${(index * 40) / tools.length}s`,
                  transformOrigin: 'center center',
                }}
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
                    {/* Planet surface texture - craters and terrain */}
                    <div className="absolute inset-0 opacity-30">
                      <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 rounded-full bg-black/20 blur-md" />
                      <div className="absolute bottom-1/3 right-1/4 w-1/4 h-1/4 rounded-full bg-black/20 blur-md" />
                      <div className="absolute top-1/2 right-1/3 w-1/5 h-1/5 rounded-full bg-black/15 blur-sm" />
                      <div className="absolute bottom-1/4 left-1/3 w-1/6 h-1/6 rounded-full bg-black/15 blur-sm" />
                    </div>
                    
                    {/* Shadow to add depth */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/40" />
                    
                    {/* Icon in center */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-white/90 drop-shadow-lg" />
                    </div>
                    
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
