import React from 'react';

interface Props {
  left: string;
  middle: string;
  right: string;
  onClick?: React.MouseEventHandler;
}

const Buttons: React.FC<Props> = (props) => {
  return (
    <div className="btn-toolbar mb-3 ps-3" role="toolbar" aria-label="Toolbar with button groups">
      <div className="btn-group me-2" role="group" aria-label="First group">
        <button onClick={props.onClick} type="button" className="btn btn-outline-secondary mx-2">{props.left}</button>
        <button onClick={props.onClick} type="button" className="btn btn-outline-secondary mx-2">{props.middle}</button>
        <button onClick={props.onClick} type="button" className="btn btn-outline-secondary mx-2">{props.right}</button>
      </div>
    </div>
  );
};

export default Buttons;