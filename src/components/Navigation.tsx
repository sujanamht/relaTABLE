import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Database, Settings, Download, Pencil } from "lucide-react";

export function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="border-b border-border bg-background shadow-soft-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <Database className="h-6 w-6 text-primary" />
          <span className="text-xl font-semibold text-foreground">DBDesigner</span>
        </div>

        <div className="flex items-center space-x-1">
          <Button
            asChild
            variant={isActive("/designer") ? "default" : "ghost"}
            className="rounded-full"
          >
            <Link to="/designer" className="flex items-center gap-2">
              <Pencil className="h-4 w-4" />
              Designer
            </Link>
          </Button>

          <Button
            asChild
            variant={isActive("/export") ? "default" : "ghost"}
            className="rounded-full"
          >
            <Link to="/export" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Export
            </Link>
          </Button>

          <Button
            asChild
            variant={isActive("/settings") ? "default" : "ghost"}
            className="rounded-full"
          >
            <Link to="/settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}