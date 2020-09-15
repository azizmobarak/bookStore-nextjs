const adminlogin = (loginlogout) => {
    sessionStorage.setItem('adminlogin', loginlogout);
    console.log("storage: " + sessionStorage.getItem('adminlogin'));
    console.log("var " + loginlogout)
    return {
        type: loginlogout
    }
}
export default adminlogin;