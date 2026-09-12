const courses = [
  {
    title: "DGCA Remote Pilot Certificate",
    level: "Beginner",
    description:
      "Learn the fundamentals of drone operation, safety and practical flying.",
  },
  {
    title: "GIS and Mapping Specialist",
    level: "Intermediate",
    description:
      "Build advanced practical skills and understand professional drone applications.",
  },
  {
    title: "Agriculture Drone Specialist",
    level: "Professional",
    description:
      "Explore drone technology, applications and industry-focused concepts.",
  },
];

function Courses() {
  return (
    <section id="courses" className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">

        <div className="text-center">
          <p className="font-semibold uppercase tracking-widest text-cyan-400">
            Learn with us
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Courses & Training
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.title}
              className="rounded-2xl border border-white/10 bg-slate-900 p-8"
            >
              <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-400">
                {course.level}
              </span>

              <h3 className="mt-6 text-xl font-semibold">
                {course.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {course.description}
              </p>

              <a
                href="#contact"
                className="mt-6 inline-block font-semibold text-cyan-400 hover:text-cyan-300">
                Enquire now →
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Courses;