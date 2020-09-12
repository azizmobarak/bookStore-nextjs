const addtocart = (id, title, description, url) => {
    //  localStorage.removeItem("cartlist")
    var tab = [];
    if (localStorage.getItem("cartlist") !== null) {
        tab = JSON.parse(localStorage.getItem("cartlist"));
        tab.push({ id: id, title: title, description: description, url: url });

    } else {
        tab.push({ id: id, title: title, description: description, url: url });
    }
    localStorage.setItem("cartlist", JSON.stringify(tab));
    return {
        data: JSON.parse(localStorage.getItem("cartlist")),
        type: "add"
    };
}



export default addtocart