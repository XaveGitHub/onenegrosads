import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { createAnimation, type AnimationVariant, type AnimationStart } from "@/lib/theme-animation";

// ///////////////////////////////////////////////////////////////////////////
// Custom hook for theme toggle functionality
// ///////////////////////////////////////////////////////////////////////////

export const useThemeToggle = ({
  variant = "circle",
  start = "center",
  blur = false,
  gifUrl = "",
}: {
  variant?: AnimationVariant;
  start?: AnimationStart;
  blur?: boolean;
  gifUrl?: string;
} = {}) => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  // Initialize state based on current theme, defaulting to false if undefined during SSR
  const [isDark, setIsDark] = useState(false);

  // Sync isDark state with resolved theme after hydration
  useEffect(() => {
    setIsDark(resolvedTheme === "dark");
  }, [resolvedTheme]);

  const styleId = "theme-transition-styles";

  const updateStyles = useCallback((css: string, name: string) => {
    // Check if we are in a browser environment
    if (typeof window === "undefined" || !document) return;

    let styleElement = document.getElementById(styleId) as HTMLStyleElement;

    if (!styleElement) {
      styleElement = document.createElement("style");
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }

    styleElement.textContent = css;
  }, []);

  const toggleTheme = useCallback(() => {
    // Check if we are in a browser environment
    if (typeof window === "undefined" || !document) return;
    
    setIsDark(!isDark);

    const animation = createAnimation(variant, start, blur, gifUrl);

    updateStyles(animation.css, animation.name);

    const switchTheme = () => {
      setTheme(theme === "light" ? "dark" : "light");
    };

    if (!document.startViewTransition) {
      switchTheme();
      return;
    }

    document.startViewTransition(switchTheme);
  }, [
    theme,
    setTheme,
    variant,
    start,
    blur,
    gifUrl,
    updateStyles,
    isDark,
    setIsDark,
  ]);

  return {
    isDark,
    toggleTheme,
  };
};

// ///////////////////////////////////////////////////////////////////////////
// Theme Toggle Button Component
// ///////////////////////////////////////////////////////////////////////////

export const ThemeToggleButton = ({
  className = "",
  variant = "circle",
  start = "center",
  blur = false,
  gifUrl = "",
}: {
  className?: string;
  variant?: AnimationVariant;
  start?: AnimationStart;
  blur?: boolean;
  gifUrl?: string;
}) => {
  const { isDark, toggleTheme } = useThemeToggle({
    variant,
    start,
    blur,
    gifUrl,
  });

  return (
    <motion.button
      type="button"
      className={cn(
        "relative flex size-10 items-center justify-center rounded-full bg-background border border-border text-foreground hover:bg-muted transition-colors",
        className,
      )}
      style={{ viewTransitionName: "theme-toggle" } as React.CSSProperties}
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <span className="sr-only">Toggle theme</span>
      <motion.div
        initial={false}
        animate={{
          scale: isDark ? 1 : 0,
          opacity: isDark ? 1 : 0,
          rotate: isDark ? 0 : -90,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className="absolute"
      >
        <Moon className="size-5" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          scale: isDark ? 0 : 1,
          opacity: isDark ? 0 : 1,
          rotate: isDark ? 90 : 0,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className="absolute"
      >
        <Sun className="size-5" />
      </motion.div>
    </motion.button>
  );
};
