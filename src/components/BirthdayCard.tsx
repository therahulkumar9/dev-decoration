import Image from "next/image";

interface BirthdayCardProps {
  title: string;
  image: string;
  price: number;
  id:number
}

export default function BirthdayCard({ title, image, price }: BirthdayCardProps) {
  return (
    <div className="mt-10">
  <div className="border-2 mt-2 border-yellow-400 p-4">
    <div className="w-[300px] h-[200px] overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={300}
        height={200}
        className="object-cover w-full h-full"
      />
    </div>
    <h1 className="mt-2 font-semibold">{title}</h1>
    <h2 className="text-green-500 text-md font-bold">₹ {price}</h2>
  </div>
</div>

  );
}
