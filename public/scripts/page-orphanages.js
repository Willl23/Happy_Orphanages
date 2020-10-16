//tipos de dados
//String""
//Number 01
//Object {} Boolean true or false
// Array []

//create map
const map = L.map('mapid').setView([-27.2109325,-49.6448719], 15);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',)
.addTo(map);


//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 40],
    iconAnchor: [29,68],
    popAnchor: [170, 2]
})

// create popup overlay_Criar sobreposição de pop-up
const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>')

//create and add marker_Criar e adicionar marcador
L
.marker([-27.2109325,-49.6448719], { icon })
.addTo(map)
.bindPopup(popup)