import { useEffect } from 'react';
import '/public/assets/css/home_1.css';

let isScriptLoaded = false;

function Homepage() {
	useEffect(() => {
		if (!isScriptLoaded) {
			// Specific Scripts
			const script = document.createElement('script');
			script.src = '/assets/js/carousel-home.min.js';
			script.async = true;
			document.body.appendChild(script);

			isScriptLoaded = true;

			return () => {
				document.body.removeChild(script);
			};
		}
	}, []);

	return (
		<>
			<div id="page">
				<header className="version_1">
					<div className="layer"></div>
					{/* <!-- Mobile menu overlay mask --> */}
					
					{/* <!-- /main_header --> */}

					<div className="main_nav Sticky">
						<div className="container">
							<div className="row small-gutters">
								<div className="col-xl-1 col-lg-1 d-lg-flex align-items-center">
									<div id="logo">
										<a href="index.html">
											<img
												src="/assets/img/logo.svg"
												alt=""
												width="100"
												height="35"
											/>
										</a>
									</div>
								</div>
                                
								<nav className="col-xl-6 col-lg-7">
									<a className="open_close" href="##">
										<div className="hamburger hamburger--spin">
											<div className="hamburger-box">
												<div className="hamburger-inner"></div>
											</div>
										</div>
									</a>
									{/* <!-- Mobile menu button --> */}
									<div className="main-menu centering-wrapper">
										<div id="header_menu">
											<a href="index.html">
												<img
													src="/assets/img/logo_black.svg"
													alt=""
													width="100"
													height="35"
												/>
											</a>
											<a
												href="#"
												className="open_close"
												id="close_in">
												<i className="ti-close"></i>
											</a>
										</div>
										<ul>
											<li className="submenu">
												<a href="##" className="show-submenu">
													Home
												</a>
												<ul>
													<li>
														<a href="index.html">Slider</a>
													</li>
													<li>
														<a href="index-2.html">
															Video Background
														</a>
													</li>
													<li>
														<a href="index-3.html">
															Vertical Slider
														</a>
													</li>
													<li>
														<a href="index-4.html">
															GDPR Cookie Bar
														</a>
													</li>
												</ul>
											</li>
											<li className="megamenu submenu">
												<a
													href="##"
													className="show-submenu-mega">
													Pages
												</a>
												<div className="menu-wrapper">
													<div className="row small-gutters">
														<div className="col-lg-3">
															<h3>Listing grid</h3>
															<ul>
																<li>
																	<a href="listing-grid-1-full.html">
																		Grid Full Width
																	</a>
																</li>
																<li>
																	<a href="listing-grid-2-full.html">
																		Grid Full Width 2
																	</a>
																</li>
																<li>
																	<a href="listing-grid-3.html">
																		Grid Boxed
																	</a>
																</li>
																<li>
																	<a href="listing-grid-4-sidebar-left.html">
																		Grid Sidebar Left
																	</a>
																</li>
																<li>
																	<a href="listing-grid-5-sidebar-right.html">
																		Grid Sidebar Right
																	</a>
																</li>
																<li>
																	<a href="listing-grid-6-sidebar-left.html">
																		Grid Sidebar Left
																		2
																	</a>
																</li>
																<li>
																	<a href="listing-grid-7-sidebar-right.html">
																		Grid Sidebar Right
																		2
																	</a>
																</li>
															</ul>
														</div>
														<div className="col-lg-3">
															<h3>
																Listing row &amp; Product
															</h3>
															<ul>
																<li>
																	<a href="listing-row-1-sidebar-left.html">
																		Row Sidebar Left
																	</a>
																</li>
																<li>
																	<a href="listing-row-2-sidebar-right.html">
																		Row Sidebar Right
																	</a>
																</li>
																<li>
																	<a href="listing-row-3-sidebar-left.html">
																		Row Sidebar Left 2
																	</a>
																</li>
																<li>
																	<a href="listing-row-4-sidebar-extended.html">
																		Row Sidebar
																		Extended
																	</a>
																</li>
																<li>
																	<a href="product-detail-1.html">
																		Product Large
																		Image
																	</a>
																</li>
																<li>
																	<a href="product-detail-2.html">
																		Product Carousel
																	</a>
																</li>
																<li>
																	<a href="product-detail-3.html">
																		Product Sticky
																		Info
																	</a>
																</li>
															</ul>
														</div>
														<div className="col-lg-3">
															<h3>Other pages</h3>
															<ul>
																<li>
																	<a href="cart.html">
																		Cart Page
																	</a>
																</li>
																<li>
																	<a href="checkout.html">
																		Check Out Page
																	</a>
																</li>
																<li>
																	<a href="confirm.html">
																		Confirm Purchase
																		Page
																	</a>
																</li>
																<li>
																	<a href="account.html">
																		Create Account
																		Page
																	</a>
																</li>
																<li>
																	<a href="track-order.html">
																		Track Order
																	</a>
																</li>
																<li>
																	<a href="help.html">
																		Help Page
																	</a>
																</li>
																<li>
																	<a href="help-2.html">
																		Help Page 2
																	</a>
																</li>
																<li>
																	<a href="leave-review.html">
																		Leave a Review
																	</a>
																</li>
															</ul>
														</div>
														<div className="col-lg-3 d-xl-block d-lg-block d-md-none d-sm-none d-none">
															<div className="banner_menu">
																<a href="#0">
																	<img
																		src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
																		data-src="/assets/img/banner_menu.jpg"
																		width="400"
																		height="550"
																		alt=""
																		className="img-fluid lazy"
																	/>
																</a>
															</div>
														</div>
													</div>
													{/* <!-- /row --> */}
												</div>
												{/* <!-- /menu-wrapper --> */}
											</li>
											<li className="submenu">
												<a href="##" className="show-submenu">
													Extra Pages
												</a>
												<ul>
													<li>
														<a href="header-2.html">
															Header Style 2
														</a>
													</li>
													<li>
														<a href="header-3.html">
															Header Style 3
														</a>
													</li>
													<li>
														<a href="header-4.html">
															Header Style 4
														</a>
													</li>
													<li>
														<a href="header-5.html">
															Header Style 5
														</a>
													</li>
													<li>
														<a href="404.html">404 Page</a>
													</li>
													<li>
														<a href="sign-in-modal.html">
															Sign In Modal
														</a>
													</li>
													<li>
														<a href="contacts.html">
															Contact Us
														</a>
													</li>
													<li>
														<a href="about.html">About 1</a>
													</li>
													<li>
														<a href="about-2.html">About 2</a>
													</li>
													<li>
														<a href="modal-advertise.html">
															Modal Advertise
														</a>
													</li>
													<li>
														<a href="modal-newsletter.html">
															Modal Newsletter
														</a>
													</li>
												</ul>
											</li>
											<li>
												<a href="blog.html">Blog</a>
											</li>
											<li>
												<a href="#0">Buy Template</a>
											</li>
										</ul>
									</div>
									{/* <!--/main-menu --> */}
								</nav>
								<div className="col-xl-3 col-lg-5 col-md-6 d-none d-md-block">
									<div className="custom-search-input">
										<input
											type="text"
											placeholder="Search over 10.000 products"
										/>
										<button type="submit">
											<i className="header-icon_search_custom"></i>
										</button>
									</div>
								</div>
								<div className="col-xl-2 col-lg-2 col-md-3">
									<ul className="top_tools">
										<li></li>
										<li>
											<div className="dropdown dropdown-access">
												<a
													href="account.html"
													className="access_link">
													<span>Account</span>
												</a>
												<div className="dropdown-menu">
													<a
														href="account.html"
														className="btn_1">
														Sign In or Sign Up
													</a>
													<ul>
														<li>
															<a href="track-order.html">
																<i className="ti-truck"></i>
																Track your Order
															</a>
														</li>
														<li>
															<a href="account.html">
																<i className="ti-package"></i>
																My Orders
															</a>
														</li>
														<li>
															<a href="account.html">
																<i className="ti-user"></i>
																My Profile
															</a>
														</li>
														<li>
															<a href="help.html">
																<i className="ti-help-alt"></i>
																Help and Faq
															</a>
														</li>
													</ul>
												</div>
											</div>
											{/* <!-- /dropdown-access--> */}
										</li>

										<li>
											<div className="dropdown dropdown-cart">
												<a href="cart.html" className="cart_bt">
													<strong>2</strong>
												</a>
												<div className="dropdown-menu">
													<ul>
														<li>
															<a href="product-detail-1.html">
																<figure>
																	<img
																		src="/assets/img/products/product_placeholder_square_small.jpg"
																		data-src="/assets/img/products/shoes/thumb/1.jpg"
																		alt=""
																		width="50"
																		height="50"
																		className="lazy"
																	/>
																</figure>
																<strong>
																	<span>
																		1x Armor Air x
																		Fear
																	</span>
																	$90.00
																</strong>
															</a>
															<a
																href="#0"
																className="action">
																<i className="ti-trash"></i>
															</a>
														</li>
														<li>
															<a href="product-detail-1.html">
																<figure>
																	<img
																		src="/assets/img/products/product_placeholder_square_small.jpg"
																		data-src="/assets/img/products/shoes/thumb/2.jpg"
																		alt=""
																		width="50"
																		height="50"
																		className="lazy"
																	/>
																</figure>
																<strong>
																	<span>
																		1x Armor Okwahn II
																	</span>
																	$110.00
																</strong>
															</a>
															<a
																href="0"
																className="action">
																<i className="ti-trash"></i>
															</a>
														</li>
													</ul>
													<div className="total_drop">
														<div className="clearfix">
															<strong>Total</strong>
															<span>$200.00</span>
														</div>
														<a
															href="cart.html"
															className="btn_1 outline">
															View Cart
														</a>
														<a
															href="checkout.html"
															className="btn_1">
															Checkout
														</a>
													</div>
												</div>
											</div>
											{/* <!-- /dropdown-cart--> */}
										</li>
										<li>
											<a href="##" className="btn_search_mob">
												<span>Search</span>
											</a>
										</li>
									</ul>
								</div>
							</div>
							{/* <!-- /row --> */}
						</div>

						<div className="search_mob_wp">
							<input
								type="text"
								className="form-control"
								placeholder="Search over 10.000 products"
							/>
							<input
								type="submit"
								className="btn_1 full-width"
								value="Search"
							/>
						</div>
						{/* <!-- /search_mobile --> */}
					</div>
					{/* <!-- /main_nav --> */}
				</header>
				{/* <!-- /header --> */}

				<main>
					<div id="carousel-home">
						<div className="owl-carousel owl-theme">
							<div
								className="owl-slide cover"
								style={{
									backgroundImage:
										"url('/assets/img/slides/slide_home_2.jpg')",
								}}>
								<div
									className="opacity-mask d-flex align-items-center"
									data-opacity-mask="rgba(0, 0, 0, 0.5)">
									<div className="container">
										<div className="row justify-content-center justify-content-md-end">
											<div className="col-lg-6 static">
												<div className="slide-text text-end white">
													<h2 className="owl-slide-animated owl-slide-title">
														Attack Air
														<br />
														Max 720 Sage Low
													</h2>
													<p className="owl-slide-animated owl-slide-subtitle">
														Limited items available at this
														price
													</p>
													<div className="owl-slide-animated owl-slide-cta">
														<a
															className="btn_1"
															href="listing-grid-1-full.html"
															role="button">
															Shop Now
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* <!--/owl-slide--> */}
							<div
								className="owl-slide cover"
								style={{
									backgroundImage:
										"url('/assets/img/slides/slide_home_1.jpg')",
								}}>
								<div
									className="opacity-mask d-flex align-items-center"
									data-opacity-mask="rgba(0, 0, 0, 0.5)">
									<div className="container">
										<div className="row justify-content-center justify-content-md-start">
											<div className="col-lg-6 static">
												<div className="slide-text white">
													<h2 className="owl-slide-animated owl-slide-title">
														Attack Air
														<br />
														VaporMax Flyknit 3
													</h2>
													<p className="owl-slide-animated owl-slide-subtitle">
														Limited items available at this
														price
													</p>
													<div className="owl-slide-animated owl-slide-cta">
														<a
															className="btn_1"
															href="listing-grid-1-full.html"
															role="button">
															Shop Now
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* <!--/owl-slide--> */}
							<div
								className="owl-slide cover"
								style={{
									backgroundImage:
										"url('/assets/img/slides/slide_home_3.jpg')",
								}}>
								<div
									className="opacity-mask d-flex align-items-center"
									data-opacity-mask="rgba(255, 255, 255, 0.5)">
									<div className="container">
										<div className="row justify-content-center justify-content-md-start">
											<div className="col-lg-12 static">
												<div className="slide-text text-center black">
													<h2 className="owl-slide-animated owl-slide-title">
														Attack Air
														<br />
														Monarch IV SE
													</h2>
													<p className="owl-slide-animated owl-slide-subtitle">
														Lightweight cushioning and durable
														support with a Phylon midsole
													</p>
													<div className="owl-slide-animated owl-slide-cta">
														<a
															className="btn_1"
															href="listing-grid-1-full.html"
															role="button">
															Shop Now
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* <!--/owl-slide--> */}
							</div>
						</div>
						<div id="icon_drag_mobile"></div>
					</div>
					{/* <!--/carousel--> */}

					<div className="container margin_60_35">
						<div className="main_title">
							<h2>Eco Warriors</h2>
							<span>About</span>
							<p>
								Selamat datang di situs kami, tempat di mana kita berbagi
								semangat untuk menjaga bumi kita dengan mengurangi limbah
								dan memanfaatkan kembali sumber daya yang ada. Tujuan
								utama situs ini adalah untuk mempromosikan kesadaran akan
								pentingnya daur ulang dan memfasilitasi akses mudah ke
								produk-produk ramah lingkungan.
							</p>
						</div>
						{/* <!-- /row --> */}
					</div>
					{/* <!-- /container --> */}

					<ul id="banners_grid" className="clearfix">
						<li>
							<a href="#0" className="img_container">
								<img
									src="/assets/img/banners_cat_placeholder.jpg"
									data-src="/assets/img/banner_1.jpg"
									alt=""
									className="lazy"
								/>
								<div
									className="short_info opacity-mask"
									data-opacity-mask="rgba(0, 0, 0, 0.5)">
									<h3>Men's Collection</h3>
									<div>
										<span className="btn_1">Shop Now</span>
									</div>
								</div>
							</a>
						</li>
						<li>
							<a href="#0" className="img_container">
								<img
									src="/assets/img/banners_cat_placeholder.jpg"
									data-src="/assets/img/banner_2.jpg"
									alt=""
									className="lazy"
								/>
								<div
									className="short_info opacity-mask"
									data-opacity-mask="rgba(0, 0, 0, 0.5)">
									<h3>Womens's Collection</h3>
									<div>
										<span className="btn_1">Shop Now</span>
									</div>
								</div>
							</a>
						</li>
						<li>
							<a href="#0" className="img_container">
								<img
									src="/assets/img/banners_cat_placeholder.jpg"
									data-src="/assets/img/banner_3.jpg"
									alt=""
									className="lazy"
								/>
								<div
									className="short_info opacity-mask"
									data-opacity-mask="rgba(0, 0, 0, 0.5)">
									<h3>Kids's Collection</h3>
									<div>
										<span className="btn_1">Shop Now</span>
									</div>
								</div>
							</a>
						</li>
					</ul>
					{/* <!--/banners_grid --> */}

					<div className="container margin_60_35">
						<div className="main_title">
							<h2>Top Selling</h2>
							<span>Products</span>
							<p>
								Cum doctus civibus efficiantur in imperdiet deterruisset
							</p>
						</div>
						<div className="row small-gutters">
							<div className="col-6 col-md-4 col-xl-3">
								<div className="grid_item">
									<figure>
										<span className="ribbon off">-30%</span>
										<a href="product-detail-1.html">
											<img
												className="img-fluid lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/assets/img/products/shoes/1.jpg"
												alt=""
											/>
											<img
												className="img-fluid lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/assets/img/products/shoes/1_b.jpg"
												alt=""
											/>
										</a>
										<div
											data-countdown="2019/05/15"
											className="countdown"></div>
									</figure>
									<div className="rating">
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star"></i>
									</div>
									<a href="product-detail-1.html">
										<h3>Armor Air x Fear</h3>
									</a>
									<div className="price_box">
										<span className="new_price">$48.00</span>
										<span className="old_price">$60.00</span>
									</div>
									<ul>
										<li>
											<a
												href="#0"
												className="tooltip-1"
												data-bs-toggle="tooltip"
												data-bs-placement="left"
												title="Add to favorites">
												<i className="ti-heart"></i>
												<span>Add to favorites</span>
											</a>
										</li>
										<li>
											<a
												href="#0"
												className="tooltip-1"
												data-bs-toggle="tooltip"
												data-bs-placement="left"
												title="Add to compare">
												<i className="ti-control-shuffle"></i>
												<span>Add to compare</span>
											</a>
										</li>
										<li>
											<a
												href="#0"
												className="tooltip-1"
												data-bs-toggle="tooltip"
												data-bs-placement="left"
												title="Add to cart">
												<i className="ti-shopping-cart"></i>
												<span>Add to cart</span>
											</a>
										</li>
									</ul>
								</div>
								{/* <!-- /grid_item --> */}
							</div>
							{/* <!-- /col --> */}
							<div className="col-6 col-md-4 col-xl-3">
								<div className="grid_item">
									<span className="ribbon off">-30%</span>
									<figure>
										<a href="product-detail-1.html">
											<img
												className="img-fluid lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/assets/img/products/shoes/2.jpg"
												alt=""
											/>
											<img
												className="img-fluid lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/assets/img/products/shoes/2_b.jpg"
												alt=""
											/>
										</a>
										<div
											data-countdown="2019/05/10"
											className="countdown"></div>
									</figure>
									<div className="rating">
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star"></i>
									</div>
									<a href="product-detail-1.html">
										<h3>Armor Okwahn II</h3>
									</a>
									<div className="price_box">
										<span className="new_price">$90.00</span>
										<span className="old_price">$170.00</span>
									</div>
									<ul>
										<li>
											<a
												href="#0"
												className="tooltip-1"
												data-bs-toggle="tooltip"
												data-bs-placement="left"
												title="Add to favorites">
												<i className="ti-heart"></i>
												<span>Add to favorites</span>
											</a>
										</li>
										<li>
											<a
												href="#0"
												className="tooltip-1"
												data-bs-toggle="tooltip"
												data-bs-placement="left"
												title="Add to compare">
												<i className="ti-control-shuffle"></i>
												<span>Add to compare</span>
											</a>
										</li>
										<li>
											<a
												href="#0"
												className="tooltip-1"
												data-bs-toggle="tooltip"
												data-bs-placement="left"
												title="Add to cart">
												<i className="ti-shopping-cart"></i>
												<span>Add to cart</span>
											</a>
										</li>
									</ul>
								</div>
								{/* <!-- /grid_item --> */}
							</div>
							{/* <!-- /col --> */}
							<div className="col-6 col-md-4 col-xl-3">
								<div className="grid_item">
									<span className="ribbon off">-50%</span>
									<figure>
										<a href="product-detail-1.html">
											<img
												className="img-fluid lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/assets/img/products/shoes/3.jpg"
												alt=""
											/>
											<img
												className="img-fluid lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/assets/img/products/shoes/3_b.jpg"
												alt=""
											/>
										</a>
										<div
											data-countdown="2019/05/21"
											className="countdown"></div>
									</figure>
									<div className="rating">
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star"></i>
									</div>
									<a href="product-detail-1.html">
										<h3>Armor Air Wildwood ACG</h3>
									</a>
									<div className="price_box">
										<span className="new_price">$75.00</span>
										<span className="old_price">$155.00</span>
									</div>
									<ul>
										<li>
											<a
												href="#0"
												className="tooltip-1"
												data-bs-toggle="tooltip"
												data-bs-placement="left"
												title="Add to favorites">
												<i className="ti-heart"></i>
												<span>Add to favorites</span>
											</a>
										</li>
										<li>
											<a
												href="#0"
												className="tooltip-1"
												data-bs-toggle="tooltip"
												data-bs-placement="left"
												title="Add to compare">
												<i className="ti-control-shuffle"></i>
												<span>Add to compare</span>
											</a>
										</li>
										<li>
											<a
												href="#0"
												className="tooltip-1"
												data-bs-toggle="tooltip"
												data-bs-placement="left"
												title="Add to cart">
												<i className="ti-shopping-cart"></i>
												<span>Add to cart</span>
											</a>
										</li>
									</ul>
								</div>
								{/* <!-- /grid_item --> */}
							</div>
							{/* <!-- /col --> */}
							<div className="col-6 col-md-4 col-xl-3">
								<div className="grid_item">
									<span className="ribbon new">New</span>
									<figure>
										<a href="product-detail-1.html">
											<img
												className="img-fluid lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/assets/img/products/shoes/4.jpg"
												alt=""
											/>
											<img
												className="img-fluid lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/assets/img/products/shoes/4_b.jpg"
												alt=""
											/>
										</a>
									</figure>
									<div className="rating">
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star"></i>
									</div>
									<a href="product-detail-1.html">
										<h3>Armor ACG React Terra</h3>
									</a>
									<div className="price_box">
										<span className="new_price">$110.00</span>
									</div>
									<ul>
										<li>
											<a
												href="#0"
												className="tooltip-1"
												data-bs-toggle="tooltip"
												data-bs-placement="left"
												title="Add to favorites">
												<i className="ti-heart"></i>
												<span>Add to favorites</span>
											</a>
										</li>
										<li>
											<a
												href="#0"
												className="tooltip-1"
												data-bs-toggle="tooltip"
												data-bs-placement="left"
												title="Add to compare">
												<i className="ti-control-shuffle"></i>
												<span>Add to compare</span>
											</a>
										</li>
										<li>
											<a
												href="#0"
												className="tooltip-1"
												data-bs-toggle="tooltip"
												data-bs-placement="left"
												title="Add to cart">
												<i className="ti-shopping-cart"></i>
												<span>Add to cart</span>
											</a>
										</li>
									</ul>
								</div>
								{/* <!-- /grid_item --> */}
							</div>
							{/* <!-- /col --> */}
							<div className="col-6 col-md-4 col-xl-3">
								<div className="grid_item">
									<span className="ribbon new">New</span>
									<figure>
										<a href="product-detail-1.html">
											<img
												className="img-fluid lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/assets/img/products/shoes/5.jpg"
												alt=""
											/>
											<img
												className="img-fluid lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/assets/img/products/shoes/5_b.jpg"
												alt=""
											/>
										</a>
									</figure>
									<div className="rating">
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star"></i>
									</div>
									<a href="product-detail-1.html">
										<h3>Armor Air Zoom Alpha</h3>
									</a>
									<div className="price_box">
										<span className="new_price">$140.00</span>
									</div>
									<ul>
										<li>
											<a
												href="#0"
												className="tooltip-1"
												data-bs-toggle="tooltip"
												data-bs-placement="left"
												title="Add to favorites">
												<i className="ti-heart"></i>
												<span>Add to favorites</span>
											</a>
										</li>
										<li>
											<a
												href="#0"
												className="tooltip-1"
												data-bs-toggle="tooltip"
												data-bs-placement="left"
												title="Add to compare">
												<i className="ti-control-shuffle"></i>
												<span>Add to compare</span>
											</a>
										</li>
										<li>
											<a
												href="#0"
												className="tooltip-1"
												data-bs-toggle="tooltip"
												data-bs-placement="left"
												title="Add to cart">
												<i className="ti-shopping-cart"></i>
												<span>Add to cart</span>
											</a>
										</li>
									</ul>
								</div>
								{/* <!-- /grid_item --> */}
							</div>
							{/* <!-- /col --> */}
							<div className="col-6 col-md-4 col-xl-3">
								<div className="grid_item">
									<span className="ribbon new">New</span>
									<figure>
										<a href="product-detail-1.html">
											<img
												className="img-fluid lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/assets/img/products/shoes/6.jpg"
												alt=""
											/>
											<img
												className="img-fluid lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/assets/img/products/shoes/6_b.jpg"
												alt=""
											/>
										</a>
									</figure>
									<div className="rating">
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star"></i>
									</div>
									<a href="product-detail-1.html">
										<h3>Armor Air Alpha</h3>
									</a>
									<div className="price_box">
										<span className="new_price">$130.00</span>
									</div>
									<ul>
										<li>
											<a
												href="#0"
												className="tooltip-1"
												data-bs-toggle="tooltip"
												data-bs-placement="left"
												title="Add to favorites">
												<i className="ti-heart"></i>
												<span>Add to favorites</span>
											</a>
										</li>
										<li>
											<a
												href="#0"
												className="tooltip-1"
												data-bs-toggle="tooltip"
												data-bs-placement="left"
												title="Add to compare">
												<i className="ti-control-shuffle"></i>
												<span>Add to compare</span>
											</a>
										</li>
										<li>
											<a
												href="#0"
												className="tooltip-1"
												data-bs-toggle="tooltip"
												data-bs-placement="left"
												title="Add to cart">
												<i className="ti-shopping-cart"></i>
												<span>Add to cart</span>
											</a>
										</li>
									</ul>
								</div>
								{/* <!-- /grid_item --> */}
							</div>
							{/* <!-- /col --> */}
							<div className="col-6 col-md-4 col-xl-3">
								<div className="grid_item">
									<span className="ribbon hot">Hot</span>
									<figure>
										<a href="product-detail-1.html">
											<img
												className="img-fluid lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/assets/img/products/shoes/7.jpg"
												alt=""
											/>
											<img
												className="img-fluid lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/assets/img/products/shoes/7_b.jpg"
												alt=""
											/>
										</a>
									</figure>
									<div className="rating">
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star"></i>
									</div>
									<a href="product-detail-1.html">
										<h3>Armor Air Max 98</h3>
									</a>
									<div className="price_box">
										<span className="new_price">$115.00</span>
									</div>
									<ul>
										<li>
											<a
												href="#0"
												className="tooltip-1"
												data-bs-toggle="tooltip"
												data-bs-placement="left"
												title="Add to favorites">
												<i className="ti-heart"></i>
												<span>Add to favorites</span>
											</a>
										</li>
										<li>
											<a
												href="#0"
												className="tooltip-1"
												data-bs-toggle="tooltip"
												data-bs-placement="left"
												title="Add to compare">
												<i className="ti-control-shuffle"></i>
												<span>Add to compare</span>
											</a>
										</li>
										<li>
											<a
												href="#0"
												className="tooltip-1"
												data-bs-toggle="tooltip"
												data-bs-placement="left"
												title="Add to cart">
												<i className="ti-shopping-cart"></i>
												<span>Add to cart</span>
											</a>
										</li>
									</ul>
								</div>
								{/* <!-- /grid_item --> */}
							</div>
							{/* <!-- /col --> */}
							<div className="col-6 col-md-4 col-xl-3">
								<div className="grid_item">
									<span className="ribbon hot">Hot</span>
									<figure>
										<a href="product-detail-1.html">
											<img
												className="img-fluid lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/assets/img/products/shoes/8.jpg"
												alt=""
											/>
											<img
												className="img-fluid lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/assets/img/products/shoes/8_b.jpg"
												alt=""
											/>
										</a>
									</figure>
									<div className="rating">
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star"></i>
									</div>
									<a href="product-detail-1.html">
										<h3>Armor Air Max 720</h3>
									</a>
									<div className="price_box">
										<span className="new_price">$120.00</span>
									</div>
									<ul>
										<li>
											<a
												href="#0"
												className="tooltip-1"
												data-bs-toggle="tooltip"
												data-bs-placement="left"
												title="Add to favorites">
												<i className="ti-heart"></i>
												<span>Add to favorites</span>
											</a>
										</li>
										<li>
											<a
												href="#0"
												className="tooltip-1"
												data-bs-toggle="tooltip"
												data-bs-placement="left"
												title="Add to compare">
												<i className="ti-control-shuffle"></i>
												<span>Add to compare</span>
											</a>
										</li>
										<li>
											<a
												href="#0"
												className="tooltip-1"
												data-bs-toggle="tooltip"
												data-bs-placement="left"
												title="Add to cart">
												<i className="ti-shopping-cart"></i>
												<span>Add to cart</span>
											</a>
										</li>
									</ul>
								</div>
								{/* <!-- /grid_item --> */}
							</div>
							{/* <!-- /col --> */}
						</div>
						{/* <!-- /row --> */}
					</div>
					{/* <!-- /container --> */}

					<div
						className="featured lazy"
						data-bg="url(/assets/img/featured_home.jpg)">
						<div
							className="opacity-mask d-flex align-items-center"
							data-opacity-mask="rgba(0, 0, 0, 0.5)">
							<div className="container margin_60">
								<div className="row justify-content-center justify-content-md-start">
									<div className="col-lg-6 wow" data-wow-offset="150">
										<h3>
											Armor
											<br />
											Air Color 720
										</h3>
										<p>
											Lightweight cushioning and durable support
											with a Phylon midsole
										</p>
										<div className="feat_text_block">
											<div className="price_box">
												<span className="new_price">$90.00</span>
												<span className="old_price">$170.00</span>
											</div>
											<a
												className="btn_1"
												href="listing-grid-1-full.html"
												role="button">
												Shop Now
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- /featured --> */}

					<div className="container margin_60_35">
						<div className="main_title">
							<h2>Featured</h2>
							<span>Products</span>
							<p>
								Cum doctus civibus efficiantur in imperdiet deterruisset
							</p>
						</div>
						<div className="owl-carousel owl-theme products_carousel">
							<div className="item">
								<div className="grid_item">
									<span className="ribbon new">New</span>
									<figure>
										<a href="product-detail-1.html">
											<img
												className="owl-lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/assets/img/products/shoes/4.jpg"
												alt=""
											/>
										</a>
									</figure>
									<div className="rating">
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star"></i>
									</div>
									<a href="product-detail-1.html">
										<h3>ACG React Terra</h3>
									</a>
									<div className="price_box">
										<span className="new_price">$110.00</span>
									</div>
									<ul>
										<li>
											<a
												href="#0"
												className="tooltip-1"
												data-bs-toggle="tooltip"
												data-bs-placement="left"
												title="Add to favorites">
												<i className="ti-heart"></i>
												<span>Add to favorites</span>
											</a>
										</li>
										<li>
											<a
												href="#0"
												className="tooltip-1"
												data-bs-toggle="tooltip"
												data-bs-placement="left"
												title="Add to compare">
												<i className="ti-control-shuffle"></i>
												<span>Add to compare</span>
											</a>
										</li>
										<li>
											<a
												href="#0"
												className="tooltip-1"
												data-bs-toggle="tooltip"
												data-bs-placement="left"
												title="Add to cart">
												<i className="ti-shopping-cart"></i>
												<span>Add to cart</span>
											</a>
										</li>
									</ul>
								</div>
								{/* <!-- /grid_item --> */}
							</div>
							{/* <!-- /item --> */}
							<div className="item">
								<div className="grid_item">
									<span className="ribbon new">New</span>
									<figure>
										<a href="product-detail-1.html">
											<img
												className="owl-lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/assets/img/products/shoes/5.jpg"
												alt=""
											/>
										</a>
									</figure>
									<div className="rating">
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star"></i>
									</div>
									<a href="product-detail-1.html">
										<h3>Air Zoom Alpha</h3>
									</a>
									<div className="price_box">
										<span className="new_price">$140.00</span>
									</div>
									<ul>
										<li>
											<a
												href="#0"
												className="tooltip-1"
												data-bs-toggle="tooltip"
												data-bs-placement="left"
												title="Add to favorites">
												<i className="ti-heart"></i>
												<span>Add to favorites</span>
											</a>
										</li>
										<li>
											<a
												href="#0"
												className="tooltip-1"
												data-bs-toggle="tooltip"
												data-bs-placement="left"
												title="Add to compare">
												<i className="ti-control-shuffle"></i>
												<span>Add to compare</span>
											</a>
										</li>
										<li>
											<a
												href="#0"
												className="tooltip-1"
												data-bs-toggle="tooltip"
												data-bs-placement="left"
												title="Add to cart">
												<i className="ti-shopping-cart"></i>
												<span>Add to cart</span>
											</a>
										</li>
									</ul>
								</div>
								{/* <!-- /grid_item --> */}
							</div>
							{/* <!-- /item --> */}
							<div className="item">
								<div className="grid_item">
									<span className="ribbon hot">Hot</span>
									<figure>
										<a href="product-detail-1.html">
											<img
												className="owl-lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/assets/img/products/shoes/8.jpg"
												alt=""
											/>
										</a>
									</figure>
									<div className="rating">
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star"></i>
									</div>
									<a href="product-detail-1.html">
										<h3>Air Color 720</h3>
									</a>
									<div className="price_box">
										<span className="new_price">$120.00</span>
									</div>
									<ul>
										<li>
											<a
												href="#0"
												className="tooltip-1"
												data-bs-toggle="tooltip"
												data-bs-placement="left"
												title="Add to favorites">
												<i className="ti-heart"></i>
												<span>Add to favorites</span>
											</a>
										</li>
										<li>
											<a
												href="#0"
												className="tooltip-1"
												data-bs-toggle="tooltip"
												data-bs-placement="left"
												title="Add to compare">
												<i className="ti-control-shuffle"></i>
												<span>Add to compare</span>
											</a>
										</li>
										<li>
											<a
												href="#0"
												className="tooltip-1"
												data-bs-toggle="tooltip"
												data-bs-placement="left"
												title="Add to cart">
												<i className="ti-shopping-cart"></i>
												<span>Add to cart</span>
											</a>
										</li>
									</ul>
								</div>
								{/* <!-- /grid_item --> */}
							</div>
							{/* <!-- /item --> */}
							<div className="item">
								<div className="grid_item">
									<span className="ribbon off">-30%</span>
									<figure>
										<a href="product-detail-1.html">
											<img
												className="owl-lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/assets/img/products/shoes/2.jpg"
												alt=""
											/>
										</a>
									</figure>
									<div className="rating">
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star"></i>
									</div>
									<a href="product-detail-1.html">
										<h3>Okwahn II</h3>
									</a>
									<div className="price_box">
										<span className="new_price">$90.00</span>
										<span className="old_price">$170.00</span>
									</div>
									<ul>
										<li>
											<a
												href="#0"
												className="tooltip-1"
												data-bs-toggle="tooltip"
												data-bs-placement="left"
												title="Add to favorites">
												<i className="ti-heart"></i>
												<span>Add to favorites</span>
											</a>
										</li>
										<li>
											<a
												href="#0"
												className="tooltip-1"
												data-bs-toggle="tooltip"
												data-bs-placement="left"
												title="Add to compare">
												<i className="ti-control-shuffle"></i>
												<span>Add to compare</span>
											</a>
										</li>
										<li>
											<a
												href="#0"
												className="tooltip-1"
												data-bs-toggle="tooltip"
												data-bs-placement="left"
												title="Add to cart">
												<i className="ti-shopping-cart"></i>
												<span>Add to cart</span>
											</a>
										</li>
									</ul>
								</div>
								{/* <!-- /grid_item --> */}
							</div>
							{/* <!-- /item --> */}
							<div className="item">
								<div className="grid_item">
									<span className="ribbon off">-50%</span>
									<figure>
										<a href="product-detail-1.html">
											<img
												className="owl-lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/assets/img/products/shoes/3.jpg"
												alt=""
											/>
										</a>
									</figure>
									<div className="rating">
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star"></i>
									</div>
									<a href="product-detail-1.html">
										<h3>Air Wildwood ACG</h3>
									</a>
									<div className="price_box">
										<span className="new_price">$75.00</span>
										<span className="old_price">$155.00</span>
									</div>
									<ul>
										<li>
											<a
												href="#0"
												className="tooltip-1"
												data-bs-toggle="tooltip"
												data-bs-placement="left"
												title="Add to favorites">
												<i className="ti-heart"></i>
												<span>Add to favorites</span>
											</a>
										</li>
										<li>
											<a
												href="#0"
												className="tooltip-1"
												data-bs-toggle="tooltip"
												data-bs-placement="left"
												title="Add to compare">
												<i className="ti-control-shuffle"></i>
												<span>Add to compare</span>
											</a>
										</li>
										<li>
											<a
												href="#0"
												className="tooltip-1"
												data-bs-toggle="tooltip"
												data-bs-placement="left"
												title="Add to cart">
												<i className="ti-shopping-cart"></i>
												<span>Add to cart</span>
											</a>
										</li>
									</ul>
								</div>
								{/* <!-- /grid_item --> */}
							</div>
							{/* <!-- /item --> */}
						</div>
						{/* <!-- /products_carousel --> */}
					</div>
					{/* <!-- /container --> */}

					<div className="bg_gray">
						<div className="container margin_30">
							<div id="brands" className="owl-carousel owl-theme">
								<div className="item">
									<a href="#0">
										<img
											src="/assets/img/brands/placeholder_brands.png"
											data-src="/assets/img/brands/logo_1.png"
											alt=""
											className="owl-lazy"
										/>
									</a>
								</div>
								{/* <!-- /item --> */}
								<div className="item">
									<a href="#0">
										<img
											src="/assets/img/brands/placeholder_brands.png"
											data-src="/assets/img/brands/logo_2.png"
											alt=""
											className="owl-lazy"
										/>
									</a>
								</div>
								{/* <!-- /item --> */}
								<div className="item">
									<a href="#0">
										<img
											src="/assets/img/brands/placeholder_brands.png"
											data-src="/assets/img/brands/logo_3.png"
											alt=""
											className="owl-lazy"
										/>
									</a>
								</div>
								{/* <!-- /item --> */}
								<div className="item">
									<a href="#0">
										<img
											src="/assets/img/brands/placeholder_brands.png"
											data-src="/assets/img/brands/logo_4.png"
											alt=""
											className="owl-lazy"
										/>
									</a>
								</div>
								{/* <!-- /item --> */}
								<div className="item">
									<a href="#0">
										<img
											src="/assets/img/brands/placeholder_brands.png"
											data-src="/assets/img/brands/logo_5.png"
											alt=""
											className="owl-lazy"
										/>
									</a>
								</div>
								{/* <!-- /item --> */}
								<div className="item">
									<a href="#0">
										<img
											src="/assets/img/brands/placeholder_brands.png"
											data-src="/assets/img/brands/logo_6.png"
											alt=""
											className="owl-lazy"
										/>
									</a>
								</div>
								{/* <!-- /item --> */}
							</div>
							{/* <!-- /carousel --> */}
						</div>
						{/* <!-- /container --> */}
					</div>
					{/* <!-- /bg_gray --> */}

					<div className="container margin_60_35">
						<div className="main_title">
							<h2>Latest News</h2>
							<span>Blog</span>
							<p>
								Cum doctus civibus efficiantur in imperdiet deterruisset
							</p>
						</div>
						<div className="row">
							<div className="col-lg-6">
								<a className="box_news" href="blog.html">
									<figure>
										<img
											src="/assets/img/blog-thumb-placeholder.jpg"
											data-src="/assets/img/blog-thumb-1.jpg"
											alt=""
											width="400"
											height="266"
											className="lazy"
										/>
										<figcaption>
											<strong>28</strong>Dec
										</figcaption>
									</figure>
									<ul>
										<li>by Mark Twain</li>
										<li>20.11.2017</li>
									</ul>
									<h4>Pri oportere scribentur eu</h4>
									<p>
										Cu eum alia elit, usu in eius appareat, deleniti
										sapientem honestatis eos ex. In ius esse ullum
										vidisse....
									</p>
								</a>
							</div>
							{/* <!-- /box_news --> */}
							<div className="col-lg-6">
								<a className="box_news" href="blog.html">
									<figure>
										<img
											src="/assets/img/blog-thumb-placeholder.jpg"
											data-src="/assets/img/blog-thumb-2.jpg"
											alt=""
											width="400"
											height="266"
											className="lazy"
										/>
										<figcaption>
											<strong>28</strong>Dec
										</figcaption>
									</figure>
									<ul>
										<li>By Jhon Doe</li>
										<li>20.11.2017</li>
									</ul>
									<h4>Duo eius postea suscipit ad</h4>
									<p>
										Cu eum alia elit, usu in eius appareat, deleniti
										sapientem honestatis eos ex. In ius esse ullum
										vidisse....
									</p>
								</a>
							</div>
							{/* <!-- /box_news --> */}
							<div className="col-lg-6">
								<a className="box_news" href="blog.html">
									<figure>
										<img
											src="/assets/img/blog-thumb-placeholder.jpg"
											data-src="/assets/img/blog-thumb-3.jpg"
											alt=""
											width="400"
											height="266"
											className="lazy"
										/>
										<figcaption>
											<strong>28</strong>Dec
										</figcaption>
									</figure>
									<ul>
										<li>By Luca Robinson</li>
										<li>20.11.2017</li>
									</ul>
									<h4>Elitr mandamus cu has</h4>
									<p>
										Cu eum alia elit, usu in eius appareat, deleniti
										sapientem honestatis eos ex. In ius esse ullum
										vidisse....
									</p>
								</a>
							</div>
							{/* <!-- /box_news --> */}
							<div className="col-lg-6">
								<a className="box_news" href="blog.html">
									<figure>
										<img
											src="/assets/img/blog-thumb-placeholder.jpg"
											data-src="/assets/img/blog-thumb-4.jpg"
											alt=""
											width="400"
											height="266"
											className="lazy"
										/>
										<figcaption>
											<strong>28</strong>Dec
										</figcaption>
									</figure>
									<ul>
										<li>By Paula Rodrigez</li>
										<li>20.11.2017</li>
									</ul>
									<h4>Id est adhuc ignota delenit</h4>
									<p>
										Cu eum alia elit, usu in eius appareat, deleniti
										sapientem honestatis eos ex. In ius esse ullum
										vidisse....
									</p>
								</a>
							</div>
							{/* <!-- /box_news --> */}
						</div>
						{/* <!-- /row --> */}
					</div>
					{/* <!-- /container --> */}
				</main>
				{/* <!-- /main --> */}

				<footer className="revealed">
					<div className="container">
						<div className="row">
							<div className="col-lg-3 col-md-6">
								<h3 data-bs-target="#collapse_1">Quick Links</h3>
								<div
									className="collapse dont-collapse-sm links"
									id="collapse_1">
									<ul>
										<li>
											<a href="about.html">About us</a>
										</li>
										<li>
											<a href="help.html">Faq</a>
										</li>
										<li>
											<a href="help.html">Help</a>
										</li>
										<li>
											<a href="account.html">My account</a>
										</li>
										<li>
											<a href="blog.html">Blog</a>
										</li>
										<li>
											<a href="contacts.html">Contacts</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<h3 data-bs-target="#collapse_2">Categories</h3>
								<div
									className="collapse dont-collapse-sm links"
									id="collapse_2">
									<ul>
										<li>
											<a href="listing-grid-1-full.html">Clothes</a>
										</li>
										<li>
											<a href="listing-grid-2-full.html">
												Electronics
											</a>
										</li>
										<li>
											<a href="listing-grid-1-full.html">
												Furniture
											</a>
										</li>
										<li>
											<a href="listing-grid-3.html">Glasses</a>
										</li>
										<li>
											<a href="listing-grid-1-full.html">Shoes</a>
										</li>
										<li>
											<a href="listing-grid-1-full.html">Watches</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<h3 data-bs-target="#collapse_3">Contacts</h3>
								<div
									className="collapse dont-collapse-sm contacts"
									id="collapse_3">
									<ul>
										<li>
											<i className="ti-home"></i>97845 Baker st. 567
											<br />
											Los Angeles - US
										</li>
										<li>
											<i className="ti-headphone-alt"></i>+94
											423-23-221
										</li>
										<li>
											<i className="ti-email"></i>
											<a href="#0">info@allaia.com</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<h3 data-bs-target="#collapse_4">Keep in touch</h3>
								<div
									className="collapse dont-collapse-sm"
									id="collapse_4">
									<div id="newsletter">
										<div className="form-group">
											<input
												type="email"
												name="email_newsletter"
												id="email_newsletter"
												className="form-control"
												placeholder="Your email"
											/>
											<button type="submit" id="submit-newsletter">
												<i className="ti-angle-double-right"></i>
											</button>
										</div>
									</div>
									<div className="follow_us">
										<h5>Follow Us</h5>
										<ul>
											<li>
												<a href="#0">
													<i className="bi bi-facebook"></i>
												</a>
											</li>
											<li>
												<a href="#0">
													<i className="bi bi-twitter-x"></i>
												</a>
											</li>
											<li>
												<a href="#0">
													<i className="bi bi-instagram"></i>
												</a>
											</li>
											<li>
												<a href="#0">
													<i className="bi bi-tiktok"></i>
												</a>
											</li>
											<li>
												<a href="#0">
													<i className="bi bi-whatsapp"></i>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- /row--> */}
						<hr />
						<div className="row add_bottom_25">
							<div className="col-lg-6">
								<ul className="footer-selector clearfix">
									<li>
										<div className="styled-select lang-selector">
											<select>
												<option value="English" selected>
													English
												</option>
												<option value="French">French</option>
												<option value="Spanish">Spanish</option>
												<option value="Russian">Russian</option>
											</select>
										</div>
									</li>
									<li>
										<div className="styled-select currency-selector">
											<select>
												<option value="US Dollars" selected>
													US Dollars
												</option>
												<option value="Euro">Euro</option>
											</select>
										</div>
									</li>
									<li>
										<img
											src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
											data-src="/assets/img/cards_all.svg"
											alt=""
											width="198"
											height="30"
											className="lazy"
										/>
									</li>
								</ul>
							</div>
							<div className="col-lg-6">
								<ul className="additional_links">
									<li>
										<a href="#0">Terms and conditions</a>
									</li>
									<li>
										<a href="#0">Privacy</a>
									</li>
									<li>
										<span>© 2024 Allaia</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</footer>
				{/* <!--/footer--> */}
			</div>
			{/* <!-- page --> */}

			<div id="toTop"></div>
			{/* <!-- Back to top button --> */}
		</>
	);
}

export default Homepage;
