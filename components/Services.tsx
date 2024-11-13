const services = [
  {
    id: "01",
    title: "Web Design",
    description:
      "Crafting visually stunning and user-friendly websites tailored to your brand's identity and goals.",
  },
  {
    id: "02",
    title: "SEO Optimization",
    description:
      "Enhancing your website's visibility and ranking on search engines through strategic keyword integration and technical optimization.",
  },
  {
    id: "03",
    title: "UX/UI Design",
    description:
      "Creating intuitive and engaging user experiences and interfaces that prioritize user satisfaction and ease of use.",
  },
  {
    id: "04",
    title: "Digital Marketing",
    description:
      "Strategizing and executing comprehensive digital marketing campaigns to boost your online presence and engagement.",
  },
  {
    id: "05",
    title: "Content Creation",
    description:
      "Crafting engaging and relevant content, including blogs, videos, and graphics, to connect with your audience and enhance your brand story.",
  },
  {
    id: "06",
    title: "Social Media Management",
    description:
      "Managing your social media channels to build brand awareness, engage your audience, and grow your online presence.",
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
