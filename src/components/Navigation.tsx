import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Settings, Download, Pencil, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Navigation() {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="border-b border-border bg-background shadow-soft-sm">
      <div className="mx-auto flex h-16  items-center justify-between px-4">
        {/* Logo and Brand - Clickable to redirect to landing page */}
        <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          <img 
            src="/logo.png" 
            alt="relaTABLE Logo" 
            className="h-12 w-auto object-contain"
          />
          <span className="text-2xl font-semibold text-gray-400">rela<span className="text-gray-300 font-bold">TABLE</span></span>
        </Link>

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

          {/* Theme Toggle Button */}
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full h-9 w-9"
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}