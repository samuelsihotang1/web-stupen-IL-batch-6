import Footer from '../components/Footer';
import Header from '../components/Header';
import '/public/assets/css/product_page.css'

function DetailProduct() {

    return (
        <>
            <div id='page'>
                <Header />
                <main>
                    <div className="container margin_30">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="all">
                                    <div className="slider">
                                        <div className="owl-carousel owl-theme main">
                                            <div
                                                style={{ backgroundImage: "url(public/assets/img/products/shoes/1.jpg)" }}
                                                className="item-box"
                                            />
                                            <div
                                                style={{ backgroundImage: "url(public/assets/img/products/shoes/2.jpg)" }}
                                                className="item-box"
                                            />
                                            <div
                                                style={{ backgroundImage: "url(public/assets/img/products/shoes/3.jpg)" }}
                                                className="item-box"
                                            />
                                            <div
                                                style={{ backgroundImage: "url(public/assets/img/products/shoes/4.jpg)" }}
                                                className="item-box"
                                            />
                                            <div
                                                style={{ backgroundImage: "url(public/assets/img/products/shoes/5.jpg)" }}
                                                className="item-box"
                                            />
                                            <div
                                                style={{ backgroundImage: "url(public/assets/img/products/shoes/6.jpg)" }}
                                                className="item-box"
                                            />
                                        </div>
                                        <div className="left nonl">
                                            <i className="ti-angle-left" />
                                        </div>
                                        <div className="right">
                                            <i className="ti-angle-right" />
                                        </div>
                                    </div>
                                    <div className="slider-two">
                                        <div className="owl-carousel owl-theme thumbs">
                                            <div
                                                style={{ backgroundImage: "url(public/assets/img/products/shoes/1.jpg)" }}
                                                className="item active"
                                            />
                                            <div
                                                style={{ backgroundImage: "url(public/assets/img/products/shoes/2.jpg)" }}
                                                className="item"
                                            />
                                            <div
                                                style={{ backgroundImage: "url(public/assets/img/products/shoes/3.jpg)" }}
                                                className="item"
                                            />
                                            <div
                                                style={{ backgroundImage: "url(public/assets/img/products/shoes/4.jpg)" }}
                                                className="item"
                                            />
                                            <div
                                                style={{ backgroundImage: "url(public/assets/img/products/shoes/5.jpg)" }}
                                                className="item"
                                            />
                                            <div
                                                style={{ backgroundImage: "url(public/assets/img/products/shoes/6.jpg)" }}
                                                className="item"
                                            />
                                        </div>
                                        <div className="left-t nonl-t" />
                                        <div className="right-t" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="breadcrumbs">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#">Category</a>
                                        </li>
                                        <li>Page active</li>
                                    </ul>
                                </div>
                                {/* /page_header */}
                                <div className="prod_info">
                                    <h1>Rompi Rajut</h1>
                                    <span className="rating">
                                        <i className="icon-star voted" />
                                        <i className="icon-star voted" />
                                        <i className="icon-star voted" />
                                        <i className="icon-star voted" />
                                        <i className="icon-star" />
                                        <em>4 reviews</em>
                                    </span>
                                    <p>
                                        <small>SKU: MTKRY-001</small>
                                        <br />
                                        Rompi rajut terbuat dari kain perca yang berkualitas, berbahan katun yang di desain khusus sehingga memberikan kesan yang menarik dan tentunya nyaman ketika dipakai.
                                    </p>
                                    <div className="prod_options">
                                        <div className="row">
                                            <label className="col-xl-5 col-lg-5  col-md-6 col-6 pt-0">
                                                <strong>Color</strong>
                                            </label>
                                            <div className="col-xl-4 col-lg-5 col-md-6 col-6 colors">
                                                <ul>
                                                    <li>
                                                        <a href="#0" className="color color_1 active" />
                                                    </li>
                                                    <li>
                                                        <a href="#0" className="color color_2" />
                                                    </li>
                                                    <li>
                                                        <a href="#0" className="color color_3" />
                                                    </li>
                                                    <li>
                                                        <a href="#0" className="color color_4" />
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <label className="col-xl-5 col-lg-5 col-md-6 col-6">
                                                <strong>Size</strong> - Size Guide{" "}
                                                <a
                                                    href="#0"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#size-modal"
                                                >
                                                    <i className="ti-help-alt" />
                                                </a>
                                            </label>
                                            <div className="col-xl-4 col-lg-5 col-md-6 col-6">
                                                <div className="custom-select-form">
                                                    <select className="wide">
                                                        <option value="">
                                                            Small (S)
                                                        </option>
                                                        <option value="">M</option>
                                                        <option value=" ">L</option>
                                                        <option value=" ">XL</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <label className="col-xl-5 col-lg-5  col-md-6 col-6">
                                                <strong>Quantity</strong>
                                            </label>
                                            <div className="col-xl-4 col-lg-5 col-md-6 col-6">
                                                <div className="numbers-row">
                                                    <input
                                                        type="text"
                                                        defaultValue={1}
                                                        id="quantity_1"
                                                        className="qty2"
                                                        name="quantity_1"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-5 col-md-6">
                                            <div className="price_main">
                                                <span className="new_price">Rp. 120.000</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="btn_add_to_cart">
                                                <a href="#0" className="btn_1">
                                                    Add to Cart
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /prod_info */}
                                <div className="product_actions">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="ti-heart" />
                                                <span>Add to Wishlist</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* /product_actions */}
                            </div>
                        </div>
                        {/* /row */}
                    </div>
                    {/* /container */}
                    <div className="container margin_60_35">
                        <div className="main_title">
                            <h2>PRODUK</h2>
                            <span>LAINNYA</span>
                        </div>
                        <div className="owl-carousel owl-theme products_carousel">
                            <div className="item">
                                <div className="grid_item">
                                    <span className="ribbon new">New</span>
                                    <figure>
                                        <a href="/detailproduct">
                                            <img
                                                className="img-fluid lazy"
                                                src="/assets/img/products/product_placeholder_square_medium.jpg"
                                                data-src="/real_assets/img/products/tas-botol-plastik-1.png"
                                                alt=""
                                            />
                                        </a>
                                    </figure>
                                    <div className="rating">
                                        <i className="icon-star voted" />
                                        <i className="icon-star voted" />
                                        <i className="icon-star voted" />
                                        <i className="icon-star voted" />
                                        <i className="icon-star" />
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
                                                title="Add to favorites"
                                            >
                                                <i className="ti-heart" />
                                                <span>Add to favorites</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#0"
                                                className="tooltip-1"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="left"
                                                title="Add to cart"
                                            >
                                                <i className="ti-shopping-cart" />
                                                <span>Add to cart</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* /grid_item */}
                            </div>
                            {/* /item */}
                            <div className="item">
                                <div className="grid_item">
                                    <span className="ribbon new">New</span>
                                    <figure>
                                        <a href="/detailproduct">
                                            <img
                                                className="img-fluid lazy"
                                                src="/assets/img/products/product_placeholder_square_medium.jpg"
                                                data-src="/real_assets/img/products/gantungan-kunci.png"
                                                alt=""
                                            />
                                        </a>
                                    </figure>
                                    <div className="rating">
                                        <i className="icon-star voted" />
                                        <i className="icon-star voted" />
                                        <i className="icon-star voted" />
                                        <i className="icon-star voted" />
                                        <i className="icon-star" />
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
                                                title="Add to favorites"
                                            >
                                                <i className="ti-heart" />
                                                <span>Add to favorites</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="#0"
                                                className="tooltip-1"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="left"
                                                title="Add to cart"
                                            >
                                                <i className="ti-shopping-cart" />
                                                <span>Add to cart</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* /grid_item */}
                            </div>
                            {/* /item */}
                            <div className="item">
                                <div className="grid_item">
                                    <span className="ribbon hot">Hot</span>
                                    <figure>
                                        <a href="/detailproduct">
                                            <img
                                                className="img-fluid lazy"
                                                src="/assets/img/products/product_placeholder_square_medium.jpg"
                                                data-src="/real_assets/img/products/gaun-kertas.png"
                                                alt=""
                                            />
                                        </a>
                                    </figure>
                                    <div className="rating">
                                        <i className="icon-star voted" />
                                        <i className="icon-star voted" />
                                        <i className="icon-star voted" />
                                        <i className="icon-star voted" />
                                        <i className="icon-star" />
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
                                                title="Add to favorites"
                                            >
                                                <i className="ti-heart" />
                                                <span>Add to favorites</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="#0"
                                                className="tooltip-1"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="left"
                                                title="Add to cart"
                                            >
                                                <i className="ti-shopping-cart" />
                                                <span>Add to cart</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* /grid_item */}
                            </div>
                            {/* /item */}
                            <div className="item">
                                <div className="grid_item">
                                    <span className="ribbon off">-30%</span>
                                    <figure>
                                        <a href="/detailproduct">
                                            <img
                                                className="img-fluid lazy"
                                                src="/assets/img/products/product_placeholder_square_medium.jpg"
                                                data-src="/real_assets/img/products/hiasan-dinding.png"
                                                alt=""
                                            />
                                        </a>
                                    </figure>
                                    <div className="rating">
                                        <i className="icon-star voted" />
                                        <i className="icon-star voted" />
                                        <i className="icon-star voted" />
                                        <i className="icon-star voted" />
                                        <i className="icon-star" />
                                    </div>
                                    <a href="/detailproduct">
                                        <h3>Hiasan Dinding</h3>
                                    </a>
                                    <div className="price_box">
                                        <span className="new_price">Rp. 20.000</span>
                                        <span className="old_price">Rp. 45.000</span>
                                    </div>
                                    <ul>
                                        <li>
                                            <a
                                                href="#0"
                                                className="tooltip-1"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="left"
                                                title="Add to favorites"
                                            >
                                                <i className="ti-heart" />
                                                <span>Add to favorites</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="#0"
                                                className="tooltip-1"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="left"
                                                title="Add to cart"
                                            >
                                                <i className="ti-shopping-cart" />
                                                <span>Add to cart</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* /grid_item */}
                            </div>
                            {/* /item */}
                            <div className="item">
                                <div className="grid_item">
                                    <span className="ribbon off">-50%</span>
                                    <figure>
                                        <a href="/detailproduct">
                                            <img
                                                className="img-fluid lazy"
                                                src="/assets/img/products/product_placeholder_square_medium.jpg"
                                                data-src="/real_assets/img/products/rompi-rajut.png"
                                                alt=""
                                            />
                                        </a>
                                    </figure>
                                    <div className="rating">
                                        <i className="icon-star voted" />
                                        <i className="icon-star voted" />
                                        <i className="icon-star voted" />
                                        <i className="icon-star voted" />
                                        <i className="icon-star" />
                                    </div>
                                    <a href="/detailproduct">
                                        <h3>Rompi Rajut</h3>
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
                                                title="Add to favorites"
                                            >
                                                <i className="ti-heart" />
                                                <span>Add to favorites</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#0"
                                                className="tooltip-1"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="left"
                                                title="Add to cart"
                                            >
                                                <i className="ti-shopping-cart" />
                                                <span>Add to cart</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* /grid_item */}
                            </div>
                            {/* /item */}
                        </div>
                        {/* /products_carousel */}
                    </div>
                    {/* /container */}
                    <div className="feat">
                        <div className="container">
                            <ul>
                                <li>
                                    <div className="box">
                                        <i className="ti-gift" />
                                        <div className="justify-content-center">
                                            <h3>Free Shipping</h3>
                                            <p>For all oders over $99</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="box">
                                        <i className="ti-wallet" />
                                        <div className="justify-content-center">
                                            <h3>Secure Payment</h3>
                                            <p>100% secure payment</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="box">
                                        <i className="ti-headphone-alt" />
                                        <div className="justify-content-center">
                                            <h3>24/7 Support</h3>
                                            <p>Online top support</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/*/feat*/}

                </main>

                <Footer />

                <div id="toTop" />
                {/* Back to top button */}
                <div className="top_panel">
                    <div className="container header_panel">
                        <a href="#0" className="btn_close_top_panel">
                            <i className="ti-close" />
                        </a>
                        <label>1 product added to cart</label>
                    </div>
                    {/* /header_panel */}
                    <div className="item">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="item_panel">
                                        <figure>
                                            <img
                                                src="img/products/product_placeholder_square_small.jpg"
                                                data-src="/real_assets/img/products/rompi-rajut.png"
                                                className="lazy"
                                                alt=""
                                            />
                                        </figure>
                                        <h4>Rompi Rajut</h4>
                                        <div className="price_panel">
                                            <span className="new_price">Rp. 120.000</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5 btn_panel">
                                    <a href="/cart" className="btn_1 outline">
                                        View cart
                                    </a>{" "}
                                    <a href="checkout.html" className="btn_1">
                                        Checkout
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /item */}
                    <div className="container related">
                        <h4>Who bought this product also bought</h4>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="item_panel">
                                    <a href="#0">
                                        <figure>
                                            <img
                                                src="img/products/product_placeholder_square_small.jpg"
                                                data-src="/real_assets/img/products/tas-botol-plastik-1.png"
                                                alt=""
                                                className="img-fluid lazy"
                                            />
                                        </figure>
                                    </a>
                                    <a href="#0">
                                        <h5>Tas Tutup Botol</h5>
                                    </a>
                                    <div className="price_panel">
                                        <span className="new_price">Rp. 50.000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="item_panel">
                                    <a href="#0">
                                        <figure>
                                            <img
                                                src="img/products/product_placeholder_square_small.jpg"
                                                data-src="/real_assets/img/products/gantungan-kunci.png"
                                                alt=""
                                                className="img-fluid lazy"
                                            />
                                        </figure>
                                    </a>
                                    <a href="#0">
                                        <h5>Gantungan Kunci</h5>
                                    </a>
                                    <div className="price_panel">
                                        <span className="new_price">Rp. 15.000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="item_panel">
                                    <a href="#0">
                                        <figure>
                                            <img
                                                src="img/products/product_placeholder_square_small.jpg"
                                                data-src="/real_assets/img/products/gaun-kertas.png"
                                                alt=""
                                                className="img-fluid lazy"
                                            />
                                        </figure>
                                    </a>
                                    <a href="#0">
                                        <h5>Gaun Kertas</h5>
                                    </a>
                                    <div className="price_panel">
                                        <span className="new_price">Rp. 150.000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /related */}
                </div>
                {/* /add_cart_panel */}
            </div>
        </>
    );
}
export default DetailProduct;