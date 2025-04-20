import { ChevronRight, Link } from "lucide-react";
import Image from "next/image";

export default function LegoInsiders() {
    return (
        <section className="w-full px-4">
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <Image
                    src="https://www.lego.com/cdn/cs/set/assets/blt8c8829195c9fc54f/Insider-v1-Page-StaticHero-Short-Large.jpg?format=webply&fit=crop&quality=75&width=1600&height=200&dpr=1"
                    alt="LEGO Insiders Family"
                    width={800}
                    height={400}
                    className="w-full h-auto"
                />
            </div>

            <div className="flex flex-col md:flex-row items-center bg-white rounded-lg overflow-hidden">
                <div className="md:w-1/3 p-8">
                    <h2 className="text-2xl font-bold mb-4">
                        Accede a un mundo de recompensas, experiencias, regalos y muchas cosas más exclusivas para miembros.
                    </h2>
                    <Link
                        href="/miembro"
                        className="bg-gray-800 hover:bg-black text-white font-bold py-3 px-6 rounded-full inline-flex items-center"
                    >
                        Hazte miembro
                        <ChevronRight className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </div>
        </section>
    )
}