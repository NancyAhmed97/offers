import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useSelector } from "react-redux";

import "./SignupContainer.css"
function SignupContainer() {
    const { currentLocal } = useSelector((state) => state.currentLocal);
    const [alert, setAlert] = useState(false);
    const sendData = (e) => {
        e.preventDefault();
    console.log("hi");
      };
  return <div className='signup_container pl pr'>
<form onSubmit={sendData} >
<div className="errorMsg">
                    {alert && (
                      <Alert
                        className={
                          currentLocal.language === "العربيه" && "text-right"
                        }
                        variant={"danger"}
                      >
                        *{currentLocal.auth.alert}
                      </Alert>
                    )}
                  </div>
</form>
  </div>;
}

export default SignupContainer;
