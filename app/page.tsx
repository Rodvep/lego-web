"use client"
import Image from "next/image"
import Link from "next/link"
import {
  Search,
  Heart,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
  Plus,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react"
import { useState } from "react"

const categoriaPopulares = [
  {
    categoria: "Novedad",
    imgUrl: "/images/"
  },
  {
    categoria: "Exclusivos",
    imgUrl: "/images/"
  },
  {
    categoria: "Ofertas",
    imgUrl: "/images/"
  },
  {
    categoria: "Todos los set",
    imgUrl: "/images/"
  },
  {
    categoria: "Día del niño",
    imgUrl: "/images/"
  },
  {
    categoria: "Día de la madre",
    imgUrl: "/images/"
  },
  {
    categoria: "Fórmula 1",
    imgUrl: "/images/"
  },
  {
    categoria: "Obten recompensas",
    imgUrl: "/images/"
  },
]

const categoriaTemas = [
  {
    tema: "classic",
    imgUrl: "/images/"
  },
  {
    tema: "disney",
    imgUrl: "/images/"
  },
  {
    tema: "harry potter",
    imgUrl: "/images/"
  },
  {
    tema: "marvel",
    imgUrl: "/images/"
  },
  {
    tema: "botanical",
    imgUrl: "/images/"
  },
  {
    tema: "artículos",
    imgUrl: "/images/"
  },
  {
    tema: "creator",
    imgUrl: "/images/"
  },
  {
    tema: "star wars",
    imgUrl: "/images/"
  },
]

const categoriaEdades = [
  {
    edad : "más de 18 años",
    imgUrl : "/images/"
  },
  {
    edad : "más de 13 años",
    imgUrl : "/images/"
  },
  {
    edad : "más de 9 años",
    imgUrl : "/images/"
  },
  {
    edad : "más de 6 años",
    imgUrl : "/images/"
  },
  {
    edad : "más de 4 años",
    imgUrl : "/images/"
  },
  {
    edad : "1,5 años",
    imgUrl : "/images/"
  },
]

export default function Home() {

  const [categoriaActiva, setCategoriaActiva] = useState("populares")

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">

      {/* Top Navigation Bar */}
      <div className="bg-gray-100 py-5 px-4 hidden lg:block">
        <div className="w-full px-4 flex justify-between items-center">
          <Link href="/zona-de-juegos" className="flex items-center text-sm font-medium bg-blue-300 py-1 px-2 rounded-sm shadow-slate-400 shadow-sm hover:bg-white">
            <ChevronLeft className="h-4 w-4 mr-1" />
            ZONA DE JUEGOS
          </Link>
          <div className="flex items-center">
            <div className="flex-1 flex justify-center">
              <button className="mr-2">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <p className="text-sm">Rebajas de Pascua, del 14/4 al 20/4*</p>
              <Link href="/tienda" className="text-blue-600 ml-2 text-sm">
                A la tienda
              </Link>
              <button className="ml-2">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-sm">
              Iniciar sesión
            </Link>
            <div className="h-4 border-r border-gray-300"></div>
            <Link href="/insiders" className="text-sm">
              Únete a LEGO® Insiders
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-lego-yellow py-4 px-4">
        <div className="w-full px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="mr-8">
              <Image
                src="/placeholder.svg?height=60&width=60"
                alt="LEGO Logo"
                width={60}
                height={60}
                className="bg-lego-red p-1"
              />
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/comprar" className="font-bold text-black">
                COMPRAR
              </Link>
              <Link href="/descubrir" className="font-bold text-black">
                DESCUBRIR
              </Link>
              <Link href="/ayuda" className="font-bold text-black">
                AYUDA
              </Link>
              <Link href="/rebajas" className="bg-white px-4 py-2 rounded-md font-bold text-lego-red ml-8">
                REBAJAS
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full bg-white">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2">
              <Heart className="h-5 w-5" />
            </button>
            <button className="p-2 relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                (0)
              </span>
            </button>
          </div>
        </div>
      </div>

      <main>
        {/* Hero Banner */}
        <section className="bg-lego-yellow pb-10">
          <div className="w-full px-4">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 flex flex-col justify-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">¡Aprovecha las rebajas de Pascua!</h1>
                <p className="text-lg mb-6">
                  Consigue descuentos en una selección de sets del Save on selected sets 14/04 – 20/04*
                </p>
                <Link
                  href="/rebajas"
                  className="bg-yellow-700 hover:bg-yellow-800 text-white font-bold py-3 px-6 rounded-full inline-flex items-center w-fit"
                >
                  Explora las rebajas
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="md:w-1/2 mt-6 md:mt-0">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Pascua LEGO"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories Tabs */}
        <section className="bg-gray-900 text-gray-400 py-8">
          <div className="w-full px-4">
            <div className="flex">
              <button
                onClick={() => setCategoriaActiva("populares")}
                className={`mr-8 pb-2 font-medium hover:border-b-2 ${categoriaActiva === "populares"
                    ? "border-b-2 text-white"
                    : ""
                  }`}
              >
                Más populares
              </button>
              <button
                onClick={() => setCategoriaActiva("temas")}
                className={`mr-8 pb-2 font-medium hover:border-b-2 ${categoriaActiva === "temas"
                    ? "border-b-2 text-white"
                    : ""
                  }`}
              >
                Temas
              </button>
              <button
                onClick={() => setCategoriaActiva("edades")}
                className={`mr-8 pb-2 font-medium hover:border-b-2 ${categoriaActiva === "edades"
                    ? "border-b-2 text-white"
                    : ""
                  }`}
              >
                Edades
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mt-6">
              {categoriaActiva === "populares" &&
                categoriaPopulares.map((set, index) => (
                  <div key={index} className="aspect-square overflow-hidden rounded-lg">
                    <Image
                      src={set.imgUrl}
                      alt={`Categoría ${set.categoria}`}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))
              }
              {categoriaActiva === "temas" &&
                categoriaTemas.map((set, index) => (
                  <div key={index} className="aspect-square overflow-hidden rounded-lg">
                    <Image
                      src={set.imgUrl}
                      alt={`Categoría ${set.tema}`}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))
              }
              {categoriaActiva === "edades" &&
                categoriaEdades.map((set, index) => (
                  <div key={index} className="aspect-square overflow-hidden rounded-lg">
                    <Image
                      src={set.imgUrl}
                      alt={`Categoría ${set.edad}`}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))
              }
            </div>
          </div>
        </section>

        {/* Product Listings */}
        <section className="py-12">
          <div className="w-full px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Encuentra el set perfecto</h2>

            <div className="flex border-b border-gray-200 mb-8">
              <button className="mr-8 pb-2 border-b-2 border-black font-medium">Destacados</button>
              <button className="mr-8 pb-2 text-gray-500 font-medium">Recomendados</button>
              <button className="mr-8 pb-2 text-gray-500 font-medium">Coches de F1®</button>

              <div className="ml-auto">
                <button className="p-2 rounded-full border border-gray-300 mr-2">
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button className="p-2 rounded-full border border-gray-300">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                {
                  name: "Coche Ferrari SF-24 F1",
                  price: "$5,499.00",
                  age: "18+",
                  pieces: "1361",
                },
                {
                  name: "Mario Kart™: Mario y Kart estándar",
                  price: "$4,199.00",
                  age: "18+",
                  pieces: "1972",
                },
                {
                  name: "Castillo de Bella y Bestia",
                  price: "$6,899.00",
                  age: "18+",
                  pieces: "2916",
                },
                {
                  name: "Ramillete Rayos de Sol",
                  price: "$749.00",
                  age: "9+",
                  pieces: "373",
                },
                {
                  name: "Barco de Vapor Fluvial",
                  price: "$7,999.00",
                  age: "18+",
                  pieces: "4090",
                },
              ].map((product, index) => (
                <div key={index} className="border rounded-lg overflow-hidden group">
                  <div className="relative">
                    <div className="absolute top-4 left-4 z-10">
                      <button className="p-2 rounded-full bg-white shadow-md">
                        <Heart className="h-5 w-5" />
                      </button>
                    </div>
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-lego-yellow text-black px-3 py-1 font-medium text-sm">Novedad</span>
                    </div>
                    <Image
                      src={`/placeholder.svg?height=300&width=300`}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>

                  <div className="p-4">
                    <div className="flex items-center mb-2 text-sm">
                      <span className="flex items-center mr-3">
                        <Image
                          src="/placeholder.svg?height=20&width=20"
                          alt="Age"
                          width={20}
                          height={20}
                          className="mr-1"
                        />
                        {product.age}
                      </span>
                      <span className="flex items-center">
                        <Image
                          src="/placeholder.svg?height=20&width=20"
                          alt="Pieces"
                          width={20}
                          height={20}
                          className="mr-1"
                        />
                        {product.pieces}
                      </span>
                      {index === 0 && (
                        <span className="flex items-center ml-3">
                          <span className="text-yellow-500">★★★★★</span> 4.9
                        </span>
                      )}
                    </div>

                    <h3 className="font-medium mb-2">{product.name}</h3>
                    <p className="font-bold text-lg mb-4">{product.price}</p>

                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-full flex items-center justify-center">
                      {index % 2 === 0 ? "Añadir a la Bolsa" : "Reservar"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Most Built Models */}
        <section className="py-12 bg-gray-100">
          <div className="w-full px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Descubre los modelos más construidos</h2>
            <p className="text-center mb-10 text-gray-600">
              Emprende una nueva aventura de construcción con estos inspiradores sets LEGO®.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="row-span-2 col-span-1">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="LEGO Model"
                  width={600}
                  height={800}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="LEGO Galaxy"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-lg"
                />
                <button className="absolute bottom-4 right-4 p-2 rounded-full bg-white shadow-md">
                  <Plus className="h-5 w-5" />
                </button>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="LEGO Cat"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-lg"
                />
                <button className="absolute bottom-4 right-4 p-2 rounded-full bg-white shadow-md">
                  <Plus className="h-5 w-5" />
                </button>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="LEGO F1"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="LEGO Flowers"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* F1 Banner */}
        <section className="bg-black text-white py-12">
          <div className="w-full px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="flex items-center mb-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="LEGO Logo"
                    width={60}
                    height={60}
                    className="bg-lego-red p-1 mr-4"
                  />
                  <Image src="/placeholder.svg?height=40&width=120" alt="Formula 1" width={120} height={40} />
                </div>

                <div className="bg-black inline-flex rounded-full overflow-hidden mb-4">
                  <span className="bg-black text-white px-4 py-2 font-medium">Coches de F1®</span>
                  <span className="bg-gray-200 text-black px-4 py-2 font-medium">Pascua</span>
                </div>
              </div>

              <div className="md:w-2/3 md:pl-8">
                <h2 className="text-4xl font-bold mb-4">Construye la parrilla definitiva</h2>
                <p className="mb-6">
                  Descubre la gama completa de sets de F1® LEGO®, que hará las delicias de los fans de todas las edades
                  y habilidades.
                </p>
                <Link
                  href="/f1"
                  className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-3 px-6 rounded-full inline-flex items-center"
                >
                  Comprar colección
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Discover More */}
        <section className="py-12">
          <div className="w-full px-4">
            <h2 className="text-3xl font-bold mb-10">Descubre más</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Regalo LEGO"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2">¡A regalar!</h3>
                <p className="text-gray-600 mb-4">
                  Descubre ideas por ocasión, edad y precio. ¡Además de tarjetas regalo!
                </p>
                <Link
                  href="/tienda"
                  className="border border-gray-300 hover:bg-gray-100 text-black font-medium py-2 px-6 rounded-full inline-flex items-center justify-center w-fit"
                >
                  A la tienda
                </Link>
              </div>

              <div className="flex flex-col">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Artículos LEGO"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2">¡Descubre todos los detalles!</h3>
                <p className="text-gray-600 mb-4">
                  Consulta nuestra biblioteca de artículos y encuentra ideas e inspiración.
                </p>
                <Link
                  href="/descubrir"
                  className="border border-gray-300 hover:bg-gray-100 text-black font-medium py-2 px-6 rounded-full inline-flex items-center justify-center w-fit"
                >
                  Descubrir
                </Link>
              </div>

              <div className="flex flex-col">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="App LEGO Builder"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2">Consigue la app LEGO® Builder</h3>
                <p className="text-gray-600 mb-4">
                  Descubre instrucciones digitales y consejos para construir en familia, amplía tus modelos y
                  visualízalos en 3D, y mucho más.
                </p>
                <Link
                  href="/descargar"
                  className="border border-gray-300 hover:bg-gray-100 text-black font-medium py-2 px-6 rounded-full inline-flex items-center justify-center w-fit"
                >
                  Descargar
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* LEGO Insiders */}
        <section className="py-12 bg-gray-100">
          <div className="w-full px-4">
            <div className="flex flex-col md:flex-row items-center bg-white rounded-lg overflow-hidden">
              <div className="md:w-1/3 p-8">
                <Image
                  src="/placeholder.svg?height=100&width=200"
                  alt="LEGO Insiders"
                  width={200}
                  height={100}
                  className="mb-6"
                />
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
              <div className="md:w-2/3">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="LEGO Insiders Family"
                  width={800}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Welcome Message */}
        <section className="py-8 bg-gray-50">
          <div className="w-full px-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <p className="text-gray-700">
                Te damos la bienvenida a la LEGO® Shop oficial, donde encontrarás fantásticos juguetes de construcción
                LEGO,
                <Link href="/regalos" className="text-blue-600 hover:underline">
                  {" "}
                  regalos
                </Link>
                , increíbles piezas de exposición y muchas cosas más para
                <Link href="/ninas" className="text-blue-600 hover:underline">
                  {" "}
                  niñas
                </Link>
                ,
                <Link href="/ninos" className="text-blue-600 hover:underline">
                  {" "}
                  niños
                </Link>
                ,
                <Link href="/peques" className="text-blue-600 hover:underline">
                  {" "}
                  peques
                </Link>{" "}
                y adultos por igual. Elige el regalo perfecto para bebés, adolescentes y adultos con el que celebrar
                <Link href="/cumpleanos" className="text-blue-600 hover:underline">
                  {" "}
                  cumpleaños
                </Link>{" "}
                y otras ocasiones especiales, como el
                <Link href="/san-valentin" className="text-blue-600 hover:underline">
                  {" "}
                  Día de San Valentín
                </Link>
                , el
                <Link href="/dia-madre" className="text-blue-600 hover:underline">
                  {" "}
                  Día de la Madre
                </Link>{" "}
                y el
                <Link href="/dia-padre" className="text-blue-600 hover:underline">
                  {" "}
                  Día del Padre
                </Link>
                . Podrás comprar fácilmente juguetes con los que regalar horas de diversión y juego.
              </p>
              <Link href="/mas" className="text-blue-600 hover:underline font-medium">
                Lee mas
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-12">
        <div className="w-full px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <Link href="/">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="LEGO Logo"
                  width={80}
                  height={80}
                  className="bg-lego-red p-1 mb-6"
                />
              </Link>

              <div className="flex items-center mb-6 border border-gray-700 rounded-md p-2 w-fit">
                <Image
                  src="/placeholder.svg?height=20&width=20"
                  alt="Location"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <span>México</span>
              </div>

              <Link href="/tarjetas-regalo" className="block mb-4 hover:underline">
                Tarjetas regalo
              </Link>
              <Link href="/inspiracion" className="block mb-4 hover:underline">
                Encuentra la inspiración
              </Link>
              <Link href="/catalogos" className="block mb-4 hover:underline">
                Catálogos LEGO
              </Link>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">QUIÉNES SOMOS</h3>
              <Link href="/about" className="block mb-4 hover:underline">
                The LEGO Group
              </Link>
              <Link href="/noticias" className="block mb-4 hover:underline">
                Noticias LEGO®
              </Link>
              <Link href="/sostenibilidad" className="block mb-4 hover:underline">
                Sostenibilidad
              </Link>
              <Link href="/transparencia" className="block mb-4 hover:underline">
                Declaración de transparencia de la cadena de suministro
              </Link>
              <Link href="/certificacion" className="block mb-4 hover:underline">
                Certificación de productos LEGO
              </Link>
              <Link href="/empleo" className="block mb-4 hover:underline">
                Ofertas de empleo LEGO
              </Link>
              <Link href="/compliance" className="block mb-4 hover:underline">
                LEGO Compliance Line
              </Link>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">ATENCIÓN AL CLIENTE</h3>
              <Link href="/contacto" className="block mb-4 hover:underline">
                Ponte en contacto con nosotros
              </Link>
              <Link href="/instrucciones" className="block mb-4 hover:underline">
                Instrucciones de construcción
              </Link>
              <Link href="/repuesto" className="block mb-4 hover:underline">
                Piezas de repuesto
              </Link>
              <Link href="/envios" className="block mb-4 hover:underline">
                Envíos y devoluciones
              </Link>
              <Link href="/pago" className="block mb-4 hover:underline">
                Métodos de pago
              </Link>
              <Link href="/terminos" className="block mb-4 hover:underline">
                Términos y condiciones
              </Link>
              <Link href="/retirados" className="block mb-4 hover:underline">
                Productos retirados
              </Link>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">ATRACCIONES</h3>
              <Link href="/legohouse" className="block mb-4 hover:underline">
                LEGO® House
              </Link>
              <Link href="/legolandparks" className="block mb-4 hover:underline">
                LEGOLAND® Parks
              </Link>
              <Link href="/discovery" className="block mb-4 hover:underline">
                LEGOLAND Discovery Centers
              </Link>

              <h3 className="text-xl font-bold mt-8 mb-6">MÁS INFORMACIÓN</h3>
              <Link href="/magazine" className="block mb-4 hover:underline">
                LEGO® Magazine (GRATIS)
              </Link>
              <Link href="/education" className="block mb-4 hover:underline">
                LEGO Education
              </Link>
              <Link href="/ideas" className="block mb-4 hover:underline">
                LEGO Ideas
              </Link>
              <Link href="/foundation" className="block mb-4 hover:underline">
                LEGO Foundation
              </Link>
              <Link href="/estudiantes" className="block mb-4 hover:underline">
                Ofertas para estudiantes
              </Link>
              <Link href="/socios" className="block mb-4 hover:underline">
                Programa para socios
              </Link>
            </div>
          </div>

          <div className="border-t border-gray-800 py-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="mb-6 md:mb-0 md:w-1/2">
                <h3 className="text-lg font-bold mb-4">SUSCRÍBETE AL CORREO ELECTRÓNICO DE LEGO® SHOP</h3>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Tu dirección de correo electrónico"
                    className="bg-white text-black px-4 py-3 rounded-l-md w-full md:w-64"
                  />
                  <button className="bg-orange-500 hover:bg-orange-600 px-4 py-3 rounded-r-md">
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">SÍGUENOS</h3>
                <div className="flex space-x-4">
                  <Link href="https://facebook.com/lego" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700">
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link href="https://twitter.com/lego" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700">
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link href="https://instagram.com/lego" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700">
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link href="https://youtube.com/lego" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700">
                    <Youtube className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 py-8">
            <div className="flex flex-wrap gap-6">
              <Link href="/privacidad" className="text-sm hover:underline">
                Política de privacidad
              </Link>
              <Link href="/cookies" className="text-sm hover:underline">
                Cookies
              </Link>
              <Link href="/legal" className="text-sm hover:underline">
                Aviso legal
              </Link>
              <Link href="/uso" className="text-sm hover:underline">
                Cláusulas de uso
              </Link>
              <Link href="/accesibilidad" className="text-sm hover:underline">
                Accesibilidad
              </Link>
              <Link href="/configuracion" className="text-sm hover:underline">
                Configuración de cookies
              </Link>
            </div>

            <p className="text-xs text-gray-400 mt-6">
              LEGO System A/S, DK-7190 Billund, Dinamarca. Solo se permite la compra en línea a personas mayores de 18
              años. LEGO, el logotipo LEGO, la minifigura, DUPLO, el logotipo de FRIENDS, el logotipo de MINIFIGURES,
              DREAMZZZ, NINJAGO, VIDYO y MINDSTORMS son marcas comerciales de The LEGO Group. ©2025 The LEGO Group.
              Todos los derechos reservados. El uso de este sitio supone la aceptación de las cláusulas de uso.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
