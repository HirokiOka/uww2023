import Link from 'next/link';

const OldLinks = () => {
  //const oldLink = 'http://cse.eedept.kobe-u.ac.jp/old_webdata/event/workshop';
  const oldLink = 'https://tt-lab.jp/uww';
  //const recentLink = 'http://cse.eedept.kobe-u.ac.jp/uww';
  const recentLink = 'https://tt-lab.jp/uww';
  const uwwYears = new Array(16).fill(0).map((v, i) => v+i+2007);

  return (
    <div className='text-center rounded m-2'>
      <h1 className='text-2xl font-bold p-1'>Links</h1>
      <div className='grid grid-cols-4 p-1 text-lg'>
        {uwwYears.map((year, i) => (
          year < 2009
            ? <Link key={i} href={oldLink + year} className='hover:underline'>UWW{year}</Link>
            : <Link key={i} href={recentLink + year} className='hover:underline'>UWW{year}</Link>
        ))}
      </div>
    </div>
  );
}

export default OldLinks;
