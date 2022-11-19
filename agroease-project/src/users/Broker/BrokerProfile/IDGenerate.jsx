// import React from "react"
import Swal from "sweetalert2";
// import "./BrokersProfile.css"
export const IdGenerator = () => {

  Swal.fire({
    icon: "success",
    title: "Congratulations",
    text:  "Your ID Number is 12345",
   button: "OK",
  }).then(function () {
      // Redirect the user
      window.location.href = "/";
    });
}

// function Random() {
//   var randomNumber = Math.floor((Math.random() * 10) + 1);
//  return `Your ID Number is ${randomNumber}`;
// }
