"use client"
import { usePathname } from "next/navigation"
import data from "@/data/birthday.json"
import { useEffect, useState } from "react"
import SpecificBirthdayCard from "@/components/SpecificBirthdayCard"

interface DecorationPackage {
  id: number;
  title: string;
  description: string;
  price:number;
  image:string;
  


}

export default function BirthdaySpecification() {
  const pathname = usePathname()
  const ids = Number(pathname.slice(21)) 

  const [filterdata, setFilterData] = useState<DecorationPackage[]>([])

  useEffect(() => {
    const filteredData = data.packages.filter((item) => item.id === ids)
    setFilterData(filteredData)
  }, [ids]) 

  return (
    <>
      <div>
        <h1>Birthday Specification</h1>
        {filterdata.length > 0 ? (
          filterdata.map((item) => (
            <div key={item.id}>
              <SpecificBirthdayCard title={item.title} price={item.price} image={item.image} id={item.id} description={item.description}/>
            </div>
          ))
        ) : (
          <p>No package found with this ID.</p>
        )}
      </div>
    </>
  )
}
