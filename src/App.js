import React, { useState } from 'react';
import Header from './components/Header/Header';
import Courses from './components/courses/Courses'
import Footer from './components/Footer/Footer';
import CoursesList from './components/courses/CourseList'
import { Provider, useSelector } from 'react-redux';
import store from './REDUX/Store/Index';
import Cart from './components/Cart/Cart';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  
  const cartData=useSelector(state=>state)
  // console.log(cartData)
  return (
    <>
    
    {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <CoursesList/>
      <Footer/>
    </>
  );
}

export default ()=>{
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  )
};
