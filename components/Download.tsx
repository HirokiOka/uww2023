const Download = () => {
  return (
    <div className='m-3 px-4 md:pr-24 pb-8'>
      <h2 className='text-2xl md:text-4xl font-bold'>Download</h2>
      <div className='rounded mx-4 p-2'>
        <div className='text-center inline-flex'> 
         <h3 className='text-xl mx-auto font-serif'>原稿テンプレート：</h3>
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mx-6"><a href="http://s2-lab.sakura.ne.jp/uww2023/data/UWW2023_Format_LaTeX.zip">LaTeX</a></button>
             <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mx-6"><a href="http://s2-lab.sakura.ne.jp/uww2023/data/word_UWW2023.docx">Word</a></button>
        </div>
      </div>
    </div>
  );
}

export default Download;
