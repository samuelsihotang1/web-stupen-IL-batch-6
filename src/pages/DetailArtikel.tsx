import Header from "../components/Header";
import Footer from '../components/Footer';
import '/public/assets/css/blog.css'

function DetailArtikel() {
    return (
        <>
            <Header />
            <main>
                <div id="page">
                    <main>
                        <div className="container margin_30">
                            <div className="page_header">
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
                            </div>
                            {/* /page_header */}
                            <div className="row">
                                <div className="col-lg-9">
                                    <div className="singlepost bg_gray">
                                        <figure>
                                            <img alt="" className="img-fluid" src="public/real_assets/img/news/ibu-ibu.png" />
                                        </figure>
                                        <h1>Bank Sampah, Solusi untuk membantu Melestarikan Lingkungan</h1>
                                        <div className="postmeta">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <i className="ti-folder" /> Category
                                                    </a>
                                                </li>
                                                <li>
                                                    <i className="ti-calendar" /> 23/12/2015
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="ti-user" /> Admin
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="ti-comment" /> (14) Comments
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* /post meta */}
                                        <div className="post-content">
                                            <div className="dropcaps">
                                                <p>
                                                    Masalah menumpuknya sampah plastik kian mengkhawatirkan.

                                                    Bahkan menurut data Badan Pusat Statistik (BPS), sampah plastik di Indonesia mencapai 64 juta ton per tahun, dan 3,2 juta ton di antaranya merupakan sampah plastik yang dibuang ke laut.

                                                    Sementara itu, kantong plastik yang terbuang ke lingkungan ditaksir sebanyak 10 miliar lembar per tahun atau sebanyak 85.000 ton kantong plastik.

                                                </p>
                                            </div>
                                            <p>
                                                Padahal jika dibiarkan, sampah-sampah yang menumpuk ini bisa mencemari ar sungai dan laut, menghambat proses air tanah, dan mencemari tanah, membuatnya tidak sehat.

                                                Bahkan, sampah yang menumpuk bisa mengakibatkan banjir karena dapat menghambat aliran air.

                                                Karena itulah, metode 3R (reduce, reuse, recycle) perlu diterapkan guna mengurangi dampak-dampak negatif dari sampah tersebut. Namun, menerapkannya di kehidupan sehari-hari sebenarnya tidak bisa dibilang mudah, meski bukan berarti tidak bisa dilakukan.

                                                Nah, Packaging Cicularity Senior Manager Danone Jeffri Ricardo pun memberi tips agar kita dapat menerapkan metode 3R dengan baik.

                                            </p>
                                        </div>
                                        {/* /post */}
                                    </div>
                                    {/* /single-post */}
                                </div>
                                {/* /col */}
                                <aside className="col-lg-3">
                                    <div className="widget search_blog">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="search"
                                                id="search"
                                                className="form-control"
                                                placeholder="Search.."
                                            />
                                            <button type="submit">
                                                <i className="ti-search" />
                                            </button>
                                        </div>
                                    </div>
                                    {/* /widget */}
                                    <div className="widget">
                                        <div className="widget-title">
                                            <h4>Artikel Terbaru</h4>
                                        </div>
                                        <ul className="comments-list">
                                            <li>
                                                <div className="alignleft">
                                                    <a href="/detailartikel">
                                                        <img src="/real_assets/img/news/bank-sampah.png" alt="" />
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
                                                        <img src="/real_assets/img/news/persoalan-persampahan.png" alt="" />
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
                                                        <img src="/real_assets/img/news/ibu-rumah-tangga.webp" alt="" />
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
                                    {/* /widget */}
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
                                    {/* /widget */}
                                </aside>
                                {/* /aside */}
                            </div>
                            {/* /row */}
                        </div>
                        {/* /container */}
                    </main>
                    {/*/main*/}

                    <Footer />
                </div>
            </main>
        </>
    );
}

export default DetailArtikel;