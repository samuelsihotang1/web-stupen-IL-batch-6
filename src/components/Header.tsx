function Header() {
	return (
		<>
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
										<a href="#" className="open_close" id="close_in">
											<i className="ti-close"></i>
										</a>
									</div>
									<ul>
										<li className="submenu">
											<a href="##" className="show-submenu">
												Home
											</a>
										</li>
										<li className="megamenu submenu">
											<a href="##" className="show-submenu-mega">
												Artikel
											</a>
											{/* <!-- /menu-wrapper --> */}
										</li>
										<li className="submenu">
											<a href="##" className="show-submenu">
												Produk
											</a>
										</li>
										<li>
											<a href="blog.html">Tentang</a>
										</li>
									</ul>
								</div>
								{/* <!--/main-menu --> */}
							</nav>
							<div className="col-xl-3 col-lg-5 col-md-6 d-none d-md-block">
								<div className="custom-search-input">
									<input
										type="text"
										placeholder="Cari produk..."
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
												<a href="account.html" className="btn_1">
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
																	1x Armor Air x Fear
																</span>
																$90.00
															</strong>
														</a>
														<a href="#0" className="action">
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
														<a href="0" className="action">
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
							placeholder="Cari produk..."
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
		</>
	);
}

export default Header;
