import { Link } from "react-router-dom";
import { FileText, Shield, BookOpen, Megaphone, Sparkles } from "lucide-react";

const tools = [
  {
    title: "PRD Co-writer",
    description: "Collaborate with AI to craft comprehensive product requirement documents",
    icon: FileText,
    path: "/prd-cowriter",
    planetColor: "from-primary via-primary/60 to-primary/40",
    glowColor: "shadow-[0_0_40px_rgba(34,211,238,0.6)]",
    size: "w-48 h-48",
    delay: "0s",
  },
  {
    title: "PRD Reviewer",
    description: "Get AI-powered feedback on your product requirement documents",
    icon: Shield,
    path: "/prd-reviewer",
    planetColor: "from-secondary via-secondary/60 to-secondary/40",
    glowColor: "shadow-[0_0_40px_rgba(147,51,234,0.6)]",
    size: "w-52 h-52",
    delay: "1.5s",
  },
  {
    title: "Mini Educator",
    description: "Learn and share PM knowledge with AI-powered insights",
    icon: BookOpen,
    path: "/educator",
    planetColor: "from-accent via-accent/60 to-accent/40",
    glowColor: "shadow-[0_0_40px_rgba(236,72,153,0.6)]",
    size: "w-44 h-44",
    delay: "3s",
  },
  {
    title: "Release PR",
    description: "Create multi-format release communications in seconds",
    icon: Megaphone,
    path: "/release-pr",
    planetColor: "from-primary via-accent/60 to-secondary/40",
    glowColor: "shadow-[0_0_40px_rgba(34,211,238,0.5)]",
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
          <div className="relative min-h-[600px] flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 lg:gap-32">
              {tools.map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <Link 
                    key={tool.path} 
                    to={tool.path}
                    className="group relative flex items-center justify-center"
                    style={{
                      animation: `float 6s ease-in-out infinite`,
                      animationDelay: tool.delay,
                    }}
                  >
                    {/* Planet */}
                    <div className={`${tool.size} rounded-full bg-gradient-to-br ${tool.planetColor} ${tool.glowColor} relative overflow-hidden transition-all duration-300 group-hover:scale-110 group-hover:brightness-110`}>
                      {/* Planet surface texture */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 rounded-full bg-foreground/10 blur-xl" />
                        <div className="absolute bottom-1/3 right-1/4 w-1/4 h-1/4 rounded-full bg-foreground/10 blur-xl" />
                      </div>
                      
                      {/* Icon in center */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon className="h-12 w-12 text-foreground drop-shadow-lg" />
                      </div>
                      
                      {/* Orbit ring */}
                      <div className="absolute inset-0 rounded-full border-2 border-foreground/10 scale-110 group-hover:scale-125 transition-transform duration-300" />
                    </div>
                    
                    {/* Planet info card on hover */}
                    <div className="absolute top-full mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-card/90 backdrop-blur-sm border border-border/50 rounded-lg p-4 w-64 shadow-xl z-10">
                      <h3 className="text-lg font-bold text-foreground mb-2">{tool.title}</h3>
                      <p className="text-sm text-muted-foreground">{tool.description}</p>
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
