// import React, { useState } from 'react';

// function UserForm() {
//   const [showUserForm, setShowUserForm] = useState(true);
//   const [showContentForm, setShowContentForm] = useState(false);
//   const [showContent2Form, setShowContent2Form] = useState(false);


//   const [userFormData, setUserFormData] = useState({
//     skinType: '',
//     skinColor: '',
//     hairColor: '',
//     eyeColor: ''
//   });
//   const [productItem, setProductItem] = useState({
//     product: '',
    
//   });
//   const [userRecommendations, setUserRecommendations] = useState([]);
//   const [contentRecommendation, setContentRecommendation] = useState([]);
//   //const [productItem, setProductItem] = useState('');
//   const [productAndRating, setProductAndRating] = useState('');

//   const handleUserButtonClick = () => {
//     setShowUserForm(false);
//     setShowContentForm(false);
//     setShowContent2Form(false);
//   };

//   const handleContentButtonClick = () => {
//     setShowUserForm(false);
//     setShowContentForm(false);
//     setShowContent2Form(false);
//   };

//   const handleContent2ButtonClick = () => {
//     setShowUserForm(false);
//     setShowContentForm(false);
//     setShowContent2Form(false);
//   };

//   const handleUserFormSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       console.log(userFormData)
//       const response = await fetch('http://127.0.0.1:5000/recommend', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(userFormData)
//       });
//       const data = await response.json();
//       console.log(data);
//       setUserRecommendations(data.user_recommendations);
//      // setContentRecommendation(data.content_recommendation);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };


//   const handleContentFormSubmit = async(event) => {
//     // event.preventDefault();
//     // try {
//     //   console.log(productItem)
//     //   const response = await fetch('http://127.0.0.1:5000/content_recommend', {
//     //     method: 'POST',
//     //     headers: {
//     //       'Content-Type': 'application/json'
//     //     },
//     //     body: JSON.stringify(productItem)
//     //   });
//     //   const data1 = await response.json();
//     //   console.log(data1);
//     //  // setUserRecommendations(data.user_recommendations);
//     //   setContentRecommendation(data1.content_recommendation);
//     // } catch (error) {
//     //   console.error('Error:', error);
//     // }
  
//   };

//   const handleContent2FormSubmit = (event) => {
//     // event.preventDefault();
//     // // Handle form submission logic
//     // console.log('Content2 form submitted:', productAndRating);
//   };
//   const handleChange = (event) => {
//     setUserFormData({
//       ...userFormData,
//       [event.target.name]: event.target.value,
//     });
//   };
//   const skinTypes = ['Oily', 'Dry', 'Combination', 'Sensitive']; // Array of options
//   const skinColors = ['Light', 'Dry', 'Combination', 'Sensitive']; // Array of options
//   const hairColors = ['Brunette', 'Dry', 'Combination', 'Sensitive']; // Array of options
//   const eyeColors = ['Green', 'Dry', 'Combination', 'Sensitive']; // Array of options
//   return (
//     <div>
//       {/* <button onClick={handleUserButtonClick}>User</button>
//       <button onClick={handleContentButtonClick}>Content</button>
//       <button onClick={handleContent2ButtonClick}>Content2</button> */}

// {showUserForm && (
//   <form onSubmit={handleUserFormSubmit}>
//     <h2>User Form</h2>
//     <label>
//     Skin Type:
//     <select value={userFormData.skinType} name="skinType" onChange={handleChange}>
//           {skinTypes.map((option) => (
//             <option key={option} value={option}>
//               {option}
//             </option>
//           ))}
//         </select>
//     </label>
//     <label>
//       Skin Color:
//       <select value={userFormData.skinColor} name="skinColor" onChange={handleChange}>
//           {skinColors.map((option) => (
//             <option key={option} value={option}>
//               {option}
//             </option>
//           ))}
//         </select>
//     </label>
//     <label>
//       Hair Color:
//       <select value={userFormData.hairColor} name="hairColor" onChange={handleChange}>
//           {hairColors.map((option) => (
//             <option key={option} value={option}>
//               {option}
//             </option>
//           ))}
//         </select>
//     </label>
//     <label>
//       Eye Color:
//       <select value={userFormData.eyeColor} name="eyeColor" onChange={handleChange}>
//           {eyeColors.map((option) => (
//             <option key={option} value={option}>
//               {option}
//             </option>
//           ))}
//         </select>
//     </label>
//     <button type="submit">Submit</button>
//   </form>
// )}
//           {/* Display recommendations */}
//           {userRecommendations.length > 0 && (
//         <div>
//           <h2>User Recommendations</h2>
//           <ul>
//             {userRecommendations.map((item, index) => (
//               <li key={index}>

