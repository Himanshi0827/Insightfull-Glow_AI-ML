
import React, { useState } from 'react';

function Recommdations() {
  const [showUserForm, setShowUserForm] = useState(false);
  const [showContentForm, setShowContentForm] = useState(false);
  const [showContent2Form, setShowContent2Form] = useState(false);
  const [userFormData, setUserFormData] = useState({
    skinType: '',
    skinColor: '',
    hairColor: '',
    eyeColor: ''
  });
  const [productItem, setProductItem] = useState({
    product: ''
  });
  const [userRecommendations, setUserRecommendations] = useState([]);
  const [contentRecommendation, setContentRecommendation] = useState([]);
  const [productAndRating, setProductAndRating] = useState('');

  const handleUserButtonClick = () => {
    setShowUserForm(true);
    setShowContentForm(false);
    setShowContent2Form(false);
  };

  const handleContentButtonClick = () => {
    setShowUserForm(false);
    setShowContentForm(true);
    setShowContent2Form(false);
  };

  const handleContent2ButtonClick = () => {
    setShowUserForm(false);
    setShowContentForm(false);
    setShowContent2Form(true);
  };

  const handleUserFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5000/recommend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userFormData)
      });
      const data = await response.json();
      setUserRecommendations(data.user_recommendations);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleContentFormSubmit = async(event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5000/content_recommend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(productItem)
      });
      const data1 = await response.json();
      setContentRecommendation(data1.content_recommendation);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleContent2FormSubmit = (event) => {
    event.preventDefault();
    console.log('Content2 form submitted:', productAndRating);
  };

  return (
<div>
<section class="w3l-grids-hny-2">
	{/* <!-- /content-6-section --> */}
	<div class="grids-hny-2-mian py-5">
		<div class="container py-lg-5">
				
			<h3 class="hny-title mb-0 text-center">Choose the model for <span>Recommendations</span></h3>
			<p class="mb-4 text-center">Handpicked Favourites just for you</p>
			<div class="welcome-grids row mt-5">
				<div class="col-lg-2 col-md-4 col-6 welcome-image">
						<div class="boxhny13">
								<a onClick={handleUserButtonClick}>
										<img src="assets/images/grid1.jpg" class="img-fluid" alt="" />
								{/* <div class="boxhny-content">
									<h3 class="title">Product</h3>
								</div> */}
							</a>
						</div>
						<h4><a onClick={handleUserButtonClick}>User Form</a></h4>

				</div>
				
				<div class="col-lg-2 col-md-4 col-6 welcome-image">
					<div className="boxhny131">
						<div class="boxhny13">
								<a onClick={handleContentButtonClick}>
									{/* <div class="firstdiv"> */}
										<img onClick={handleContentButtonClick} src="assets/images/grid3.jpg" class="img-fluid" alt="" />
									{/* </div> */}
								{/* <div class="boxhny-content">
									<h3 class="title">Cleanser</h3>
								</div> */}
							</a>
						</div>
						<h4><a onClick={handleContentButtonClick}>
								Content</a></h4>
                </div>
					
				</div>
				<div class="col-lg-2 col-md-4 col-6 welcome-image">
						<div class="boxhny13">
								<a onClick={handleContent2ButtonClick}>
										<img src="assets/images/grid2.jpg" class="img-fluid" alt="" />
								<div class="boxhny-content">
									<h3 class="title">Product</h3>
								</div>
							</a>
						</div>
						<h4><a onClick={handleContent2ButtonClick}>Shoes</a></h4>

				
				</div>			
				
			</div>

		</div>
	</div>
</section>

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
      {userRecommendations.length > 0 && (
        <div>
          <h2>User Recommendations</h2>
          <ul>
            {userRecommendations.map((item, index) => (
              <li key={index}>
                {item.Product} <br/> {item.Product_Url}
              </li>
            ))}
          </ul>
        </div>
      )}

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
      {contentRecommendation.length > 0 && (
        <div>
          <h2>Content Recommendation</h2>
          <ul>
            {contentRecommendation.map((item, index) => (
              <li key={index}>{item.Product}</li>
            ))}
          </ul>
        </div>
      )}

      {showContent2Form && (
        <form onSubmit={handleContent2FormSubmit}>
          <h2>Content2 Form</h2>
          <label>
            Product and Rating:
            <input
              type="text"
              value={productAndRating}
              onChange={(e) => setProductAndRating(e.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default Recommdations;
