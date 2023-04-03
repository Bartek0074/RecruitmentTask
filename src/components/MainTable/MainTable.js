import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from '../Modal/Modal';

import './MainTable.scss';

export default function MainTable({ setIndex }) {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [aboutText, setAboutText] = useState('');

	const showModal = () => {
		setIsModalVisible(true);
	};
	const closeModal = () => {
		setIsModalVisible(false);
	};

	const users = useSelector((state) => state.users);
	return (
		<>
			<div className='table-wrapper main-table'>
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>E-mail</th>
							<th>About</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user, index) => {
							return (
								<tr
									key={user.id}
									onClick={(e) => {
										if (e.target.className !== 'more') {
											setIndex(index);
										}
									}}
								>
									<td className='main-table__id'>{user.id}</td>
									<td>{user.name}</td>
									<td>{user.email}</td>
									<td className='main-table__about-wrapper'>
										<div className='main-table__about'>{user.about}..</div>
										<div
											onClick={(e) => {
												if (e.target.className === 'more') {
													showModal();
													setAboutText(user.about);
												}
											}}
											className='main-table__about-more'
										>
											<p className='more'>more...</p>
										</div>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
			<Modal show={isModalVisible} close={closeModal} text={aboutText} />
		</>
	);
}
