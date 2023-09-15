import type { NextPage } from "next";
import Head from "next/head";
import Description from "components/Description";
import Registration from "components/Registration";
import ImportantDates from "components/ImportantDates";
import Download from "components/Download";
import Schedule from "components/Schedule";
import Organizers from "components/Organizers";
import Sponsors from "components/Sponsors";

const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>UWW2023</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>
        <Description />
        <div className='bg-pink-100'>
          <Registration />
          <div className='md:grid md:grid-cols-2'>
            <ImportantDates />
            <Download />
          </div>
        </div>
        <div className='grid md:grid-cols-2 sm:grid-cols-none'>
          <Schedule />
          <Organizers />
        </div>
        <Sponsors />
      </main>
    </div>
  );
};

export default Home;
