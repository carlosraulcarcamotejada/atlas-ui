import * as React from "react";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

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

interface AppNavigationItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  asChild?: boolean;
  children?: React.ReactNode;
}

function AppNavigationItem({
  asChild = false,
  className,
  href,
  icon: Icon,
  label,
  ...props
}: AppNavigationItemProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  const context = React.useContext(NavigationContext);
  if (!context) {
    throw new Error("AppNavigation.Item must be used within AppNavigation");
  }
  const { activePath } = context;
  const isActive = activePath === href;

  const Component = asChild ? Slot : "a";

  return (
    <Component
      {...props}
      {...(!asChild && { href })}
      className={cn(
        "flex flex-1 flex-col items-center gap-y-01 text-01@",
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
      <span className="text-01">{label}</span>
    </Component>
  );
}

export { AppNavigation, AppNavigationItem };
