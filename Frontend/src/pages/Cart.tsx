import Header from "../components/Header";
import Footer from "../components/Footer";
import '/public/assets/css/cart.css'

function Cart() {
    return (
        <>
            <div id="page">
                <Header />

                <main className="bg_gray">
                    <div className="container margin_30">
                        <div className="page_header">
                            <h1>Cart Page</h1>
                        </div>
                        {/* /page_header */}
                        <table className="table table-striped cart-list">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="thumb_cart">
                                            <img
                                                src="img/products/product_placeholder_square_small.jpg"
                                                data-src="/real_assets/img/products/tas-botol-plastik-1.png"
                                                className="lazy"
                                                alt="Image"
                                            />
                                        </div>
                                        <span className="item_cart">Tas Tutup Botol</span>
                                    </td>
                                    <td>
                                        <strong>Rp. 20.000</strong>
                                    </td>
                                    <td>
                                        <div className="numbers-row">
                                            <input
                                                type="text"
                                                defaultValue={1}
                                                id="quantity_1"
                                                className="qty2"
                                                name="quantity_1"
                                            />
                                            <div className="inc button_inc">+</div>
                                            <div className="dec button_inc">-</div>
                                        </div>
                                    </td>
                                    <td>
                                        <strong>Rp. 20.000</strong>
                                    </td>
                                    <td className="options">
                                        <a href="#">
                                            <i className="ti-trash" />
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="thumb_cart">
                                            <img
                                                src="img/products/product_placeholder_square_small.jpg"
                                                data-src="/real_assets/img/products/gaun-kertas.png"
                                                className="lazy"
                                                alt="Image"
                                            />
                                        </div>
                                        <span className="item_cart">Gaun Kertas</span>
                                    </td>
                                    <td>
                                        <strong>Rp. 150.000</strong>
                                    </td>
                                    <td>
                                        <div className="numbers-row">
                                            <input
                                                type="text"
                                                defaultValue={1}
                                                id="quantity_2"
                                                className="qty2"
                                                name="quantity_2"
                                            />
                                            <div className="inc button_inc">+</div>
                                            <div className="dec button_inc">-</div>
                                        </div>
                                    </td>
                                    <td>
                                        <strong>Rp. 150.000</strong>
                                    </td>
                                    <td className="options">
                                        <a href="#">
                                            <i className="ti-trash" />
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="thumb_cart">
                                            <img
                                                src="img/products/product_placeholder_square_small.jpg"
                                                data-src="/real_assets/img/products/vas-bunga-botol-kaca.png"
                                                className="lazy"
                                                alt="Image"
                                            />
                                        </div>
                                        <span className="item_cart">Vas Bunga</span>
                                    </td>
                                    <td>
                                        <strong>Rp. 20.000</strong>
                                    </td>
                                    <td>
                                        <div className="numbers-row">
                                            <input
                                                type="text"
                                                defaultValue={1}
                                                id="quantity_3"
                                                className="qty2"
                                                name="quantity_3"
                                            />
                                            <div className="inc button_inc">+</div>
                                            <div className="dec button_inc">-</div>
                                        </div>
                                    </td>
                                    <td>
                                        <strong>Rp. 20.000</strong>
                                    </td>
                                    <td className="options">
                                        <a href="#">
                                            <i className="ti-trash" />
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="row add_top_30 flex-sm-row-reverse cart_actions">
                            <div className="col-sm-4 text-end">
                                <button type="button" className="btn_1 gray">
                                    Update Cart
                                </button>
                            </div>
                            <div className="col-sm-8">
                                <div className="apply-coupon">
                                    <div className="form-group">
                                        <div className="row g-2">
                                            <div className="col-md-6">
                                                <input
                                                    type="text"
                                                    name="coupon-code"
                                                    defaultValue=""
                                                    placeholder="Promo code"
                                                    className="form-control"
                                                />
                                            </div>
                                            <div className="col-md-4">
                                                <button type="button" className="btn_1 outline">
                                                    Apply Coupon
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /cart_actions */}
                    </div>
                    {/* /container */}
                    <div className="box_cart">
                        <div className="container">
                            <div className="row justify-content-end">
                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <ul>
                                        <li>
                                            <span>Subtotal</span> $240.00
                                        </li>
                                        <li>
                                            <span>Shipping</span> $7.00
                                        </li>
                                        <li>
                                            <span>Total</span> $247.00
                                        </li>
                                    </ul>
                                    <a href="cart-2.html" className="btn_1 full-width cart">
                                        Proceed to Checkout
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /box_cart */}
                </main>
                {/*/main*/}
                <Footer />
            </div>
            <div id="toTop" />
            {/* Back to top button */}
        </>
    );
}

export default Cart;