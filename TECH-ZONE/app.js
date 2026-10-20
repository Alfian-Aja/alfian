const nomorWA = "6281234567890";

const produk = [
    {
        nama: "Laptop Pro 14",
        kategori: "Laptop",
        harga: 8999000,
        hargaLama: 9999000,
        diskon: "10%",
        gambar: "images/laptop.jpg",
        deskripsi: "Laptop modern untuk sekolah, kuliah, pekerjaan, dan aktivitas sehari-hari.",
        spesifikasi: ["RAM 8 GB", "SSD 512 GB", "Layar 14 inch", "USB-C"]
    },
    {
        nama: "Smartphone X1",
        kategori: "Smartphone",
        harga: 3499000,
        hargaLama: 3999000,
        diskon: "12%",
        gambar: "images/smartphone.jpg",
        deskripsi: "Smartphone praktis dengan desain modern untuk kebutuhan harian.",
        spesifikasi: ["RAM 8 GB", "Storage 128 GB", "Kamera 50 MP", "Layar Full HD"]
    },
    {
        nama: "Smartwatch Fit",
        kategori: "Smartwatch",
        harga: 799000,
        hargaLama: 999000,
        diskon: "20%",
        gambar: "images/smartwatch.jpg",
        deskripsi: "Smartwatch simpel untuk menemani aktivitas dan rutinitas harian.",
        spesifikasi: ["Layar sentuh", "Bluetooth", "Monitor aktivitas", "Tahan percikan air"]
    },
    {
        nama: "Headset Wireless",
        kategori: "Headset",
        harga: 499000,
        hargaLama: 599000,
        diskon: "17%",
        gambar: "images/headset.jpg",
        deskripsi: "Headset wireless nyaman untuk belajar, bekerja, dan hiburan.",
        spesifikasi: ["Bluetooth", "Mic bawaan", "Baterai hingga 20 jam", "USB-C"]
    },
    {
        nama: "Power Bank 20.000mAh",
        kategori: "Power Bank",
        harga: 329000,
        hargaLama: 399000,
        diskon: "18%",
        gambar: "images/powerbank.jpg",
        deskripsi: "Power bank berkapasitas besar untuk menemani aktivitas mobile.",
        spesifikasi: ["20.000mAh", "Fast charging", "USB-A", "USB-C"]
    },
    {
        nama: "Keyboard Mechanical",
        kategori: "Keyboard",
        harga: 649000,
        hargaLama: 749000,
        diskon: "13%",
        gambar: "images/keyboard.jpg",
        deskripsi: "Keyboard mechanical dengan tampilan modern untuk produktivitas dan gaming.",
        spesifikasi: ["Mechanical switch", "USB", "Backlight", "Layout compact"]
    },
    {
        nama: "Mouse Wireless",
        kategori: "Mouse",
        harga: 199000,
        hargaLama: 249000,
        diskon: "20%",
        gambar: "images/mouse.jpg",
        deskripsi: "Mouse wireless ringan dan praktis untuk laptop maupun komputer.",
        spesifikasi: ["Wireless 2.4G", "USB receiver", "Ergonomis", "Baterai hemat"]
    },
    {
        nama: "Charger Fast Charge",
        kategori: "Charger",
        harga: 179000,
        hargaLama: 229000,
        diskon: "22%",
        gambar: "images/charger.jpg",
        deskripsi: "Charger cepat untuk perangkat yang mendukung fast charging.",
        spesifikasi: ["Fast charging", "USB-C", "Perlindungan arus", "Ringkas"]
    },
    {
        nama: "Kabel Data USB-C",
        kategori: "Kabel Data",
        harga: 89000,
        hargaLama: 119000,
        diskon: "25%",
        gambar: "images/kabel-data.jpg",
        deskripsi: "Kabel data USB-C untuk charging dan transfer data.",
        spesifikasi: ["USB-C", "Fast charging", "Transfer data", "Panjang 1 meter"]
    },
    {
        nama: "Speaker Mini Bluetooth",
        kategori: "Speaker",
        harga: 249000,
        hargaLama: 299000,
        diskon: "17%",
        gambar: "images/speaker.jpg",
        deskripsi: "Speaker kecil dengan suara jernih untuk menemani aktivitas santai.",
        spesifikasi: ["Bluetooth", "Portable", "Baterai rechargeable", "USB-C"]
    },
    {
        nama: "Webcam HD",
        kategori: "Aksesoris Komputer",
        harga: 299000,
        hargaLama: 359000,
        diskon: "17%",
        gambar: "images/webcam.jpg",
        deskripsi: "Webcam praktis untuk meeting online dan belajar jarak jauh.",
        spesifikasi: ["HD 720p", "Mic bawaan", "USB", "Plug and play"]
    },
    {
        nama: "USB Hub 4 Port",
        kategori: "Aksesoris Komputer",
        harga: 159000,
        hargaLama: 199000,
        diskon: "20%",
        gambar: "images/usb-hub.jpg",
        deskripsi: "USB hub untuk menambah koneksi perangkat pada laptop atau komputer.",
        spesifikasi: ["4 port USB", "USB 3.0", "Plug and play", "Compact"]
    }
];

