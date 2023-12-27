import { PointerEventHandler, useCallback, useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  positionRelativeToStart: (position: { x: number; y: number } | null) => void;
};

const Handle = ({ children, positionRelativeToStart }: Props) => {
  const initialPosition = useRef<{ x: number; y: number } | null>(null);

  const onPointerMove = useCallback(
    (e: PointerEvent) => {
      if (!e.isPrimary) return;
      if (initialPosition.current === null) return;
      const { x, y } = initialPosition.current;
      const { clientX, clientY } = e;
      positionRelativeToStart({ x: clientX - x, y: clientY - y });
    },
    [positionRelativeToStart]
  );

  const onPointerUp = useCallback(
    (e: PointerEvent) => {
      if (!e.isPrimary) return;
      initialPosition.current = null;
      positionRelativeToStart(null);
    },
    [positionRelativeToStart]
  );

  useEffect(() => {
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [onPointerMove, onPointerUp]);

  const onPointerDown: PointerEventHandler = e => {
    const { clientX: x, clientY: y } = e;
    initialPosition.current = { x, y };
  };

  const onPointerCancel = () => {
    initialPosition.current = null;
    positionRelativeToStart(null);
  };

  return (
    <div onPointerDown={onPointerDown} onPointerCancel={onPointerCancel}>
      {children}
    </div>
  );
};

export default Handle;