//               {item.Product} <br/> {item.Product_Url}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}


//       {showContentForm && (
//         <form onSubmit={handleContentFormSubmit}>
//           <h2>Content Form</h2>
//           <label>
//             Enter the Product Item:
//             <input
//               type="text"
//               value={productItem.product}
//               onChange={(e) => setProductItem({...productItem, product: e.target.value})}
//             />
//           </label>
//           <button type="submit">Submit</button>
//         </form>
//       )}
//        {contentRecommendation.length > 0 && (
//     <div>
//       <h2>Content Recommendation</h2>
//       <ul>
//         {contentRecommendation.map((item, index) => (
//           <li key={index}>{item.Product}</li>
//         ))}
//       </ul>
//     </div>
//   )}
//       {showContent2Form && (
//         <form onSubmit={handleContent2FormSubmit}>
//           <h2>Content2 Form</h2>
//           <label>
//             Product and Rating:
//             <input
//               type="text"
//               value={productAndRating}
//               onChange={(e) => setProductAndRating(e.target.value)}
//             />
//           </label>
//           <button type="submit">Submit</button>
//         </form>
//       )}
//     </div>
//   );
// }

// export default UserForm;



import React, { useState } from 'react';
import Header from '../components/Header'; {/*../components/Header.jsx */}

function UserForm() {
  const [showUserForm, setShowUserForm] = useState(true); // Show user form by default
  const [userFormData, setUserFormData] = useState({
    skinType: '',
    skinColor: '',
    hairColor: '',
    eyeColor: ''
  });
  const [userRecommendations, setUserRecommendations] = useState([]);

  const handleUserButtonClick = () => {
    setShowUserForm(true);
  };

  const handleUserFormSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(userFormData)
      const response = await fetch('http://127.0.0.1:5000/recommend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userFormData)
      });
      const data = await response.json();
      console.log(data);
      setUserRecommendations(data.user_recommendations);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Function to truncate ingredients string to the first 10 ingredients
