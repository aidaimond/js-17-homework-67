import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {eight, five, three, two} from "./doorCodeSlice";

const DoorCode = () => {
  const codeValue = useSelector((state: RootState) => state.code.value);

  const dispatch = useDispatch();

  return (
    <div className="m-4 bg-white rounded p-4">
      <div className="btn-toolbar mb-2 border w-100 p-4" role="toolbar" aria-label="Toolbar with button groups">
        {codeValue}
      </div>
      <div className="btn-toolbar mb-3 ps-3" role="toolbar" aria-label="Toolbar with button groups">
        <div className="btn-group me-2" role="group" aria-label="First group">
          <button type="button" className="btn btn-outline-secondary mx-2">{1}</button>
          <button onClick={() => dispatch(two())} type="button" className="btn btn-outline-secondary mx-2">{2}</button>
          <button onClick={() => dispatch(three())} type="button" className="btn btn-outline-secondary mx-2">{3}</button>
        </div>
      </div>
      <div className="btn-toolbar mb-3 ps-3" role="toolbar" aria-label="Toolbar with button groups">
        <div className="btn-group me-2" role="group" aria-label="First group">
          <button type="button" className="btn btn-outline-secondary mx-2">{4}</button>
          <button onClick={() => dispatch(five())} type="button" className="btn btn-outline-secondary mx-2">{5}</button>
          <button type="button" className="btn btn-outline-secondary mx-2">{6}</button>
        </div>
      </div>
      <div className="btn-toolbar mb-3 ps-3" role="toolbar" aria-label="Toolbar with button groups">
        <div className="btn-group me-2" role="group" aria-label="First group">
          <button type="button" className="btn btn-outline-secondary mx-2">{7}</button>
          <button onClick={() => dispatch(eight())} type="button" className="btn btn-outline-secondary mx-2">{8}</button>
          <button type="button" className="btn btn-outline-secondary mx-2">{9}</button>
        </div>
      </div><div className="btn-toolbar mb-3 ps-3" role="toolbar" aria-label="Toolbar with button groups">
      <div className="btn-group me-2" role="group" aria-label="First group">
        <button type="button" className="btn btn-outline-secondary mx-2">{'<'}</button>
        <button type="button" className="btn btn-outline-secondary mx-2">{0}</button>
        <button type="button" className="btn btn-outline-secondary mx-2">E</button>
      </div>
    </div>
      {/*<Buttons left={'1'} middle={'2'} right={'3'}/>*/}
      {/*<Buttons left={'4'} middle={'5'} right={'6'}/>*/}
      {/*<Buttons left={'7'} middle={'8'} right={'9'}/>*/}
      {/*<Buttons left={'<'} middle={'0'} right={'E'}/>*/}

    </div>
  );
};

export default DoorCode;