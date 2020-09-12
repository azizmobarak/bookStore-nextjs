const login = () => {
    localStorage.setItem('sessionuser', true);
    return {
        type: "login",
    }
}
export default login;