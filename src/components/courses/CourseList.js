import React, {} from 'react'
import Courses from './Courses';
import { Dummydata } from './Dummydata'
import { Provider, useSelector } from 'react-redux';
import './Courses.css'
const CourseList = () => {

  const cartData=useSelector(state=>state.cartReducer)

  return (
    <>
    <div className="container cs ">
      <div className="row pb-100">
        { 
        Dummydata.map((ele)=>{       
                return (<Courses
                    key={ele.id} 
                    id={ele.id}
                     title={ele.title}
                    description={ele.description}
                    price={ele.price}
                    img={ele.img}
                    cartData={cartData}
                />)
        })
        }
        </div>
        </div>
      
    </>
  )
}

export default CourseList
