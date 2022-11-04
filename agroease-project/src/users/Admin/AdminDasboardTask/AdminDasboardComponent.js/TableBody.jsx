import React from "react";
// import "./NewTable.css";

export const TableBody = () => {
	return (
		<tr>
			<td data-label=''>
				<input type='checkbox' />
			</td>
			<td data-label='Name'>Godswill Chibuzor</td>
			<td data-label='Accounnt'>2023445671</td>
			<td data-label='cvv'>NGN</td>
			<td data-label='balance'>25000</td>
			<td data-label='date'>26/10/2023</td>
			<td data-label='transaction'>Successful</td>
			<td data-label='status'>In Review</td>
			<td data-label='Action' className='notify-btn'>
				Notify
			</td>
		</tr>
	);
};
