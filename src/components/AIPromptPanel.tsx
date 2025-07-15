import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Loader2 } from "lucide-react";

interface AIPromptPanelProps {
  onGenerateSchema: (prompt: string) => void;
}

export function AIPromptPanel({ onGenerateSchema }: AIPromptPanelProps) {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    try {
      await onGenerateSchema(prompt);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Card className="w-80 shadow-soft">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          AI Schema Generator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="prompt" className="text-sm font-medium">
            Describe your database schema:
          </label>
          <Textarea
            id="prompt"
            placeholder="e.g., Create a blog database with users, posts, and comments..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="min-h-[120px] resize-none"
          />
        </div>

        <Button
          onClick={handleGenerate}
          disabled={!prompt.trim() || isGenerating}
          className="w-full rounded-full"
        >
          {isGenerating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-4 w-4" />
              Generate Schema
            </>
          )}
        </Button>

        <div className="text-xs text-muted-foreground">
          <p>Try describing:</p>
          <ul className="ml-2 mt-1 space-y-1">
            <li>• Table names and relationships</li>
            <li>• Data types and constraints</li>
            <li>• Business logic requirements</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}