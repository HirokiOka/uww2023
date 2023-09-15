const Sponsors = () => {
  return (
    <div className='mx-3 px-2 md:px-24 pb-8'>
      <h1 className='text-2xl md:text-4xl font-bold'>Sponsors</h1>
      <div className='md:grid md:grid-cols-2 font-serif'>
        <div className='text-center rounded p-3 m-2'>
          <h2 className='text-lg md:text-xl font-bold pb-4'>神戸大学大学院工学研究科 塚本・寺田研究室</h2>
          <img className='mx-auto w-96' src="./img/tsukaken.png" alt="塚本寺田研究室ロゴ" /> 
        </div>
        <div className='text-center rounded p-3 m-2'>
          <h2 className='text-lg md:text-xl font-bold'>NPO法人ウェアラブルコンピュータ研究開発機構</h2>
          <img className='mx-auto w-96' src="./img/teamtsukamoto.png" alt="Team Tsukamotoロゴ" />
        </div>
      </div>
      <p className='text-center text-lg font-serif'>本ワークショップは、科学技術振興機構戦略的創造研究推進事業 (CREST) の成果報告会を兼ねています。</p>
    </div>
  );
}

export default Sponsors;
