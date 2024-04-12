// import React from 'react'
// import Header from '../components/Header'; {/*../components/Header.jsx */}
// import { useNavigate, NavLink } from "react-router-dom";
// import axios from 'axios'; 
// function Signup() {
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({
//           ...prevData,
//           [name]: value
//         }));
//       };
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//           const response = await axios.post('http://localhost:5000/loginpage', formData);
//           navigate("/", { replace: true });
//           console.log(response.data); // Handle response from the backend
    
//           //if(response.data=)
//           // You can also redirect the user or show a success message here
//         } catch (error) {
//           console.error('Error:', error);
//           // Handle error, show error message to the user, etc.
//         }
//       };
      
//   return (

//     <div>
//         <Header page="Login
//         " title ="Login
//         " />
//         <div class="overlay-Login
//          text-left">
// 						<button type="button" class="overlay-close1">
// 							<i class="fa fa-times" aria-hidden="true"></i>
// 						</button>
// 						<div class="wrap">
// 							<h5 class="text-center mb-4">Login
//                              Now</h5>
// 							<div class="Login
//                             -bghny p-md-5 p-4 mx-auto mw-100">
// 								{/* <!--/Login
//                                 -form--> */}
// 								<form action="#" method="post" onSubmit={handleSubmit} >
// 									<div class="form-group">
// 										<p class="Login
//                                         -texthny mb-2">Email address</p>
// 										<input type="email" class="form-control" id="exampleInputEmail1"
// 											aria-describedby="emailHelp" placeholder="" required=""/>
// 										<small id="emailHelp" class="form-text text-muted">We'll never share your email
// 											with anyone else.</small>
// 									</div>
// 									<div class="form-group">
// 										<p class="Login
//                                         -texthny mb-2">Password</p>
// 										<input type="password" class="form-control" id="exampleInputPassword1"
// 											placeholder="" required=""/>
// 									</div>
// 									<div class="form-check mb-2">
// 										<div class="userhny-check">
// 											<label class="check-remember container">
// 												<input type="checkbox" class="form-check"/> <span
// 													class="checkmark"></span>
// 												<p class="privacy-policy">Remember me</p>
// 											</label>
// 											<div class="clearfix"></div>
// 										</div>
// 									</div>
// 									<button type="submit" class="submit-Login
//                                      btn mb-4">Sign In</button>

// 								</form>
// 								{/* <!--//Login
//                                 -form--> */}
// 							</div>
							
// 						</div>
// 					</div>
//     </div>
    
//   )
// }

// export default Signup










import React, { useState } from 'react';
import { useNavigate, NavLink } from "react-router-dom";
import axios from 'axios'; // Import axios for making HTTP requests
import Header from '../components/Header';

function Signup({ form, messages }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
   
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/loginpage', formData);
      navigate("/", { replace: true });
      console.log(response.data); // Handle response from the backend

      //if(response.data=)
      // You can also redirect the user or show a success message here
    } catch (error) {
      console.error('Error:', error);
      // Handle error, show error message to the user, etc.
    }
  };

  return (
    <div className="overlay-login text-left">
      <div className="wrap">
        {messages && (
          <div className="alert alert-danger">
            <ul>
              {messages.map((message, index) => (
                <li key={index}>{message}</li>
              ))}
            </ul>
          </div>
        )}
        <Header page="Login Now" title="Login Now" />
        {/* <h5 className="text-center mb-4">Login Now</h5> */}
        <div className="login-bghny p-md-5 p-4 mx-auto mw-100">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              {/* <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
              /> */}
              {/* Error handling for name field */}
              {form && form.name && form.name.errors && (
                <ul>
                  {form.name.errors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              )}
            </div>
            <br />

            {/* Similar input fields for email and password */}
            
            <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {/* Error handling for email field */}
            {form && form.email && form.email.errors && (
              <ul>
                {form.email.errors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            )}
          </div>

          <br/>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {/* Error handling for password field */}
            {form && form.password && form.password.errors && (
              <ul>
                {form.password.errors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            )}
          </div>


            <button type="submit" className="btn btn-secondary mt-4 ">Login</button>
            {/* <a href="/loginpage" className="btn btn-secondary mt-4">Login</a> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
