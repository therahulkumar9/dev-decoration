import Image from "next/image";

interface BirthdayCardProps {
  title: string;
  image: string;
  price: number;
  id:number;
  description:string
}

export default function BirthdayCard({ title, image, price,description }: BirthdayCardProps) {
  return (
    <div className="mt-10 flex relative top-20">
        <Image src={image} alt={title} width={300} height={200} />
      <div className="border-2 mt-2 border-yellow-400 p-4">
        <h1 className=" mt-2 font-semibold">{title}</h1>
        <p>{description}</p>
        <h2 className="text-green-500 text-md font-bold">₹ {price}</h2>
      </div>
    </div>
  );
}
