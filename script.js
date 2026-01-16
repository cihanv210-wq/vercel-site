function loadPage(page) {
    const content = document.getElementById("content");

    const pages = {
        musteriler: "<h1>Müşteriler</h1><p>Müşteri listesi burada yer alacak.</p>",
        hizmetler: "<h1>Hizmetler</h1><p>Sunulan hizmetler burada listelenecek.</p>",
        urunler: "<h1>Ürünler</h1><p>Ürün yönetimi sayfası.</p>",
        randevu: "<h1>Randevu</h1><p>Randevu planlama ekranı.</p>",
        kullanicilar: "<h1>Kullanıcılar</h1><p>Kullanıcı yönetimi.</p>",
        ayarlar: "<h1>Ayarlar</h1><p>Sistem ayarları.</p>"
    };

    content.innerHTML = pages[page];
}

/* TARİH & SAAT */
function updateDateTime() {
    const now = new Date();
    const options = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    };
    document.getElementById("datetime").innerText =
        now.toLocaleDateString("tr-TR", options);
}

setInterval(updateDateTime, 1000);
updateDateTime();
