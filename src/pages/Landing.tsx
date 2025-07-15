import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Database, Sparkles, Code2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-primary/10 p-4">
              <Database className="h-12 w-12 text-primary" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Design databases with
            <span className="text-primary"> AI assistance</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Create professional database schemas using our intuitive drag-and-drop interface. 
            Let AI help you generate optimal database structures from simple descriptions.
          </p>
          
          <Button asChild size="lg" className="rounded-full px-8">
            <Link to="/designer" className="flex items-center gap-2">
              Start Designing
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="shadow-soft border-0 bg-card/50">
            <CardContent className="p-6 text-center">
              <div className="rounded-full bg-primary/10 p-3 w-fit mx-auto mb-4">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">AI-Powered</h3>
              <p className="text-muted-foreground">
                Generate database schemas from natural language descriptions
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft border-0 bg-card/50">
            <CardContent className="p-6 text-center">
              <div className="rounded-full bg-primary/10 p-3 w-fit mx-auto mb-4">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Visual Designer</h3>
              <p className="text-muted-foreground">
                Drag-and-drop interface for creating and connecting tables
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft border-0 bg-card/50">
            <CardContent className="p-6 text-center">
              <div className="rounded-full bg-primary/10 p-3 w-fit mx-auto mb-4">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Export Ready</h3>
              <p className="text-muted-foreground">
                Generate SQL scripts and ORM code for multiple databases
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Ready to revolutionize your database design process?
          </p>
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link to="/designer">
              Get Started Free
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}