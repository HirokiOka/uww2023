const Registration = () => {
  return (
    <div className='pt-8 m-3 px-4 md:px-24 font-serif'>
      <h2 className='text-2xl md:text-4xl font-mono font-bold'>Registration Fees</h2>
      <div className='rounded mx-2 p-3'>
        <p className='text-2xl px-2'>参加費</p>
        <p className='text-lg px-4'>一般: 19,000円 (会議参加費10,000円、宿泊費9,000円)</p>
        <p className='text-lg px-4'>学生: 16,000円 (会議参加費7,000円、宿泊費9,000円)</p>
        <p className='text-2xl p-2 font-bold'>参加登録は締め切りました</p>
        <ul className='list-disc list-inside mx-3 p-2 rounded text-xl'>
          <li>お支払いは当日現金にてお願いします。</li>
         <li>宿泊費は1泊朝食込の金額です。（朝食なしの設定はありません。）</li>
         <li>社会人学生については一般と同じ参加費になります。</li>
         <li>宿泊せずに参加される場合は、参加費（一般）10,000円、（学生）7,000円のみを頂戴いたします。</li>
         <li>会議参加費及び宿泊費は一部参加の場合でも減額は致しませんので、ご了承下さい。</li>
        </ul>
        <ul className='list-disc list-inside mx-3 p-2 rounded text-xl'>キャンセル料について
         <li>3日前までのキャンセル：料金はかかりません。</li>
         <li>2日前キャンセル：料金の20%をいただきます。</li>
         <li>前日キャンセル：料金の50%をいただきます。</li>
         <li>当日キャンセルまたは無断でのキャンセル：料金の100%をいただきます。</li>
       </ul>
      </div>
    </div>
  );
}

export default Registration;
