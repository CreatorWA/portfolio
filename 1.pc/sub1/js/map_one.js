// window.onload = function () {
//     var container = document.getElementById('map');
//     var options = {
//         center: new kakao.maps.LatLng(37.43800919778249, 127.00579670885342), /* 위도 경도 */
//         level: 2  /* 지도확대 */
//     };

//     var map = new kakao.maps.Map(container, options);

//     var mapTypeControl = new kakao.maps.MapTypeControl();
//     map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

//     var zoomControl = new kakao.maps.ZoomControl();
//     map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

//     var markerPosition = new kakao.maps.LatLng(37.43800919778249, 127.00579670885342);
//     var marker = new kakao.maps.Marker({
//         position: markerPosition
//     });

//     marker.setMap(map);

//     var overlay = new kakao.maps.CustomOverlay({
//         map: map,
//         position: marker.getPosition()
//     });




window.onload = function () {
    kakao.maps.load(function() {  // 로딩 완료 후 실행
        var container = document.getElementById('map');
        var options = {
            center: new kakao.maps.LatLng(37.43800919778249, 127.00579670885342),
            level: 2
        };
        var map = new kakao.maps.Map(container, options);

        var mapTypeControl = new kakao.maps.MapTypeControl();
        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

        var zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

        var markerPosition = new kakao.maps.LatLng(37.43800919778249, 127.00579670885342);
        var marker = new kakao.maps.Marker({ position: markerPosition });
        marker.setMap(map);

        // CustomOverlay 완성 예시 (content 추가)
        var overlay = new kakao.maps.CustomOverlay({
            map: map,
            position: marker.getPosition(),
            content: '<div style="padding:5px; background:white; border:1px solid black;">오버레이 내용</div>',
            yAnchor: 1
        });
    });
};