import React from 'react';

function TimeLineItem({ year, title, duration, details }) {
	return (
		<>
			<ol className='flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700'>
				<li className='mb-10 ml-4'>
					<div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white' />
					<p className='flex  flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
						<span className='inline-block px-2 py-1 font-semibold text-white bg-stone-900 rounded-md dark:text-white'>{year}</span>
						<h3 className='text-lg font-semibold text-stone-900 dark:text-amber-200'>{title}</h3>
						<div className='my-1 text-sm font-normal leading-none text-stone-400 dark:text-green-300 '>{duration}</div>
						<p className='y-2 text-lg font-normal text-stone-500 dark:text-slate-400 font-[Dekko]'>{details}</p>
					</p>
				</li>
			</ol>
		</>
	);
}

export default TimeLineItem;
