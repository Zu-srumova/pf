const button = document.getElementById('button');
const prani = document.getElementById('you-wish');

let youWish = ['Nebojte se vystoupit z davu.<br><span class="you-wish-alt">Nebo aspoň z&nbsp;vlaku.<br>V Roztokách.<br>A přijít na kafe!</span>',
'Hodně kreativity a ještě více odvahy!',
'Spoustu objevů a nečekaných spojení!',
'Ať vám nedojdou baterky!',
'Pěkně kompaktní rok 2019!<br><span class="you-wish-alt">(S&nbsp;pomocí trochy gafy a&nbsp;tavné pistole je kompaktní kde&nbsp;co.)</span>', 
'Mnoho skvělých nápadů!<br><span class="you-wish-alt">(I pitomých nápadů. Jednak jsou živnou půdou pro ty skvělé, jednak se pitomost občas mění v&nbsp;genialitu.)</span>',
'Půvabný a vybarvený rok 2019!<br><span class="you-wish-alt">Hlavně se z toho nevobkreslit.</span>',
'Ať nevyhynete!',
'Skvělou smečku v novém roce!<br><span class="you-wish-alt">Hlavně ať vás neuštve.</span>',
'Spoustu zábavy a mnohá dobrodružstvíčka!',
'Početné humory!',
];

let nenasytaYouWish = "A hlavně hodně skromnosti!";

let nenasytaButton = "Nenasyto.";

let kliknuto = 0;

let losovatko = () => {
    let index = Math.floor(Math.random() * youWish.length);
    prani.innerHTML = youWish[index];
    kliknuto ++;
}

let nenasyta = () => {
    prani.innerHTML = nenasytaYouWish;
    button.innerHTML = nenasytaButton;
}

button.onclick = () => {
    if(kliknuto < 5) {
    losovatko();
    } else {
        nenasyta();
    }
  };