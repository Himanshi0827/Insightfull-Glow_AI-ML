import React, { useState } from 'react';
import Header from '../components/Header'; {/*../components/Header.jsx */}

function ContentFrom() {
  const [showContentForm, setShowContentForm] = useState(true); // Show content form by default
  const [productItem, setProductItem] = useState({
    product: '',
  });
  const [contentRecommendation, setContentRecommendation] = useState([]);

  const handleContentFormSubmit = async(event) => {
    event.preventDefault();
    try {
      console.log(productItem)
      const response = await fetch('http://127.0.0.1:5000/content_recommend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(productItem)
      });
      const data1 = await response.json();
      console.log(data1);
      setContentRecommendation(data1.content_recommendation);
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
        <Header page="Content Model" title="Content Model"/>
      {showContentForm && (
        <form onSubmit={handleContentFormSubmit}>
          <h2>Content Form</h2>
          <label>
            Enter the Product Item:
            <input
              type="text"
              value={productItem.product}
              onChange={(e) => setProductItem({...productItem, product: e.target.value})}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
      
      {/* Display recommendations */}
      {contentRecommendation.length > 0 && (
  <div>
    <h2 className="recommendations-heading">Content Recommendation</h2>
    <div className="recommendations-container">
      {contentRecommendation.map((item, index) => (
        <div key={index} className="recommendation-item">
          <h3 className="product-name">{item.Product}</h3>
          <p className='ingredients'><h5>Top Ingredients:</h5> {truncateIngredients(item.Ing_Tfidf)}</p>
          <p class='ingredients'><b>Rating:</b> {item.Rating}</p>
          <p className='price'>Price: {item.Price}</p>
          <a href={item.Product_Url} target="_blank" rel="noopener noreferrer" className="product-link">Purchase Here</a>
          <br/>
        </div>
      ))}
    </div>
  </div>
)}

    </div>
  );
}

export default ContentFrom;
