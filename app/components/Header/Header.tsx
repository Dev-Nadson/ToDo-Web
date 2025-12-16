function Header() {
    return (
        <header className="w-full bg-zinc-100 max-w-7xl mt-5 rounded-t-2xl shadow-slate-400/30 shadow-2xl">
            <div className=" flex justify-center md:justify-start mx-auto transition-all duration-400 px-4 sm:px-6 lg:px-15 py-6">
                <h1 className="font-bold text-2xl md:text-[2.5rem]">Minhas Atividades</h1>
            </div>
        </header>
    )
}

export { Header }