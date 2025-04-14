
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/providers/ThemeProvider";
import { useEffect } from "react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  // Log current theme for debugging
  console.log("Current theme in toggle:", theme);

  // Add additional debug logging when component mounts
  useEffect(() => {
    console.log("ThemeToggle mounted with theme:", theme);
    console.log("Document classes:", document.documentElement.className);
  }, [theme]);

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => {
        console.log("Theme toggle button clicked, current theme:", theme);
        toggleTheme();
      }}
      className="w-10"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  );
};

export default ThemeToggle;
