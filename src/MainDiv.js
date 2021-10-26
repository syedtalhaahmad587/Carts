import React ,{useState} from 'react'
import Mobile from './Mobile';
import Car from './Car';
import Bike from './Bike';
import House from './House';
import CarCart from './CarCart';

const MainDiv = () => {
  // 
  const [Save , setSave] = useState("")
    
  const changeInput = (e) => {
     setSave(e.target.value)

    }
   
       
     return (
       <>
         <div>
         <div className="SetInput">
           <select name="" id="" onChange={changeInput} >
           <option value="1" >Select</option>
             <option value="2" >Mobile</option>
             <option value="3">Car</option>
             <option value="4">bike </option>
             <option value="5">house </option>
           </select>
           </div> 
         {Save === "2"  ? <Mobile/> : Save === "3" ? <Car/> : Save === "4" ? <Bike/> : Save === "5" ? <House/> : "" } 
         <CarCart/>
         </div>    
       </>
     );
}
export default MainDiv;