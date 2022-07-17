function modifications(){

    //@Menu
    const menuItems = document.getElementsByClassName("btn-group-vertical")[0];
    const buttons = document.getElementsByClassName("btn btn-secondary")
    menuItems.style.display = "flex";
    menuItems.style.flexDirection = "row";
    menuItems.style.width = "48vw";
    for(var i = 0; i < buttons.length; i++){
        buttons[i].style.borderRadius = "3px";
        buttons[i].style.width = "5px";
        buttons[i].style.margin = "0 2px";
    }
    
    //@Header
    const header = document.getElementsByClassName("jumbotron")[0];
    header.style.backgroundColor = "#6c757d";
    header.style.color = "white";
    header.style.textAlign="end";
    document.getElementsByClassName("btn btn-primary btn-lg")[0].style.backgroundColor="#27a844";

    //@Cards
    const mainCard = document.getElementsByClassName("row")[2];
    var cards = document.getElementsByClassName("col-lg-3");
    document.getElementsByClassName("btn btn-primary")[1].style.backgroundColor="#27a844";
    mainCard.insertBefore( cards[(cards.length - 1)],cards[0]);
    mainCard.insertBefore( cards[(cards.length - 1)],cards[2]);

    //@list
    var listGroup = document.getElementsByClassName("list-group")[0]
    var newLi = document.createElement("li")
    var content = document.createTextNode("Quarto item")
    var newLi2 = document.createElement("li")
    var content2 = document.createTextNode("Quinto item")
    newLi.classList.add("active")
    newLi.classList.add("list-group-item")
    newLi2.classList.add("list-group-item")
    newLi.appendChild(content);
    newLi2.appendChild(content2);
    listGroup.appendChild(newLi);
    listGroup.appendChild(newLi2);
    document.getElementsByClassName("list-group-item")[0].classList.remove("active")
}
modifications();