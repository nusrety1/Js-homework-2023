// Yaş Hesaplama Sistemi

let zaman = new Date();
let dogum_gun_nesne = document.getElementById("dogum_gun");
let dogum_ay_nesne = document.getElementById("dogum_ay");
let dogum_yil_nesne = document.getElementById("dogum_yil");
let hesaplaYasBtn = document.getElementById("hesaplaYas");
hesaplaYasBtn.onclick = yasIslem;

function yasIslem() {
    let dogum_gun = Number(dogum_gun_nesne.value);
    let dogum_ay = Number(dogum_ay_nesne.value);
    let dogum_yil = Number(dogum_yil_nesne.value);

    let yas = new Date().getFullYear() - dogum_yil;
    let ay = new Date().getMonth() - dogum_ay;

    let durumGosterYas = document.getElementById("durumGosterYas");

    // getDay methodu haftanın günlerine göre hesap yaptığı için gün hesaplamak sıkıntı çıkkartıyor.
    if ((new Date().getFullYear()) >= dogum_yil) {
        if ((new Date().getMonth() + 1) > dogum_ay) {
            durumGosterYas.innerHTML = dogum_gun + "." + dogum_ay + "." + dogum_yil + " Tarihinde Doğdunuz" +
                "<br><br>" + yas + " Yıl yaşındasınız"
        } else {
            durumGosterYas.innerHTML = dogum_gun + "." + dogum_ay + "." + dogum_yil + " Tarihinde Doğdunuz" +
                "<br><br>" + (yas - 1) + " Yıl yaşındasınız"
        }
    } else {
        durumGosterYas.innerHTML = "Unknow Date"
    }
}

// Karne Ortalama Hespalama Sistemi

let mat_nesne = document.getElementById("noteMatematik");
let mat_nesne_2 = document.getElementById("noteMatematik_2");
let mat_credit_nesne = document.getElementById("creditMatematik");

let fzk_nesne = document.getElementById("noteFizik");
let fzk_nesne_2 = document.getElementById("noteFizik_2");
let fzk_credit_nesne = document.getElementById("creditFizik");

let kmy_nesne = document.getElementById("noteKimya");
let kmy_nesne_2 = document.getElementById("noteKimya_2");
let kmy_credit_nesne = document.getElementById("creditKimya");

let byl_nesne = document.getElementById("noteBiyoloji");
let byl_nesne_2 = document.getElementById("noteBiyoloji_2");
let byl_credit_nesne = document.getElementById("creditBiyoloji");

let trh_nesne = document.getElementById("noteTarih");
let trh_nesne_2 = document.getElementById("noteTarih_2");
let trh_credit_nesne = document.getElementById("creditTarih");

let din_nesne = document.getElementById("noteDin");
let din_nesne_2 = document.getElementById("noteDin_2");
let din_credit_nesne = document.getElementById("creditDin");

let cgr_nesne = document.getElementById("noteCografya");
let cgr_nesne_2 = document.getElementById("noteCografya_2");
let cgr_credit_nesne = document.getElementById("creditCografya");

let fls_nesne = document.getElementById("noteFelsefe");
let fls_nesne_2 = document.getElementById("noteFelsefe_2");
let fls_credit_nesne = document.getElementById("creditFelsefe");

let edb_nesne = document.getElementById("noteEdebiyat");
let edb_nesne_2 = document.getElementById("noteEdebiyat_2");
let edb_credit_nesne = document.getElementById("creditEdebiyat");


let hesaplaOrtBtn = document.getElementById("hesaplaOrt");
hesaplaOrtBtn.onclick = ortIslem;

