// src/pages/LandingPage.tsx
import Header from './components/Header';
import JoinButton from './components/JoinButton';
import CharacterCard from './components/CharacterCard';
import CharacterCarousel from './components/CharacterCarousel';

const characters = [
  '/src/public/img/home/char1.jpg',
  '/src/public/img/home/char2.jpg',
  '/src/public/img/home/char1.jpg',
  '/src/public/img/home/char2.jpg',
  '/src/public/img/home/char1.jpg',
  '/src/public/img/home/char2.jpg'
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <Header />

      <div className="max-h-[100vh] flex items-center justify-center pt-16 pb-10 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="flex flex-wrap justify-center gap-4">
          {/* {characters.map((img, index) => (
            <CharacterCard key={index} img={img} />
          ))} */}
          <CharacterCarousel />
        </div>

        <JoinButton />
      </div>

      {/* <footer className="text-center text-xs text-gray-400 mt-8 px-4 pb-4">
        Underlord RP không liên kết hoặc được xác nhận bởi Take-Two, Rockstar...
      </footer> */}
    </div>
  );
}
