$(document).ready(function(){
    //기본설정_본문 숨겨두기
    $(".accordion_answer").hide();

    $(".accordion_title").on("click", function(){
        //클릭 시 본문 슬라이드
        $(this).next().slideToggle("slow");
        //버튼 효과
        $(this).parent().toggleClass("active");
        //제목 클릭 시 이벤트 당사자가 아닌 것은 슬라이드업
        $(".accordion_title").not(this).next().slideUp("slow");
        //슬라이드업 될 시 버튼 효과 지우기
        $(".accordion_title").not(this).parent().removeClass("active");
    });
});