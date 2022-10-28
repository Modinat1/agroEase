import React from "react"
import { DasboardSideBar } from "../../../components/DashboardFrame/DasboardSideBar"
import { DasboardNavbar } from "../../../components/DashboardFrame/DashboardNavbar"
// import { DasboardNav } from "../../../components/DashboardFrame/DashbordNav"
import "./BrokerClient.css"
// import "../../../components/DashboardFrame/Dashboard2.css"
// import agrologo from "../../../images/agrologo.png"


export const BrokerClient = () =>{
  return(
    <>
  <div>
    <DasboardSideBar />
  
  <section className="dashboard">
    {/* this is where is the top bar with green backgound begins */}
    <DasboardNavbar />
    {/* You code should start below this comment */}
    <div className="client-header">

      <h2>Clients</h2>
      <div className="table-wrapper">
        <div className="header_fixed">
          <table>
            <thead>
              <tr>
                <th><input type="checkbox" /><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                  </svg></th>
                <th>ID</th>
                <th>Shoping#</th>
                <th>Status</th>
                <th>Customers Name</th>
                <th>Email</th>
                <th>State</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="checkbox" /></td>
                <td>738</td>
                <td>558612</td>
                <td>Inactive</td>
                <td className="shift">Chidi Confidence</td>
                <td>sirconfy@gmail.com</td>
                <td className="state">Abia</td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>540</td>
                <td>487441</td>
                <td id="active">Active</td>
                <td className="shift">Godswill Chibuzor</td>
                <td>sirconfy@gmail.com</td>
                <td className="state">Kogi</td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>738</td>
                <td>551248</td>
                <td>Inactive</td>
                <td className="shift">Cynthia Nwakwo</td>
                <td>sirconfy@gmail.com</td>
                <td className="state">Ebonyi</td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>738</td>
                <td>551248</td>
                <td id="active">Active</td>
                <td className="shift">Nwokporo Chukwuebuka</td>
                <td>sirconfy@gmail.com</td>
                <td className="state">Ondo</td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>738</td>
                <td>551248</td>
                <td>Inactive</td>
                <td className="shift">Odii Sussan</td>
                <td>sirconfy@gmail.com</td>
                <td className="state">Nasarawa</td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>738</td>
                <td>551248</td>
                <td id="active">Active</td>
                <td className="shift">Akinnukawe Gbenga</td>
                <td>sirconfy@gmail.com</td>
                <td className="state">Ondo</td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>738</td>
                <td>551248</td>
                <td>Inactive</td>
                <td className="shift">Nneoma</td>
                <td>sirconfy@gmail.com</td>
                <td className="state">Delta</td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>738</td>
                <td>551248</td>
                <td id="active">Active</td>
                <td className="shift">Modinat</td>
                <td>sirconfy@gmail.com</td>
                <td className="state">Lagos</td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>738</td>
                <td>551248</td>
                <td>Inactive</td>
                <td className="shift">Chukwuemeka</td>
                <td>sirconfy@gmail.com</td>
                <td className="state">Nsukka</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    {/* your code should end here, do not go outside this section */}
  </section>
</div>


    </>
  )
} 