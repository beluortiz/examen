
function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}


function initMap() {
    const mapElement = document.getElementById('map');


    const colegioLocation = { lat: -25.520794, lng: -54.617264 };

    
    const mapOptions = {
        center: colegioLocation,
        zoom: 16
    };

 
    const map = new Microsoft.Maps.Map(mapElement, mapOptions);

    
    const colegioMarker = new Microsoft.Maps.Pushpin(colegioLocation, {
        title: 'Colegio Inmaculada Concepción',
        subTitle: '¡Tu mejor opción educativa!'
    });


    map.entities.push(colegioMarker);
}


document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', toggleMenu);
});

document.querySelector('a[href="#inicio"]').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('inicio-carousel').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('scroll-box').addEventListener('click', function() {
    window.scroll({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});

