"use client";
import { usePathname } from "next/navigation";
import data from "@/data/birthday.json";
import { useEffect, useState } from "react";
import SpecificBirthdayCard from "@/components/SpecificBirthdayCard";

interface DecorationPackage {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  image1: string;
  image2: string;
  image3: string;
  inclusion: string[];
  additionalOptions: string[]
}

export default function BirthdaySpecification() {
  const pathname = usePathname();
  const ids = Number(pathname.slice(21));

  const [filterdata, setFilterData] = useState<DecorationPackage[]>([]);

  useEffect(() => {
    const filteredData = data.packages.filter((item) => item.id === ids);
    setFilterData(filteredData);
  }, [ids]);

  return (
    <>
      <div>
        {filterdata.length > 0 ? (
          filterdata.map((item) => (
            <div key={item.id}>
              <SpecificBirthdayCard
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
  );
}
