import { cn } from "../../lib/utils";
import { forwardRef } from "react";

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {}

const Wrapper = forwardRef<HTMLDivElement, WrapperProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "box-border mx-auto",
          "w-[1100px] max-2xl:w-[1200px] max-xl:w-[920px] max-lg:w-[680px] max-md:w-[440px] max-sm:w-[340px]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Wrapper.displayName = "Wrapper";

export { Wrapper };

export type { WrapperProps };