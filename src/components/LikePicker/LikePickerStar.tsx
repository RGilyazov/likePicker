import { useEffect, useRef } from "react";
import "./LikePicker.css";
type LikePickerStarProps = {
  id: number;
  selected: boolean;
  selecting: boolean;
  onHover?: (id: number) => void;
  onClick?: (id: number) => void;
  style?: React.CSSProperties;
};
function LikePickerStar({
  id,
  selected,
  selecting,
  onHover,
  onClick,
  style,
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
      style={{ color: selecting ? "blue" : "yellow", ...style }}
      ref={ref}
      className="like-picker-star"
    >
      {selected ? "★" : "☆"}
    </span>
  );
}

export default LikePickerStar;
