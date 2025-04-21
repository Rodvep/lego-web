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
    edad: "más de 18 años",
    imgUrl: "/images/"
  },
  {
    edad: "más de 13 años",
    imgUrl: "/images/"
  },
  {
    edad: "más de 9 años",
    imgUrl: "/images/"
  },
  {
    edad: "más de 6 años",
    imgUrl: "/images/"
  },
  {
    edad: "más de 4 años",
    imgUrl: "/images/"
  },
  {
    edad: "1,5 años",
    imgUrl: "/images/"
  },
]

const productosDestacados =
  [
    {
      imgUrl: "/images/",
      name: "Coche Ferrari SF-24 F1",
      price: "$5,499.00",
      age: "18+",
      pieces: "1361",
    },
    {
      imgUrl: "/images/",
      name: "Mario Kart™: Mario y Kart estándar",
      price: "$4,199.00",
      age: "18+",
      pieces: "1972",
    },
    {
      imgUrl: "/images/",
      name: "Castillo de Bella y Bestia",
      price: "$6,899.00",
      age: "18+",
      pieces: "2916",
    },
    {
      imgUrl: "/images/",
      name: "Ramillete Rayos de Sol",
      price: "$749.00",
      age: "9+",
      pieces: "373",
    },
    {
      imgUrl: "/images/",
      name: "Barco de Vapor Fluvial",
      price: "$7,999.00",
      age: "18+",
      pieces: "4090",
    },
  ]
const productosRecomendados =
  [
    {
      imgUrl: "/images/",
      name: "",
      price: "",
      age: "",
      pieces: "",
    },
    {
      imgUrl: "/images/",
      name: "",
      price: "",
      age: "+",
      pieces: "",
    },
    {
      imgUrl: "/images/",
      name: "",
      price: "",
      age: "",
      pieces: "",
    },
    {
      imgUrl: "/images/",
      name: "",
      price: "",
      age: "",
      pieces: "",
    },
    {
      imgUrl: "/images/",
      name: "",
      price: "",
      age: "",
      pieces: "",
    },
  ]
const productosCochesDeF1 =
  [
    {
      imgUrl: "/images/",
      name: "Coche Ferrari SF-24 F1",
      price: "$5,499.00",
      age: "18+",
      pieces: "1361",
    },
    {
      imgUrl: "/images/",
      name: "",
      price: "",
      age: "",
      pieces: "",
    },
    {
      imgUrl: "/images/",
      name: "",
      price: "",
      age: "",
      pieces: "",
    },
    {
      imgUrl: "/images/",
      name: "",
      price: "",
      age: "",
      pieces: "",
    },
    {
      imgUrl: "/images/",
      name: "",
      price: "",
      age: "",
      pieces: "",
    },
  ]

const datosSeccionF1 =
  [
    {
      titulo: "Construye la parrilla definitiva",
      desc: "Descubre la gama completa de sets de F1® LEGO®, que hará las delicias de los fans de todas las edades y habilidades.",
      btnTxt: "Comprar colección",
      estiloTxt: "relative w-full px-4 py-16 md:pt-48 flex justify-end text-center lg:text-right pr-9",
      alighnBtn: "flex justify-center lg:justify-end",
      imgUrl: "https://www.lego.com/cdn/cs/set/assets/blta171c0b841d859da/F1-Tabbed-202504-Page-Hero-Tall-Large.jpg?format=webply&fit=crop&quality=75&width=1600&height=700&dpr=1",
    }
  ]
const datosSeccionTrilogia =
  [
    {
      titulo: "Construye la continuación de tu trilogía",
      desc: "Vuelve a la Tierra Media y diviértete como un hobbit con el set El Señor de los Anillos: La Comarca de LEGO® Icons.",
      btnTxt: "A la tienda",
      estiloTxt: "relative w-full px-4 py-16 md:pt-48 flex justify-start text-center lg:text-left pr-9",
      alighnBtn: "flex justify-center lg:justify-start",
      imgUrl: "https://www.lego.com/cdn/cs/set/assets/blt36cf31b49c18e12f/10354-LOTR-Campaign-HP-Tall-Hero-Desktop.png?format=webply&fit=crop&quality=70&width=1600&height=700&dpr=1.5",
    }
  ]

