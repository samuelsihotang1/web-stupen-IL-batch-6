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
												className="for-logo"
												src="/real_assets/img/logo.png"
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
										{/* <li></li> */}
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
											<div className="dropdown hidden-for-web">
												<a href="##" className="btn_search_mob">
													<span>Search</span>
												</a>
											</div>
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
							{/* <!--/owl-slide--> */}
							<div
								className="owl-slide cover"
								style={{
									backgroundImage:
										"url('/real_assets/img/slides/frame1.png')",
								}}>
								<div
									className="opacity-mask d-flex align-items-center"
									data-opacity-mask="rgba(0, 0, 0, 0.25)">
									<div className="container">
										<div className="row justify-content-center justify-content-md-start">
											<div className="col-lg-6 static">
												<div className="slide-text white">
													<h2 className="owl-slide-animated owl-slide-title">
														JAGALAH LINGKUNGAN!
													</h2>
													<p className="owl-slide-animated owl-slide-subtitle">
														Mengubah plastik menjadi peluang:
														<br />
														"Satu langkah kecil untuk planet
														yang lebih hijau."
													</p>
													<div className="owl-slide-animated owl-slide-cta">
														<a
															className="btn_1"
															href="listing-grid-1-full.html"
															role="button"
															style={{
																marginRight: '1vw',
															}}>
															Daftar
														</a>
														<a
															className="btn_1"
															href="listing-grid-1-full.html"
															role="button">
															Belanja
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div id="icon_drag_mobile"></div>
					</div>
					{/* <!--/carousel--> */}

					<div className="container margin_60_35">
						<div className="main_title">
							<h2 style={{ paddingBottom: '2vh' }}>ECO WARRIORS</h2>
							<span>ABOUT</span>
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

					<div className="container margin_60_35">
						<div className="main_title">
							<h2>PRODUK</h2>
							<span>UTAMA</span>
						</div>
						<div className="row small-gutters">
							<div className="col-6 col-md-4 col-xl-3">
								<div className="grid_item">
									<figure>
										<a href="product-detail-1.html">
											<img
												className="img-fluid lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/real_assets/img/products/tas-botol-plastik-1.png"
												alt=""
											/>
											<img
												className="img-fluid lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/real_assets/img/products/tas-botol-plastik-1.png"
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
										<h3>Tas Tutup Botol</h3>
									</a>
									<div className="price_box">
										<span className="new_price">Rp. 50.000</span>
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
									<figure>
										<a href="product-detail-1.html">
											<img
												className="img-fluid lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/real_assets/img/products/gantungan-kunci.png"
												alt=""
											/>
											<img
												className="img-fluid lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/real_assets/img/products/gantungan-kunci.png"
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
										<h3>Gantungan Kunci</h3>
									</a>
									<div className="price_box">
										<span className="new_price">Rp. 25.000</span>
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
									<figure>
										<a href="product-detail-1.html">
											<img
												className="img-fluid lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/real_assets/img/products/gaun-kertas.png"
												alt=""
											/>
											<img
												className="img-fluid lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/real_assets/img/products/gaun-kertas.png"
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
										<h3>Gaun Kertas</h3>
									</a>
									<div className="price_box">
										<span className="new_price">Rp. 150.000</span>
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
									<figure>
										<a href="product-detail-1.html">
											<img
												className="img-fluid lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/real_assets/img/products/hiasan-dinding-gantung.png"
												alt=""
											/>
											<img
												className="img-fluid lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/real_assets/img/products/hiasan-dinding-gantung.png"
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
										<h3>Hiasan Dinding Gantung</h3>
									</a>
									<div className="price_box">
										<span className="new_price">Rp. 20.000</span>
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

					<div className="container margin_60_35">
						<div className="main_title">
							<h2>ARTIKEL</h2>
							<span>TERBARU</span>
						</div>
						<div className="row">
							<div className="col-lg-6">
								<a className="box_news" href="blog.html">
									<figure>
										<img
											src="/assets/img/blog-thumb-placeholder.jpg"
											data-src="/real_assets/img/news/bank-sampah.png"
											alt=""
											width="400"
											height="266"
											className="lazy"
										/>
										<figcaption>
											<strong>12</strong>Mei
										</figcaption>
									</figure>
									<ul>
										<li>by Admin</li>
										<li>Minggu, 12 Mei 2024</li>
									</ul>
									<h4>Solusi untuk membantu melestarikan lingkungan</h4>
									<p>
										Bank sampah adalah inisiatif lingkungan yang
										mengumpulkan, mengelola, dan mendaur ulang sampah
										dari masyarakat....
									</p>
								</a>
							</div>
							{/* <!-- /box_news --> */}
							<div className="col-lg-6">
								<a className="box_news" href="blog.html">
									<figure>
										<img
											src="/assets/img/blog-thumb-placeholder.jpg"
											data-src="/real_assets/img/news/persoalan-persampahan.png"
											alt=""
											width="400"
											height="266"
											className="lazy"
										/>
										<figcaption>
											<strong>12</strong>Mei
										</figcaption>
									</figure>
									<ul>
										<li>By Admin</li>
										<li>12 Mei 2024</li>
									</ul>
									<h4>Mengatasi Persoalan Persampahan</h4>
									<p>
										Mengatasi persoalan persampahan merupakan upaya
										yang dilakukan untuk mengelola sampah agar tidak
										menjadi masalah....
									</p>
								</a>
							</div>
							{/* <!-- /box_news --> */}
							<div className="col-lg-6">
								<a className="box_news" href="blog.html">
									<figure>
										<img
											src="/assets/img/blog-thumb-placeholder.jpg"
											data-src="/real_assets/img/news/ibu-ibu.png"
											alt=""
											width="400"
											height="266"
											className="lazy"
										/>
										<figcaption>
											<strong>12</strong>Mei
										</figcaption>
									</figure>
									<ul>
										<li>By Admin</li>
										<li>12 Mei 2024</li>
									</ul>
									<h4>Ibu-Ibu Rumah Tangga di Sulawesi Tangga</h4>
									<p>
										Ibu-ibu rumah tangga di Sulawesi memiliki peran
										yang sangat penting dalam kehidupan keluarga dan
										komunitas mereka....
									</p>
								</a>
							</div>
							{/* <!-- /box_news --> */}
							<div className="col-lg-6">
								<a className="box_news" href="blog.html">
									<figure>
										<img
											src="/assets/img/blog-thumb-placeholder.jpg"
											data-src="/real_assets/img/news/ibu-rumah-tangga.webp"
											alt=""
											width="400"
											height="266"
											className="lazy"
										/>
										<figcaption>
											<strong>12</strong>Mei
										</figcaption>
									</figure>
									<ul>
										<li>By Admin</li>
										<li>12 Mei 2024</li>
									</ul>
									<h4>
										Peran Ganda Ibu Rumah Tangga di Sulawesi dalam
										Kehidupan Modern
									</h4>
									<p>
										Ibu rumah tangga di Sulawesi menghadapi tantangan
										unik dalam kehidupan modern sambil mempertahankan
										tradisi dan budaya lokal....
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
							<div className="col-lg-4 col-md-6">
								<h3 data-bs-target="#collapse_1">Jagalah Lingkungan !</h3>
								<div
									className="collapse dont-collapse-sm links"
									id="collapse_1">
									<ul>
										<li>
											<p className="white-text">
												Mengubah plastik menjadi peluang:
												<br />
												Satu langkah kecil untuk bumi yang lebih
												hijau.
											</p>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<h3 data-bs-target="#collapse_3">Hubungi</h3>
								<div
									className="collapse dont-collapse-sm contacts"
									id="collapse_3">
									<ul>
										<li>
											<i className="ti-home"></i>Desa Sidapurna,
											Kec. Dukuhturi,
											<br />
											Kab. Tegal
										</li>
										<li>
											<i className="ti-headphone-alt"></i>
											+88015-88888-9999
										</li>
										<li>
											<i className="ti-email"></i>
											<a href="#0">sampurna@gmail.com</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-2 col-md-6">
								<h3 data-bs-target="#collapse_2">Quick Link</h3>
								<div
									className="collapse dont-collapse-sm links"
									id="collapse_2">
									<ul>
										<li>
											<a href="listing-grid-1-full.html">Edukasi</a>
										</li>
										<li>
											<a href="listing-grid-2-full.html">Produk</a>
										</li>
										<li>
											<a href="listing-grid-1-full.html">Tentang</a>
										</li>
										<li>
											<a href="listing-grid-3.html">Kontak</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-2 col-md-6">
								<h3 data-bs-target="#collapse_4">Follow Us</h3>
								<div
									className="collapse dont-collapse-sm"
									id="collapse_4">
									<div className="follow_us">
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
						<div className="row">
							<div className="col-lg-12">
								<ul className="additional_links centering_additional_links">
									<li>
										<span>© Copyright 2024. All right reserved</span>
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