let kategoriAktif = "Semua";

function formatRupiah(angka) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0
    }).format(angka);
}

function gambarCadangan(img) {
    img.onerror = function() {
        this.onerror = null;
        this.src = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(
            '<svg xmlns="http://www.w3.org/2000/svg" width="700" height="500">' +
            '<rect width="100%" height="100%" fill="#eaf0f7"/>' +
            '<text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" ' +
            'font-family="Arial" font-size="28" fill="#718096">Gambar Produk</text></svg>'
        );
    };
}

function tampilkanProduk() {
    const grid = document.getElementById("productGrid");
    const keyword = document.getElementById("searchInput").value.toLowerCase();

    const hasil = produk.filter(item => {
        const cocokKategori =
            kategoriAktif === "Semua" || item.kategori === kategoriAktif;

        const cocokSearch =
            item.nama.toLowerCase().includes(keyword) ||
            item.kategori.toLowerCase().includes(keyword);

        return cocokKategori && cocokSearch;
    });

    if (hasil.length === 0) {
        grid.innerHTML = '<div class="empty">Produk tidak ditemukan.</div>';
        return;
    }

    grid.innerHTML = hasil.map((item, index) => `
        <div class="product-card">
            <img class="product-image" src="${item.gambar}" alt="${item.nama}" onerror="gambarCadangan(this)">
            <div class="product-info">
                <div class="product-category">${item.kategori}</div>
                <h3 class="product-name">${item.nama}</h3>
                <div class="price">${formatRupiah(item.harga)}</div>
                <div class="old-price">${formatRupiah(item.hargaLama)}</div>
                <div class="discount">Hemat ${item.diskon}</div>

                <div class="card-buttons">
                    <button class="detail-btn" onclick="lihatDetail(${produk.indexOf(item)})">Detail</button>
                    <a class="buy-btn" href="${buatLinkWA(item)}" target="_blank">Beli</a>
                </div>
            </div>
        </div>
    `).join("");
}

function buatLinkWA(item) {
    const pesan = `Halo TECH ZONE, saya ingin membeli ${item.nama} dengan harga ${formatRupiah(item.harga)}.`;
    return `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
}

function pilihKategori(kategori) {
    kategoriAktif = kategori;
    tampilkanProduk();
    document.getElementById("produk").scrollIntoView({ behavior: "smooth" });
}

function lihatDetail(index) {
    const item = produk[index];

    document.getElementById("detailImage").src = item.gambar;
    document.getElementById("detailImage").onerror = function() {
        gambarCadangan(this);
    };

    document.getElementById("detailCategory").textContent = item.kategori;
    document.getElementById("detailName").textContent = item.nama;
    document.getElementById("detailPrice").textContent = formatRupiah(item.harga);
    document.getElementById("detailDescription").textContent = item.deskripsi;

    document.getElementById("detailSpecs").innerHTML =
        item.spesifikasi.map(spec => `<li>${spec}</li>`).join("");

    document.getElementById("detailBuy").href = buatLinkWA(item);
    document.getElementById("detailModal").style.display = "flex";
}

function tutupDetail() {
    document.getElementById("detailModal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("detailModal");

    if (event.target === modal) {
        tutupDetail();
    }
};

tampilkanProduk();
