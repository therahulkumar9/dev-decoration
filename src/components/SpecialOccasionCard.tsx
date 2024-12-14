import Image from "next/image";

interface SpecificOccasionCardProps {
  title: string;
  image: string;
  price: number;
  id:number
}

export default function SpecificOccasionCard({ title, image, price }: SpecificOccasionCardProps) {
  return (
    <div className="mt-10">
      <div className="border-2 mt-2 border-yellow-400 p-4">
        <Image src={image} alt={title} width={300} height={200} />
        <h1 className=" mt-2 font-semibold">{title}</h1>
        <h2 className="text-green-500 text-md font-bold">₹ {price}</h2>
      </div>
    </div>
  );
}
