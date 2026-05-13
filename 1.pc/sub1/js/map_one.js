// 



window.onload = function () {
    var container = document.getElementById('map'); // 지도를 담을 영역의 id
    var options = {
        center: new kakao.maps.LatLng(37.43800919778249, 127.00579670885342), // 국립과천과학관 좌표
        level: 2 // 지도 확대 레벨
    };

    // 지도를 생성합니다
    var map = new kakao.maps.Map(container, options);

    // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 컨트롤을 생성합니다
    var mapTypeControl = new kakao.maps.MapTypeControl();
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    // 지도 확대 축소를 제어할 수 있는 줌 컨트롤을 생성합니다
    var zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    // 마커가 표시될 위치입니다 
    var markerPosition = new kakao.maps.LatLng(37.43800919778249, 127.00579670885342); 

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    // 커스텀 오버레이에 표시될 내용 (디자인은 CSS에서 수정 가능해!)
    var content = '<div style="padding:5px 10px; background:#fff; border:1px solid #333; border-radius:3px; font-weight:bold; font-size:12px; color:#333; position:relative; bottom:40px; box-shadow: 2px 2px 5px rgba(0,0,0,0.2);">국립과천과학관</div>';

    // 커스텀 오버레이를 생성합니다
    var overlay = new kakao.maps.CustomOverlay({
        content: content,
        map: map,
        position: marker.getPosition()
    });
};