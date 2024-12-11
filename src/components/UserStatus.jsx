import React from 'react'

const UserStatus = ({logIn,isAdmin}) => {
    if (logIn === true && isAdmin === true){
        return <h1>Welcome Admin</h1>
    }else{
        return <h1>Welcome User</h1>
    }
}
export default UserStatus
