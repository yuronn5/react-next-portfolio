const services = [
  {
    id: "01",
    title: "E-Commerce Development",
    description:
      "Building high-performance, scalable e-commerce websites using Shopify, Magento 2, and Next.js. Expertise in delivering custom themes, optimizing storefronts, and integrating advanced features for seamless user experiences.",
  },
  {
    id: "02",
    title: "Performance Optimization",
    description:
      "Enhancing website speed and SEO scores with techniques like server-side rendering (SSR), code splitting, and optimized asset delivery. Proven track record of reducing page load times by 40% and achieving industry-leading performance metrics.",
  },
  {
    id: "03",
    title: "Custom Front-End Development",
    description:
      "Designing and implementing visually stunning, user-friendly, and mobile-responsive interfaces with React, TypeScript, and JavaScript. Specializing in creating interactive features like product filters, customized checkouts, and inventory management tools.",
  },
  {
    id: "04",
    title: "API Integration & Customization",
    description:
      "Integrating and customizing Shopify and Magento APIs to streamline product management, improve automation, and enhance scalability. Building modular and reusable components to adapt to business needs.",
  },
  {
    id: "05",
    title: "Multi-Platform Solutions",
    description:
      "Delivering solutions for multi-store platforms with consistent branding and optimized customer journeys. Expertise in managing platforms with 15+ unique storefronts, ensuring seamless scalability and modularity.",
  },
  {
    id: "06",
    title: "Technical Consulting & Mentorship",
    description:
      "Providing expert consulting services to optimize development workflows and mentor junior developers, fostering growth in front-end technologies and e-commerce platforms.",
  },
];

export const Services = () => {
  return (
    <section className="text-white py-20" id="services">
      <div className="container mx-auto flex flex-col lg:flex-row">
        <div className="md:w-1/4 pr-8 mb-12 md:mb-0">
          <h2 className="text-5xl text-purple-300 font-extrabold sticky top-20">
            SERVICES
          </h2>
        </div>

        <div className="md:w-3/4">
          {services.map((service) => (
            <div key={service.id} className="mb-16 flex items-start">
                <div className="text-purple-300 font-bold text-5xl mr-6">
                    {service.id}
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p>{service.description}</p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
