import React from "react"
import "./BrokersProfile.css"
export const IdGenerator = () => {
  return (
   <div id="overlay">
  <div className="displayID">
    <h1>Congratulations</h1>
    <h3>Your ID Number is</h3>
    <h1 id="ID">12345</h1>
      <button className="close" id="close">close</button>
    </div>
</div>

  )
}