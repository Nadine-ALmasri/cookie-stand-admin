import Link from "next/link";

import Overview from '../Overview/page' ;
const Header = () => {
    return (
      <header className="bg-green-500 p-4 text-white flex justify-between item-center mb-4">
        <h1 className="text-2xl font-semibold">Cookie Stand Admin</h1>
        <Link href="/Overview" className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 outline-none">Overview</Link>
      </header>
    );
  };
  export default Header ;