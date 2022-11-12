import React from "react"
import { useState } from "react"


export const Categories = () => {

  const [active, setActive] = useState(true)

  const handleClick = () =>{
    setActive(!active)
  }

  return(

<div class="buyers-product-category">
  <ul>
    <li className={active ? "active":  "li"} onClick={handleClick}>Livestocks</li>
    <li className={active ? "active":  "li"} onClick={handleClick}>Crops</li>
    <li className={active ? "active":  "li"} onClick={handleClick}>Farm Inputs</li>
    <li className={active ? "active":  "li"} onClick={handleClick}>Processed Products</li>
    <li className={active ? "active":  "li"} onClick={handleClick}>Equipments</li> 
  </ul>
</div>

  )
}