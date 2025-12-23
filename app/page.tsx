'use client'
import { Header } from "./components/Header/Header";
import { Body } from "./components/Body/Body";
import { CreateSection } from "./components/CreateSection/CreateSection";
import { useState } from "react";
import { Footer } from "./components/Footer/Footer";

export default function Home() {
  const [activities, setActivities] = useState<{ name: string, dueDate: string }[]>()

  return (
    <div className="flex flex-col min-h-screen items-center text-black bg-zinc-200 p-5">
      <Header />
      <CreateSection setActivities={setActivities} activities={activities ?? []} />
      <Body activities={activities ?? []} />
      <Footer activities={activities ?? []} />
    </div>
  );
}
