import Link from "next/link";

export default function CallButton(){

    const whatsappLink = `tel:+917562937524`

    return(
        <div>

            <Link href={whatsappLink}>
            <button className="bg-red-500 p-3 rounded-lg font-bold ">Call Now</button>
            </Link>
        </div>
    )
}