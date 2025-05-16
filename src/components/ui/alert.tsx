import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Button } from "@/components/ui/button";
import { XIcon } from "../icons/user-interface/x-icon";
// import { XIcon } from "@/components/icons/user-interface/x-icon";

interface AlertContextValue {
  onClose: () => void;
}

const AlertContext = React.createContext<AlertContextValue | undefined>(
  undefined
);

const alertVariants = cva(
  "flex relative w-full font-regular min-h-09 items-center gap-x-02 [&_a]:underline [&_a]:underline-offset-2 [&_a]:font-bold [&_a]:hover:underline",
  {
    variants: {
      variant: {
        warning: "bg-yellow-200 text-yellow-800",
        success: "bg-green-200 text-green-700",
        error: "bg-red-100 text-red-700",
      },
      size: {
        sm: "py-04 pl-04 pr-08 justify-start !text-02",
        md: "py-05 pl-05 pr-08 justify-center !text-03",
      },
    },
    defaultVariants: {
      variant: "warning",
      size: "md",
    },
  }
);

function AlertRoot({
  children,
  className,
  isOpen = false,
  size,
  variant,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof alertVariants> & {
    isOpen?: boolean;
  }) {
  const [open, setOpen] = React.useState(isOpen);

  const handleOnClose = () => setOpen(false);

  if (!open) return null;

  return (
    <AlertContext.Provider value={{ onClose: handleOnClose }}>
      <div
        role="alert"
        data-slot="alert"
        className={cn(alertVariants({ size, variant }), className)}
        {...props}
      >
        {children}
        <AlertClose />
      </div>
    </AlertContext.Provider>
  );
}

function AlertIcon({ children }: { children: React.ReactNode }) {
  return <div className="[&_svg]:size-05 [&_svg]:shrink-0">{children}</div>;
}

function AlertTitle({ children }: { children: React.ReactNode }) {
  return <strong className="font-bold">{children}</strong>;
}

function AlertDescription({ children }: { children: React.ReactNode }) {
  return <span>{children}</span>;
}

function AlertClose() {
  const context = React.useContext(AlertContext);
  if (!context) {
    throw new Error("Alert.Close must be used within Alert");
  }
  const { onClose } = context;

  return (
    <Button
      onClick={onClose}
      className="text-current hover:text-current/80 active:text-current absolute top-1/2 -translate-y-1/2 right-03"
      variant="tertiary"
      size="icon-sm"
    >
      <XIcon />
    </Button>
  );
}

// Compound exports
const Alert = Object.assign(AlertRoot, {
  Icon: AlertIcon,
  Title: AlertTitle,
  Description: AlertDescription,
  Close: AlertClose,
});

export { Alert };
