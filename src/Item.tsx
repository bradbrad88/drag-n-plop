import Draggable from "./Draggable";
import Handle from "./Handle";
import useDrag from "./useDrag";

const Item = () => {
  const { draggableProps, handleProps } = useDrag();
  return (
    <Draggable {...draggableProps}>
      <div className="border-[1px] border-zinc-300 rounded-md shadow-md shadow-black bg-zinc-800 w-fit flex items-center gap-3 p-2">
        Product 1
        <Handle {...handleProps}>
          <div className="p-1 border-[1px] border-zinc-300">:</div>
        </Handle>
      </div>
    </Draggable>
  );
};

export default Item;
