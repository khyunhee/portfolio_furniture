var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(37.524719, 127.037556), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(37.524423, 127.035422); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);


// 커스텀 오버레이에 표시할 내용입니다     
var content = '<div class="overlaybox">' +
    '    <div class="image"></div>' +
    '    <div class="cont_container">' +
    '        <p class="title">체어리테일 도산 플래그십 스토어</p>' + 
    '        <p class="title_info">서울특별시 강남구 도산대로0길 10</p>' +
    '         <ul>' +
    '           <li class="text">' +
    '               <span class="title">전화번호</span>' +
    '               <br><span class="description">02-000-000</span>' +
    '           </li>' +
    '           <li class="text">' +
    '              <span class="title">운영시간</span>' +
    '                <br><span class="description">10:30 ~ 18:30</span>' +
    '            </li>' +
    '           <li class="text">' +
    '                <span class="title">결제방법</span>' +
    '                <br><span class="description">카드결제</span>' +
    '           </li>' +
    '            <li class="text">' +
    '                <span class="title">주차</span>' +
    '                <br><span class="description">주차 가능</span>' +
    '           </li>' +
    '            <li class="text">' +
    '                <span class="title">추가정보</span>' +
    '                <br><span class="description">특정 제품을 보기 원하실 시, <br>전시 여부를 사전에 문의해 주세요.</span>' +
    '           </li>' +
    '        </ul>' +
    '    </div>' +
    '</div>';

// 커스텀 오버레이가 표시될 위치입니다 
var position = new kakao.maps.LatLng(37.524423, 127.035422);  

// 커스텀 오버레이를 생성합니다
var customOverlay = new kakao.maps.CustomOverlay({
    position: position,
    content: content,
    xAnchor: 0.3,
    yAnchor: 0.91
});

// 커스텀 오버레이를 지도에 표시합니다
customOverlay.setMap(map);



// 모바일용 커스텀 오버레이에 표시할 컨텐츠 입니다
var content = '<div class="wrap">' + 
            '    <div class="info">' + 
            '        <div class="title">' + 
            '            체어리테일 도산 플래그십 스토어' + 
            '            <div class="close" onclick="closeOverlay()" title="닫기"><i class="bx bx-x"></i></div>' + 
            '        </div>' + 
            '        <div class="body">' + 
            '            <div class="desc">' + 
            '                <div class="ellipsis">서울특별시 강남구 도산대로0길 10</div>' + 
            '                <div class="jibun ellipsis">(우) 0000 (지번) 신사동 1111</div>' + 
            '                <div><a href="../index.html" target="_blank" class="link">홈페이지</a></div>' + 
            '            </div>' + 
            '        </div>' + 
            '    </div>' +    
            '</div>';

// 마커 위에 커스텀오버레이를 표시합니다
// 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
var mOverlay = new kakao.maps.CustomOverlay({
    content: content,
    map: map,
    position: marker.getPosition()       
});

// 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
kakao.maps.event.addListener(marker, 'click', function() {
    mOverlay.setMap(map);
});

// 커스텀 오버레이를 닫기 위해 호출되는 함수입니다 
function closeOverlay() {
    mOverlay.setMap(null);     
}