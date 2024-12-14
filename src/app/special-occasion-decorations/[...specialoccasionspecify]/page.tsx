"use client"
import { usePathname } from "next/navigation"
import data from "@/data/special.json"
import { useEffect, useState } from "react"
import SpecialOccasionSpecificCard from "@/components/SpecialOccasionSpecificCard"

interface DecorationPackage {
  id: number;
  title: string;
  description: string;
  price:number;
  image:string;
  


}

export default function SpecialOccasionSpecific() {
  const pathname = usePathname()
  const ids = Number(pathname.slice(30)) 

  const [filterdata, setFilterData] = useState<DecorationPackage[]>([])

  useEffect(() => {
    const filteredData = data.packages.filter((item) => item.id === ids)
    setFilterData(filteredData)
  }, [ids]) 

  return (
    <>
      <div>
        {filterdata.length > 0 ? (
          filterdata.map((item) => (
            <div key={item.id}>
              <SpecialOccasionSpecificCard title={item.title} price={item.price} image={item.image} id={item.id} description={item.description}/>
            </div>
          ))
        ) : (
          <p>No package found with this ID.</p>
        )}
      </div>
    </>
  )
}
