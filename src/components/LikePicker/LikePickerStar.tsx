import { useEffect, useRef } from "react";
import "./LikePicker.css";
type LikePickerStarProps = {
  id: number;
  selected: boolean;
  selecting: boolean;
  onHover?: (id: number) => void;
  onClick?: (id: number) => void;
};
function LikePickerStar({
  id,
  selected,
  selecting,
  onHover,
  onClick,
}: LikePickerStarProps) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const onHoverHandler = (evt: Event) => {
      if (onHover) onHover(id);
    };
    const onClickHandler = (evt: Event) => {
      if (onClick) onClick(id);
    };
    if (ref && ref.current) {
      ref.current.addEventListener("mouseover", onHoverHandler);
      ref.current.addEventListener("click", onClickHandler);
    }
  }, [ref, id, onHover, onClick]);
  return (
    <span
      style={selecting ? { color: "blue" } : { color: "yellow" }}
      ref={ref}
      className="like-picker-star"
    >
      {selected ? "★" : "☆"}
      <span className="like-picker-star-a1"></span>
      <span className="like-picker-star-a2"></span>
    </span>
  );
}

export default LikePickerStar;
