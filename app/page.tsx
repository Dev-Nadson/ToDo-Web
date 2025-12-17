import { Header } from "./components/Header/Header";
import { Body } from "./components/Body/Body";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center text-black bg-zinc-200 p-5">
      <Header />
      <Body />
    </div>
  );
}
