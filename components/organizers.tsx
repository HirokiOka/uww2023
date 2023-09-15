const Organizers = () => {
  const organizersList = [
    { "role": "ワークショップ委員長", "name": "塚本昌彦 (神戸大) ", },
    { "role": "ワークショップ副委員長", "name": "寺田 努 (神戸大) ", },
    { "role": "実行委員長", "name": "村尾和哉 (立命館大) ", },
    { "role": "実行副委員長", "name": "大西鮎美 (神戸大)  ", },
    { "role": "会計", "name": "毛 昊珉 (神戸大) ", },
    { "role": "出版", "name": "吉田航輝 (立命館大) " },
    { "role": "テンプレート", "name": "後藤佑介 (岡山大)" },
    { "role": "ウェブページ", "name": "岡 大貴 (神戸大) ", },
    { "role": "投稿システム", "name":"土田修平 (お茶の水女子大) " },
    { "role": "プログラム", "name": "渡邉拓貴 (北海道大)" },
    { "role": "投票・表彰", "name": "双見京介 (立命館大) " },
    { "role": "ナイトセッション", "name": "鷲野 海 (神戸大)", },
    { "role": "参加者管理", "name": "金 宏潤 (神戸大)", },
    { "role": "ローカル", "name": "松井菜摘, Adhe Rahmatullah Sugiharto (神戸大)"},
  ];

  return  (
    <div className='m-3 px-2 md:pr-24 pt-8'>
      <h2 className='text-2xl md:text-4xl font-bold'>Organizers</h2>
      <div className='rounded p-3 mx-3 font-serif'>
        <table className='table-auto border text-center'>
          {organizersList.map((v, i) =>  (
            <tr key={i}>
              <td className='border px-3 font-bold'>{v.role}</td>
              <td className='border px-3'>{v.name}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Organizers;
