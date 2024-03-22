import React from 'react';

function PortfolioItem({ title, imgUrl, stack, link, description }) {
	return (
		<div className='m-10 border-2 border-stone-900 dark:border-white rounded-md overflow-hidden '>
			<img src={imgUrl} alt='portfolio' className='w-full h-36 md:h-48 object-cover cursor-pointer rounded-md ' />
			<div className='w-full p-5'>
				<h3 className='font-bold text-lg text-gray-700 hover:underline'>
					{' '}
					<a href={link} target='_blank' className='dark:text-gray-400'>
						{title}
					</a>
				</h3>
				<p className='text-[#344955] dark:text-white'>{description}</p>
				<p className='font-bold  flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm'>
					{stack.map((item) => {
						return (
							<span
								key='0'
								className='font-semibold m-1 inline-block text-sm  px-2 uppercase text-[#b25050] border-[1px] border-stone-900 rounded-md dark:border-white '
							>
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
