function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/95 text-white backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <a href="#home" className="text-2xl font-bold tracking-wide">
          Drone<span className="text-cyan-400">TV</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#home" className="text-sm hover:text-cyan-400">
            Home
          </a>
          <a href="#services" className="text-sm hover:text-cyan-400">
            Services
          </a>
          <a href="#courses" className="text-sm hover:text-cyan-400">
            Courses
          </a>
          <a href="#contact" className="text-sm hover:text-cyan-400">
            Contact
          </a>
          <a
            href="/admin"
            className="rounded-lg border border-cyan-400 px-4 py-2 text-sm text-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
          >
            Admin
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;