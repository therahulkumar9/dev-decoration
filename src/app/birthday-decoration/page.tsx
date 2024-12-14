
import birthdayData from "@/data/birthday.json";
import BirthdayCard from "@/components/BirthdayCard"; 
import Link from "next/link";

export default function BirthdayDecoration() {
  return (
    <>
    <div className="p-20 bg-pink-300">
      <div className="mt-4 sm:grid sm:grid-cols-3 gap-4 ">
      
        {birthdayData.packages.map((data, index) => (
          <div key={index}>
            <Link href={`/birthday-decoration/${data.id}`}>
            
            <BirthdayCard title={data.title} image={data.image} price={data.price} id={data.id}/>
            </Link>
           </div>
         
        ))}
      </div>
      </div>
    </>
  );
}
