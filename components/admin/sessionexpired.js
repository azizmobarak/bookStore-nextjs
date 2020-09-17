const sessionexpired = (router) => {
    sessionStorage.removeItem("adminlogin")
    router.push('/admin/login');
}

export default sessionexpired;