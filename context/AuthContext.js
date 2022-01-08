import { createContext, useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import axios from 'axios'
import { useRouter } from 'next/router'

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) => {

    let [accessToken, setaccessToken] = useState(null)
    let [user, setUser] = useState(null)

    const Router = useRouter()

    let loginUser = async (e) => {
        e.preventDefault()
        console.log("FormSubmitted")
        console.log(e.target.username.value)
        console.log(e.target.password.value)
        let response = await axios.post("/login_check", {
            'username':e.target.username.value,
            'password':e.target.password.value
        }, {
            headers:{
                'Content-Type':'application/json'
            },
          })
          console.log(response.data.token)
          console.log(response.token)
          if(response.status === 200) {
            setaccessToken(response)
            setUser(jwt_decode(response.data.token))
            console.log(user)
            localStorage.setItem('accessToken', response.data.token)
            Router.push('/')
          } else {
              alert("something went wrong!")
          }
    }
    let contextData = {
        user: user,
        loginUser:loginUser
    }
    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}