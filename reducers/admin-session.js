const adminsession = (state = false, action) => {
    switch (action.type) {
        case 'login':
            return state = true;
        default:
            return state = false;
    }
}

export default adminsession;