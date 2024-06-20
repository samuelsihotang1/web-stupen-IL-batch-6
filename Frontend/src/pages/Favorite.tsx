import Header from "../components/Header";
import Footer from "../components/Footer";
import '/public/assets/css/listing.css';

function Favorite() {
    return (
        <>
            <div>
                <Header />
                <main>
                    <div className="container margin_30">
                        <div className="main_title">
                            <h2>PRODUK</h2>
                            <span>FAVORITE</span>
                        </div>
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

                    </div>
                    {/* <!-- /container --> */}
                </main>
                <Footer />
            </div>
        </>
    );
}

export default Favorite;