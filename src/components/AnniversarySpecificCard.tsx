import Image from "next/image"
import WhatsappButton from "./WhatsappButton"
import Footer from "./Footer"

interface AnniversaryCardProps {
  title: string
  image: string
  price: number
  id: number
  description: string
  inclusion:string
}

export default function AnniversarySpecificCard({
  title,
  image,
  price,
  description,
  inclusion,
}: AnniversaryCardProps) {
  return (
    <div>
    <div className="mt-10 sm:flex items-center justify-center relative top-20 p-10 w-full">
      <div className="w-full lg:w-[600px] h-[400px] overflow-hidden border border-orange-500 rounded-lg  ">
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
        <h2 className="text-green-500 text-3xl font-bold mb-3">₹ {price}</h2>
        <WhatsappButton />
      </div>
    </div>
     <div className="p-10 mt-10">
     <div className="">
       <h1 className="w-full bg-gray-400 text-black text-xl p-3 rounded-lg border border-none mb-3">Inclusion</h1>
       <div dangerouslySetInnerHTML={{ __html: inclusion }} />
     </div>
     <div>
       <h1 className="w-full bg-gray-400 text-black text-xl p-3 rounded-lg border border-none mb-3 mt-3">Description</h1>

       <div dangerouslySetInnerHTML={{ __html: description }} />
     </div>
   </div>
   <Footer/>
   </div>
  )
}
