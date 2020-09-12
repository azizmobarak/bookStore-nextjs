const getcart = () => {
    var tab = [];
    if (localStorage.getItem("cartlist") !== null) {
        tab = JSON.parse(localStorage.getItem("cartlist"));
    }
    return {
        type: "get",
        data: tab
    }
}

export default getcart;