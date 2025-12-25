import { NotebookPen } from "lucide-react"

function Header() {
    return (
        <header className="w-full bg-zinc-100 max-w-7xl mt-5 rounded-t-3xl rounded-md shadow-indigo-400/30 shadow-2xl">
            <div className="flex items-center justify-center md:justify-start mx-auto transition-all duration-400 px-4 sm:px-6 lg:px-15 py-6 gap-2 md:gap-4">
                <NotebookPen className=" size-8 md:size-10 text-indigo-600" />
                <h1 className="font-bold text-2xl md:text-[2.5rem]">Minhas Atividades</h1>
            </div>
        </header>
    )
}

export { Header }