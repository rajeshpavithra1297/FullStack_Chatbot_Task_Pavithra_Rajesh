function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center bg-slate-950 px-6 pt-20 text-white"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

        <div>
          <p className="mb-4 font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Drone Technology & Training
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Explore the future of
            <span className="block text-cyan-400">
              Drone Technology
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
           To bring every sector of the drone industry together on one unified platform — Drone TV
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#courses"
              className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
            >
              Explore Courses
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-white/30 px-6 py-3 font-semibold hover:bg-white/10"
            >
              Start an Enquiry
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex h-80 w-80 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/5 shadow-2xl shadow-cyan-500/10 md:h-96 md:w-96">
            <div className="text-center">
              <div className="text-5xl">DRONE TV</div>
              <p className="mt-5 text-sm font-semibold">
                VOICE OF DRONE TECHNOLOGY
              </p>
              <p className="mt-2 text-sm text-slate-400">
                Your drone journey starts here.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;