import * as React from "react";

import { cn } from "../../../lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-[48px] rounded-md border border-black/10 focus:border-accent font-light bg-primary px-4 py-5 text-sm placeholder:text-white/60 outline-none ",
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
