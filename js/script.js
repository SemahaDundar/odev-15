
const kartTemplate = `
<div class="kart-cerceve">
    <div class="kart-onyuz">
        <img src="https://via.placeholder.com/100x100?text=?">
    </div>
    <div class="kart-arkayuz">
        <img src="">
    </div>
</div>
`;

let eslesmeSayisi = 0;
let eSayiGosterge = document.getElementById('eSayi');
document.querySelector('body').style.position ="relative";

//let fotoNumaralari =[0,0,0,0,0,0,0,0];

kartSirala();

const fotoNumaralari = [
    10, 20, 30, 20,
    10, 40, 40, 30
];



for (fotoNumara of fotoNumaralari) {
const yenikart = document.createElement("div");
yenikart.innerHTML = kartTemplate;
yenikart.classList.add("kart");
yenikart.querySelector(".kart-arkayuz img").src = `https://lipsum.app/id/${fotoNumara}/100x100`;
document.querySelector("div#oyun-cerceve").append(yenikart);



//Her bir karta tıklandığında "kartTiklama" fonksiyonu çalışacak.
yenikart.addEventListener("click", kartTiklama);
}


/*
function bosSirabul(){
    let basarili = false;
    let rs =-1;
    let x = 200;
}

while(x > 0){
    rs = Math.floor(Math.random()*8);
    if(fotoNumaralari[rs] == 0){
        basarili = true;
     }else{
        basarili = false;
     }if(basarili == true)break;

     x--;

} return rs;


function kartSirala(){
    let piyangoSayilar = [];

    for(let x=0; x < 4; x++){
        let bSayi = Math.floor(Math.random()*98 + 1);
        piyangoSayilar.push(bSayi);
    }


fotoNumaralari = [0,0,0,0,0,0,0,0];

for(let y=0; y <4; y++ ){
    let cirkin = piyangoSayilar[y];


 for(t=0; t<2; t++);{
 let yeniSira = bosSirabul();

    fotoNumaralari[yeniSira] = cirkin;
}
}
}
*/
function kartTiklama(olay) {
//Tıklanan kartı seçilen olarak değişkene atayalım
const secilenKart = olay.currentTarget;

//Tıklanan kart eslesti classına sahipse daha önce başka kartla eşleşmiş ve zaten açık durumda demektir, işlem yapmayacağız.
if (secilenKart.classList.contains("eslesti") === true) {
    return;
}

//Tıklanan ve açılan karta tekrar tıklanırsa işlem yapmayacağız.
if (secilenKart.classList.contains("acik") === true) {
    return;
}

//Peşpeşe kartlara tıklandığında 2'den fazla kart tıklanmasını engellememiz gerekiyor.
const tumAcikKartlar = document.querySelectorAll(".acik");
if (tumAcikKartlar.length === 2) {
    return;
}

//Açık olan kart varsa seçelim.
const acikKart = document.querySelector(".acik");

//Hiç açık kart yoksa tıklanan karta açık class veriyoruz ve fonksiyondan çıkıyoruz.
if (acikKart === null) {
    secilenKart.classList.add("acik");

    setTimeout(
        () => {
            secilenKart.classList.remove("acik");
        }, 1500
    );
    return;
}

//Daha önce bir açık kartımız varmış, son seçilen karta da açık class vererek tersini çevirelim.
secilenKart.classList.add("acik");

//Açık kartlara ait img etiketlerinin src görsel dosyaları eşleşiyor mu?
const acikKartImg = acikKart.querySelector(".kart-arkayuz img");
const secilenKartImg = secilenKart.querySelector(".kart-arkayuz img");

if (acikKartImg.src === secilenKartImg.src) {
    eslesmeSayisi++;
    eSayiGosterge.innerHTML = eslesmeayisi;
    //iki açik kart arasında eşleşmme var.
    acikKart.classList.add("eslesti");
    secilenKart.classList.add("eslesti");

    acikKart.classList.remove("acik");
    secilenKart.classList.remove("acik");

    setTimeout(() => {
        acikKart.removeEventListener("click", kartTiklama);
        secilenKart.removeEventListener("click", kartTiklama);
    }, 1000);
} else {
    //İki açık kartın görsel dosya adı birbirinden farklı, eşleşme yok, kartlar kapansın.
    setTimeout(() => {
        acikKart.classList.remove("acik");
        secilenKart.classList.remove("acik");
    }, 1500);
}


if(eslesmeSayisi == 4){
    Bravooo();//alert komutu gibi
}
}
function Bravooo(){
    let Bravooo= document.createElement('img');
    Bravooo. url= "./img/party-popper-joypixels.gif"
    Bravooo.style.position ="absolute";
    Bravooo.id ="BravoMesaji";
    Bravooo.style.left="50%";
    Bravooo.style.top="50%";
    Bravooo.style.transform="-50%, -50%";
    document.body.appendChild(Bravooo);
    setTimeout(function(event){document.getElementById('BravoMesaji').remove();}, 5000);

}









/*
}
let oyun_cerceve= document.querySelector.acikKartImg;
let imgElemani =document.createElement("img");

  function acikKart()
  {
    if(oyun_cerceve == true) return;
       else{imgElemani.querySelector}return;

    setTimeout.imgElemani.remove(5000);
  };


    /*if (acikKartImg.src === secilenKartImg.src) {
        acikKart.classList.add("eslesti");
        secilenKart.classList.add("eslesti");}


    acikKartImg.then(function (sonuc){
    setTimeout((remove) => resolve("done!"), 5000) 
})
*/






/*
let gift = new Promise( function( resolve, reject ){
    imgElemani.addEventListener( "load", (olay)=>{
        resolve();
        setTimeout(() => resolve("done!"), 5000)
    } );
} );

gift.then( (sonuc)=>{
    gift.innerHTML = "";
    gift.append(imgElemani);
} );

*/
