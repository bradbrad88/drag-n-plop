import { useRef, useState } from "react";

const useDrag = () => {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const draggedRect = useRef<DOMRect | null>(null);
  const updateBoundingRect = (rect: DOMRect) => {
    draggedRect.current = rect;
  };
  const draggableProps = { x: position?.x || 0, y: position?.y || 0, updateBoundingRect };
  const positionRelativeToStart = (position: { x: number; y: number } | null) => {
    setPosition(position);
  };
  const handleProps = { positionRelativeToStart };
  return { draggableProps, handleProps };
};

export default useDrag;
