CREATE TABLE produk (
	id_produk int auto_increment primary key,
	nama_produk varchar(50) not null,
	harga_produk DECIMAL(10, 2) not null,
	deskripsi_produk varchar(225) not null
);

INSERT INTO produk(nama_produk, harga_produk, deskripsi_produk) values
	("Gantungan Kunci", 10000.00, "Gantungan Kunci yang bagus"), 
	("Drees Kertas", 250000.00, "Gaun yang bagus dan bagus sekali");

CREATE TABLE artikel (
	id_artikel int auto_increment primary key,
	judul_artikel varchar(50) not null,
	detail_artikel varchar(225) not null,
	tanggal_artikel TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO artikel (judul_artikel, detail_artikel) values
	("Bank Sampah", "Bank sampah adalah solusi untuk masyarakat");

CREATE TABLE user (
	user_id int auto_increment primary key,
	email varchar(50) not null,
	password varchar(50) not null,
	nama_lengkap varchar(90) not null,
	no_telpon varchar(15) not null,
	alamat_lengkap varchar(225) not null,
	kota varchar(50) not null,
	kode_pos int not null
);

INSERT INTO user (email, password, nama_lengkap, no_telpon, alamat_lengkap, kota, kode_pos) values
	("adi@gmail.com", "adi12345", "Adi Ginanjar", "0876896345", "Kota Tangerang Jalan Lawet no 14", "Tangerang", 123456);

CREATE TABLE pesanan (
	id_pesanan int auto_increment primary key,
	user_id int,
	id_produk int,
	harga_produk DECIMAL(10, 2) not null,
	jumlah int not null,
	tanggal_pesanan TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (user_id) REFERENCES user(user_id),
	FOREIGN KEY (id_produk) REFERENCES produk(id_produk)
);

INSERT INTO pesanan (user_id, id_produk, harga_produk, jumlah) values
	(1, 1, 20000.00, 3);
