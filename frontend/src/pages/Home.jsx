import React from 'react'

function Home() {
  return (
    <div>
     
      <section class="w3l-banner-slider-main">
	<div class="top-header-content">
		<header class="tophny-header">
			<div class="container-fluid">
				<div class="top-right-strip row">
					{/* <!--/left--> */}
					<div class="top-hny-left-content col-lg-6 pl-lg-0">
						{/* <h6>Upto 30% off on All Skin care products , <a href="#" target="_blank"> Click here for <span
									class="fa fa-hand-o-right hand-icon" aria-hidden="true"></span> <span
									class="hignlaite">More details</span></a></h6> */}
					</div>
					{/* <!--//left-->
					<!--/right--> */}
					<ul class="top-hnt-right-content col-lg-6">

						<li class="button-log usernhy">
							<a class="btn-open" href="/contact">
								<span class="fa fa-user" aria-hidden="true"></span>
							</a>
						</li>
						{/* <li class="transmitvcart galssescart2 cart cart box_1">
							<form action="#" method="post" class="last">
								<input type="hidden" name="cmd" value="_cart"/>
								<input type="hidden" name="display" value="1"/>
								<button class="top_transmitv_cart" type="submit" name="submit" value="">
									My Cart
									<span class="fa fa-shopping-cart"></span>
								</button>
							</form>
						</li> */}
					</ul>
					{/* <!--//right--> */}
					<div class="overlay-login text-left">
						<button type="button" class="overlay-close1">
							<i class="fa fa-times" aria-hidden="true"></i>
						</button>
						<div class="wrap">
							<h5 class="text-center mb-4">Login Now</h5>
							<div class="login-bghny p-md-5 p-4 mx-auto mw-100">
								{/* <!--/login-form--> */}
								<form action="#" method="post">
									<div class="form-group">
										<p class="login-texthny mb-2">Email address</p>
										<input type="email" class="form-control" id="exampleInputEmail1"
											aria-describedby="emailHelp" placeholder="" required=""/>
										<small id="emailHelp" class="form-text text-muted">We'll never share your email
											with anyone else.</small>
									</div>
									<div class="form-group">
										<p class="login-texthny mb-2">Password</p>
										<input type="password" class="form-control" id="exampleInputPassword1"
											placeholder="" required=""/>
									</div>
									<div class="form-check mb-2">
										<div class="userhny-check">
											<label class="check-remember container">
												<input type="checkbox" class="form-check"/> <span
													class="checkmark"></span>
												<p class="privacy-policy">Remember me</p>
											</label>
											<div class="clearfix"></div>
										</div>
									</div>
									<button type="submit" class="submit-login btn mb-4">Sign In</button>

								</form>
								{/* <!--//login-form--> */}
							</div>
							
						</div>
					</div>
				</div>
			</div>
			{/* <!--/nav--> */}
			<nav class="navbar navbar-expand-lg navbar-light">
				<div class="container-fluid serarc-fluid">
					<a class="navbar-brand" href="index.html">
						Skin<span class="lohny">Care</span>Product</a>
					{/* <!-- if logo is image enable this   
							<a class="navbar-brand" href="#index.html">
								<img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
							</a> --> */}
					{/* <!--/search-right--> */}
					<div class="search-right">

						<a href="#search" title="search"><span class="fa fa-chevron-right" aria-hidden="true"></span>
							<span class="search-text">Get recommendations</span></a>
						{/* <!-- search popup --> */}
						<div id="search" class="pop-overlay">
							<div class="popup">

								{/* <form action="#" method="post" class="search-box">
									<input type="search" placeholder="Keyword" name="search" required="required"
										autofocus=""/>
									<button type="submit" class="btn">Search</button>
								</form> */}

<section class="w3l-grids-hny-2">
	{/* <!-- /content-6-section --> */}
	<div class="grids-hny-2-mian py-5">
		<div class="container py-lg-5">
				
			<h3 class="hny-title mb-0 text-center">Choose the model for <span>Recommendations</span></h3>
			<p class="mb-4 text-center">Handpicked Favourites just for you</p>
			<div class="welcome-grids row mt-5">
				<div class="col-lg-2 col-md-4 col-6 welcome-image">
						<div class="boxhny13">
								<a href="/user">
										<img src="assets/images/grid1.jpg" class="img-fluid" alt="" />
								{/* <div class="boxhny-content">
									<h3 class="title">Product</h3>
								</div> */}
							</a>
						</div>
						<h4><a href="/user">User Recommendations</a></h4>

				</div>
				
				<div class="col-lg-2 col-md-4 col-6 welcome-image">
					<div className="boxhny131">
						<div class="boxhny13">
								<a href="/content">
									{/* <div class="firstdiv"> */}
										<img src="assets/images/grid3.jpg" class="img-fluid" alt="" />
									{/* </div> */}
								{/* <div class="boxhny-content">
									<h3 class="title">Cleanser</h3>
								</div> */}
							</a>
						</div>
						<h4><a href="/content">
								Content Recommendations</a></h4></div>
					
				</div>
				{/* <div class="col-lg-2 col-md-4 col-6 welcome-image">
						<div class="boxhny13">
								<a href="#URL">
										<img src="assets/images/grid2.jpg" class="img-fluid" alt="" />
								<div class="boxhny-content">
									<h3 class="title">Product</h3>
								</div>
							</a>
						</div>
						<h4><a href="#URL">Shoes</a></h4>

				
				</div>			 */}
				
			</div>

		</div>
	</div>
</section>


							</div>
							<a class="close" href="#">×</a>
						</div>
						{/* <!-- /search popup --> */}
					</div>
					{/* <!--//search-right--> */}
					<button class="navbar-toggler" type="button" data-toggle="collapse"
						data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
						aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon fa fa-bars"> </span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav ml-auto">
							<li class="nav-item active">
								<a class="nav-link" href="/">Home</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/about">About</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/login">SignUp</a>
							  </li>


							<li class="nav-item">
								<a class="nav-link" href="/contact">Contact</a>
							</li>
						</ul>

					</div>
				</div>
			</nav>
			{/* <!--//nav--> */}
		</header>
		<div class="bannerhny-content">

			{/* <!--/banner-slider--> */}
			<div class="content-baner-inf">
				<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
					<ol class="carousel-indicators">
						<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
						<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
						<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
						<li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
					</ol>
					<div class="carousel-inner">
						<div class="carousel-item active">
							<div class="container">
								<div class="carousel-caption">
									<h3>Cleanser

										<br/>50% Off</h3>
									<a href="#" class="shop-button btn">
										Shop Now
									</a>

								</div>
							</div>
						</div>
						<div class="carousel-item item2">
							<div class="container">
								<div class="carousel-caption">
									<h3>Face Mask
										<br/>60% Off</h3>
									<a href="#" class="shop-button btn">
										Shop Now
									</a>

								</div>
							</div>
						</div>
						<div class="carousel-item item3">
							<div class="container">
								<div class="carousel-caption">
									<h3>Make Up
										<br/>50% Off</h3>
									<a href="#" class="shop-button btn">
										Shop Now
									</a>

								</div>
							</div>
						</div>
						<div class="carousel-item item4">
							<div class="container">
								<div class="carousel-caption">
									<h3>Moisture
										<br/>60% Off</h3>
									<a href="#" class="shop-button btn">
										Shop Now
									</a>
								</div>
							</div>
						</div>
					</div>
					<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
						<span class="carousel-control-prev-icon" aria-hidden="true"></span>
						<span class="sr-only">Previous</span>
					</a>
					<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
						<span class="carousel-control-next-icon" aria-hidden="true"></span>
						<span class="sr-only">Next</span>
					</a>
				</div>
			</div>
			{/* <!--//banner-slider-->
			<!--//banner-slider--> */}
			<div class="right-banner">
				<div class="right-1">
					<h4>
						Combo Skin Care Product
						<br/>50% Off</h4>
				</div>
			</div>
</div>
		</div>

</section>
{/* <!-- //w3l-banner-slider-main --> */}
<section class="w3l-grids-hny-2">
	{/* <!-- /content-6-section --> */}
	<div class="grids-hny-2-mian py-5">
		<div class="container py-lg-5">
				
			<h3 class="hny-title mb-0 text-center">Shop With <span>Us</span></h3>
			<p class="mb-4 text-center">Handpicked Favourites just for you</p>
			<div class="welcome-grids row mt-5">
				<div class="col-lg-2 col-md-4 col-6 welcome-image">
						<div class="boxhny13">
								<a href="/most">
										<img src="assets/images/grid1.jpg" class="img-fluid" alt="" />
								<div class="boxhny-content">
									<h3 class="title">Product</h3>
								</div>
							</a>
						</div>
						<h4><a href="/most">Moisture</a></h4>

				</div>
				
				<div class="col-lg-2 col-md-4 col-6 welcome-image">
						<div class="boxhny13">
								<a href="/clean">
										<img src="assets/images/grid3.jpg" class="img-fluid" alt="" />
								<div class="boxhny-content">
									<h3 class="title">Product</h3>
								</div>
							</a>
						</div>
						<h4><a href="/clean">
								Cleanser</a></h4>

					
				</div>
				<div class="col-lg-2 col-md-4 col-6 welcome-image">
						<div class="boxhny13">
								<a href="/mask">
										<img src="assets/images/grid2.jpg" class="img-fluid" alt="" />
								<div class="boxhny-content">
									<h3 class="title">Product</h3>
								</div>
							</a>
						</div>
						<h4><a href="/mask">Face Mask</a></h4>

				
				</div>
				<div class="col-lg-2 col-md-4 col-6 welcome-image">
						<div class="boxhny13">
								<a href="/sun">
										<img src="assets/images/grid4.jpg" class="img-fluid" alt="" />
								<div class="boxhny-content">
									<h3 class="title">Product</h3>
								</div>
							</a>
						</div>
						<h4><a href="/sun">Sunscreen</a></h4>

				</div>
				<div class="col-lg-2 col-md-4 col-6 welcome-image">
						<div class="boxhny13">
								<a href="/ton">
										<img src="assets/images/grid5.jpg" class="img-fluid" alt="" />
								<div class="boxhny-content">
									<h3 class="title">Product</h3>
								</div>
							</a>
						</div>
						<h4><a href="/ton">
								Toner</a></h4>

					
				</div>
				<div class="col-lg-2 col-md-4 col-6 welcome-image">
						<div class="boxhny13">
								<a href="#URL">
										<img src="assets/images/grid6.jpg" class="img-fluid" alt="" />
								<div class="boxhny-content">
									<h3 class="title">Product</h3>
								</div>
							</a>
						</div>
						<h4><a href="#URL">
								Serum</a></h4>

					
				</div>
			
			
			</div>

		</div>
	</div>
</section>
{/* <!-- //content-6-section --> */}

<section class="w3l-content-w-photo-6">
	{/* <!-- /specification-6--> */}
	  <div class="content-photo-6-mian py-5">
			 <div class="container py-lg-5">
					<div class="align-photo-6-inf-cols row">
						
						<div class="photo-6-inf-right col-lg-6">
								<h3 class="hny-title text-left"> <span>30% Discount</span></h3>
								<p>Visit our shop to see amazing Skin Care Products.</p>
								<a href="#" class="read-more btn">
										Shop Now
								</a>
						</div>
						<div class="photo-6-inf-left col-lg-6">
								<img src="assets/images/1.jpg" class="img-fluid" alt=""/>
						</div>
					</div>
				 </div>
			 </div>
	 </section>
   {/* <!-- //specification-6--> */}
     
<section class="w3l-video-6">
	{/* <!-- /video-6--> */}
	<div class="video-66-info">
		<div class="container-fluid">
			<div class="video-grids-info row">
				<div class="video-gd-right col-lg-8">
					<div class="video-inner text-center">
								{/* <!--popup--> */}
									<a class="play-button btn popup-with-zoom-anim" href="#small-dialog">
											<span class="fa fa-play" aria-hidden="true"></span>
									</a>
									<div id="small-dialog" class="mfp-hide">
										<div class="search-top notify-popup">
												<iframe src="https://player.vimeo.com/video/246139491" frameborder="0"
												allow="autoplay; fullscreen" allowfullscreen></iframe>
										</div>
									</div>
									{/* <!--//popup--> */}
					      </div>
				  </div>
				<div class="video-gd-left col-lg-4 p-lg-5 p-4">
					<div class="p-xl-4 p-0 video-wrap">
						<h3 class="hny-title text-left">Provide you with User and Content<span>Recommendations</span>
						</h3>
						<p>Visit us for different Recommendations on the Skin Care Product</p>
						<a href="#" class="read-more btn">
							Shop Now
						</a>
					</div>
				</div>

			</div>
		</div>
	</div>
</section>
{/* <!-- //video-6--> */}
<section class="w3l-ecommerce-main">
	{/* <!-- /products--> */}
	<div class="ecom-contenthny py-5">
		<div class="container py-lg-5">
			<h3 class="hny-title mb-0 text-center">Shop With <span>Us</span></h3>
			<p class="text-center">Popular Products</p>
			{/* <!-- /row--> */}
			<div class="ecom-products-grids row mt-lg-5 mt-3">
				<div class="col-lg-3 col-6 product-incfhny mt-4">
					<div class="product-grid2 transmitv">
						<div class="product-image2">
							<a href="#">
								<img class="pic-1 img-fluid" src="assets/images/shop-1.jpg"/>
								<img class="pic-2 img-fluid" src="assets/images/shop-11.jpg"/>
							</a>
							<ul class="social">
									<li><a href="#" data-tip="Quick View"><span class="fa fa-eye"></span></a></li>

									<li><a href="#" data-tip="Add to Cart"><span class="fa fa-shopping-bag"></span></a>
									</li>
							</ul>
							<div class="transmitv single-item">
							<form action="#" method="post">
									<input type="hidden" name="cmd" value="_cart"/>
									<input type="hidden" name="add" value="1"/>
									<input type="hidden" name="transmitv_item" value="Women Maroon Top"/>
									<input type="hidden" name="amount" value="899.99"/>
									<button type="submit" class="transmitv-cart ptransmitv-cart add-to-cart">
										Add to Cart
									</button>
								</form>
							</div>
						</div>
						<div class="product-content">
							<h3 class="title"><a href="#">Cleanser </a></h3>
							<span class="price"><del>$975.00</del>$899.99</span>
						</div>
					</div>
				</div>
				<div class="col-lg-3 col-6 product-incfhny mt-4">
					<div class="product-grid2">
						<div class="product-image2">
							<a href="#">
								<img class="pic-1 img-fluid" src="assets/images/shop-2.jpg"/>
								<img class="pic-2 img-fluid" src="assets/images/shop-22.jpg"/>
							</a>
							<ul class="social">
									<li><a href="#" data-tip="Quick View"><span class="fa fa-eye"></span></a></li>

									<li><a href="#" data-tip="Add to Cart"><span class="fa fa-shopping-bag"></span></a>
									</li>
							</ul>
							<div class="transmitv single-item">
									<form action="#" method="post">
											<input type="hidden" name="cmd" value="_cart"/>
											<input type="hidden" name="add" value="1"/>
											<input type="hidden" name="transmitv_item" value="Men's Pink Shirt"/>
											<input type="hidden" name="amount" value="599.99"/>
											<button type="submit" class="transmitv-cart ptransmitv-cart add-to-cart">
												Add to Cart
											</button>
										</form>
									</div>
						</div>
						<div class="product-content">
							<h3 class="title"><a href="#">Superfood Antioxidant Cleanser </a></h3>
							<span class="price"><del>$775.00</del>$599.99</span>
						</div>
					</div>

				</div>
				<div class="col-lg-3 col-6 product-incfhny mt-4">
					<div class="product-grid2">
						<div class="product-image2">
							<a href="#">
								<img class="pic-1 img-fluid" src="assets/images/shop-3.jpg"/>
								<img class="pic-2 img-fluid" src="assets/images/shop-33.jpg"/>
							</a>
							<ul class="social">
									<li><a href="#" data-tip="Quick View"><span class="fa fa-eye"></span></a></li>

									<li><a href="#" data-tip="Add to Cart"><span class="fa fa-shopping-bag"></span></a>
									</li>
							</ul>
							<div class="transmitv single-item">
									<form action="#" method="post">
											<input type="hidden" name="cmd" value="_cart"/>
											<input type="hidden" name="add" value="1"/>
											<input type="hidden" name="transmitv_item" value="Dark Blue Top"/>
											<input type="hidden" name="amount" value="799.99"/>
											<button type="submit" class="transmitv-cart ptransmitv-cart add-to-cart">
												Add to Cart
											</button>
										</form>
									</div>
						</div>
						<div class="product-content">
							<h3 class="title"><a href="#">Ultra Facial Toner </a></h3>
							<span class="price"><del>$875.00</del>$799.99</span>
						</div>
					</div>

				</div>
				<div class="col-lg-3 col-6 product-incfhny mt-4">
					<div class="product-grid2">
						<div class="product-image2">
							<a href="#">
								<img class="pic-1 img-fluid" src="assets/images/shop-4.jpg"/>
								<img class="pic-2 img-fluid" src="assets/images/shop-44.jpg"/>
							</a>
							<ul class="social">
									<li><a href="#" data-tip="Quick View"><span class="fa fa-eye"></span></a></li>

									<li><a href="#" data-tip="Add to Cart"><span class="fa fa-shopping-bag"></span></a>
									</li>
							</ul>
							<div class="transmitv single-item">
									<form action="#" method="post">
											<input type="hidden" name="cmd" value="_cart"/>
											<input type="hidden" name="add" value="1"/>
											<input type="hidden" name="transmitv_item" value="Women Tunic"/>
											<input type="hidden" name="amount" value="399.99"/>
											<button type="submit" class="transmitv-cart ptransmitv-cart add-to-cart">
												Add to Cart
											</button>
										</form>
									</div>
						</div>
						<div class="product-content">
							<h3 class="title"><a href="#">Treatment Cleansing Foam </a></h3>
							<span class="price"><del>$475.00</del>$399.99</span>
						</div>
					</div>

				</div>
				<div class="col-lg-3 col-6 product-incfhny mt-4">
					<div class="product-grid2">
						<div class="product-image2">
							<a href="#">
								<img class="pic-1 img-fluid" src="assets/images/shop-5.jpg"/>
								<img class="pic-2 img-fluid" src="assets/images/shop-55.jpg"/>
							</a>
							<ul class="social">
									<li><a href="#" data-tip="Quick View"><span class="fa fa-eye"></span></a></li>

									<li><a href="#" data-tip="Add to Cart"><span class="fa fa-shopping-bag"></span></a>
									</li>
							</ul>
							<div class="transmitv single-item">
									<form action="#" method="post">
											<input type="hidden" name="cmd" value="_cart"/>
											<input type="hidden" name="add" value="1"/>
											<input type="hidden" name="transmitv_item" value="Yellow T-Shirt"/>
											<input type="hidden" name="amount" value="299.99"/>
											<button type="submit" class="transmitv-cart ptransmitv-cart add-to-cart">
												Add to Cart
											</button>
										</form>
									</div>
						</div>
						<div class="product-content">
							<h3 class="title"><a href="#">Detoxifying Black Charcoal Cleanser</a></h3>
							<span class="price"><del>$575.00</del>$299.99</span>
						</div>
					</div>

				</div>
				<div class="col-lg-3 col-6 product-incfhny mt-4">
					<div class="product-grid2">
						<div class="product-image2">
							<a href="#">
								<img class="pic-1 img-fluid" src="assets/images/shop-6.jpg"/>
								<img class="pic-2 img-fluid" src="assets/images/shop-66.jpg"/>
							</a>
							<ul class="social">
									<li><a href="#" data-tip="Quick View"><span class="fa fa-eye"></span></a></li>

									<li><a href="#" data-tip="Add to Cart"><span class="fa fa-shopping-bag"></span></a>
									</li>
							</ul>
							<div class="transmitv single-item">
									<form action="#" method="post">
											<input type="hidden" name="cmd" value="_cart"/>
											<input type="hidden" name="add" value="1"/>
											<input type="hidden" name="transmitv_item" value="Straight Kurta"/>
											<input type="hidden" name="amount" value="699.99"/>
											<button type="submit" class="transmitv-cart ptransmitv-cart add-to-cart">
												Add to Cart
											</button>
										</form>
									</div>
						</div>
						<div class="product-content">
							<h3 class="title"><a href="#">Exfoliating Peel Gel</a></h3>
							<span class="price"><del>$775.00</del>$699.99</span>
						</div>
					</div>

				</div>
				<div class="col-lg-3 col-6 product-incfhny mt-4">
					<div class="product-grid2">
						<div class="product-image2">
							<a href="#">
								<img class="pic-1 img-fluid" src="assets/images/shop-7.jpg"/>
								<img class="pic-2 img-fluid" src="assets/images/shop-77.jpg"/>
							</a>
							<ul class="social">
									<li><a href="#" data-tip="Quick View"><span class="fa fa-eye"></span></a></li>

									<li><a href="#" data-tip="Add to Cart"><span class="fa fa-shopping-bag"></span></a>
									</li>
							</ul>
							<div class="transmitv single-item">
									<form action="#" method="post">
											<input type="hidden" name="cmd" value="_cart"/>
											<input type="hidden" name="add" value="1"/>
											<input type="hidden" name="transmitv_item" value="White T-Shirt"/>
											<input type="hidden" name="amount" value="599.99"/>
											<button type="submit" class="transmitv-cart ptransmitv-cart add-to-cart">
												Add to Cart
											</button>
										</form>
									</div>
						</div>
						<div class="product-content">
							<h3 class="title"><a href="#">Pure Clean Daily Facial Cleanser </a></h3>
							<span class="price"><del>$675.00</del>$599.99</span>
						</div>
					</div>

				</div>
				<div class="col-lg-3 col-6 product-incfhny mt-4">
					<div class="product-grid2">
						<div class="product-image2">
							<a href="#">
								<img class="pic-1 img-fluid" src="assets/images/shop-8.jpg"/>
								<img class="pic-2 img-fluid" src="assets/images/shop-88.jpg"/>
							</a>
							<ul class="social">
									<li><a href="#" data-tip="Quick View"><span class="fa fa-eye"></span></a></li>

									<li><a href="#" data-tip="Add to Cart"><span class="fa fa-shopping-bag"></span></a>
									</li>
							</ul>
							<div class="transmitv single-item">
									<form action="#" method="post">
											<input type="hidden" name="cmd" value="_cart"/>
											<input type="hidden" name="add" value="1"/>
											<input type="hidden" name="transmitv_item" value="Blue Sweater"/>
											<input type="hidden" name="amount" value="499.99"/>
											<button type="submit" class="transmitv-cart ptransmitv-cart add-to-cart">
												Add to Cart
											</button>
										</form>
									</div>
						</div>
						<div class="product-content">
							<h3 class="title"><a href="#">Acne Solutions Clarifying Lotion</a></h3>
							<span class="price"><del>$575.00</del>$499.99</span>
						</div>
					</div>

				</div>


			</div>
			{/* <!-- //row--> */}
		</div>
	</div>
</section>
{/* <!-- //products--> */}
<section class="w3l-content-5">
	{/* <!-- /content-6-section --> */}
	<div class="content-5-main">
		<div class="container">
			<div class="content-info-in row">
				<div class="content-gd col-md-6 offset-lg-3 text-center">
					<h3 class="hny-title two">
					"Unlock Your Radiant Glow: Discover Our Top Skincare Secrets"
						<span>change</span></h3>
					<p>

Dive into the world of radiant skincare and unlock the secrets to achieving luminous, healthy skin.
"Transform Your Routine: The Ultimate Skincare Guide"
</p>
					<a href="#" class="read-more-btn2 btn">
						Shop Now
					</a>

				</div>

			</div>

		</div>
	</div>
</section>
{/* <!-- //content-6-section --> */}
<section class="w3l-post-grids-6">
	{/* <!-- /post-grids--> */}
	<div class="post-6-mian py-5">
		<div class="container py-lg-5">
				<h3 class="hny-title text-center mb-0 ">Latest Blog <span>Posts</span></h3>
				<p class="mb-5 text-center">Handpicked Favourites just for you</p>
			<div class="post-hny-grids row mt-5">
				<div class="col-lg-3 col-md-6 grids5-info column-img" id="zoomIn">
					<a href="#">
						<figure>
							<img class="img-fluid" src="assets/images/bg1.jpg" alt="blog-image"/>
						</figure>
					</a>

					<div class="blog-thumbhny-caption">
						<ul class="blog-info-list">
							<li><a href="#admin">By admin</a></li>
							<li class="date-post">
								Aug 10, 2020</li>
						</ul>
						<h4><a href="#">Here to bring your life style of skin care to the next level.</a></h4>
					</div>
				</div>
				<div class="col-lg-3 col-md-6 grids5-info column-img" id="zoomIn">
					<a href="#">
						<figure>
							<img class="img-fluid" src="assets/images/bg2.jpg" alt="blog-image"/>
						</figure>
					</a>
					<div class="blog-thumbhny-caption">
						<ul class="blog-info-list">
							<li><a href="#admin">By admin</a></li>
							<li class="date-post">
								Aug 10, 2020</li>
						</ul>
						<h4><a href="#">Here to bring your life style of skin care to the next level.</a></h4>
					</div>
				</div>
				<div class="col-lg-3 col-md-6 grids5-info column-img" id="zoomIn">
					<figure>
						<img class="img-fluid" src="assets/images/bg3.jpg" alt="blog-image"/>
					</figure>
					<div class="blog-thumbhny-caption">
						<ul class="blog-info-list">
							<li><a href="#admin">By admin</a></li>
							<li class="date-post">
								Aug 10, 2020</li>
						</ul>
						<h4><a href="#">Here to bring your life style  of skin care to the next level.</a></h4>
					</div>
				</div>

				<div class="col-lg-3 col-md-6 grids5-info column-img" id="zoomIn">
					<figure>
						<img class="img-fluid" src="assets/images/bg4.jpg" alt="blog-image"/>
					</figure>
					<div class="blog-thumbhny-caption">
						<ul class="blog-info-list">
							<li><a href="#admin">By admin</a></li>
							<li class="date-post">
								Aug 10, 2020</li>
						</ul>
						<h4><a href="#">Here to bring your life style  of skin care to the next level.</a></h4>
					</div>
				</div>

			</div>
		</div>
	</div>
</section>
{/* <!-- //post-grids--> */}
<section class="w3l-customers-sec-6">
	<div class="customers-sec-6-cintent py-5">
		{/* <!-- /customers--> */}
		<div class="container py-lg-5">
				<h3 class="hny-title text-center mb-0 ">Customers <span>Love</span></h3>
				<p class="mb-5 text-center">What People Say</p>
			<div class="row customerhny my-lg-5 my-4">
				<div class="col-md-12">
					<div id="customerhnyCarousel" class="carousel slide" data-ride="carousel">

						<ol class="carousel-indicators">
							<li data-target="#customerhnyCarousel" data-slide-to="0" class="active"></li>
							<li data-target="#customerhnyCarousel" data-slide-to="1"></li>
						</ol>
						{/* <!-- Carousel items --> */}
						<div class="carousel-inner">

							<div class="carousel-item active">
								<div class="row">
									<div class="col-md-3">
										<div class="customer-info text-center">
											<div class="feedback-hny">
												<span class="fa fa-quote-left"></span>
												<p class="feedback-para">Explore our comprehensive guide to transforming your skincare routine with expert tips and product recommendations.
"Say Goodbye to Dullness: Revitalize Your Skin with Our Essentials"
</p>
											</div>
											<div class="feedback-review mt-4">
												<img src="assets/images/c1.jpg" class="img-fluid" alt=""/>
												<h5>Smith Roy</h5>

											</div>
										</div>
									</div>
									<div class="col-md-3">
											<div class="customer-info text-center">
													<div class="feedback-hny">
														<span class="fa fa-quote-left"></span>
														<p class="feedback-para">Learn how to say goodbye to dull, tired skin and revitalize your complexion with our curated selection of skincare essentials.
"Your Skin's Best Friend: The Power of Natural Ingredients"
</p>
													</div>
													<div class="feedback-review mt-4">
														<img src="assets/images/c2.jpg" class="img-fluid" alt=""/>
														<h5>Lora Grill</h5>
		
													</div>
												</div>
									</div>
									<div class="col-md-3">
											<div class="customer-info text-center">
													<div class="feedback-hny">
														<span class="fa fa-quote-left"></span>
														<p class="feedback-para">Explore the transformative power of natural ingredients and discover how they can become your skin's best friend for a radiant, healthy glow.
"Ageless Beauty: Embrace Your Skin at Every Stage of Life"
</p>
													</div>
													<div class="feedback-review mt-4">
														<img src="assets/images/c3.jpg" class="img-fluid" alt=""/>
														<h5>Laura Sten</h5>
		
													</div>
												</div>
									</div>
									<div class="col-md-3">
											<div class="customer-info text-center">
													<div class="feedback-hny">
														<span class="fa fa-quote-left"></span>
														<p class="feedback-para">Embrace ageless beauty and learn how to care for your skin at every stage of life with our tailored skincare tips and products.
"Sensitive Skin Solutions: Gentle Care for Delicate Complexions"
</p>
													</div>
													<div class="feedback-review mt-4">
														<img src="assets/images/c4.jpg" class="img-fluid" alt=""/>
														<h5>John Lee</h5>
		
													</div>
												</div>
									</div>
								</div>
								{/* <!--.row--> */}
							</div>
							{/* <!--.item--> */}

							<div class="carousel-item">
								<div class="row">
									<div class="col-md-3">
											<div class="customer-info text-center">
													<div class="feedback-hny">
														<span class="fa fa-quote-left"></span>
														<p class="feedback-para">Find gentle yet effective solutions for sensitive skin with our curated collection of products designed to soothe and nourish delicate complexions.
"Unlock the Secret to Youthful Skin: Anti-Aging Essentials"
.</p>
													</div>
													<div class="feedback-review mt-4">
														<img src="assets/images/c4.jpg" class="img-fluid" alt=""/>
														<h5>John Lee</h5>
		
													</div>
												</div>
									</div>
									<div class="col-md-3">
											<div class="customer-info text-center">
													<div class="feedback-hny">
														<span class="fa fa-quote-left"></span>
														<p class="feedback-para">Discover the secret to youthful, radiant skin with our range of anti-aging essentials, formulated to combat fine lines, wrinkles, and dullness.
"Skincare Simplified: Streamline Your Routine for Maximum Results"
</p>
													</div>
													<div class="feedback-review mt-4">
														<img src="assets/images/c3.jpg" class="img-fluid" alt=""/>
														<h5>Laura Sten</h5>
		
													</div>
												</div>
									</div>
									<div class="col-md-3">
											<div class="customer-info text-center">
												<div class="feedback-hny">
													<span class="fa fa-quote-left"></span>
													<p class="feedback-para">Streamline your skincare routine and achieve maximum results with our simplified approach to skincare, focusing on quality products and effective techniques.
"Beauty from Within: The Importance of Holistic Skincare"
</p>
												</div>
												<div class="feedback-review mt-4">
													<img src="assets/images/c1.jpg" class="img-fluid" alt=""/>
													<h5>Smith Roy</h5>
	
												</div>
											</div>
										</div>
										<div class="col-md-3">
												<div class="customer-info text-center">
														<div class="feedback-hny">
															<span class="fa fa-quote-left"></span>
															<p class="feedback-para">
Explore the concept of holistic skincare and learn why nourishing your skin from within is key to achieving lasting beauty and vitality.
"Expert Advice: Skincare Tips Straight from the Pros"
</p>
														</div>
														<div class="feedback-review mt-4">
															<img src="assets/images/c2.jpg" class="img-fluid" alt=""/>
															<h5>Lora Grill</h5>
			
														</div>
													</div>
										</div>
								</div>
								{/* <!--.row--> */}
							</div>
							{/* <!--.item--> */}

						</div>
						{/* <!--.carousel-inner--> */}
					</div>
					{/* <!--.Carousel--> */}

				</div>
			</div>
		</div>
	</div>
</section>
{/* <!-- //customers--> */}
<section class="w3l-subscription-6">
	{/* <!--/customers --> */}
	<div class="subscription-infhny">
		<div class="container-fluid">

			<div class="subscription-grids row">

				<div class="subscription-right form-right-inf col-lg-6 p-md-5 p-4">
					<div class="p-lg-5 py-md-0 py-3">
						<h3 class="hny-title">Join us for FREE to get instant <span>email updates!</span></h3>
							<p>Subscribe and get notified at first on the latest update and offers!</p>

						<form action="#" method="post" class="signin-form mt-lg-5 mt-4">
							<div class="forms-gds">
								<div class="form-input">
									<input type="email" name="" placeholder="Your email here" required=""/>
								</div>
								<div class="form-input"><button class="btn">Join</button></div>
							</div>
						</form>
					</div>
				</div>
				<div class="subscription-left forms-25-info col-lg-6 ">

				</div>
			</div>

			{/* <!--//customers --> */}
		</div>
    </div>
</section>
{/* <!-- //customers-6--></img> */}
    </div>
  )
}

export default Home
