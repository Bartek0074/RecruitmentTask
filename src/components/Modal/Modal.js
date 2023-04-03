import React from 'react';

import { AiOutlineClose } from 'react-icons/ai';

import './Modal.scss';

export default function Modal({ show, close, text }) {
	return (
		<div
			className={
				show ? 'modal-background modal-background--active' : 'modal-background'
			}
			onClick={(e) => {
				if (
					e.target.className === 'modal-background modal-background--active'
				) {
					close();
				}
			}}
		>
			<div className='modal'>
				<p>{text}</p>
				<button onClick={close} className='modal__close-btn'>
					<AiOutlineClose />
				</button>
			</div>
		</div>
	);
}
