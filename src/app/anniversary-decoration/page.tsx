
import birthdayData from "@/data/decoration_kits.json";
import Link from "next/link";
import AnniversaryCard from "@/components/AnnivesaryCard";

export default function AnniversaryDecoration() {
  return (
    <>
    <div className="p-20">
      <div className="mt-4 sm:grid sm:grid-cols-3 gap-4 ">
      
        {birthdayData.packages.map((data, index) => (
          <div key={index}>
            <Link href={`/anniversary-decoration/${data.id}`}>
            
            <AnniversaryCard title={data.title} image={data.image} price={data.price} id={data.id}/>
            </Link>
           </div>
         
        ))}
      </div>
      </div>
    </>
  );
}
