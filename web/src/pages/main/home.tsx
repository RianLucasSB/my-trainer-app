import { Header } from "@/components/layout/header";

export function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden  bg-cover bg-no-repeat bg-[url('public/main-background.jpg')]">
      <Header />

      <main className="w-full h-full flex flex-col justify-center p-6">
        <div className="absoulte left-1/2 top-1/2">
          <h1 className="max-w-[350px] md:max-w-full animate-slide-down scroll-m-20 text-4xl text-white font-extrabold tracking-tight lg:text-5xl mb-4">
            Smart Workout The Joke Tax Chronicles
          </h1>
          <p className="animate-slide-up scroll-m-20 text-lg text-white">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </main>

    </div>
  )
}