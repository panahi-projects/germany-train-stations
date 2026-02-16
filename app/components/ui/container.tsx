import { cn } from "@/app/utils/global";
import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  isFluid?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  isFluid = false,
}) => {
  return (
    <div
      className={cn(
        { "container !max-w-[71rem] mx-auto": !isFluid },
        "px-4 h-full flex flex-col",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
