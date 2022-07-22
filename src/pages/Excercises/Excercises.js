import React from 'react'
import { Img } from './Img.js';
import './Excercises.css';

const rows = [];
for (let i = 1; i <= 300; i++) {
  let remainder = i % 4;
  if (remainder === 0) remainder = 4;
  rows.push(<Img loc={require('../../images/Img' + remainder.toString() + '.png')} />);
}
console.log(rows);

function Excercises(){
  return (
    <>
    <h2 className="my-28 ">Exercises</h2>
  
    {rows}
    </>
  );
};

export default Excercises