function Footer({ activities }: { activities: { name: string, dueDate: string }[] }) {
    const count = activities.length

    return (
        <header className="w-full bg-zinc-100 max-w-7xl rounded-b-3xl rounded-md shadow-indigo-400/30 shadow-2xl">
            <div className="flex items-center justify-center md:justify-start mx-auto transition-all duration-400 px-4 sm:px-6 lg:px-15 py-4 gap-4">
                <h1 className="text-2xl flex gap-4"> <p>{count}</p> Atividades pendentes</h1>
            </div>
        </header>
    )
}

export { Footer }