function ortIslem() {
    let durumGoster = document.getElementById("durumGosterNot");

    let mat_note = Number(mat_nesne.value);
    let mat_note_2 = Number(mat_nesne_2.value);
    let mat_credit = Number(mat_credit_nesne.value);
    let ortMat = ((mat_note + mat_note_2) / 2) * mat_credit;

    let fzk_note = Number(fzk_nesne.value);
    let fzk_note_2 = Number(fzk_nesne_2.value);
    let fzk_credit = Number(fzk_credit_nesne.value);
    let ortFzk = ((fzk_note + fzk_note_2) / 2) * fzk_credit;


    let kmy_note = Number(kmy_nesne.value);
    let kmy_note_2 = Number(kmy_nesne_2.value);
    let kmy_credit = Number(kmy_credit_nesne.value);
    let ortKmy = ((kmy_note + kmy_note_2) / 2) * kmy_credit;


    let byl_note = Number(byl_nesne.value);
    let byl_note_2 = Number(byl_nesne_2.value);
    let byl_credit = Number(byl_credit_nesne.value);
    let ortByl = ((byl_note + byl_note_2) / 2) * byl_credit;


    let trh_note = Number(trh_nesne.value);
    let trh_note_2 = Number(trh_nesne_2.value);
    let trh_credit = Number(trh_credit_nesne.value);
    let ortTrh = ((trh_note + trh_note_2) / 2) * trh_credit;

    let din_note = Number(din_nesne.value);
    let din_note_2 = Number(din_nesne_2.value);
    let din_credit = Number(din_credit_nesne.value);
    let ortDin = ((din_note + din_note_2) / 2) * din_credit;

    let cgr_note = Number(cgr_nesne.value);
    let cgr_note_2 = Number(cgr_nesne_2.value);
    let cgr_credit = Number(cgr_credit_nesne.value);
    let ortCgr = ((cgr_note + cgr_note_2) / 2) * cgr_credit;

    let fls_note = Number(fls_nesne.value);
    let fls_note_2 = Number(fls_nesne_2.value);
    let fls_credit = Number(fls_credit_nesne.value);
    let ortFls = ((fls_note + fls_note_2) / 2) * fls_credit;

    let edb_note = Number(edb_nesne.value);
    let edb_note_2 = Number(edb_nesne_2.value);
    let edb_credit = Number(edb_credit_nesne.value);
    let ortEdb = ((edb_note + edb_note_2) / 2) * edb_credit;

    let gOrt = (ortMat + ortFzk + ortKmy + ortByl + ortTrh + ortDin + ortCgr + ortFls + ortEdb) / 40

    if ((ortMat, ortFzk, ortKmy, ortByl, ortTrh, ortDin, ortCgr, ortFls, ortEdb) <= 49) {
        durumGoster.innerHTML = "Ortalamanız " + gOrt + "<br>" + "Zayıf Ders Ortalamanız Olduğundan Herhangi Bir Belge Alamazsınız."
    } else {
        if (gOrt >= 75) {
            durumGoster.innerHTML = "Ortalamanız " + gOrt + "<br>" + " Teşekkür Belgesi Almış Gibi Görünüyorsunuz." + "<br>" +
                "Tüh! Takdir " + (85 - gOrt) + " Puan İle Kaçmış"
        }
        if (gOrt >= 85) {
            durumGoster.innerHTML = "Ortalamanız " + gOrt + "<br>" + " Takdir Belgesi Almış gibi Görünüyorsunuz."
        } else {
            durumGoster.innerHTML = "Ortalamanız " + gOrt + "<br>" + " Ortalama ile Geçtiniz"
        }
    }
}

// Ortalama Hesaplama

let d1s1_nesne = document.getElementById("d1s1");
let d1y1_nesne = document.getElementById("d1y1");
let d1s2_nesne = document.getElementById("d1s2");
let d1y2_nesne = document.getElementById("d1y2");
let creditS1_nesne = document.getElementById("creditS1");

let d2s1_nesne = document.getElementById("d2s1");
let d2y1_nesne = document.getElementById("d2y1");
let d2s2_nesne = document.getElementById("d2s2");
let d2y2_nesne = document.getElementById("d2y2");
let creditS2_nesne = document.getElementById("creditS2");


