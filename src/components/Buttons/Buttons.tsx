import React from 'react';

interface Props {
  value: string;
  onInputCode: React.MouseEventHandler;
}

const Buttons: React.FC<Props> = (props) => {
  return (
    <button onClick={props.onInputCode} type="button" className="btn btn-outline-secondary m-2 col-3">
      {props.value}
    </button>
  );
};

export default Buttons;