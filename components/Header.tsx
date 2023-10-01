import Link from "next/link";

const Header = () => {
  return (
    <>
    <header className='bg-blue-200 top-0 fixed w-full'>
      <nav className='my-3 mx-6 text-xl text-right font-bold'>
        <Link href="/" className='m-2 px-2 hover:underline'>Home</Link>
        <Link href="/" className='m-2 px-2 hover:underline'>Program</Link>
        <Link href="http://www.yumebutai.org/access/index.html" className='m-2 px-2 hover:underline'>Access</Link>
      </nav>
    </header>
    </>
  );
}

export default Header;
