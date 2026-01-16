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

            <button id="btnMusteri">Ekle</button>
            <div id="musteriListesi"></div>
        `;

        document.getElementById("btnMusteri").addEventListener("click", musteriEkle);
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

            <button id="btnHizmet">Ekle</button>
            <div id="hizmetListesi"></div>
        `;

        document.getElementById("btnHizmet").addEventListener("click", hizmetEkle);
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

            <button id="btnUrun">Ekle</button>
            <div id="urunListesi"></div>
        `;

        document.getElementById("btnUrun").addEventListener("click", urunEkle);
        renderUrunler();
    }
}

/* MÜŞTERİ */
function musteriEkle() {
    const ad = document.getElementById("musteriAd").value;
    const tel = document.getElementById("musteriTel").value;
    const adres = document.getElementById("musteriAdres").value;

    if (!ad) return;

    musteriler.push({ ad, tel, adres });
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

/* HİZMET */
function hizmetEkle() {
    const ad = document.getElementById("hizmetAd").value;
    const fiyat = document.getElementById("hizmetFiyat").value;

    if (!ad) return;

    hizmetler.push({ ad, fiyat });
    renderHizmetler();
}

function renderHizmetler() {
    const div = document.getElementById("hizmetListesi");
    if (!div) return;

    div.innerHTML = "";
    hizmetler.forEach((h, i) => {
        div.innerHTML += `
            <div class="list-item">
                ${h.ad} - ${h.fiyat} ₺
                <button onclick="hizmetler.splice(${i},1); renderHizmetler()">Sil</button>
            </div>
        `;
    });
}

/* ÜRÜN */
function urunEkle() {
    const ad = document.getElementById("urunAd").value;
    const fiyat = document.getElementById("urunFiyat").value;

    if (!ad) return;

    urunler.push({ ad, fiyat });
    renderUrunler();
}

function renderUrunler() {
    const div = document.getElementById("urunListesi");
    if (!div) return;

    div.innerHTML = "";
    urunler.forEach((u, i) => {
        div.innerHTML += `
            <div class="list-item">
                ${u.ad} - ${u.fiyat} ₺
                <button onclick="urunler.splice(${i},1); renderUrunler()">Sil</button>
            </div>
        `;
    });
}

/* TARİH & SAAT */
function updateDateTime() {
    const dt = document.getElementById("datetime");
    if (!dt) return;

    const now = new Date();
    dt.innerHTML =
        now.toLocaleDateString("tr-TR") + "<br>" +
        now.toLocaleTimeString("tr-TR");
}

setInterval(updateDateTime, 1000);
updateDateTime();
