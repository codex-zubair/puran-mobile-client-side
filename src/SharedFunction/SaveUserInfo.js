export const SaveUserInfo = (user, role, name = false) => {

    const userName = name ? name : user.displayName;

    const storeUser = {
        email: user?.email,
        userName,
        role,
        verified: false

    }



    fetch('https://puran-mobile-server-side.vercel.app/user', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(storeUser)
    })
        .catch(error => console.log(error))
}