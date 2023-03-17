// import { ReactNode } from "react"




// const Button = () => {
//   return (

// <button type="button" className="btn btn-danger">Primary</button>

//   )
// }

// export default Button

import React from 'react'


interface Props{
    children: string;
    color?:string;
    onClick: () => void;
    
}


const Button = ({children, onClick,color='danger'}: Props) => {
  return (
    <button type="button" className={"btn btn-"+color} onClick={onClick} >{children}</button>
  )
}

export default Button