import Swup from 'swup';
import Theme from '@swup/slide-theme';
import SwupHeadPlugin from "@swup/head-plugin";
import GA from "@swup/ga-plugin";

const swup = new Swup({
    plugins: [
        new SwupHeadPlugin({
            persistAssets: true,
        }),
        new GA(),
        new Theme()
    ]
});

swup.on('contentReplaced', () => {
    if (document.getElementById('map')) {
        const theDrey = { lat: 53.9524713, lng: -1.0714173 };
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 16,
            center: theDrey,
        });
        const marker = new google.maps.Marker({
            position: theDrey,
            map: map,
        });
    }
});