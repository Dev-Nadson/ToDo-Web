import { CalendarClock, CheckCheck, Trash2 } from "lucide-react"

function Body({ activities }: { activities: { name: string, dueDate: string }[] }) {
    return (
        <section className="max-w-7xl w-full bg-zinc-100 my-2 shadow-indigo-400/30 shadow-2xl rounded-md">

            <div className="flex flex-col gap-4 py-6 px-8">
                {activities.length > 0 && activities.map((activity: any) => {
                    return (
                        <article className="h-full">
                            <div className="shadow-indigo-400/30 border-l-8 border border-indigo-600 shadow-lg flex rounded-3xl p-6 justify-between items-center ">
                                <div className="flex gap-4 items-center">
                                    <div className="size-10 bg-transparent border-3 hover:border-6 transition-all duration-300 border-indigo-600 disabled:bg-indigo-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-indigo-00 ">
                                        <CheckCheck className="hidden disabled:block text-zinc-50 size-7" />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-2xl max-w-230">{activity.name}</h3>
                                        <div className="flex gap-2">
                                            <CalendarClock className="" />
                                            <p>{activity.dueDate}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <a className="size-12 bg-indigo-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-indigo-700 hover:scale-110 duration-300 transition-all hover:shadow-lg hover:shadow-indigo-400">
                                        <CheckCheck className="text-zinc-50 size-7" />
                                    </a>

                                    <button className="size-12 bg-red-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-900 hover:scale-110 duration-300 transition-all hover:shadow-lg hover:shadow-red-400">
                                        <Trash2 className="text-zinc-50 size-6.5" />
                                    </button>
                                </div>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section >
    )
}

export { Body }