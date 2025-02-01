import { cn } from "../../lib/utils";
import { forwardRef } from "react";

// Directly use React.HTMLAttributes<HTMLDivElement> for the props type
const Wrapper = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "box-border mx-auto",
          "w-[1100px] max-2xl:w-[1200px] max-xl:w-[920px] max-lg:w-[680px] max-md:w-[440px] max-sm:w-[340px]",
          className // Apply custom className if passed in
        )}
        {...props} // Spread the remaining props (like style, id, etc.)
      >
        {children}
      </div>
    );
  }
);

Wrapper.displayName = "Wrapper";

export { Wrapper };
