import { Link, useLocation } from "react-router-dom";
import { FileText, Shield, BookOpen, Megaphone, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "PRD Co-writer", path: "/prd-cowriter", icon: FileText },
  { name: "PRD Reviewer", path: "/prd-reviewer", icon: Shield },
  { name: "Educator", path: "/educator", icon: BookOpen },
  { name: "Release PR", path: "/release-pr", icon: Megaphone },
];

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Sparkles className="h-6 w-6 text-primary transition-all group-hover:scale-110" />
              <div className="absolute inset-0 blur-lg bg-primary/20 group-hover:bg-primary/30 transition-all" />
            </div>
            <span className="text-xl font-bold bg-gradient-cosmic bg-clip-text text-transparent">
              PMverse
            </span>
          </Link>

          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg transition-all",
                    "hover:bg-muted/50",
                    isActive && "bg-muted text-primary shadow-glow-primary"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden md:inline text-sm font-medium">
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
