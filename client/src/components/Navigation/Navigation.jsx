import { useState } from 'react';
import avatar from '../../img/avatar.png';
import { logout } from '../../utils/Icons';
import { menuItems } from '../../utils/menuItems';

function Navigation({ active, setActive }) {
    return (
        <nav className={`px-8 py-6 w-96 h-full bg-opacity-80 bg-gray-100 border-4 border-white rounded-xl flex flex-col justify-between`}>
            <div className={`flex items-center gap-4`}>
                <img src={avatar} alt="" className={`w-20 h-20 rounded-full border-2 border-white object-cover shadow-lg`} />
                <div>
                    <h2 className={`text-blue-800`}>Mike</h2>
                    <p className={`text-blue-600`}>Your Money</p>
                </div>
            </div>
            <ul className={`flex-1 flex flex-col`}>
                {menuItems.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={`grid grid-cols-2 items-center mx-0.6rem font-semibold transition-all duration-400 ${active === item.id ? 'text-2xl text-black' : 'text-base text-gray-600'}`}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                ))}
            </ul>
            <div>
                <li className={`font-semibold`}>{logout} Log Out</li>
            </div>
        </nav>
    );
}

export default Navigation;
