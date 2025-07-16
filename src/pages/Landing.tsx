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
            <span className="text-primary">relaTABLE</span>
            <br />
            Design databases with
            <span className="text-primary"> AI assistance</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Create professional relational database schemas using our intuitive drag-and-drop interface. 
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
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="shadow-soft border-border">
            <CardContent className="p-6 text-center">
              <div className="rounded-full bg-primary/10 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Database className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Visual Designer</h3>
              <p className="text-muted-foreground">
                Drag and drop tables, define relationships, and see your database structure come to life.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft border-border">
            <CardContent className="p-6 text-center">
              <div className="rounded-full bg-primary/10 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">AI-Powered</h3>
              <p className="text-muted-foreground">
                Describe your data needs and let AI generate optimal table structures and relationships.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft border-border">
            <CardContent className="p-6 text-center">
              <div className="rounded-full bg-primary/10 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Code2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Export Ready</h3>
              <p className="text-muted-foreground">
                Generate SQL DDL scripts, documentation, and other formats for your database.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="shadow-soft-lg bg-gradient-primary text-primary-foreground border-0">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">Ready to start designing?</h2>
              <p className="text-xl mb-6 opacity-90">
                Join thousands of developers creating better database schemas
              </p>
              <Button asChild size="lg" variant="secondary" className="rounded-full px-8">
                <Link to="/designer" className="flex items-center gap-2">
                  Launch relaTABLE Designer
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}