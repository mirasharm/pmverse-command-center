import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Upload } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const PRDReviewer = () => {
  const [prdContent, setPrdContent] = useState("");
  const [feedback, setFeedback] = useState<Array<{ type: string; message: string }>>([]);

  const handleReview = () => {
    // Placeholder for AI review
    setFeedback([
      { type: "success", message: "Clear problem statement identified" },
      { type: "warning", message: "Consider adding more user personas" },
      { type: "info", message: "Success metrics could be more specific" },
    ]);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold bg-gradient-cosmic bg-clip-text text-transparent">
              PRD Reviewer
            </h1>
            <p className="text-muted-foreground">
              Get AI-powered feedback on your product requirement documents
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-secondary" />
                  Your PRD
                </CardTitle>
                <CardDescription>
                  Paste your PRD or upload a document
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Paste your PRD content here..."
                  value={prdContent}
                  onChange={(e) => setPrdContent(e.target.value)}
                  className="min-h-[400px] bg-background/50"
                />
                <Button 
                  onClick={handleReview}
                  className="w-full bg-secondary text-secondary-foreground hover:shadow-glow-secondary"
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Review PRD
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Feedback</CardTitle>
                <CardDescription>
                  AI analysis and suggestions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {feedback.length === 0 ? (
                    <p className="text-muted-foreground text-sm">
                      Submit your PRD to receive feedback...
                    </p>
                  ) : (
                    feedback.map((item, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-lg border border-border/50 bg-background/50 space-y-2"
                      >
                        <Badge
                          variant={
                            item.type === "success"
                              ? "default"
                              : item.type === "warning"
                              ? "secondary"
                              : "outline"
                          }
                        >
                          {item.type}
                        </Badge>
                        <p className="text-sm">{item.message}</p>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PRDReviewer;
