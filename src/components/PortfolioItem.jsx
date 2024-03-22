import React from 'react';

function PortfolioItem({ title, imgUrl, stack, link, description }) {
	return (
		<div className='m-10'>
			<img src={imgUrl} alt='portfolio' className='w-full h-36 md:h-48 object-cover cursor-pointer rounded-xl ' />
			<div className='w-full p-5'>
				<h3 className='font-bold text-lg text-gray-700 hover:underline'>
					{' '}
					<a href={link} target='_blank'>
						{title}
					</a>
				</h3>
				<p className='text-[#344955]'>{description}</p>
				<p className='font-bold'>
					Tech Stack :
					{stack.map((item) => {
						return (
							<span key='0' className='font-semibold m-1 text-sm italic uppercase'>
								{item}
							</span>
						);
					})}
				</p>
			</div>
		</div>
	);
}

export default PortfolioItem;
