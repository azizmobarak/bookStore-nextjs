const logout = () => {
    localStorage.setItem('sessionuser', false);
    return {
        type: 'logout'
    }
}

export default logout;