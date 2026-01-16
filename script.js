let musteriler = [];
let hizmetler = [];
let urunler = [];

function loadPage(page) {
    const content = document.getElementById("content");

    if (page === "musteriler") {
        content.innerHTML = `
            <h1>Müşteriler</h1>

            <div class="form-group">
                <label>Ad Soyad</label>
                <input id="musteriAd">
            </div>

            <div class="form-group">
                <label>Telefon</label>
                <input id="musteriTel">
            </div>

            <div class="form-group">
                <label>Adres</label>
                <input id="musteriAdres">
            </div>

            <button onclick="musteriEkle()">Ekle</button>
            <div id="musteriListesi"></div>
        `;
        renderMusteriler();
    }

    if (page === "hizmetler") {
        content.innerHTML = `
            <h1>Hizmetler</h1>

            <div class="form-group">
                <label>Hizmet İsmi</label>
                <input id="hizmetAd">
            </div>

            <div class="form-group">
                <label>Fiyat</label>
                <input id="hizmetFiyat">
            </div>

            <button onclick="hizmetEkle()">Ekle</button>
            <div id="hizmetListesi"></div>
        `;
        renderHizmetler();
    }

    if (page === "urunler") {
        content.innerHTML = `
            <h1>Ürünler</h1>

            <div class="form-group">
                <label>Ürün İsmi</label>
                <input id="urunAd">
            </div>

            <div class="form-group">
                <label>Fiyat</label>
                <input id="urunFiyat">
            </div>

            <button onclick="urunEkle()">Ekle</button>
            <div id="urunListesi"></div>
        `;
        renderUrunler();
    }
}

/* EKLE / SİL */
function musteriEkle() {
    musteriler.push({ ad: musteriAd.value, tel: musteriTel.value });
    renderMusteriler();
}

function renderMusteriler() {
    const div = document.getElementById("musteriListesi");
    if (!div) return;
    div.innerHTML = "";
    musteriler.forEach((m, i) => {
        div.innerHTML += `
            <div class="list-item">
                ${m.ad} - ${m.tel}
                <button onclick="musteriler.splice(${i},1); renderMusteriler()">Sil</button>
            </div>
        `;
    });
}

function hizmetEkle() {
    hizmetler.push({ ad: hizmetAd.value, fiyat: hizmetFiyat.value });
    renderHizmetler();
}

function renderHizmetler() {
    const div = document.getElementById("hizmetListesi");
    if (!div) return;
    div.innerHTML = "";
    hizmetler.forEach((h, i) => {
        div.innerHTML
