import React from 'react'
import { Fragment, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Login = () => {

    const [error, setError] = useState(false);
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const dispatch = useDispatch();
    const history = useHistory();

    const onSubmitHandler = async(e)=>{
        e.preventDefault();
        if (emailRef.current.value === '' || passwordRef.current.value === '') {
            setError(true);
            return;
        }
        const user = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        try{
            const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBNjecweWClb674rPRI_bvncRSGkEDo1Uw';
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({ ...user, returnSecureToken: true }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            let transformedResponse = await response.json();
            if (response.ok) {
                dispatch(authActions.login({ token: transformedResponse.idToken, uuID: transformedResponse.localId }));
                history.replace('/store');
            } else {
                let errorMessage = 'Authentication Failed!';
                if (transformedResponse.error.message) {
                    errorMessage = transformedResponse.error.message;
                }
                throw new Error(errorMessage);
            }
        }
        catch(err){
            alert(err.massage)
        }

    }



  return (
    <Fragment>
        {error && <h1 className="err">Enter some valid data.</h1>}
      <form>
      <div className="row">
            <div className="col-sm-6">
                <div className="login">
                    <h1 className="h1">Login</h1>
                    <div className="loginI">
                        
                            <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa-solid fa-user"></i>.</span>
                              </div>
                              <input type="text" className="form-control" placeholder="Enter email" required ref={emailRef}/>
                            </div>

                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                  <span className="input-group-text"><i className="fa-solid fa-lock"></i>.</span>
                                </div>
                                <input type="text" className="form-control" placeholder="Enter password" required ref={passwordRef}/>
                            </div>
                            <div className="btnLdiv">
                                <button type="submit" className="btn btn-login" variant="warning" onClick={onSubmitHandler}>Login</button>
                            </div>
                        
                    </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="signup">
                    <h1 className="h1">Sign Up</h1>
                    <div className="loginI">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                              <span className="input-group-text"><i className="fa-solid fa-user"></i>.</span>
                            </div>
                            <input type="text" className="form-control" placeholder="Enter email"/>
                          </div>

                          <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa-solid fa-lock"></i>.</span>
                              </div>
                              <input type="text" className="form-control" placeholder="Enter password"/>
                          </div>
                          <div className="input-group mb-3">
                            <div className="input-group-prepend">
                              <span className="input-group-text"><i className="fa-solid fa-lock"></i>.</span>
                            </div>
                            <input type="text" className="form-control" placeholder="Enter confirm password"/>
                        </div>
                          <div className="btnLdiv">
                              <button type="submit" className="btn btn-login">Sign Up</button>
                          </div>

                    </div>
                </div>
            </div>            
        </div>
      </form>
    </Fragment  >
  )
}

export default Login
