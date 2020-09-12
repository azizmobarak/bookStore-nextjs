const islogged = (component, value) => {
    if (component === "Profile" || component === "Customize") {
        if (value === "false") {
            window.location.replace('/account');
        }
    }
}

export default islogged;