import Link from "next/link";

export default function WhatsappButton(){

    const whatsappLink = `https://wa.me/917562937524`

    return(
        <div>

            <Link href={whatsappLink}>
            <button className="bg-green-500 p-3 rounded-lg font-bold ">Chat on whatsapp</button>
            </Link>
        </div>
    )
}