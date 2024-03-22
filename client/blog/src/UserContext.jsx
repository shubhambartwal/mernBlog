import {createContext} from 'react'
import {useState} from 'react'
export const UserContext =createContext({});
export function UserContextProvider({children}){
  const [userInfo,setUserInfo]=useState({})
    return (<UserContextProvider value={{userInfo,setUserInfo}}>
        {children}
        </UserContextProvider>)
}