function truncateIngredients(ingredients) {
  const ingredientsArray = ingredients.split(',').slice(0, 10); // Split ingredients string into array and select first 10
  return ingredientsArray.join(', '); // Join the first 10 ingredients back into a string
}; 

  return (
    <div>
      <Header page="User Model" title="User Model"/>
      {showUserForm && (
        <form onSubmit={handleUserFormSubmit}>
          <h2>User Form</h2>
          <label>
            Skin Type:
            <input
              type="text"
              value={userFormData.skinType}
              onChange={(e) => setUserFormData({ ...userFormData, skinType: e.target.value })}
            />
          </label>
          <label>
            Skin Color:
            <input
              type="text"
              value={userFormData.skinColor}
              onChange={(e) => setUserFormData({ ...userFormData, skinColor: e.target.value })}
            />
          </label>
          <label>
            Hair Color:
            <input
              type="text"
              value={userFormData.hairColor}
              onChange={(e) => setUserFormData({ ...userFormData, hairColor: e.target.value })}
            />
          </label>
          <label>
            Eye Color:
            <input
              type="text"
              value={userFormData.eyeColor}
              onChange={(e) => setUserFormData({ ...userFormData, eyeColor: e.target.value })}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
      
      {/* Display recommendations */}
      {/* {userRecommendations.length > 0 && (
        <div>
          <h2>User Recommendations</h2>
          <ul>
            {userRecommendations.map((item, index) => (
              <li key={index}>
                {item.Product} <br/> {item.Product_Url} <br/> {item.Price} <br/> {item.Ing_Tfidf}
              </li>
            ))}
          </ul>
        </div>
      )} */}

{userRecommendations.length > 0 && (
  <div>
    <h2 className="recommendations-heading">User Recommendations</h2>
    <div className="recommendations-container">
      {userRecommendations.map((item, index) => (
        <div key={index} className="recommendation-item">
          <h3 className="product-name">{item.Product}</h3>
          <p className="ingredients"><h5>Top Ingredients:</h5> {truncateIngredients(item.Ing_Tfidf)}</p>
          <p className="ingredients"><b>Rating:</b> {item.Rating_Stars}</p>
          <p className="price">Price: {item.Price}</p>
          <a href={item.Product_Url} target="_blank" rel="noopener noreferrer" className="product-link">Purchase Here</a>
        </div>
      ))}
    </div>
  </div>
)}


    </div>

    
  );
}

export default UserForm;



// import React, { useState } from 'react';
// import Header from '../components/Header'; {/*../components/Header.jsx */}

// function UserForm() {
//   const [showUserForm, setShowUserForm] = useState(true); // Show user form by default
//   const [userFormData, setUserFormData] = useState({
//     skinType: '',
//     skinColor: '',
//     hairColor: '',
//     eyeColor: ''
//   });
//   const [userRecommendations, setUserRecommendations] = useState([]);

//   const handleUserButtonClick = () => {
//     setShowUserForm(true);
//   };

//   const handleUserFormSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       console.log(userFormData)
//       const response = await fetch('http://127.0.0.1:5000/recommend', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(userFormData)
//       });
//       const data = await response.json();
//       console.log(data);
//       setUserRecommendations(data.user_recommendations);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   // Function to truncate ingredients string to the first 10 ingredients
//   function truncateIngredients(ingredients) {
//     const ingredientsArray = ingredients.split(',').slice(0, 10); // Split ingredients string into array and select first 10
//     return ingredientsArray.join(', '); // Join the first 10 ingredients back into a string
//   }; 

//   return (
//     <div>
//       <Header page="User Model" title="User Model"/>
//       {showUserForm && (
//         <div className="overlay-login text-left">
//           <div className="wrap">
//             <h5 className="text-center mb-4">User Form</h5>
//             <div className="login-bghny p-md-5 p-4 mx-auto mw-100">
//               <form onSubmit={handleUserFormSubmit}>
//                 <div className="form-group">
//                   <label htmlFor="skinType">Skin Type</label>
//                   <input
//                     type="text"
//                     id="skinType"
//                     name="skinType"
//                     className="form-control"
//                     value={userFormData.skinType}
//                     onChange={(e) => setUserFormData({ ...userFormData, skinType: e.target.value })}
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="skinColor">Skin Color</label>
//                   <input
//                     type="text"
//                     id="skinColor"
//                     name="skinColor"
//                     className="form-control"
//                     value={userFormData.skinColor}
//                     onChange={(e) => setUserFormData({ ...userFormData, skinColor: e.target.value })}
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="hairColor">Hair Color</label>
//                   <input
//                     type="text"
//                     id="hairColor"
//                     name="hairColor"
//                     className="form-control"
//                     value={userFormData.hairColor}
//                     onChange={(e) => setUserFormData({ ...userFormData, hairColor: e.target.value })}
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="eyeColor">Eye Color</label>
//                   <input
//                     type="text"
//                     id="eyeColor"
//                     name="eyeColor"
//                     className="form-control"
//                     value={userFormData.eyeColor}
//                     onChange={(e) => setUserFormData({ ...userFormData, eyeColor: e.target.value })}
//                     required
//                   />
//                 </div>
//                 <button type="submit" className="btn btn-secondary mt-4">Submit</button>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}
      
//       {/* Display recommendations */}
//       {userRecommendations.length > 0 && (
//         <div>
//           <h2 className="recommendations-heading">User Recommendations</h2>
//           <div className="recommendations-container">
//             {userRecommendations.map((item, index) => (
//               <div key={index} className="recommendation-item">
//                 <h3 className="product-name">{item.Product}</h3>
//                 <p className="ingredients"><h5>Top Ingredients:</h5> {truncateIngredients(item.Ing_Tfidf)}</p>
//                 <p className="ingredients"><b>Rating:</b> {item.Rating_Stars}</p>
//                 <p className="price">Price: {item.Price}</p>
//                 <a href={item.Product_Url} target="_blank" rel="noopener noreferrer" className="product-link">Purchase Here</a>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default UserForm