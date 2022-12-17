let home_button_img = document.getElementsByClassName("home_button")[0].firstElementChild;
let home_button_span = document.getElementsByClassName("home_button")[0].lastElementChild;
let buy_button_img = document.getElementsByClassName("buy_button")[0].firstElementChild;
let buy_button_span = document.getElementsByClassName("buy_button")[0].lastElementChild;
let sell_button_img = document.getElementsByClassName("sell_button")[0].firstElementChild;
let sell_button_span = document.getElementsByClassName("sell_button")[0].lastElementChild;
let repair_button_img = document.getElementsByClassName("repair_button")[0].firstElementChild;
let repair_button_span = document.getElementsByClassName("repair_button")[0].lastElementChild;


let about_us_container = document.getElementsByClassName("about_us_container")[0];
let home_container = document.getElementsByClassName("home_container")[0];
let buy_container = document.getElementsByClassName("buy_container")[0];
let sell_container = document.getElementsByClassName("sell_container")[0];
let repair_container = document.getElementsByClassName("repair_container")[0];
let box_b = document.getElementsByClassName("box_b")[0];
let box_b1 = document.getElementsByClassName("box_b1")[0];
let box_b2 = document.getElementsByClassName("box_b2")[0];
let box_b3 = document.getElementsByClassName("box_b3")[0];

function displayContainers() {
    about_us_container.style = "display: none";

    home_container.style = "display: none";
    home_button_img.src = "img/home_button_black.png";
    home_button_span.style = "color: black";

    buy_container.style = "display: none";
    buy_button_img.src = "img/buy_button_black.png";
    buy_button_span.style = "color: black";

    sell_container.style = "display: none";
    sell_button_img.src = "img/sell_button_black.png";
    sell_button_span.style = "color: black";

    repair_container.style = "display: none";
    repair_button_img.src = "img/repair_button_black.png";
    repair_button_span.style = "color: black";

    let button_name = event.currentTarget.className;
    let pattern = /[a-z]*(_us)?_button/i;
    let button_existence = pattern.exec(button_name)[0];
    if (button_existence != null) {
        switch (button_existence) {
            case "about_us_button":
                about_us_active();
                break;
            case "home_button":
                home_active();
                break;
            case "buy_button":
                buy_active();
                break;
            case "sell_button":
                sell_active();
                break;
            case "repair_button":
                repair_active();
                break;
            default:
                break;
        }
    } else {; }
}

function about_us_active() {
    about_us_container.style = "display:default";

    box_b1.style = "";
}

function home_active() {
    home_button_img.src = "img/home_button_white.png";
    home_button_span.style = "color: white";
    home_container.style = "display: default";

    box_b1.style = "";
}

function buy_active() {
    buy_button_img.src = "img/buy_button_white.png";
    buy_button_span.style = "color: white";
    buy_container.style = "display: default";

    box_b1.style = "display: default; width: 20%; min-width: 200px; position: relative; top: 30px; border-right: 1px solid #a2afa5; padding: 0 20px 0 20px";
}

function sell_active() {
    sell_button_img.src = "img/sell_button_white.png";
    sell_button_span.style = "color: white";
    sell_container.style = "display: default";

    box_b1.style = "display: default; width: 20%; min-width: 200px; position: relative; top: 30px; border-right: 1px solid #a2afa5; padding: 0 20px 0 20px";
}

function repair_active() {
    // Set up repair icon (active) lookings:
    repair_button_img.src = "img/repair_button_white.png";
    repair_button_span.style = "color: white";
    repair_container.style = "display: default";

    // Change repair page CSS:
    box_b1.style = "display: default; width: 20%; min-width: 200px; position: relative; top: 30px; border-right: 1px solid #a2afa5; padding: 0 20px 0 20px";

    //if box_b1 has any childnotes (which was not created this time), delete them all
    while (box_b1.hasChildNodes()) {
        box_b1.removeChild(box_b1.firstChild);
    }
    // Write filter box DIV to box_b1
    let box_b1_repair_filter = document.createElement("div");
    box_b1_repair_filter.setAttribute("class", "box_b1_repair_filter");
    box_b1.appendChild(box_b1_repair_filter);

    // add <select>
    let brand_selectrion = document.createElement("select");
    brand_selectrion.setAttribute("name", "brand");
    brand_selectrion.setAttribute("class", "brand_selectrion");
    brand_selectrion.setAttribute("style", "width: 200px");
    box_b1_repair_filter.appendChild(brand_selectrion);
    let brand = document.createElement("option");
    //设置JS与后段PHP交互，动态获取不同的OPTION选项。

    let type_selectrion = document.createElement("select");
    brand_selectrion.setAttribute("name", "type");
    type_selectrion.setAttribute("class", "type_selectrion");
    type_selectrion.setAttribute("style", "width: 200px");
    box_b1_repair_filter.appendChild(type_selectrion);

    let model_selectrion = document.createElement("select");
    model_selectrion.setAttribute("name", "model");
    model_selectrion.setAttribute("class", "model_selectrion");
    model_selectrion.setAttribute("style", "width: 200px");
    box_b1_repair_filter.appendChild(model_selectrion);
}


document.getElementsByClassName("about_us_button")[0].addEventListener("click", displayContainers);
document.getElementsByClassName("home_button")[0].addEventListener("click", displayContainers);
document.getElementsByClassName("buy_button")[0].addEventListener("click", displayContainers);
document.getElementsByClassName("sell_button")[0].addEventListener("click", displayContainers);
document.getElementsByClassName("repair_button")[0].addEventListener("click", displayContainers);