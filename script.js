/************ VERİLER (LOCAL STORAGE) ************/
let musteriler = JSON.parse(localStorage.getItem("musteriler")) || [];
let hizmetler = JSON.parse(localStorage.getItem("hizmetler")) || [];
let urunler = JSON.parse(localStorage.getItem("urunler")) || [];

function saveData() {
    localStorage.setItem("musteriler", JSON.stringify(musteriler));
    localStorage.setItem("hizmetler", JSON.stringify(hizmetler));
    localStorage.setItem("urunler", JSON.stringify(urunler));
}

/************ SAYFA YÜKLEME ************/
function loadPage(page) {
    const content = document.getElementById("content");

    if (page === "musteriler") {
        content.innerHTML = `
            <h2>Müşteriler</h2>
            <input id="musteriAd" placeholder="Ad Soyad">
            <input id="musteriTel" placeholder="Telefon">
            <input id="musteriAdres" placeholder="Adres">
            <button onclick="musteriEkle()">Ekle</button>
            <ul id="musteriListe"></ul>
        `;
        renderMusteriler();
    }

    if (page === "hizmetler") {
        content.innerHTML = `
            <h2>Hizmetler</h2>
            <input id="hizmetAd" placeholder="Hizmet İsmi">
            <input id="hizmetFiyat" placeholder="Fiyat">
            <button onclick="hizmetEkle()">Ekle</button>
            <ul id="hizmetListe"></ul>
        `;
        renderHizmetler();
    }

    if (page === "urunler") {
        content.innerHTML = `
            <h2>Ürünler</h2>
            <input id="urunAd" placeholder="Ürün İsmi">
            <input id="urunFiyat" placeholder="Fiyat">
            <button onclick="urunEkle()">Ekle</button>
            <ul id="urunListe"></ul>
        `;
        renderUrunler();
    }

    if (page === "randevu") {
        content.innerHTML = `<h2>Randevu</h2><p>Yakında...</p>`;
    }

    if (page === "kullanicilar") {
        content.innerHTML = `<h2>Kullanıcılar</h2><p>Yakında...</p>`;
    }

    if (page === "ayarlar") {
        content.innerHTML = `<h2>Ayarlar</h2><p>Yakında...</p>`;
    }
}

/************ MÜŞTERİLER ************/
function musteriEkle() {
    const ad = document.getElementById("musteriAd").value;
    const tel = document.getElementById("musteriTel").value;
    const adres = document.getElementById("musteriAdres").value;

    if (!ad) return;

    musteriler.push({ ad, tel, adres });
    saveData();
    renderMusteriler();
}

function renderMusteriler() {
    const ul = document.getElementById("musteriListe");
    ul.innerHTML = "";

    musteriler.forEach((m, i) => {
        ul.innerHTML += `
            <li>
                <strong>${m.ad}</strong> - ${m.tel} - ${m.adres}
                <button onclick="musteriler.splice(${i},1); saveData(); renderMusteriler()">Sil</button>
            </li>
        `;
    });
}

/************ HİZMETLER ************/
function hizmetEkle() {
    const ad = document.getElementById("hizmetAd").value;
    const fiyat = document.getElementById("hizmetFiyat").value;

    if (!ad) return;

    hizmetler.push({ ad, fiyat });
    saveData();
    renderHizmetler();
}

function renderHizmetler() {
    const ul = document.getElementById("hizmetListe");
    ul.innerHTML = "";

    hizmetler.forEach((h, i) => {
        ul.innerHTML += `
            <li>
                <strong>${h.ad}</strong> - ${h.fiyat} ₺
                <button onclick="hizmetler.splice(${i},1); saveData(); renderHizmetler()">Sil</button>
            </li>
        `;
    });
}

/************ ÜRÜNLER ************/
function urunEkle() {
    const ad = document.getElementById("urunAd").value;
    const fiyat = document.getElementById("urunFiyat").value;

    if (!ad) return;

    urunler.push({ ad, fiyat });
    saveData();
    renderUrunler();
}

function renderUrunler() {
    const ul = document.getElementById("urunListe");
    ul.innerHTML = "";

    urunler.forEach((u, i) => {
        ul.innerHTML += `
            <li>
                <strong>${u.ad}</strong> - ${u.fiyat} ₺
                <button onclick="urunler.splice(${i},1); saveData(); renderUrunler()">Sil</button>
            </li>
        `;
    });
}

/************ TARİH & SAAT ************/
function updateClock() {
    const now = new Date();
    const date = now.toLocaleDateString("tr-TR");
    const time = now.toLocaleTimeString("tr-TR");

    const top = document.getElementById("topClock");
    const bottom = document.getElementById("bottomClock");

    if (top) top.innerText = `${date} ${time}`;
    if (bottom) bottom.innerText = `${date}\n${time}`;
}

setInterval(updateClock, 1000);
updateClock();

/************ DEFAULT ************/
loadPage("musteriler");
