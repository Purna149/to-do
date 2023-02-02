import './App.css';
import React from 'react';
import Heading  from './Heading'
import { Data } from './todo';

function TODO(){
 return(
  <div>
  <Heading/>
  <div className='body'><Data title="dis"/></div> 
  </div>
 )
}
export default TODO;