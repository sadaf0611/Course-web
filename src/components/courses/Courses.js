import React from "react";
import "./Courses.css";
import { useDispatch } from "react-redux";
const Courses = ({id,title,description,img,price,cartData}) => {

    
    const isselected= cartData.filter(i=>i.id == id).length > 0;
    console.log(title,"an");
    const dispatch=useDispatch();
  return (
   
        <div className="col-sm-3">
          <div className="card cardd">
            <div className="card-header">
              <img  src={img} alt=""  height="200" width="200" className="imgg" />
            </div>
            <div className="card-body">
            <div className="divmrp"><h3>{title}</h3></div>
              <div className="desc"><p>{description}</p></div>
              <div className="divmrp">
              <p className="mrp">₹{price}</p>
              </div>
              
            </div>
            <div className="card-footer p-10">
              {!isselected ? <button className="btn btnn" onClick={()=>dispatch({type:"ADD",payload:{id:id,title:title,description:description,img:img,price:price}})}>Add to Cart</button>:
              <button className="btn btnn" onClick={()=>dispatch({type:"Remove",payload:id})}>Remove from Cart</button>  }
            </div>
          </div>{/* card */}
          </div>
    //     </div>{/* row*/}
    //   </div>
  );
};

export default Courses;
