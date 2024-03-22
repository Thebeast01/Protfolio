import React from 'react';
import Title from './Title';
function Contact() {
	return (
		<div className='flex flex-col mb-10 mx-auto '>
			<div className='flex justify-center items-center '>
				<form action='https://getform.io/f/pbqgnlxb' method='POST' className='flex flex-col w-full md:w-7/12'>
					<Title>Contact</Title>
					<input type='text' name='name' placeholder='Name' className=' p-2 bg-transparent border-2 border-slate-500 rounded-md focus:outline-none' />
					<input
						type='email'
						name='email'
						placeholder='Email'
						className=' my-2 p-2 bg-transparent border-2 rounded-md  border-slate-500 focus:outline-none'
					/>
					<textarea
						name='message'
						placeholder='Message'
						rows='10'
						className='p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none border-slate-500'
					/>
					<button
						type='button'
						className='text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-[#46C2CB] to-[#03C988] drop-shadow-md  '
					>
						Work With Me
					</button>
				</form>
			</div>
		</div>
	);
}

export default Contact;
