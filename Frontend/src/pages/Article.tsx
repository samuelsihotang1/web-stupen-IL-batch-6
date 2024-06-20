import { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { loadScripts } from '../utils/loadScripts';
import '/public/assets/css/blog.css';
import '/public/assets/css/home_1.css';

function Article() {
	useEffect(() => {
		const scripts = ['/assets/js/carousel-home.min.js'];

		loadScripts(scripts);
	}, []);

	return (
		<>
			<div id="page">
				<Header />
				<main>
					<div id="carousel-home">
						<div className="owl-carousel owl-theme">
							{/* <!--/owl-slide--> */}
							<div
								className="owl-slide cover"
								style={{
									backgroundImage:
										"url('/real_assets/img/slides/banner.png')",
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
														"Satu langkah kecil untuk planet
														yang lebih hijau."
													</p>
													<div className="owl-slide-animated owl-slide-cta">
														<a
															className="btn_1 gray"
															href="listing-grid-1-full.html"
															role="button"
															style={{
																marginRight: '1vw',
															}}>
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
					{/* <!--/carousel--> */}

					<div className="container margin_30">
						<div className="page_header">
							<div className="breadcrumbs">
								<ul>
									<li>
										<a href="#">Home</a>
									</li>
									<li>
										<a href="#">Artikel</a>
									</li>
									<li>Tips &amp; Trik</li>
								</ul>
							</div>
							<h1>Tips &amp; Trik</h1>
						</div>
						{/* <!-- /page_header --> */}
						<div className="row">
							<div className="col-lg-9">
								<div className="widget search_blog d-block d-sm-block d-md-block d-lg-none">
									<div className="form-group">
										<input
											type="text"
											name="search"
											id="search"
											className="form-control"
											placeholder="Search.."
										/>
										<button type="submit">
											<i className="ti-search"></i>
										</button>
									</div>
								</div>
								{/* <!-- /widget --> */}
								<div className="row">
									<div className="col-md-6">
										<article className="blog">
											<figure>
												<a href="/detailartikel">
													<img
														src="/real_assets/img/news/bank-sampah.png"
														alt=""
													/>
													<div className="preview">
														<span>Baca lebih lanjut...</span>
													</div>
												</a>
											</figure>
											<div className="post_info">
												<small>Tips&Trik - 1 Mei 2017</small>
												<h2>
													<a href="/detailartikel">
														Tips dan Trik Efektif Mengelola
														Sampah Rumah Tangga
													</a>
												</h2>
												<p>
													Dalam artikel ini, kami akan membahas
													sepuluh tips dan trik efektif untuk
													mengelola sampah rumah tangga...
												</p>
											</div>
										</article>
										{/* <!-- /article --> */}
									</div>
									{/* <!-- /col --> */}
									<div className="col-md-6">
										<article className="blog">
											<figure>
												<a href="/detailartikel">
													<img
														src="/real_assets/img/news/3r.jpg"
														alt=""
													/>
													<div className="preview">
														<span>Baca lebih lanjut...</span>
													</div>
												</a>
											</figure>
											<div className="post_info">
												<small>Tips&Trik - 1 Mei 2017</small>
												<h2>
													<a href="/detailartikel">
														3R, Cara Efektif Pangkas Penggunaan Plastik di Dapur
													</a>
												</h2>
												<p>
													Salah satu penghasil sampah plastik terbesar adalah dari perlengkapan dapur. Dengan masifnya penggunaan...
												</p>
											</div>
										</article>
										{/* <!-- /article --> */}
									</div>
									{/* <!-- /col --> */}
									<div className="col-md-6">
										<article className="blog">
											<figure>
												<a href="/detailartikel">
													<img
														src="/real_assets/img/news/cara-mengelola-sampah.jpg"
														alt=""
													/>
													<div className="preview">
														<span>Baca lebih lanjut...</span>
													</div>
												</a>
											</figure>
											<div className="post_info">
												<small>Tips&Trik - 1 Mei 2017</small>
												<h2>
													<a href="/detailartikel">
														Apa yang Harus Dilakukan untuk Mengelola Sampah?
													</a>
												</h2>
												<p>
													Sampah harus dikelola dengan baik agar tidak menimbulkan kerusakan lingkungan, seperti pemanasan global, dan perubahan iklim.
												</p>
											</div>
										</article>
										{/* <!-- /article --> */}
									</div>
									{/* <!-- /col --> */}
									<div className="col-md-6">
										<article className="blog">
											<figure>
												<a href="/detailartikel">
													<img
														src="/real_assets/img/news/sampah-tiap-hari.jpg"
														alt=""
													/>
													<div className="preview">
														<span>Baca lebih lanjut...</span>
													</div>
												</a>
											</figure>
											<div className="post_info">
												<small>Tips&Trik - 1 Mei 2017</small>
												<h2>
													<a href="/detailartikel">
														Ada 3 Cara Mengolah Sampah yang Bisa Dilakukan Setiap Hari
													</a>
												</h2>
												<p>
													Berdasarkan data Direktorat Penanganan Sampah Kementerian Lingkungan Hidup dan Kehutanan, pada tahun 2021 terdapat 23,040,652.28 ton...
												</p>
											</div>
										</article>
										{/* <!-- /article --> */}
									</div>
									{/* <!-- /col --> */}
									<div className="col-md-6">
										<article className="blog">
											<figure>
												<a href="/detailartikel">
													<img
														src="/real_assets/img/news/ubah-plastik.jpeg"
														alt=""
													/>
													<div className="preview">
														<span>Baca lebih lanjut...</span>
													</div>
												</a>
											</figure>
											<div className="post_info">
												<small>Tips&Trik - 1 Mei 2017</small>
												<h2>
													<a href="/detailartikel">
														Kelola Sampah Plastik Jadi Sumber Daya
													</a>
												</h2>
												<p>
													Permasalahan sampah sudah timbul sejak lama. Jika tidak dikelola dengan baik, sampah tentu menimbulkan berbagai dampak negatif.
												</p>
											</div>
										</article>
										{/* <!-- /article --> */}
									</div>
									{/* <!-- /col --> */}
									<div className="col-md-6">
										<article className="blog">
											<figure>
												<a href="/detailartikel">
													<img
														src="/real_assets/img/news/cara-dosen.jpg"
														alt=""
													/>
													<div className="preview">
														<span>Baca lebih lanjut...</span>
													</div>
												</a>
											</figure>
											<div className="post_info">
												<small>Tips&Trik - 1 Mei 2017</small>
												<h2>
													<a href="/detailartikel">
														Ini Cara Dosen Itera Olah Sampah Organik Jadi Bermanfaat
													</a>
												</h2>
												<p>
													Salah satu upaya yang bisa dilakukan untuk menjaga bumi tetap lestari yakni melakukan pengelolaan sampah dengan baik..
												</p>
											</div>
										</article>
										{/* <!-- /article --> */}
									</div>
									{/* <!-- /col --> */}
								</div>
								{/* <!-- /row --> */}

								<div className="pagination__wrapper no_border add_bottom_30">
									<ul className="pagination">
										<li>
											<a
												href="#0"
												className="prev"
												title="previous page">
												&#10094;
											</a>
										</li>
										<li>
											<a href="#0" className="active">
												1
											</a>
										</li>
										<li>
											<a href="#0">2</a>
										</li>
										<li>
											<a href="#0">3</a>
										</li>
										<li>
											<a href="#0">4</a>
										</li>
										<li>
											<a
												href="#0"
												className="next"
												title="next page">
												&#10095;
											</a>
										</li>
									</ul>
								</div>
								{/* <!-- /pagination --> */}
							</div>
							{/* <!-- /col --> */}

							<aside className="col-lg-3">
								<div className="widget search_blog d-none d-sm-none d-md-none d-lg-block">
									<div className="form-group">
										<input
											type="text"
											name="search"
											id="search_blog"
											className="form-control"
											placeholder="Search.."
										/>
										<button type="submit">
											<i className="ti-search"></i>
										</button>
									</div>
								</div>
								{/* <!-- /widget --> */}
								<div className="widget">
									<div className="widget-title">
										<h4>Artikel Terbaru</h4>
									</div>
									<ul className="comments-list">
										<li>
											<div className="alignleft">
												<a href="/detailartikel">
													<img
														src="/real_assets/img/news/bank-sampah.png"
														alt=""
													/>
												</a>
											</div>
											<small>Edukasi - 12 Mei 2024</small>
											<h3>
												<a href="/detailartikel" title="">
													Mengatasi Persoalan Sam...
												</a>
											</h3>
										</li>
										<li>
											<div className="alignleft">
												<a href="/detailartikel">
													<img
														src="/real_assets/img/news/persoalan-persampahan.png"
														alt=""
													/>
												</a>
											</div>
											<small>Tips & Trik - 19 Mei 2024</small>
											<h3>
												<a href="/detailartikel" title="">
													Ibu-ibu Rumah Tangga di...
												</a>
											</h3>
										</li>
										<li>
											<div className="alignleft">
												<a href="/detailartikel">
													<img
														src="/real_assets/img/news/ibu-rumah-tangga.webp"
														alt=""
													/>
												</a>
											</div>
											<small>Berita - 24 Mei 2024</small>
											<h3>
												<a href="/detailartikel" title="">
													Peran Ganda Ibu-ibu...
												</a>
											</h3>
										</li>
									</ul>
								</div>
								{/* <!-- /widget --> */}
								<div className="widget">
									<div className="widget-title">
										<h4>Kategori</h4>
									</div>
									<ul className="cats">
										<li>
											<a href="#">
												Tips & Trik <span>(12)</span>
											</a>
										</li>
										<li>
											<a href="#">
												Berita <span>(21)</span>
											</a>
										</li>
										<li>
											<a href="#">
												Tutorial <span>(44)</span>
											</a>
										</li>
									</ul>
								</div>
							</aside>
							{/* <!-- /aside --> */}
						</div>
						{/* <!-- /row --> */}
					</div>
					{/* <!-- /container --> */}
				</main>
				{/* <!--/main--> */}
				<Footer />
			</div>
			{/* <!-- page --> */}

			<div id="toTop"></div>
			{/* <!-- Back to top button --> */}
		</>
	);
}

export default Article;
