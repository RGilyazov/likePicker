import { useState, useEffect, useRef } from "react";
import LikePickerStar from "./LikePickerStar";

interface numericMap {
  [key: number]: string;
}

type LikePickerProps = {
  max: number;
  value?: number;
  onChange?: (value: number) => void;
  starStyle?: React.CSSProperties;
  descriptionStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  valueDescription?: numericMap;
};
function LikePicker({
  max,
  value = 0,
  onChange,
  starStyle,
  descriptionStyle,
  style,
  valueDescription,
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
    <div>
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
      {valueDescription && Object.keys(valueDescription).length > 0 && (
        <span
          className="like-picker-description"
          style={{ color: "black", ...descriptionStyle }}
        >
          {valueDescription?.[value]}
        </span>
      )}
    </div>
  );
}

export default LikePicker;
