import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Send } from "lucide-react";

const PRDCowriter = () => {
  const [prompt, setPrompt] = useState("");
  const [content, setContent] = useState("");

  const handleGenerate = () => {
    // Placeholder for AI generation
    setContent("AI-generated PRD content will appear here...");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold bg-gradient-cosmic bg-clip-text text-transparent">
              PRD Co-writer
            </h1>
            <p className="text-muted-foreground">
              Collaborate with AI to craft comprehensive product requirement documents
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Input
                </CardTitle>
                <CardDescription>
                  Describe your feature or provide context
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="E.g., Create a feature that allows users to schedule posts..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[300px] bg-background/50"
                />
                <Button 
                  onClick={handleGenerate}
                  className="w-full bg-primary text-primary-foreground hover:shadow-glow-primary"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Generate PRD
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Output</CardTitle>
                <CardDescription>
                  AI-generated PRD content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Generated content will appear here..."
                  className="min-h-[300px] bg-background/50"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PRDCowriter;
