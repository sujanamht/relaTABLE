import { Navigation } from "@/components/Navigation";
import { ExportPanel } from "@/components/ExportPanel";

export default function Export() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="py-8">
        <ExportPanel />
      </div>
    </div>
  );
}