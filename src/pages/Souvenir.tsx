import { useEffect } from 'react';
import Footer from '../components/Footer.tsx';
import Header from '../components/Header.tsx';
import '/public/assets/css/home_1.css';
import CategoriesDropdown from '../utils/CategoriesDropdown.tsx'; // Correct import

import { loadScripts } from '../utils/loadScripts.ts';
let isScriptLoaded = false;
import '/public/assets/css/listing.css';

function Souvenir() {
	useEffect(() => {
		if (!isScriptLoaded) {
			// Specific Scripts
			const script = document.createElement('script');
			const scripts = [
				'/assets/js/sticky_sidebar.min.js',
				'/assets/js/specific_listing.js',
			];
			script.src = '/assets/js/carousel-home.min.js';
			script.async = true;
			document.body.appendChild(script);

			isScriptLoaded = true;
			loadScripts(scripts);

			return () => {
				document.body.removeChild(script);
			};
		}
	}, []);

	return (
		<>
			<div id="page">
				<Header isSticky={false} />

				<main> 
					<div id="stick_here"></div>
					<div className="toolbox elemento_stick">
						<div className="container">
							<ul className="clearfix">
								<li>
									<div className="sort_select">
										<select name="sort" id="sort">
											<option value="popularity" selected>
												Urutkan berdasarkan Terbaru
											</option>
											<option value="rating">
												Urutkan berdasarkan Terkait
											</option>
											<option value="date">
												Urutkan berdasarkan Terlaris
											</option>
											<option value="price">
												Urutkan berdasarkan Harga
											</option>
										</select>
									</div>
								</li>
								<li>
									<a
										data-bs-toggle="collapse"
										href="#filters"
										role="button"
										aria-expanded="false"
										aria-controls="filters">
										<i className="ti-filter"></i>
										<span>Filter</span>
									</a>
								</li>
							</ul>
							<div className="collapse" id="filters">
								<div className="row small-gutters filters_listing_1">
									<div className="col-lg-6 col-md-6 col-sm-6">
										<div className="dropdown">
											<CategoriesDropdown />

										</div>
										{/* <!-- /dropdown --> */}
									</div>
									<div className="col-lg-6 col-md-6 col-sm-6">
										<div className="dropdown">
											<a
												href="#"
												data-bs-toggle="dropdown"
												className="drop">
												Warna
											</a>
											<div className="dropdown-menu">
												<div className="filter_type">
													<ul>
														<li>
															<label className="container_check">
																Biru <small>06</small>
																<input type="checkbox" />
																<span className="checkmark"></span>
															</label>
														</li>
														<li>
															<label className="container_check">
																Merah <small>12</small>
																<input type="checkbox" />
																<span className="checkmark"></span>
															</label>
														</li>
														<li>
															<label className="container_check">
																Jingga <small>17</small>
																<input type="checkbox" />
																<span className="checkmark"></span>
															</label>
														</li>
														<li>
															<label className="container_check">
																Hitam <small>43</small>
																<input type="checkbox" />
																<span className="checkmark"></span>
															</label>
														</li>
													</ul>
													<a href="#0" className="apply_filter">
														Terapkan
													</a>
												</div>
											</div>
										</div>
										{/* <!-- /dropdown --> */}
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- /toolbox --> */}

					<div className="container margin_30">
						<div className="row small-gutters">
							<div className="col-6 col-md-4 col-xl-3">
								<div className="grid_item">
									<figure>
										<a href="/detailproduct">
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
									<a href="/detailproduct">
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
										<a href="/detailproduct">
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
									<a href="/detailproduct">
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
										<a href="/detailproduct">
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
									<a href="/detailproduct">
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
										<a href="/detailproduct">
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
									<a href="/detailproduct">
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

						<div className="row small-gutters">
							<div className="col-6 col-md-4 col-xl-3">
								<div className="grid_item">
									<figure>
										<a href="/detailproduct">
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
									<a href="/detailproduct">
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
										<a href="/detailproduct">
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
									<a href="/detailproduct">
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
										<a href="/detailproduct">
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
									<a href="/detailproduct">
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
										<a href="/detailproduct">
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
									<a href="/detailproduct">
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

						<div className="row small-gutters">
							<div className="col-6 col-md-4 col-xl-3">
								<div className="grid_item">
									<figure>
										<a href="/detailproduct">
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
									<a href="/detailproduct">
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
										<a href="/detailproduct">
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
									<a href="/detailproduct">
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
										<a href="/detailproduct">
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
									<a href="/detailproduct">
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
										<a href="/detailproduct">
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
									<a href="/detailproduct">
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

						<div className="row small-gutters">
							<div className="col-6 col-md-4 col-xl-3">
								<div className="grid_item">
									<figure>
										<a href="/detailproduct">
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
									<a href="/detailproduct">
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
										<a href="/detailproduct">
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
									<a href="/detailproduct">
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
										<a href="/detailproduct">
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
									<a href="/detailproduct">
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
										<a href="/detailproduct">
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
									<a href="/detailproduct">
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
				</main>
				{/* <!-- /main --> */}
				<Footer />
			</div>
			{/* <!-- page --> */}

			<div id="toTop"></div>
			{/* <!-- Back to top button --> */}
		</>
	);
}

export default Souvenir;
