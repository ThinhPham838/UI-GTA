// src/components/CharacterCard.tsx
interface Props {
  img: string;
}

export default function CharacterCard({ img }: Props) {
  return (
    <div className="w-[100px] md:w-[150px] h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition duration-300">
      <img src={img} alt="character" className="w-full h-full object-cover" />
    </div>
  );
}
