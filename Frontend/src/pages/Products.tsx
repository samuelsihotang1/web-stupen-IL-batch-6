import { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CategoriesDropdown from '../utils/CategoriesDropdown'; // Correct import
import '/public/assets/css/home_1.css';
import { loadScripts } from '../utils/loadScripts.ts';
import '/public/assets/css/listing.css';

function Products() {
	useEffect(() => {
		const scripts = [
			'/assets/js/sticky_sidebar.min.js',
			'/assets/js/specific_listing.js',
			'/assets/js/carousel-home.min.js',
		];

		loadScripts(scripts);
	}, []);

	return (
		<>
			<div id="page">
				<Header isSticky={false} />
				<main>
					<div id="carousel-home">
						<div className="owl-carousel owl-theme">
							<div
								className="owl-slide cover"
								style={{
									backgroundImage: "url('/real_assets/img/slides/banner.png')",
								}}>
								<div
									className="opacity-mask d-flex align-items-center"
									data-opacity-mask="rgba(255, 255, 255, 0)">
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
														"Satu langkah kecil untuk planet yang lebih hijau."
													</p>
													<div className="owl-slide-animated owl-slide-cta">
														<a
															className="btn_1 gray"
															href="listing-grid-1-full.html"
															role="button"
															style={{ marginRight: '1vw' }}>
															DAFTAR
														</a>
														<a
															className="btn_1 gray"
															href="listing-grid-1-full.html"
															role="button">
															BELANJA
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
											<option value="rating">Urutkan berdasarkan Terkait</option>
											<option value="date">Urutkan berdasarkan Terlaris</option>
											<option value="price">Urutkan berdasarkan Harga</option>
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
												data-src="/real_assets/img/products/vas-bunga-botol-kaca.png"
												alt=""
											/>
											<img
												className="img-fluid lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/real_assets/img/products/vas-bunga-botol-kaca.png"
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
										<h3>Vas Bunga</h3>
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
												data-src="/real_assets/img/products/lampu-hias.png"
												alt=""
											/>
											<img
												className="img-fluid lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/real_assets/img/products/lampu-hias.png"
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
										<h3>Lampu Hias</h3>
									</a>
									<div className="price_box">
										<span className="new_price">Rp. 30.000</span>
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
												data-src="/real_assets/img/products/rompi-rajut.png"
												alt=""
											/>
											<img
												className="img-fluid lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/real_assets/img/products/rompi-rajut.png"
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
										<h3>Rompi Rajut</h3>
									</a>
									<div className="price_box">
										<span className="new_price">Rp. 125.000</span>
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
												data-src="/real_assets/img/products/tas-kain.png"
												alt=""
											/>
											<img
												className="img-fluid lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/real_assets/img/products/tas-kain.png"
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
										<h3>Tas Ransel</h3>
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
												data-src="/real_assets/img/products/hiasan-dinding.png"
												alt=""
											/>
											<img
												className="img-fluid lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/real_assets/img/products/hiasan-dinding.png"
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
												data-src="/real_assets/img/products/tempat-pensil.png"
												alt=""
											/>
											<img
												className="img-fluid lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/real_assets/img/products/tempat-pensil.png"
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
										<h3>Tempat Pensil</h3>
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
												data-src="/real_assets/img/products/pupuk-organik.png"
												alt=""
											/>
											<img
												className="img-fluid lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/real_assets/img/products/pupuk-organik.png"
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
										<h3>Pupuk Organik Cair</h3>
									</a>
									<div className="price_box">
										<span className="new_price">Rp. 30.000</span>
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
												data-src="/real_assets/img/products/pupuk.png"
												alt=""
											/>
											<img
												className="img-fluid lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/real_assets/img/products/pupuk.png"
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
										<h3>Pupuk Organik</h3>
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
							<div className="col-6 col-md-4 col-xl-3">
								<div className="grid_item">
									<figure>
										<a href="/detailproduct">
											<img
												className="img-fluid lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/real_assets/img/products/hiasan-dinding-tempel.png"
												alt=""
											/>
											<img
												className="img-fluid lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/real_assets/img/products/hiasan-dinding-tempel.png"
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
										<h3>Hiasan Dinding</h3>
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

						<div className="pagination__wrapper">
							<ul className="pagination">
								<li>
									<a href="/Products4" className="prev" title="previous page">
										&#10094;
									</a>
								</li>
								<li>
									<a href="#0" className="active">
										1
									</a>
								</li>
								<li>
									<a href="/Products2">2</a>
								</li>

								<li>
									<a href="#0">3</a>
								</li>
								<li>
									<a href="#0">4</a>
								</li>
								<li>
									<a href="#0" className="next" title="next page">
										&#10095;
									</a>
								</li>
							</ul>
						</div>
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
export default Products;