"use client"
import { usePathname } from "next/navigation"
import data from "@/data/anniversary.json"
import { useEffect, useState } from "react"
import AnniversarySpecificCard from "@/components/AnniversarySpecificCard"

interface DecorationPackage {
  id: number;
  title: string;
  description: string;
  price:number;
  image:string;
  inclusion:string;
  


}

export default function AnniversarySpecific() {
  const pathname = usePathname()
  const ids = Number(pathname.slice(24)) 

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
              <AnniversarySpecificCard  inclusion={item.inclusion} title={item.title} price={item.price} image={item.image} id={item.id} description={item.description}/>
            </div>
          ))
        ) : (
          <p>No package found with this ID.</p>
        )}
      </div>
    </>
  )
}
