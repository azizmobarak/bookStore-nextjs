const sessionReducer = (state = false, action) => {
    switch (action.type) {
        case "login":
            localStorage.setItem('sessionuser', true);
            return state = true;
        case "logout":
            localStorage.setItem('sessionuser', false);
            return state = false;
        default:
            return state = false;
    }
}

export default sessionReducer;