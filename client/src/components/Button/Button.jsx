function Button({ name, icon, onClick }) {
    return (
        <button className={`bg-blue-500 px-4 py-2 rounded-md text-white outline-none border-none font-inherit flex items-center gap-2 cursor-pointer transition-all duration-400 ease-in-out`} onClick={onClick}>
            {icon}
            {name}
        </button>
    );
}

export default Button;
