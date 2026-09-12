const services = [
  {
    title: "Agriculture Drones",
    description:
      "Professional drone-based solutions for different business and technical requirements.",
    icon: "🎓",
  },
  {
    title: "Aerial Surveillance – 24/7",
    description:
      "Professional drone-based solutions for different business and technical requirements.",
    icon: "🚁",
  },
  {
    title: "Solar PV Module Inspections",
    description:
      "Explore innovative drone technology applications and solutions for real-world use cases.",
    icon: "⚙️",
  },
];

function Services() {
  return (
    <section id="services" className="bg-slate-900 px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">

        <div className="mx-auto max-w-2xl text-center">
          <p className="font-semibold uppercase tracking-widest text-cyan-400">
            What we offer
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Our Services
          </h2>

          <p className="mt-4 text-slate-400">
            Solutions and learning opportunities designed around
            modern drone technology.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-white/10 bg-slate-950 p-8 transition hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <div className="text-4xl">{service.icon}</div>

              <h3 className="mt-6 text-xl font-semibold">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;