import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Megaphone, Copy } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ReleasePR = () => {
  const [featureInput, setFeatureInput] = useState("");
  const [outputs, setOutputs] = useState({
    valueProp: "",
    externalBlog: "",
    internalBlog: "",
    changelog: "",
    slack: "",
  });

  const handleGenerate = () => {
    // Placeholder for AI generation
    setOutputs({
      valueProp: "Transform your workflow with AI-powered automation",
      externalBlog: "External blog post content...",
      internalBlog: "Internal blog post content...",
      changelog: "## What's New\n\n- Feature description\n- Benefits\n- Usage",
      slack: "🚀 New feature alert! Check out our latest release...",
    });
    toast.success("Release content generated!");
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold bg-gradient-cosmic bg-clip-text text-transparent">
              Release PR Generator
            </h1>
            <p className="text-muted-foreground">
              Create multi-format release communications in seconds
            </p>
          </div>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Megaphone className="h-5 w-5 text-accent" />
                Feature Description
              </CardTitle>
              <CardDescription>
                Describe the feature you're releasing
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                placeholder="E.g., AI-powered document collaboration tool"
                value={featureInput}
                onChange={(e) => setFeatureInput(e.target.value)}
                className="bg-background/50"
              />
              <Button 
                onClick={handleGenerate}
                className="w-full bg-accent text-accent-foreground hover:shadow-glow-accent"
              >
                Generate Release Content
              </Button>
            </CardContent>
          </Card>

          <Tabs defaultValue="valueProp" className="w-full">
            <TabsList className="grid w-full grid-cols-5 bg-muted/50">
              <TabsTrigger value="valueProp">Value Prop</TabsTrigger>
              <TabsTrigger value="external">External Blog</TabsTrigger>
              <TabsTrigger value="internal">Internal Blog</TabsTrigger>
              <TabsTrigger value="changelog">Changelog</TabsTrigger>
              <TabsTrigger value="slack">Slack</TabsTrigger>
            </TabsList>

            {Object.entries(outputs).map(([key, value]) => (
              <TabsContent key={key} value={key} className="space-y-4">
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </CardTitle>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleCopy(value)}
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        Copy
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      value={value}
                      onChange={(e) =>
                        setOutputs({ ...outputs, [key]: e.target.value })
                      }
                      className="min-h-[300px] bg-background/50"
                      placeholder={`Generated ${key} will appear here...`}
                    />
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ReleasePR;
