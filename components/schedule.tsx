const Schedule = () => {
  const schedules = [
    [
      { "time": "10:30-10:45", "event": "オープニング" },
      { "time": "10:45-19:00", "event": "口頭発表セッション (途中休憩あり)" },
      { "time": "21:00-00:00", "event": "ナイトセッション" },
    ],
    [
      { "time": "09:00", "event": "受付開始" },
      { "time": "10:00-17:00", "event": "口頭発表セッション (途中休憩あり)" },
      { "time": "17:00-17:15", "event": "表彰・クロージング" },
    ]
  ];

  return (
    <div className='m-3 md:px-24 pt-8 font-serif'>
      <h2 className='text-2xl md:text-4xl font-bold font-mono'>Schedule</h2>
      <p className='text-xl mx-4 font-bold font-mono'>12/22 (金)</p>
      <div className='rounded pb-3 mx-4'>
        <table className='table-auto border text-center text-lg'>
          {schedules[0].map((v, i) =>  (
            <tr key={i}>
              <td className='border px-3 font-mono'>{v.time}</td>
              <td className='border px-3'>{v.event}</td>
            </tr>
          ))}
        </table>
      </div>
      <p className='text-xl mx-4 font-bold font-mono'>12/23 (土)</p>
      <div className='rounded pb-3 mx-4'>
        <table className='table-auto border text-center text-lg'>
          {schedules[1].map((v, i) =>  (
            <tr key={i}>
              <td className='border px-3 font-mono'>{v.time}</td>
              <td className='border px-3'>{v.event}</td>
            </tr>
          ))}
        </table>
      </div>
      <p className='mx-2 py-2'>上記は暫定のタイムテーブルであり、参加者数等により変更が生じる場合がございます。</p>
    </div>
  );
}

export default Schedule;
