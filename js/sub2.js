let items = {
    data : [
        {
            itemName: "sofa",
            category: "seating",
            image: "./images/product/seating1.png"
        },
        {
            itemName: "stool",
            category: "seating",
            image: "./images/product/seating2.png"
        },
        {
            itemName: "pouf",
            category: "seating",
            image: "./images/product/seating5.png"
        },
        {
            itemName: "coffee table",
            category: "tables",
            image: "./images/product/table2.png"
        },
        {
            itemName: "T100 series",
            category: "gaming",
            image: "./images/product/gaming2.png"
        },
        {
            itemName: "interior chair",
            category: "seating",
            image: "./images/product/seating4.png"
        },
        {
            itemName: "recliner",
            category: "seating",
            image: "./images/product/seating3.png"
        },
        {
            itemName: "drawer",
            category: "storage",
            image: "./images/product/storage1.png"
        },
        {
            itemName: "desk",
            category: "tables",
            image: "./images/product/table4.png"
        },
        {
            itemName: "T10 series",
            category: "gaming",
            image: "./images/product/gaming1.png"
        },
        {
            itemName: "armchair",
            category: "seating",
            image: "./images/product/seating6.png"
        },
        {
            itemName: "task chair",
            category: "workspaces",
            image: "./images/product/work1.png"
        },
        {
            itemName: "rug",
            category: "accessories",
            image: "./images/product/acc1.png"
        },
        {
            itemName: "round table",
            category: "tables",
            image: "./images/product/table1.jpg"
        },
        {
            itemName: "fabric",
            category: "accessories",
            image: "./images/product/acc2.png"
        },
    ],
};

for (let i of items.data){
    //?????? ???
    let imageBox = document.createElement("div");
    //????????? ????????????
    imageBox.classList.add("imageBox", i.category, "hide");
    //????????? ???
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("img_container");
    //?????????
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    imageBox.appendChild(imgContainer);
    //????????? ???
    let container = document.createElement("div");
    container.classList.add("container");
    //????????????
    let name =  document.createElement("h4");
    name.classList.add("itemName");
    name.innerText = i.itemName.toUpperCase();
    container.appendChild(name);

    //????????? ??????
    imageBox.appendChild(container);
    document.getElementById("items").appendChild(imageBox);

    //?????????
    function filterItem(value) {
        let btns = document.querySelectorAll(".item_list");
        btns.forEach((btn) => {
            if (value.toUpperCase() == btn.innerText.toUpperCase()) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });

        let products = document.querySelectorAll(".imageBox");
        products.forEach((product) => {
            if (value == "all") {
                product.classList.remove("hide");
            } else {
                if (product.classList.contains(value)) {
                    product.classList.remove("hide");
                } else {
                    product.classList.add("hide");
                }
            }
        });
    }
}   

//?????? ????????????
document.getElementById("searchBtn").addEventListener("click", () => {
    
    let searchBar = document.getElementById("search").value;
    let item = document.querySelectorAll(".itemName");
    let boxes = document.querySelectorAll(".imageBox");

    console.log(searchBar);

    item.forEach((item, index) => {
        if(item.innerText.includes(searchBar.toUpperCase())){
            boxes[index].classList.remove("hide");
        } else {
            boxes[index].classList.add("hide");
        }
    });

});


//????????? ?????? ??? ?????? ?????????
window.onload = () => {
    filterItem("all");
}