let d3s1_nesne = document.getElementById("d3s1");
let d3y1_nesne = document.getElementById("d3y1");
let d3s2_nesne = document.getElementById("d3s2");
let d3y2_nesne = document.getElementById("d3y2");
let creditS3_nesne = document.getElementById("creditS3");


let d4s1_nesne = document.getElementById("d4s1");
let d4y1_nesne = document.getElementById("d4y1");
let d4s2_nesne = document.getElementById("d4s2");
let d4y2_nesne = document.getElementById("d4y2");
let creditS4_nesne = document.getElementById("creditS4");

let d5s1_nesne = document.getElementById("d5s1");
let d5y1_nesne = document.getElementById("d5y1");
let d5s2_nesne = document.getElementById("d5s2");
let d5y2_nesne = document.getElementById("d5y2");
let creditS5_nesne = document.getElementById("creditS5");


let d6s1_nesne = document.getElementById("d6s1");
let d6y1_nesne = document.getElementById("d6y1");
let d6s2_nesne = document.getElementById("d6s2");
let d6y2_nesne = document.getElementById("d6y2");
let creditS6_nesne = document.getElementById("creditS6");


let hesaplaOrt = document.getElementById("hesaplaOrtalama");
hesaplaOrt.onclick = ortIslem2;

function ortIslem2() {
    let durumGoster = document.getElementById("durumGoster");

    let d1s1 = Number(d1s1_nesne.value);
    let d1y1 = Number(d1y1_nesne.value);
    let d1s2 = Number(d1s2_nesne.value);
    let d1y2 = Number(d1y2_nesne.value);
    let creditS1 = Number(creditS1_nesne.value);
    let d1s1ort = d1s1 * (d1y1 / 100);
    let d1s2ort = d1s2 * (d1y2 / 100);
    let d1gOrt = (d1s1ort + d1s2ort);
    let d1not = d1gOrt * creditS1

    let d2s1 = Number(d2s1_nesne.value);
    let d2y1 = Number(d2y1_nesne.value);
    let d2s2 = Number(d2s2_nesne.value);
    let d2y2 = Number(d2y2_nesne.value);
    let creditS2 = Number(creditS2_nesne.value);
    let d2s1ort = d2s1 * (d2y1 / 100);
    let d2s2ort = d2s2 * (d2y2 / 100);
    let d2gOrt = (d2s1ort + d2s2ort);
    let d2not = d2gOrt * creditS2


    let d3s1 = Number(d3s1_nesne.value);
    let d3y1 = Number(d3y1_nesne.value);
    let d3s2 = Number(d3s2_nesne.value);
    let d3y2 = Number(d3y2_nesne.value);
    let creditS3 = Number(creditS3_nesne.value);
    let d3s1ort = d3s1 * (d3y1 / 100);
    let d3s2ort = d3s2 * (d3y2 / 100);
    let d3gOrt = (d3s1ort + d3s2ort);
    let d3not = d3gOrt * creditS3


    let d4s1 = Number(d4s1_nesne.value);
    let d4y1 = Number(d4y1_nesne.value);
    let d4s2 = Number(d4s2_nesne.value);
    let d4y2 = Number(d4y2_nesne.value);
    let creditS4 = Number(creditS4_nesne.value);
    let d4s1ort = d4s1 * (d4y1 / 100);
    let d4s2ort = d4s2 * (d4y2 / 100);
    let d4gOrt = (d4s1ort + d4s2ort);
    let d4not = d4gOrt * creditS4


    let d5s1 = Number(d5s1_nesne.value);
    let d5y1 = Number(d5y1_nesne.value);
    let d5s2 = Number(d5s2_nesne.value);
    let d5y2 = Number(d5y2_nesne.value);
    let creditS5 = Number(creditS5_nesne.value);
    let d5s1ort = d5s1 * (d5y1 / 100);
    let d5s2ort = d5s2 * (d5y2 / 100);
    let d5gOrt = (d5s1ort + d5s2ort);
    let d5not = d5gOrt * creditS5

    let d6s1 = Number(d6s1_nesne.value);
    let d6y1 = Number(d6y1_nesne.value);
    let d6s2 = Number(d6s2_nesne.value);
    let d6y2 = Number(d6y2_nesne.value);
    let creditS6 = Number(creditS6_nesne.value);
    let d6s1ort = d6s1 * (d6y1 / 100);
    let d6s2ort = d6s2 * (d6y2 / 100);
    let d6gOrt = (d6s1ort + d6s2ort);
    let d6not = d6gOrt * creditS6

    let gOrt = (d1not + d2not + d3not + d4not + d5not + d5not) / 18;

    if (gOrt <= 100) {
        durumGoster.innerHTML = "AA" + "<br>" + "Ortalamanız:" + gOrt;
        if (gOrt <= 80) {
            durumGoster.innerHTML = "BA" + "<br>" + "Ortalamanız:" + gOrt;
            if (gOrt <= 71) {
                durumGoster.innerHTML = "BB" + "<br>" + "Ortalamanız:" + gOrt;
                if (gOrt <= 63) {
                    durumGoster.innerHTML = "CB" + "<br>" + "Ortalamanız:" + gOrt;
                    if (gOrt <= 55) {
                        durumGoster.innerHTML = "CC" + "<br>" + "Ortalamanız:" + gOrt;
                        if (gOrt <= 50) {
                            durumGoster.innerHTML = "DC" + "<br>" + "Ortalamanız:" + gOrt;
                            if (gOrt <= 45) {
                                durumGoster.innerHTML = "DD" + "<br>" + "Ortalamanız:" + gOrt;
                                if (gOrt <= 40) {
                                    durumGoster.innerHTML = "FD" + "<br>" + "Ortalamanız:" + gOrt;
                                    if (gOrt < 35) {
                                        durumGoster.innerHTML = "FF" + "<br>" + "Ortalamanız:" + gOrt;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

// Ehliyet Hesaplama Sistemi

var yasNesne = document.getElementById("yas");
var hesaplaBtn = document.getElementById("hesapla");

//tıklama olayına islemYap metodunu bağlıyoruz. 
//burada metod çalışmadığı için parantez olmaz.
hesaplaBtn.onclick = islemYap;

function islemYap() {

    var yas = Number(yasNesne.value); //dışarıdaki global nesnseyi alıyor

    //durumun gösterileceği div seçildi. Bu divin icine öğrenci notunu göstereceğiz
    var durumGoster = document.getElementById("durumgoster");
    if (yas >= 18) {
        durumGoster.innerHTML = "YAŞINIZ EHLİYET ALMAK İÇİN UYGUNDUR. Fiyatlar Pahalanmadan KAydınızı YAptırın";
    } else {
        durumGoster.innerHTML = "YAŞINIZ EHLİYET ALMAK İÇİN UYGUN DEĞİLDİR." +
            "<BR> <BR>" + (18 - yas) + " YIL SONRA TEKRAR DENEYİN.";
    }
}

// Dark Mode
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

// Paginate
function showData(id) {
    var dataElements = document.querySelectorAll("[id^='data']");
    dataElements.forEach(function (element) {
        element.style.display = "none";
    });

    var selectedElement = document.getElementById(id);
    if (selectedElement) {
        selectedElement.style.display = "block";
    }
}



//   Kayan Animasyon

window.addEventListener('DOMContentLoaded', function() {
    var elements = document.getElementsByTagName('section');
    var position = -200; //başlangıç px
    var stopPosition = 0;//bitiş px
    var interval;
  
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.position = 'relative'; 
      elements[i].style.top = position + 'px'; 
    }
  
    function startAnimation() {
      interval = setInterval(kayanAnimasyon, 5);
    }
  
    function kayanAnimasyon() {
      if (position >= stopPosition) {
        clearInterval(interval);
      } else {
        position++;
        for (var i = 0; i < elements.length; i++) {
          elements[i].style.top = position + 'px';
        }
      }
    }
  
    startAnimation();
  });