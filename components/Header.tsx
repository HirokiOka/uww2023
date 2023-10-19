import Link from "next/link";

const Header = () => {
  return (
    <>
    <header className='bg-blue-200 top-0 fixed w-full'>
      <nav className='my-3 mx-6 text-xl text-right font-bold'>
        <Link href="http://s2-lab.sakura.ne.jp/uww2023" className='m-2 px-2 hover:underline'>Home</Link>
        <Link href="http://www.yumebutai.org/access/index.html" className='m-2 px-2 hover:underline'>Access</Link>
      </nav>
    </header>
    </>
  );
}

export default Header;
