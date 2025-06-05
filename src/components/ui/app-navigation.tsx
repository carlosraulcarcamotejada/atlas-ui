import * as React from "react";
import { cn } from "@/lib/utils";
import { typographyVariants } from "./typography";

interface NavigationContextValue {
  activePath: string;
}

const NavigationContext = React.createContext<
  NavigationContextValue | undefined
>(undefined);

function AppNavigation({
  activePath = "/",
  children,
  className,
  ...props
}: React.ComponentProps<"nav"> & { activePath?: string }) {
  return (
    <NavigationContext.Provider value={{ activePath }}>
      <nav
        className="
                bg-white
                bottom-0
                fixed
                flex
                left-0
                pb-03 
                pt-02 
                rounded-t-02 
                shadow-01
                w-full
                z-50
                "
        data-slot="app-navigation"
        role="app-navigation"
        {...props}
      >
        {children}
      </nav>
    </NavigationContext.Provider>
  );
}

function AppNavigationItem({
  className,
  icon: Icon,
  label,
  path,
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean;
  icon: React.ReactNode;
  label: string;
  path?: string;
}) {
  const context = React.useContext(NavigationContext);
  if (!context) {
    throw new Error("AppNavigation.Item must be used within AppNavigation");
  }
  const { activePath } = context;
  const isActive = activePath === path;

  return (
    <div
      {...props}
      className={cn(
        "flex flex-1 flex-col items-center gap-y-01",
        isActive && "text-primary font-bold",
        !isActive && "text-gray-500",
        className
      )}
    >
      <div
        className="
        [&_svg]:size-05
        [&_svg]:pointer-events-none 
        [&_svg]:shrink-0 outline-none"
      >
        {Icon}
      </div>
      <span
        className={typographyVariants({
          variant: "body-xs",
          weight: "regular",
        })}
      >
        {label}
      </span>
    </div>
  );
}

export { AppNavigation, AppNavigationItem };
