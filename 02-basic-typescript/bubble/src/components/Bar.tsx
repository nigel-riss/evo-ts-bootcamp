import React from 'react';
import './Bar.css';


type BarProps = {
  value: number,
  maxValue: number,
};


export const Bar = ({
  value,
  maxValue,
}: BarProps): React.ReactElement => {
  return(<div
    className="bar"
    style={{
      height: `${value / maxValue * 100}%`
    }}
  >
    {/* {value} */}
  </div>);
};
