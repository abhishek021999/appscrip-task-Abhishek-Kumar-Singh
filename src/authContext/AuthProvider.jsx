"use client"

import { createContext,useState } from "react"

export const AuthContext=createContext()
import React from 'react'

function AuthProvider({children}) {
    const [showUnshow,setshowunshow]=useState(false)
    const [ItemLength,setItem]=useState(0)
    const [Allcategory, setCategory] = useState({
      mennckjdfkjkjfhhdjkfhkj: "",
      womenbjfjdbfj: "",
      electronics: "",
      jewelery: "",
  });
  const [Sorting,setSorting]=useState("")

  return (
   <AuthContext.Provider value={{showUnshow,setshowunshow,ItemLength,setItem,Allcategory, setCategory,Sorting,setSorting}}>
    {children}
   </AuthContext.Provider>
  )
}

export default AuthProvider