import Image from "next/image"
import WhatsappButton from "./WhatsappButton"
import CallButton from "./CallButton"

interface SpecificOccasionCardProps {
  title: string
  image: string
  price: number
  id: number
  description: string
}

export default function SpecialOccasionSpecificCard({
  title,
  image,
  price,
  description,
}: SpecificOccasionCardProps) {
  return (
    <div className="mt-10 sm:flex items-center justify-center relative top-20 p-10 w-full">
      <div className="w-[600px] h-[400px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="mt-2 pl-5 p-4">
        <h1 className=" mt-2 font-semibold">{title}</h1>
        <p>{description}</p>
        <h2 className="text-green-500 text-md font-bold mb-3">₹ {price}</h2>
        <div className="flex gap-5">
        <WhatsappButton />
        <CallButton/>
        </div>

      </div>
    </div>
  )
}
