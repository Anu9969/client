import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return <nav className='border border-blue-500 fixed top-0 bg-slate-500 text-center font-bold w-full text-white'>
        <ul>
            <li className='inline-block py-5'>
                <Link to='/' className='pl-6 pr-8'>Home</Link>
            </li>

            <li className='inline-block py-5'>
                <Link to='/article' className='pl-6 pr-8'>Article</Link>
            </li>

            <li className='inline-block py-5'>
                <Link to='/about' className='pl-6 pr-8'>About</Link>
            </li>

            <li className='inline-block py-5'>
                <Link to='/articlelist' className='pl-6 pr-8'>ArticleList</Link>
            </li>

        </ul>
        
    </nav>
}

export default NavBar;