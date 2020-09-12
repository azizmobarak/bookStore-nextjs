const removefromcart = () => {
    localStorage.removeItem("cartlist");
    return {
        type: "delete",
        data: []
    }
}

export default removefromcart;