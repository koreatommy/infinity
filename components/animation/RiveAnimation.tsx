"use client";

import { useRive } from "@rive-app/react-canvas";

interface RiveAnimationProps {
  src: string;
  className?: string;
  animations?: string | string[];
  autoplay?: boolean;
}

export function RiveAnimation({
  src,
  className = "",
  animations,
  autoplay = true,
}: RiveAnimationProps) {
  const { RiveComponent } = useRive({
    src,
    autoplay,
    stateMachines: animations ? (Array.isArray(animations) ? animations : [animations]) : undefined,
  });

  return <RiveComponent className={className} />;
}

