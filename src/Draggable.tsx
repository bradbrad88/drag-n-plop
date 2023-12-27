import { useLayoutEffect, useRef } from "react";

type Props = {
  x: number;
  y: number;
  updateBoundingRect: (rect: DOMRect) => void;
  children: React.ReactNode;
};

const Draggable = ({ x, y, updateBoundingRect, children }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const transition = x === 0 && y === 0 ? "translate 200ms ease-in" : "";
  useLayoutEffect(() => {
    if (!ref.current) return;
  }, [updateBoundingRect, ref]);

  return (
    <div ref={ref} style={{ translate: `${x}px ${y}px`, transition, touchAction: "none" }}>
      {children}
    </div>
  );
};

export default Draggable;
