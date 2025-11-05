
import { cn } from "@/lib/utils"
import type { ElementType, ComponentPropsWithoutRef } from "react"
import Link from "next/link"; // Keep Link if used as 'as' prop

interface StarBorderProps<T extends ElementType> {
  as?: T
  color?: string // For the animated border effect itself
  speed?: string
  className?: string
  children: React.ReactNode
}

export function StarBorder<T extends ElementType = "button">({
  as,
  className,
  color, // This prop will define the animated border color
  speed = "6s",
  children,
  ...props
}: StarBorderProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof StarBorderProps<T>>) {
  const Component = as || "button"
  // Animated border effect defaults to Bright Blue (primary)
  const effectColor = color || "hsl(var(--primary))"; 
  const hoverEffectColor = "hsl(var(--primary-hover))"; // Or a specific color if needed for hover border

  return (
    <Component 
      className={cn(
        "relative inline-block py-[1px] overflow-hidden group transition-all duration-300 ease-in-out", // Removed rounded corners
        className
      )} 
      {...props}
    >
      {/* Default Animated Border Elements */}
      <div
        className={cn(
          "absolute w-[400%] h-[50%] bottom-[-11px] right-[-350%] rounded-full animate-star-movement-bottom z-0",
          "opacity-30 dark:opacity-75 group-hover:opacity-60 dark:group-hover:opacity-90 transition-opacity duration-300 ease-in-out",
          "group-hover:opacity-0" // Fade out default on hover
        )}
        style={{
          background: `radial-gradient(circle, ${effectColor}, transparent 20%)`,
          animationDuration: speed,
        }}
      />
      <div
        className={cn(
          "absolute w-[400%] h-[50%] top-[-10px] left-[-350%] rounded-full animate-star-movement-top z-0",
          "opacity-30 dark:opacity-75 group-hover:opacity-60 dark:group-hover:opacity-90 transition-opacity duration-300 ease-in-out",
           "group-hover:opacity-0" // Fade out default on hover
        )}
        style={{
          background: `radial-gradient(circle, ${effectColor}, transparent 20%)`,
          animationDuration: speed,
        }}
      />

      {/* Hover Animated Border Elements (using primary color, could be different if needed) */}
       <div
        className={cn(
          "absolute w-[400%] h-[50%] bottom-[-11px] right-[-350%] rounded-full animate-star-movement-bottom z-0",
          "opacity-0 group-hover:opacity-60 dark:group-hover:opacity-90 transition-opacity duration-300 ease-in-out" // Fade in hover effect
        )}
        style={{
          background: `radial-gradient(circle, ${hoverEffectColor}, transparent 20%)`, // Using hoverEffectColor
          animationDuration: speed,
        }}
      />
      <div
        className={cn(
          "absolute w-[400%] h-[50%] top-[-10px] left-[-350%] rounded-full animate-star-movement-top z-0",
           "opacity-0 group-hover:opacity-60 dark:group-hover:opacity-90 transition-opacity duration-300 ease-in-out" // Fade in hover effect
        )}
        style={{
          background: `radial-gradient(circle, ${hoverEffectColor}, transparent 20%)`, // Using hoverEffectColor
          animationDuration: speed,
        }}
      />
      
      <div className={cn(
        "relative z-10 border text-center text-base py-4 px-6 transition-colors duration-300 ease-in-out",
        // Button face: Vibrant Orange background, White text (accent colors)
        "bg-accent text-accent-foreground border-transparent",
        // Button face: Hover darker Vibrant Orange background
        "group-hover:bg-accent-hover"
      )}>
        {children}
      </div>
    </Component>
  )
}
