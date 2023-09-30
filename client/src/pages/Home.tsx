import Downloader from '../components/Downloader/Downloader';
import Guide from '../components/Guide/Guide';
import Main from '../components/Main/Main';

function Home() {
  return (
    <main className='container py-5'>
      <Main />
      <Downloader />
      <Guide />
    </main>
  );
}

export default Home;