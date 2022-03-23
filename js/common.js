/* header */
var headerSpace = document.querySelector("#header");
var headerCont = `
<div class="nav_container">
<nav>

    <!-- mobile menu -->
    <ul class="mobile_menu">
        <li>
            <div class="hamburger_container">
                <div class="hamburger">
                    <span class="line_1"></span>
                    <span class="line_2"></span>
                </div>
            </div>
        </li>
        <li>
            <a href="./index.html" class="logo">A CHAIRY TALE</a>
        </li>
        <li>
            <a href="#" class="bag"></a>
        </li>
    </ul>
    <!-- mobile menu end -->

    <ul class="nav_menu">
        <li><a href="./index.html" class="logo">A CHAIRY TALE</a></li>
        <li>
            <a href="./sub1.html">브랜드 빌리프</a>
        </li>
        <li>
            <a href="./sub2.html">제품</a>
            <i class='bx bx-plus more proMore'></i>
            <ul class="sub_menu product_sub">
                <li><a href="#">Seating</a></li>
                <li><a href="#">Gaming</a></li>
                <li><a href="#">Workspaces</a></li>
                <li><a href="#">Tables</a></li>
                <li><a href="#">Storage</a></li>
                <li><a href="#">Accessories</a></li>
            </ul>
        </li>
        <li>
            <a href="./kakao-map-api/index.html">플래그십 스토어</a>
        </li>
        <li>
            <a href="./sub4.html">고객지원</a>
            <i class='bx bx-plus more sptMore'></i>
            <ul class="sub_menu support_sub">
                <li><a href="./sub5.html">FAQ</a></li>
                <li><a href="#">A/S</a></li>
                <li><a href="#">문의하기</a></li>
            </ul>
        </li>
        <li class="nav_icon">
            <a href="#" class="search"></a>
            <a href="#" class="bag"></a>
        </li>
    </ul>
</nav>

<div class="search_container hide">
    <div class="search"></div>
    <div class="search_bar">
        <form action="">
            <input type="text" placeholder="검색어를 입력해 주세요.">
        </form>
    </div>
    <div class="search_close"></div>
    <div class="quick_link">
        <h2>인기 검색어</h2>
        <ul>
            <li><a href="#">소파</a></li>
            <li><a href="#">리클라이너</a></li>
            <li><a href="#">램프</a></li>
            <li><a href="#">테이블</a></li>
            <li><a href="#">러그</a></li>
        </ul>
    </div>
</div><!--search_container end-->

<div class="mobile_search_container">
    <div class="search"></div>
    <div class="search_bar">
        <form action="">
            <input type="text" placeholder="검색어를 입력해 주세요.">
        </form>
    </div>
    <div class="search_close"></div>
    <div class="quick_link">
        <h2>인기 검색어</h2>
        <ul>
            <li><a href="#">소파</a></li>
            <li><a href="#">리클라이너</a></li>
            <li><a href="#">램프</a></li>
            <li><a href="#">테이블</a></li>
            <li><a href="#">러그</a></li>
        </ul>
    </div>
</div>

</div> <!--nav_container end-->    

</div> <!--#header end-->

<div class="overlay"></div>
`;
headerSpace.innerHTML = headerCont;


// 모바일 헤더
const search = document.querySelector(".nav_container nav .nav_menu .search");
const close = document.querySelector(".search_container .search_close");
const menuBar = document.querySelector(".nav_container nav .nav_menu");
const searchBar = document.querySelector(".search_container");
const overlay = document.querySelector(".overlay");

search.addEventListener("click", () => {
    menuBar.classList.add("hide");
    searchBar.classList.remove("hide");
    overlay.classList.add("show");
});

close.addEventListener("click", () => {
    menuBar.classList.remove("hide");
    searchBar.classList.add("hide");
    overlay.classList.remove("show");
});

overlay.addEventListener("click", () => {
    menuBar.classList.remove("hide");
    searchBar.classList.add("hide");
    overlay.classList.remove("show");
});


// 모바일 메뉴
const menuWrap = document.querySelector(".hamburger_container");
const navWrap = document.querySelector(".nav_container");

menuWrap.addEventListener("click", () => {
    navWrap.classList.toggle("active");
});

const nav = document.querySelector(".nav_container nav");
const m_searchBar = document.querySelector(".mobile_search_container .search_bar");
const m_searchBox = document.querySelector(".mobile_search_container input");
const closeBtn = document.querySelector(".mobile_search_container .search_close");

m_searchBox.addEventListener("click", () => {
    m_searchBar.classList.add("active");
    nav.classList.add("move");
    menuBar.classList.add("down");
});

closeBtn.addEventListener("click", () => {
    m_searchBar.classList.remove("active");
    nav.classList.remove("move");
    menuBar.classList.remove("down");
});


//모바일 서브메뉴
const subMenu1 = document.querySelector(".sub_menu.product_sub");
const subMenu2 = document.querySelector(".sub_menu.support_sub");

const subBtn1 = document.querySelector(".proMore");
subBtn1.addEventListener("click", () => {
    subMenu1.classList.toggle("open1");
});
const subBtn2 = document.querySelector(".sptMore");
subBtn2.addEventListener("click", () => {
    subMenu2.classList.toggle("open2");
});




/* footer */
var footerSpace = document.querySelector("#footer");
var footerCont = `
<footer class="footer">
<div class="footer_container">
    <div class="row">
        <div class="col">
            <h4>ABOUT</h4>
            <ul>
                <li><a href="#">BRAND BELIEF</a></li>
                <li><a href="#">BRAND CAMPAIGN</a></li>
            </ul>
        </div>
        <div class="col">
            <h4>PRODUCTS</h4>
            <ul>
                <li><a href="#">SEATING</a></li>
                <li><a href="#">GAMING</a></li>
                <li><a href="#">WORKSPACES</a></li>
                <li><a href="#">TABLES</a></li>
                <li><a href="#">STORAGE</a></li>
                <li><a href="#">ACCESSORIES</a></li>
            </ul>
        </div>
        <div class="col">
            <h4>LOCATION</h4>
            <ul>
                <li><a href="#"></a></li>
            </ul>
        </div>
        <div class="col">
            <h4>SUPPORT</h4>
            <ul>
                <li><a href="#">Q&A</a></li>
                <li><a href="#">A/S</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">USER GUIDE</a></li>
            </ul>
        </div>
        <div class="col">
            <h4>CONTACT US</h4>
            <ul>
                <li><a href="#"><i class='bx bxs-chat chat'></i>챗봇상담</a></li>
                <li>평일 : 09:30 - 17:30</li> 
                <li>점심시간 : 12:30 - 13:30</li>
                <li>토,일요일 및 공휴일 휴무</li>
            </ul>
            <div class="sns_links">
                <a href="#"><i class='bx bxl-youtube'></i></a>
                <a href="#"><i class='bx bxl-facebook' ></i></a>
                <a href="#"><i class='bx bxl-instagram' ></i></a>
            </div>
        </div>
    </div>
    <div class="copyright">
       <p>&copy; A CHAIRY TALE CORPORATION. ALL RIGHTS RESERVED.</p>
    </div>
    <a href="#" class="scroll_up">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"></path>
        </svg>
    </a>
</div>
</footer>
`;
footerSpace.innerHTML = footerCont;


/* scroll up */
//버튼 생성
const scrollBtn = document.querySelector(".scroll_up");

//클릭 시 문서 상단으로 이동
scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});