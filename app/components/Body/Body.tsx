import { CalendarClock, CheckCheck, Trash2 } from "lucide-react"
import Link from "next/link"

function Body() {
    return (
        <section className="max-w-7xl w-full bg-zinc-100 my-2 shadow-slate-400/30 shadow-2xl">

            <div>

                <div className="shadow-slate-400/30 shadow-2xl flex py-6 px-8 justify-between items-center">
                    <div className="flex gap-4 items-center">
                        {/*Ícone de marcar completo*/}
                        <div className="size-12 bg-indigo-600 rounded-full flex items-center justify-center">
                            <CheckCheck className="text-zinc-50 size-7" />
                        </div>

                        {/*Nome e prazo*/}
                        <div>
                            <h3 className="text-2xl">Nome da Atividade</h3>
                            <div className="flex gap-2">
                                <CalendarClock className="size-" />
                                <p>20 Jan 2026</p>
                            </div>
                        </div>
                    </div>

                    {/*Botões concluir e excluir*/}
                    <div className="flex gap-3">

                        <a className="size-12 bg-indigo-600 rounded-full flex items-center justify-center cursor-pointer">
                            <CheckCheck className="text-zinc-50 size-7" />
                        </a>

                        <button className="size-12 bg-red-800 rounded-full flex items-center justify-center">
                            <Trash2 className="text-zinc-50 size-6.5" />
                        </button>

                    </div>
                </div>

            </div>
        </section >
    )
}

export { Body }