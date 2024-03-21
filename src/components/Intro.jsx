import React from 'react';

function Intro() {
	return (
		<div className='flex items-center justify-center flex-col text-center pt-20 pb-6 '>
			<h1 className=' text-4xl md:text-7xl mb-1 md:mb-3 font-bold'>Mohammad Saif</h1>
			<p className='text-base md:text-xl mb-3 font-medium'>Software Engineer & Web Developer</p>
			<p className='text-sm max-w-xl mb-6 font-bold '>
				{' '}
				I am a passionate full stack developer with expertise in turning ideas into functional software solutions. My journey began with mastering HTML,
				CSS, and JavaScript, expanding to cover front-end, back-end, and database management. <br /> With a commitment to excellence, I excel in
				delivering high-quality, scalable solutions. Outside coding, I stay updated with tech trends, contribute to open-source projects, and thrive in
				collaborative environments. With a keen eye for detail and a love for problem-solving, I'm dedicated to making impactful contributions to
				software development.
			</p>
			<div className=' gap-4 flex  p-2 '>
				<a
					href='https://www.linkedin.com/in/mohammad-saif-bca/'
					target='_blank'
					className='text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600 '
					rel='norefferrer noopener'
				>
					Linkedin
				</a>
				<a
					href='https://github.com/Thebeast01'
					target='_blank'
					className='text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600 '
					rel='norefferrer noopener'
				>
					Github
				</a>
				<a
					href='https://twitter.com/mohamma56822569'
					target='_blank'
					className='text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600 '
					rel='norefferrer noopener'
				>
					Twitter
				</a>
			</div>
		</div>
	);
}

export default Intro;
