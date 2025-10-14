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
      <div className="absolute inset-0">
        {[...Array(150)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-foreground/30"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `twinkle ${Math.random() * 3 + 2}s infinite ${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      
      {/* Cosmic background effects */}
      <div className="absolute inset-0 bg-gradient-stellar opacity-50" />
      <div className="absolute inset-0 bg-gradient-nebula" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm border border-border/50">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">AI-Powered PM Tools</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold">
              <span className="bg-gradient-cosmic bg-clip-text text-transparent">
                Welcome to PMverse
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your complete AI-powered product management suite. From PRD creation to release communications, 
              streamline your PM workflow in one cosmic platform.
            </p>
          </div>

          {/* Planets Grid */}
          <div className="relative min-h-[700px] flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-28 lg:gap-36">
              {tools.map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <Link 
                    key={tool.path} 
                    to={tool.path}
                    className="group relative flex flex-col items-center justify-center gap-6"
                    style={{
                      animation: `float 6s ease-in-out infinite`,
                      animationDelay: tool.delay,
                    }}
                  >
                    {/* Planet */}
                    <div className={`${tool.size} rounded-full bg-gradient-to-br ${tool.planetColor} ${tool.glowColor} relative overflow-hidden transition-all duration-300 group-hover:scale-110`}>
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
                        <Icon className="h-10 w-10 text-foreground/90 drop-shadow-lg" />
                      </div>
                      
                      {/* Orbit ring */}
                      <div className="absolute inset-0 rounded-full border border-foreground/10 scale-110 group-hover:scale-125 transition-transform duration-300" />
                    </div>
                    
                    {/* Planet label - always visible */}
                    <div className="text-center space-y-2">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {tool.title}
                      </h3>
                      <p className="text-sm text-muted-foreground max-w-[200px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {tool.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Features Section */}
          <div className="text-center space-y-4 pt-8">
            <h2 className="text-2xl font-semibold">
              Everything You Need for Product Excellence
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {["AI-Powered", "Real-time Collaboration", "Smart Templates", "Export Anywhere"].map(
                (feature) => (
                  <div
                    key={feature}
                    className="px-4 py-2 rounded-lg bg-muted/50 backdrop-blur-sm border border-border/50"
                  >
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
