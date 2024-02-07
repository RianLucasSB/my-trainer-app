import { Link } from "react-router-dom";

export function Header(){
  return (
    <head className="stick w-full text-white flex justify-between items-center p-6">
        <h1 className="font-bold text-2xl">MyTrainerApp</h1>
        <nav >
          <ul className="flex gap-4">
            <li className="pointer text-xl"><Link to="/">Home</Link></li>
            <li className="pointer text-xl"><Link to="my-workouts">My Workouts</Link></li>
            <li className="pointer text-xl"><Link to="my-workouts">Account</Link></li>
          </ul>
        </nav>
      </head>
  )
}