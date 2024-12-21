"use client"
import { usePathname } from "next/navigation"
import data from "@/data/special.json"
import { useEffect, useState } from "react"
import SpecialOccasionSpecificCard from "@/components/SpecialOccasionSpecificCard"

interface DecorationPackage {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  discount: number;
  image: string;
  image1: string;
  image2: string;
  image3: string;
  inclusion:string[];
  additionalOptions: string[]
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
              <SpecialOccasionSpecificCard  
              inclusion={item.inclusion}
              title={item.title}
              price={item.price}
              image1={item.image1}
              image2={item.image2}
              image3={item.image3}
              id={item.id}
              description={item.description}
              additionalOptions={item.additionalOptions}
              
              />
            </div>
          ))
        ) : (
          <p>No package found with this ID.</p>
        )}
      </div>
    </>
  )
}
