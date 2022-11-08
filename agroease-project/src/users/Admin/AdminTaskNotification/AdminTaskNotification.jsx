import React from 'react'
// import Dashnav from '../../../components/dashboard-nav-and-side/Dashnav'
import { TaskSwitch } from '../AdminDasboardTask/AdminDasboardComponent.js/ManageTaskSwitch'
import { ManageTaskWrapper } from '../AdminDasboardTask/AdminDasboardComponent.js/ManageTaskWrapper'
import { AdminTaskTableBody } from './AdminTaskTableBody'
// import Sidebar from '../../../components/dashboard-nav-and-side/Sidebar'



export const AdminTaskNotification = () => {
  return (
        <>
		{/* <Sidebar/>
        <Dashnav/> */}
        <div className='manage-task-wrapper'>
				<ManageTaskWrapper />
				<TaskSwitch />

				<table>
					<thead>
						<tr>
							<th scope='col'>
								<input type='checkbox' className='table-checkbox' />
							</th>
							<th scope='col'>ID</th>
							<th scope='col'>Name</th>
							<th scope='col'>Email</th>
							<th scope='col'>Message</th>
							<th scope='col'>Status</th>
						</tr>
					</thead>

					<tbody>
						<AdminTaskTableBody/>
						<AdminTaskTableBody/>
						<AdminTaskTableBody/>
						<AdminTaskTableBody/>
					</tbody>
				</table>
			</div>
        </>
    
  )
}
