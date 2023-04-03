import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { editNames, editSurnames } from '../../store/users';

import './DetailTable.scss';

export default function MainTable({ currentIndex }) {
	const dispatch = useDispatch();

	const users = useSelector((state) => state.users);

	return (
		<div className='table-wrapper detail-table'>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Surname</th>
					</tr>
				</thead>
				<tbody>
					{users[currentIndex]?.data.map((el, index) => {
						return (
							<tr key={index}>
								<td>{el.id}</td>
								<td>
									<input
										className='detail-table__input'
										type='text'
										value={el.name}
										onChange={(e) => {
											dispatch(
												editNames({
													id: currentIndex,
													index: index,
													value: e.target.value,
												})
											);
										}}
									/>
								</td>
								<td>
									<input
										className='detail-table__input'
										type='text'
										value={el.surname}
										onChange={(e) => {
											dispatch(
												editSurnames({
													id: currentIndex,
													index: index,
													value: e.target.value,
												})
											);
										}}
									/>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
