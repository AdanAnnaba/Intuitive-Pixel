import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Web Design & Development",
    description:
      "Avaliamos os objetivos do seu negócio e identificamos os públicos-alvo ideais nas primeiras fases do projeto.",
    image: "https://i.ibb.co.com/MRVH77n/image.png",
  },
  {
    id: 2,
    title: "Web Design & Development",
    description:
      "Avaliamos os objetivos do seu negócio e identificamos os públicos-alvo ideais nas primeiras fases do projeto.",
    image:
      "https://i.ibb.co.com/0DS2LJY/gradient-benchmark-illustration-52683-83386-removebg-preview.png",
  },
  {
    id: 3,
    title: "Web Design & Development",
    description:
      "Avaliamos os objetivos do seu negócio e identificamos os públicos-alvo ideais nas primeiras fases do projeto.",
    image: "https://i.ibb.co.com/rc7Cv2j/images-removebg-preview-1.png",
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-black">
      <div className="text-center mb-10">
        <h2 className="text-gray-200 text-xl">My Services</h2>
        <p className=" text-white mt-4 text-3xl font-bold">Take a look at my</p>
        <div className="text-white text-3xl font-bold inline-block relative">
          recent{" "}
          <span className="relative z-10">
            Design Ventures
            <span className="absolute bottom-0 left-0 w-full h-1/3 bg-purple-600 -z-10 bg-gradient-to-br from-[#5A00FF] to-[#E066ED]"></span>
          </span>{" "}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`p-8 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 ${
              index === 1
                ? "bg-purple-600 text-white"
                : "bg-gray-800 text-white bg-opacity-70"
            }`}
          >
            <div className="mb-6 text-center">
              <Image
                src={"https://i.ibb.co.com/q1HBCC5/6693146.png"}
                alt={service.title}
                width={80}
                height={80}
                className="mx-auto"
              />
            </div>
            <div className="">
              <h3 className="text-2xl font-bold mb-4 text-center text-nowrap -mx-4">
                {service.title}
              </h3>
            </div>
            <p className="text-gray-300 text-center">{service.description}</p>
            <Image
              src={service.image}
              alt={service.title}
              width={200}
              height={140}
              className="mx-auto "
            />
          </div>
        ))}
      </div>
    </section>
  );
}