export default function Home() {

  const [categoriaActiva, setCategoriaActiva] = useState("populares")
  const [listaProductos, setListaProductos] = useState("destacados")
  const [seccionF1, setSeccionF1] = useState("F1")

  const obtenerListaProductos = () => {
    switch (listaProductos) {
      case "destacados":
        return productosDestacados;
      case "recomendados":
        return productosRecomendados;
      case "cochesDeF1":
        return productosCochesDeF1;
      default:
        return [];
    }
  }
  const listaProductosSeleccionada = obtenerListaProductos();

  const obtenerDatosSeccionF1 = () => {
    if (seccionF1 != "trilogia") {
      return datosSeccionF1;
    }
    else {
      return datosSeccionTrilogia;
    }
  }
  const datosSeccionF1Seleccionada = obtenerDatosSeccionF1();


  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">

      {/* Top Navigation Bar */}
      <div className="bg-gray-100 py-5 px-4 hidden lg:block">
        <div className="w-full px-4 flex justify-between items-center">
          <Link href="https://kids.lego.com/" className="flex items-center text-sm font-medium bg-blue-300 py-1 px-2 rounded-sm shadow-slate-400 shadow-sm hover:bg-white">
            <ChevronLeft className="h-4 w-4 mr-1" />
            ZONA DE JUEGOS
          </Link>
          <div className="flex items-center">
            <div className="flex-1 flex justify-center">
              <button className="mr-2">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <p className="text-sm">Rebajas de Pascua, del 14/4 al 20/4*</p>
              <Link href="https://www.lego.com/es-mx/categories/sales-and-deals?icmp=SW-SHGB-Standard-MT_SWB_Easter_Sale-MP-MT-UFX1LPBCRY" className="text-blue-600 ml-2 text-sm">
                A la tienda
              </Link>
              <button className="ml-2">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="https://www.lego.com/es-mx/categories/sales-and-deals" className="text-sm">
              Iniciar sesión
            </Link>
            <div className="h-4 border-r border-gray-300"></div>
            <Link href="https://www.lego.com/es-mx/insiders" className="text-sm">
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
                src="https://assets.lego.com/logos/v4.5.0/brand-lego.svg"
                alt="LEGO Logo"
                width={60}
                height={60}
              />
            </Link>
            <nav className="hidden md:flex">
              <div className="space-x-8 mt-3">
                <Link href="https://www.lego.com/es-mx" className="font-bold text-black border-black hover:border-b-2">
                  COMPRAR
                </Link>
                <Link href="https://www.lego.com/es-mx" className="font-bold text-black border-black hover:border-b-2">
                  DESCUBRIR
                </Link>
                <Link href="https://www.lego.com/es-mx" className="font-bold text-black border-black hover:border-b-2">
                  AYUDA
                </Link>
              </div>
              <Link href="https://www.lego.com/es-mx/categories/sales-and-deals" className="bg-white px-4 py-2 rounded-md font-bold text-lego-red ml-8 hover:bg-black hover:text-white">
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
        <section className="relative bg-lego-yellow pb-10 h-screen lg:h-max">
          <div className="absolute top-0 h-screen lg:h-full lg:w-full lg:overflow-hidden">
            <Image
              src="https://www.lego.com/cdn/cs/set/assets/bltbe660bfc7b79da01/Easter-202504-LP-HeroSK-Large-Offers.jpg?format=webply&fit=crop&quality=75&width=1600&height=500&dpr=1"
              alt="Pascua LEGO"
              width={20}
              height={20}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="relative w-full px-4 py-20 md:py-24">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black drop-shadow-lg">
                ¡Aprovecha las rebajas de Pascua!
              </h1>
              <p className="text-lg mb-6 text-black drop-shadow-md">
                Consigue descuentos en una selección de sets del Save on selected sets 14/04 – 20/04*
              </p>
              <Link
                href="https://www.lego.com/es-mx/categories/sales-and-deals"
                className="bg-yellow-900 hover:bg-yellow-800 text-white font-bold py-3 px-6 rounded-full inline-flex items-center w-fit hover:underline"
              >
                Explora las rebajas
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
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

            <div className="flex mb-8">
              <button onClick={() => setListaProductos("destacados")}
                className={`mr-8 pb-2 font-medium hover:border-b-2 border-black ${listaProductos === "destacados"
                  ? "border-b-2  text-black"
                  : "text-gray-500"
                  }`}
              >
                Destacados
              </button>
              <button onClick={() => setListaProductos("recomendados")}
                className={`mr-8 pb-2 font-medium hover:border-b-2 border-black ${listaProductos === "recomendados"
                  ? "border-b-2  text-black"
                  : "text-gray-500"
                  }`}
              >
                Recomendados
              </button>
              <button onClick={() => setListaProductos("cochesDeF1")}
                className={`mr-8 pb-2 font-medium hover:border-b-2 border-black ${listaProductos === "cochesDeF1"
                  ? "border-b-2 text-black"
                  : "text-gray-500"
                  }`}
              >
                Coches de F1®
              </button>
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

              {listaProductosSeleccionada.map((product, index) => (
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
                      src={product.imgUrl}
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
                          src="https://assets.lego.com/icons/v7.3.0/birthday-cake.svg"
                          alt="Age"
                          width={20}
                          height={20}
                          className="mr-1"
                        />
                        {product.age}
                      </span>
                      <span className="flex items-center">
                        <Image
                          src="https://assets.lego.com/icons/v7.3.0/brick-one-by-one-iso.svg"
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="LEGO Model"
                  width={600}
                  height={800}
                  className="w-full h-auto rounded-lg"
                />
                <button className="absolute bottom-4 left-4 p-2 rounded-full bg-white shadow-md">
                  <Plus className="h-5 w-5" />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-6">
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
                  <button className="absolute bottom-4 right-4 p-2 rounded-full bg-white shadow-md">
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="LEGO Flowers"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg"
                  />
                  <button className="absolute bottom-4 right-4 p-2 rounded-full bg-white shadow-md">
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* F1 y trilogia banner */}
        {datosSeccionF1Seleccionada.map((datos, index) => (

          <section key={index} className="relative h-max pb-10">
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src={datos.imgUrl}
                alt="Img"
                width={1200}
                height={600}
                className="w-max h-full lg:h-max object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            </div>
            <div className="relative flex justify-center pt-5 text-white mx-11">
              <div className="bg-gray-100 rounded-full p-0.5 flex">
                <button onClick={() => setSeccionF1("F1")}
                  className={`rounded-full p-2 mr-1 ${seccionF1 === "F1"
                    ? "bg-black"
                    : "text-black"
                    }`}>
                  Coches de F1
                </button>
                <button onClick={() => setSeccionF1("trilogia")}
                  className={`rounded-full p-2 ${seccionF1 === "trilogia"
                    ? "bg-black"
                    : "text-black"
                    }`}>
                  Construye la continuación de tu trilogía
                </button>
              </div>
            </div>
            <div className={datos.estiloTxt}>
              <div className="max-w-3xl">
                <h1 className="text-2xl md:text-3xl font-bold mb-4 text-white drop-shadow-lg">
                  {datos.titulo}
                </h1>
                <p className="text-lg mb-6 text-white drop-shadow-md">
                  {datos.desc}
                </p>
                <div className={datos.alighnBtn}>
                  <Link
                    href="https://www.lego.com/es-mx/categories/f1/f1-sets"
                    className="bg-gray-200 hover:bg-white text-black font-bold py-2 px-6 rounded-full inline-flex  items-center w-fit hover:underline"
                  >
                    {datos.btnTxt}
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}

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
                  href="https://www.lego.com/es-mx/gifts"
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
                  href="https://www.lego.com/es-mx/discover"
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
                  href="https://www.lego.com/es-mx/builder-app"
                  className="border border-gray-300 hover:bg-gray-100 text-black font-medium py-2 px-6 rounded-full inline-flex items-center justify-center w-fit"
                >
                  Descargar
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* LEGO Insiders */}
        <section className="relative">
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <Image
              src="https://www.lego.com/cdn/cs/set/assets/blt8c8829195c9fc54f/Insider-v1-Page-StaticHero-Short-Large.jpg?format=webply&fit=crop&quality=75&width=1600&height=200&dpr=1"
              alt="LEGO Insiders Family"
              width={800}
              height={400}
              className="lg:w-max h-full lg:h-max"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-30 lg:hidden"></div>
          <div className="relative w-full flex justify-center text-center">
            <div className="lg:w-1/2 p-8">
              <h2 className="lg:text-xl font-bold mb-4 text-white lg:text-black">
                Accede a un mundo de recompensas, experiencias, regalos y muchas cosas más exclusivas para miembros.
              </h2>
              <Link
                href="/miembro"
                className="bg-gray-500 hover:bg-gray-600 text-white text-sm font-bold py-1 px-3 rounded-full inline-flex items-center hover:underline"
              >
                Hazte miembro
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
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
              <Link href="https://www.lego.com/es-mx" className="text-blue-600 hover:underline font-medium">
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
                  src="https://assets.lego.com/logos/v4.5.0/brand-lego.svg"
                  alt="LEGO Logo"
                  width={80}
                  height={80}
                  className="mb-6"
                />
              </Link>

              <div className="flex items-center mb-6 border border-gray-700 rounded-md p-2 w-fit">
                <Image
                  src="https://img.freepik.com/vector-gratis/ilustracion-bandera-mexico_53876-18169.jpg?semt=ais_hybrid&w=740"
                  alt="Location"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <span>México</span>
              </div>

              <Link href="https://www.lego.com/es-mx/gift-cards" className="block mb-4 hover:underline">
                Tarjetas regalo
              </Link>
              <Link href="https://www.lego.com/es-mx/lego-set-inspiration" className="block mb-4 hover:underline">
                Encuentra la inspiración
              </Link>
              <Link href="https://www.lego.com/es-mx/themes/brand-catalogue" className="block mb-4 hover:underline">
                Catálogos LEGO
              </Link>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">QUIÉNES SOMOS</h3>
              <Link href="https://www.lego.com/es-mx/aboutus" className="block mb-4 hover:underline">
                The LEGO Group
              </Link>
              <Link href="https://www.lego.com/es-mx/aboutus/news-room" className="block mb-4 hover:underline">
                Noticias LEGO®
              </Link>
              <Link href="https://www.lego.com/es-mx/sustainability" className="block mb-4 hover:underline">
                Sostenibilidad
              </Link>
              <Link href="https://www.lego.com/cdn/cs/set/assets/blte42cb66f699d7db6/LEGO_Modern_Slavery_Transparency_Statement_2023_FINAL.pdf" className="block mb-4 hover:underline">
                Declaración de transparencia de la cadena de suministro
              </Link>
              <Link href="https://www.lego.com/es-mx/aboutus/lego-group/product-safety" className="block mb-4 hover:underline">
                Certificación de productos LEGO
              </Link>
              <Link href="https://www.lego.com/es-mx/careers" className="block mb-4 hover:underline">
                Ofertas de empleo LEGO
              </Link>
              <Link href="https://www.lego.com/es-mx/compliance-line" className="block mb-4 hover:underline">
                LEGO Compliance Line
              </Link>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">ATENCIÓN AL CLIENTE</h3>
              <Link href="https://www.lego.com/es-mx/service" className="block mb-4 hover:underline">
                Ponte en contacto con nosotros
              </Link>
              <Link href="https://www.lego.com/es-mx/service/buildinginstructions" className="block mb-4 hover:underline">
                Instrucciones de construcción
              </Link>
              <Link href="https://www.lego.com/es-mx/service/replacementparts" className="block mb-4 hover:underline">
                Piezas de repuesto
              </Link>
              <Link href="https://www.lego.com/es-mx/page/shipping-handling" className="block mb-4 hover:underline">
                Envíos y devoluciones
              </Link>
              <Link href="https://www.lego.com/es-mx/page/payment-methods" className="block mb-4 hover:underline">
                Métodos de pago
              </Link>
              <Link href="https://www.lego.com/es-mx/page/terms-and-conditions" className="block mb-4 hover:underline">
                Términos y condiciones
              </Link>
              <Link href="https://www.lego.com/es-mx/service/product-recalls" className="block mb-4 hover:underline">
                Productos retirados
              </Link>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">ATRACCIONES</h3>
              <Link href="https://www.lego.com/es-mx/attractions#blt281a0fddfffea922" className="block mb-4 hover:underline">
                LEGO® House
              </Link>
              <Link href="https://www.lego.com/es-mx/attractions#blt2d039b65946ba98d" className="block mb-4 hover:underline">
                LEGOLAND® Parks
              </Link>
              <Link href="https://www.lego.com/es-mx/attractions#blt7819df81c4e1b774" className="block mb-4 hover:underline">
                LEGOLAND Discovery Centers
              </Link>

              <h3 className="text-xl font-bold mt-8 mb-6">MÁS INFORMACIÓN</h3>
              <Link href="https://www.lego.com/magazine" className="block mb-4 hover:underline">
                LEGO® Magazine (GRATIS)
              </Link>
              <Link href="http://education.lego.com/" className="block mb-4 hover:underline">
                LEGO Education
              </Link>
              <Link href="https://ideas.lego.com/" className="block mb-4 hover:underline">
                LEGO Ideas
              </Link>
              <Link href="https://learningthroughplay.com/" className="block mb-4 hover:underline">
                LEGO Foundation
              </Link>
              <Link href="https://connect.studentbeans.com/v4/hosted/lego/mx" className="block mb-4 hover:underline">
                Ofertas para estudiantes
              </Link>
              <Link href="https://www.lego.com/es-mx/page/affiliate-program" className="block mb-4 hover:underline">
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
                  <Link href="https://www.facebook.com/LEGOEsp/" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700">
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link href="https://twitter.com/LEGO_Group" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700">
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link href="https://www.instagram.com/lego" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700">
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link href="https://m.youtube.com/user/LEGO" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700">
                    <Youtube className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 py-8">
            <div className="flex flex-wrap gap-6">
              <Link href="https://www.lego.com/es-mx/legal/legal-notice/privacy-policy" className="text-sm hover:underline">
                Política de privacidad
              </Link>
              <Link href="https://www.lego.com/es-mx/cookie-policy" className="text-sm hover:underline">
                Cookies
              </Link>
              <Link href="https://www.lego.com/es-mx/legal/notices-and-policies/legal-notice" className="text-sm hover:underline">
                Aviso legal
              </Link>
              <Link href="https://www.lego.com/es-mx/legal/legal-notice" className="text-sm hover:underline">
                Cláusulas de uso
              </Link>
              <Link href="https://www.lego.com/es-mx/page/accessibility" className="text-sm hover:underline">
                Accesibilidad
              </Link>
              <Link href="https://www.lego.com/es-mx" className="text-sm hover:underline">
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
