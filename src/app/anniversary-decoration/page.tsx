
import birthdayData from "@/data/anniversary.json";
import Link from "next/link";
import AnniversaryCard from "@/components/AnnivesaryCard";

export default function AnniversaryDecoration() {
  return (
    <>
    <div className="mt-28">
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
