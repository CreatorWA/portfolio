window.onload = function () {
    var container = document.getElementById('map');
    var options = {
        center: new kakao.maps.LatLng(37.43800919778249, 127.00579670885342), /* 위도 경도 */
        level: 2  /* 지도확대 */
    };

    var map = new kakao.maps.Map(container, options);

    var mapTypeControl = new kakao.maps.MapTypeControl();
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    var zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    var markerPosition = new kakao.maps.LatLng(37.43800919778249, 127.00579670885342);
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });

    marker.setMap(map);

    var overlay = new kakao.maps.CustomOverlay({
        map: map,
        position: marker.getPosition()
    });
}