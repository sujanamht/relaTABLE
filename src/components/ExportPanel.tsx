import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, FileText, Code2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ExportPanel() {
  const [selectedEngine, setSelectedEngine] = useState<string>("");
  const { toast } = useToast();

  const handleExport = (type: "sql" | "orm") => {
    if (!selectedEngine) {
      toast({
        title: "Select Database Engine",
        description: "Please select a database engine before exporting.",
        variant: "destructive",
      });
      return;
    }

    // Mock export functionality
    const fileName = `schema.${type === "sql" ? "sql" : "js"}`;
    toast({
      title: "Export Started",
      description: `Generating ${type.toUpperCase()} for ${selectedEngine}...`,
    });

    // Simulate file download
    setTimeout(() => {
      toast({
        title: "Export Complete",
        description: `${fileName} has been downloaded successfully.`,
      });
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Download className="h-5 w-5 text-primary" />
            Export Schema
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Database Engine</label>
            <Select value={selectedEngine} onValueChange={setSelectedEngine}>
              <SelectTrigger>
                <SelectValue placeholder="Select database engine..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="postgresql">PostgreSQL</SelectItem>
                <SelectItem value="mysql">MySQL</SelectItem>
                <SelectItem value="sqlite">SQLite</SelectItem>
                <SelectItem value="mongodb">MongoDB</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button
              onClick={() => handleExport("sql")}
              className="h-20 flex-col gap-2 rounded-lg"
              variant="outline"
            >
              <FileText className="h-6 w-6" />
              <div className="text-center">
                <div className="font-medium">Download SQL</div>
                <div className="text-xs text-muted-foreground">
                  Raw SQL schema file
                </div>
              </div>
            </Button>

            <Button
              onClick={() => handleExport("orm")}
              className="h-20 flex-col gap-2 rounded-lg"
              variant="outline"
            >
              <Code2 className="h-6 w-6" />
              <div className="text-center">
                <div className="font-medium">Download ORM</div>
                <div className="text-xs text-muted-foreground">
                  ORM/Migration code
                </div>
              </div>
            </Button>
          </div>

          <div className="text-xs text-muted-foreground bg-secondary/50 p-3 rounded-lg">
            <p className="font-medium mb-1">Export Options:</p>
            <ul className="space-y-1">
              <li>• SQL: Direct database schema creation scripts</li>
              <li>• ORM: Model definitions for popular frameworks</li>
              <li>• Includes relationships, constraints, and indexes</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}