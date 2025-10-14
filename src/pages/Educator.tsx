import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Map, Video } from "lucide-react";

const Educator = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold bg-gradient-cosmic bg-clip-text text-transparent">
              Mini Educator
            </h1>
            <p className="text-muted-foreground">
              Learn and share PM knowledge with AI-powered insights
            </p>
          </div>

          <Tabs defaultValue="knowledge" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-muted/50">
              <TabsTrigger value="knowledge">Knowledge Base</TabsTrigger>
              <TabsTrigger value="journey">User Journeys</TabsTrigger>
              <TabsTrigger value="videos">Video Overviews</TabsTrigger>
            </TabsList>

            <TabsContent value="knowledge" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <Card key={i} className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-glow-primary transition-all">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-primary" />
                        Feature Knowledge {i}
                      </CardTitle>
                      <CardDescription>
                        Best practices and insights
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Explore key concepts, methodologies, and frameworks for successful product management.
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="journey" className="space-y-4">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Map className="h-5 w-5 text-secondary" />
                    User Journey Maps
                  </CardTitle>
                  <CardDescription>
                    Visualize user flows and touchpoints
                  </CardDescription>
                </CardHeader>
                <CardContent className="min-h-[400px] flex items-center justify-center">
                  <p className="text-muted-foreground">
                    Journey map visualization will appear here
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="videos" className="space-y-4">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Video className="h-5 w-5 text-accent" />
                    NotebookLM Overviews
                  </CardTitle>
                  <CardDescription>
                    AI-generated video explanations
                  </CardDescription>
                </CardHeader>
                <CardContent className="min-h-[400px] flex items-center justify-center">
                  <p className="text-muted-foreground">
                    Video content will be displayed here
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Educator;
