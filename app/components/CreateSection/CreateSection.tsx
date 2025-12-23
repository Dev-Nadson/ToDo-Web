'use client'

import { useState } from "react"
import { PencilLine } from "lucide-react"

function CreateSection({ setActivities, activities }: { setActivities: (novoArray: { name: string, dueDate: string }[]) => void, activities: { name: string, dueDate: string }[] }) {
    const [name, setName] = useState<string>('')
    const [dueDate, setDueDate] = useState<string>('')

    console.log(activities)

    return (
        <article className="h-full max-w-7xl w-full bg-zinc-100 border-x-8 border border-indigo-600 rounded-3xl my-2 shadow-indigo-400/30 shadow-2xl">
            <div className="shadow-indigo-400/30 shadow-lg flex flex-col md:flex-row py-5 px-2 md:px-10 justify-between items-center">

                <div className="flex justify-between items-center max-w-243 border border-slate-300 w-full rounded-3xl text-nowrap">
                    <input
                        type="text"
                        placeholder="Adicione uma nova atividade"
                        className="flex placeholder:text-zinc-400  p-3 flex-1 rounded-3xl"
                        value={name}
                        onChange={(e: any) => setName(e.target.value)}
                    />

                    <input
                        type="date"
                        className="flex justify-center p-3 rounded-full flex-1 text-transparent cursor-pointer [&::-webkit-datetime-edit]:hidden"
                        value={dueDate}
                        onChange={(e: any) => setDueDate(e.target.value)}
                    />
                </div>

                <div className="flex items-center py-2 px-4  bg-indigo-600 rounded-2xl cursor-pointer hover:bg-indigo-700 hover:scale-110 duration-300 transition-all hover:shadow-lg hover:shadow-indigo-400">
                    <button className="flex items-center gap-2" onClick={(() => setActivities([...(activities || []), { name, dueDate }]))}>
                        <PencilLine className="text-zinc-50 size-6" />
                        <p className="font-bold text-purple-50 text-lg"> Criar Atividade </p>
                    </button>
                </div>
            </div>
        </article >
    )
}

export { CreateSection }