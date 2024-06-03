CREATE TABLE produk (
	id_produk int auto_increment primary key,
    nama_produk varchar(50) not null,
	harga_produk varchar(50) not null,
	deskripsi_produk varchar(225) not null
);

INSERT INTO produk(nama_produk, harga_produk, deskripsi_produk) values
	("Gantungan Kunci", "Rp 10000", "Gantungan Kunci yang bagus"), 
	("Drees Kertas", "Rp 250000", "gaun yang bagus dan bagus sekali");

CREATE TABLE artikel (
	id_artikel int auto_increment primary key,
	judul_artikel varchar(50) not null,
	tanggal_artikel date not null,
	detail_artikel varchar(225) not null
);

INSERT INTO artikel (judul_artikel, tanggal_artikel, detail_artikel) values
	("Bank Sampah", "2024-05-12", "Bank sampah adalah solusi untuk Masyarakat");