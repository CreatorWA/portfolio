function initMapOne() {
    var container = document.getElementById('map');
    if (!container) {
        return;
    }

    var options = {
        center: new kakao.maps.LatLng(37.43800919778249, 127.00579670885342),
        level: 2
    };

    var map = new kakao.maps.Map(container, options);

    setTimeout(function () {
        map.relayout();
    }, 0);

    var mapTypeControl = new kakao.maps.MapTypeControl();
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    var zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    var markerPosition = new kakao.maps.LatLng(37.43800919778249, 127.00579670885342);
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });

    marker.setMap(map);

    new kakao.maps.CustomOverlay({
        map: map,
        position: marker.getPosition()
    });
}

window.addEventListener('load', function () {
    if (typeof kakao === 'undefined' || !kakao.maps) {
        return;
    }
    kakao.maps.load(initMapOne);
});
