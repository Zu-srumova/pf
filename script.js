const button = document.getElementById('button');
const prani = document.getElementById('you-wish');

let youWish = ['Nebojte se vystoupit z davu.<br><span class="you-wish-alt">Nebo aspoň z&nbsp;vlaku.<br>V Roztokách.<br>A přijít na kafe!</span>',
'Hodně kreativity a ještě více odvahy!',
'Spoustu objevů a nečekaných spojení!',
'Ať vám nedojdou baterky!<br><span class="you-wish-alt">(Dinosaurus vpravo se právě nabíjí. Vemte si z&nbsp;něj občas příklad.)</span>',
'Bohatý a rozmanitý rok 2019!<br><span class="you-wish-alt">(S&nbsp;pomocí trochy gafy a&nbsp;tavné pistole utvoří i&nbsp;nejroztodivnější elementy harmonický celek.)</span>', 
'Mnoho skvělých nápadů!<br><span class="you-wish-alt">(I pitomých nápadů. Jednak jsou živnou půdou pro ty skvělé, jednak se pitomost občas mění v&nbsp;genialitu.)</span>',
'Půvabný a vybarvený rok 2019!<br><span class="you-wish-alt">Hlavně se z toho nevobkreslit.</span>',
'Ať nevyhynete!<br><span class="you-wish-alt">(Nebojte se v případě potřeby ukázat zuby. I když jste býložravec.)</span>',
'Skvělou smečku v novém roce!<br><span class="you-wish-alt">Ať je vám s ní dobře a hlavně ať vás neuštve.</span>',
'Spoustu zábavy a mnohá dobrodružstvíčka!<br><span class="you-wish-alt">Ať vás to v příštím roce baví.</span>',
'Početné humory!<br><span class="you-wish-alt">Alespoň jeden na kažný den!</span>',
'Nechť vás síla provází!<br><span class="you-wish-alt">Konkrétně síla alespoň tří dinosaurů.</span>',
];

let nenasytaYouWish = 'A hlavně hodně skromnosti!<br><span class="you-wish-alt">Pět přání nestačilo?</span>';

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
    button.style.cursor = "auto";
    button.style.backgroundColor = "#DCECF6";
}

button.onclick = () => {
    if(kliknuto < 5) {
    losovatko();
    } else {
        nenasyta();
    }
  };