import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Shield, BookOpen, Megaphone, ArrowRight, Sparkles } from "lucide-react";

const tools = [
  {
    title: "PRD Co-writer",
    description: "Collaborate with AI to craft comprehensive product requirement documents",
    icon: FileText,
    path: "/prd-cowriter",
    gradient: "from-primary/20 to-transparent",
  },
  {
    title: "PRD Reviewer",
    description: "Get AI-powered feedback on your product requirement documents",
    icon: Shield,
    path: "/prd-reviewer",
    gradient: "from-secondary/20 to-transparent",
  },
  {
    title: "Mini Educator",
    description: "Learn and share PM knowledge with AI-powered insights",
    icon: BookOpen,
    path: "/educator",
    gradient: "from-accent/20 to-transparent",
  },
  {
    title: "Release PR",
    description: "Create multi-format release communications in seconds",
    icon: Megaphone,
    path: "/release-pr",
    gradient: "from-primary/20 to-transparent",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Cosmic background effects */}
      <div className="absolute inset-0 bg-gradient-stellar opacity-50" />
      <div className="absolute inset-0 bg-gradient-nebula" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-6xl mx-auto space-y-12">
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

          {/* Tools Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link key={tool.path} to={tool.path}>
                  <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-glow-primary transition-all group">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tool.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        {tool.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {tool.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="ghost" className="group-hover:translate-x-1 transition-transform">
                        Launch Tool
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
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
