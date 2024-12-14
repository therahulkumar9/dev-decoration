import Image from "next/image"

interface BirthdayCardProps {
  title: string
  image: string
  price: number
  id: number
}

export default function BirthdayCard({
  title,
  image,
  price,
}: BirthdayCardProps) {
  return (
    <div className="mt-10">
      <div className="mt-2 border-2 overflow-hidden rounded-lg">
        <div className="w-[353px] h-[200px] overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={300}
            height={200}
            className="object-cover  w-full h-full"
          />
        </div>
        <div className="p-2">
          <h1 className="mt-2 font-semibold">{title}</h1>
          <h2 className="text-green-500 text-md font-bold">₹ {price}</h2>
        </div>
      </div>
    </div>
  )
}
