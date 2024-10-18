
let tekSayilar = [];
let ciftSayilar = [];
const minimumSayi = 10;
function sayiEkle() {
for (let i = 0; i < minimumSayi; i++) {

  let sayi = prompt('Sayı giriniz');
 
  if (sayi % 2 === 0) {

    ciftSayilar.push (sayi);
    
  } else {
    tekSayilar.push(sayi);
    
  }

} 
console.log('Çift Sayılar: ' + ciftSayilar);
console.log('Tek Sayılar: ' + tekSayilar);
}

sayiEkle();