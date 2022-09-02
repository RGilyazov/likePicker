import { useState, useEffect, useRef } from "react";
import LikePickerStar from "./LikePickerStar";
type LikePickerProps = {
  max: number;
  value?: number;
  onChange?: (value: number) => void;
  starStyle?: React.CSSProperties;
  style?: React.CSSProperties;
};
function LikePicker({
  max,
  value = 0,
  onChange,
  starStyle,
  style,
}: LikePickerProps) {
  const [state, setState] = useState({ selecting: 0 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onOverHandler = (evt: Event) => {
      console.log("!");
      setState((oldState) => ({ ...oldState, selecting: 0 }));
    };
    if (ref && ref.current)
      ref.current.addEventListener("mouseout", onOverHandler);
  }, [ref]);

  function handleHover(id: number): void {
    setState((oldState) => ({ ...oldState, selecting: id }));
  }
  function handleClick(id: number): void {
    if (onChange) onChange(id);
  }

  return (
    <div ref={ref} className="like-picker" style={{ ...style }}>
      {[...Array(max)].map((_, index) => {
        return (
          <LikePickerStar
            key={index}
            id={index + 1}
            selected={value > index}
            selecting={state.selecting > index}
            onHover={handleHover}
            onClick={handleClick}
            style={starStyle}
          />
        );
      })}
    </div>
  );
}

export default LikePicker;
