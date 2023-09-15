const Download = () => {
  return (
    <div className='m-3 pr-24 pb-8'>
      <h2 className='text-4xl font-bold'>Download</h2>
      <div className='rounded mx-4 p-2'>
        <div className='text-center inline-flex'> 
         <h3 className='text-xl mx-auto font-serif'>原稿テンプレート：</h3>
         <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded mx-6"><a href="http://cse.eedept.kobe-u.ac.jp/uww2022/UWW2022_Format_LaTeX.zip">LaTeX</a></button>
         <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded mx-6"><a href="http://cse.eedept.kobe-u.ac.jp/uww2022/word_UWW2022.docx">Word</a></button>
        </div>
      </div>
    </div>
  );
}

export default Download;
