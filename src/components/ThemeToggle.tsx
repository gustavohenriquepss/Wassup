
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/providers/ThemeProvider";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  // Log current theme for debugging
  console.log("Current theme in toggle:", theme);

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="w-10"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  );
};

export default ThemeToggle;
