import Image from 'next/image'
import React from 'react'
import { BellIcon,SearchIcon } from '@heroicons/react/outline'
import { useEffect,useState } from 'react'
import Link from 'next/link'


export default function Header() {
	const [isScrolled,setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true)
			} else {
				setIsScrolled(false)
			}
		}

		window.addEventListener('scroll',handleScroll)

		return () => {
			window.removeEventListener('scroll',handleScroll)
		}
	},[])

	return (
		<header className={`${isScrolled && 'bg-[#141414]'}`}>
			<div className='flex items-center space-x-2 md:space-x-10'>
				<img
					src="https://rb.gy/ulxxee"
					width={100}
					height={100}
					className="cursor-pointer object-contain"
					alt=''
				/>
				<ul className='hidden space-x-4 md:flex'>
					<li className='header-link'>Home</li>
					<li className='header-link'>TV Shows</li>
					<li className='header-link'>Movies</li>
					<li className='header-link'>New & Papular</li>
					<li className='header-link'>My List</li>
				</ul>
			</div>

			<div className='flex items-center space-x-4 text-sm font-light'>
				<SearchIcon className='hidden h-6 w-6 sm:inline' />
				<p className='hidden lg:inline'>search</p>
				<BellIcon className='hidden h-6 w-6 sm:inline'></BellIcon>
				{/* <Link href='/login'>
					<Image src='' alt='' />
				</Link> */}
			</div>
		</header>
	)
}
