import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {addNumber, checkPassword, removeNumber} from "./doorCodeSlice";
import {BUTTONS} from "../../constants";
import Buttons from "../../components/Buttons/Buttons";

const DoorCode = () => {
  const codeStars = useSelector((state: RootState) => state.code.stars);
  const codeColor = useSelector((state: RootState) => state.code.color);

  const dispatch = useDispatch();

  return (
    <div className="m-4 bg-white rounded p-4 w-25">
      <div style={{height: 80}} className={"d-flex fs-5 justify-content-center my-2 border " + codeColor}>
        {codeStars}
      </div>
      <div className="d-flex row justify-content-center">
        {BUTTONS.map((btn) => (
          <Buttons key={Math.random()} value={btn.valueBtn} onInputCode={() => dispatch(addNumber(btn.valueBtn))}/>))}
        <Buttons key={Math.random()} value={'<'} onInputCode={() => dispatch(removeNumber())}/>
        <Buttons key={Math.random()} value={'0'} onInputCode={() => dispatch(addNumber('0'))}/>
        <Buttons key={Math.random()} value={'E'} onInputCode={() => dispatch(checkPassword())}/>
      </div>
    </div>
  );
};

export default DoorCode;