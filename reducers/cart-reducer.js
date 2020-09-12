var initialstate = [];

const cartlist = (state = initialstate, action) => {
    switch (action.type) {
        case "add":
            return state = action.data;
        case "delete":
            return state = action.data;
        case "get":
            return state = action.data;
        default:
            return state = initialstate;
    }
}

export default cartlist;