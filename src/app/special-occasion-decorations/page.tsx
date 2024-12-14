
import birthdayData from "@/data/decoration_kits.json";
import Link from "next/link";
import SpecificOccasionCard from "@/components/SpecialOccasionCard";

export default function SpecialOccsionDecoration() {
  return (
    <>
    <div className="p-20">
      <div className="mt-4 sm:grid sm:grid-cols-3 gap-4 ">
      
        {birthdayData.packages.map((data, index) => (
          <div key={index}>
            <Link href={`/special-occasion-decorations/${data.id}`}>
            
            <SpecificOccasionCard title={data.title} image={data.image} price={data.price} id={data.id}/>
            </Link>
           </div>
         
        ))}
      </div>
      </div>
    </>
  );
}
