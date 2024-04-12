import React, {useState, useEffect} from 'react'

function Header(props) {
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [signupContent, setSignupContent] = useState('');

  const handleSignupClick = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/signuppage');
      const htmlContent = await response.text();
      setSignupContent(htmlContent);
      setShowSignupForm(true);
    } catch (error) {
      console.error('Error fetching signup page:', error);
    }
  };
  
  return (
    <section class="w3l-banner-slider-main inner-pagehny">
    
    <div class="breadcrumb-infhny">
  
      <div class="top-header-content">
  
        <header class="tophny-header">
          <div class="container-fluid">
            <div class="top-right-strip row">
              {/* <!--/left--> */}
              {/* <div class="top-hny-left-content col-lg-6 pl-lg-0">
                <h6>Upto 30% off on All styles , <a href="#" target="_blank"> Click here for <span
                      class="fa fa-hand-o-right hand-icon" aria-hidden="true"></span> <span class="hignlaite">More
                      details</span></a></h6>
              </div> */}
              {/* <!--//left-->
              <!--/right--> */}
              {/* <ul class="top-hnt-right-content col-lg-6">
  
                <li class="button-log usernhy">
                  <a class="btn-open" href="#">
                    <span class="fa fa-user" aria-hidden="true"></span>
                  </a>
                </li>
                <li class="transmitvcart galssescart2 cart cart box_1">
                  <form action="#" method="post" class="last">
                    <input type="hidden" name="cmd" value="_cart"/>
                    <input type="hidden" name="display" value="1"/>
                    <button class="top_transmitv_cart" type="submit" name="submit" value="">
                      My Cart
                      <span class="fa fa-shopping-cart"></span>
                    </button>
                  </form>
                </li>
              </ul> */}
              {/* <!--//right--> */}
              
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
                      </a> -->
              <!--/search-right--> */}
              <div class="search-right">
  
                {/* <a href="#search" title="search"><span class="fa fa-search mr-2" aria-hidden="true"></span>
                  <span class="search-text">Search here</span></a> */}
                {/* <!-- search popup --> */}
  
  
                <div id="search" class="pop-overlay">
                  <div class="popup">
  
                    {/* <form action="#" method="post" class="search-box">
                      <input type="search" placeholder="Keyword" name="search" required="required" autofocus=""/>
                      <button type="submit" class="btn">Search</button>
                    </form> */}
  
                  </div>
  
                  <a class="close" href="#">×</a>
                </div>
                {/* <!-- /search popup --> */}
              </div>
              {/* <!--//search-right--> */}
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon fa fa-bars"> </span>
              </button>
  
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="/">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/about">About</a>
                  </li>
                  
                  <li class="nav-item">
                    <a class="nav-link" href="/login">SignUp</a>
                    {/* <button href="/login">Signup</button> */}
                  </li>
  
                  <li class="nav-item active">
                    <a class="nav-link" href="/contact">Contact</a>
                  </li>
                </ul>
  
              </div>
            </div>
          </nav>
          {/* <!--//nav--> */}
        </header>
        <div class="breadcrumb-contentnhy">
          <div class="container">
            <nav aria-label="breadcrumb">
              <h2 class="hny-title text-center">{props.title} </h2>
              <ol class="breadcrumb mb-0">
                <li><a href="index.html">Home</a>
                  <span class="fa fa-angle-double-right"></span></li>
                <li class="active">{props.page}</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      </div>
      {showSignupForm && (
                      <div dangerouslySetInnerHTML={{ __html: signupContent }} />
                    )}

  </section>
  )
}

export default Header