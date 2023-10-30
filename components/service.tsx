import React from "react";

interface Service {
  image: string;
  title: string;
  description: string;
  active?: boolean;
}

const serviceList: Service[] = [
  {
    image: "https://cdn.easyfrontend.com/pictures/services/service_illustration_1.svg",
    title: "Web Design",
    description:
      "It’s easier to reach yours have the right savings account. It’s easier to reach your savings goals when you have the right savings account",
  },
  {
    image: "https://cdn.easyfrontend.com/pictures/services/service_illustration_3.svg",
    title: "Product Rise",
    description:
      "Sed ut in perspiciatis unde omnis iste natus error sit on i tatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
  },
  {
    image: "https://cdn.easyfrontend.com/pictures/services/service_illustration_2.svg",
    title: "Data Management",
    description:
      "Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.",
  },
];

const ServiceItem: React.FC<{ service: Service }> = ({ service }) => (
  <div
    className={`p-6 lg:py-12 xl:px-12 rounded-[20px]  text-center hover:bg-purple-600 dark:hover:bg-purple-100 hover:text-purple-600 hover:-translate-y-1 duration-300 ${
      service?.active ? "bg-blue-50 dark:bg-slate-600" : ""
    }`}
  >
    <img
      className="mx-auto mb-6"
      src={service.image}
      width="150"
      alt={service.title}
    />
    <h4 className="font-medium text-2xl mb-4">{service.title}</h4>
    <p className="opacity-80">{service.description}</p>
  </div>
);

const Service5: React.FC = () => {
  return (
    <section className="p-4 md:p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 md:mb-12">
          <div className="col-span-12 lg:col-span-6 lg:col-start-4 text-center">
            <h2 className="text-3xl leading-none md:text-[45px] font-bold mb-6">
              Our Sectors of Work
            </h2>
            <p className="text-lg opacity-80">
              Assumenda non repellendus distinctio nihil dicta sapiente,
              quibusdam maiores, illum at, aliquid blanditiis eligendi qui.
            </p>
          </div>
        </div>
        <div className="shadow-xl rounded-[30px] text-center mt-8">
          <div className="grid grid-cols-12 gap-6">
            {serviceList.map((service, i) => (
              <div className="col-span-12 md:col-span-4" key={i}>
                <ServiceItem service={service} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service5;
