export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      {/* Introduction */}
      <section className="relative mx-auto flex min-h-[75vh] w-full max-w-6xl flex-col justify-center px-6 py-24 md:px-12 lg:px-8">
        <div className="absolute -left-32 top-32 h-72 w-72 rounded-full bg-[#FF6400]/10 blur-[120px]" />

        <div className="relative grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="max-w-4xl text-6xl font-bold leading-[0.95] tracking-tighter sm:text-6xl md:text-6xl lg:text-6xl">
              It's Me
              <span className="block text-white/30">Kumud Verma</span>
            </h1>
          </div>

          <div>
            <p className="text-lg leading-8 text-gray-300 md:text-xl">
              A Software Development Engineer and Full Stack Developer
              interested in building modern web applications and exploring
              Artificial Intelligence.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-500 md:text-xl">
              I enjoy working across the frontend and backend, learning new
              technologies, and turning ideas into practical software projects.
            </p>
          </div>
        </div>

        <div className="absolute bottom-10 right-8 hidden text-[10rem] font-bold leading-none text-white/2 md:block">
          01
        </div>
      </section>

      {/* Education */}
      <section className="relative border-t border-white/10">
        <div className="mx-auto flex min-h-[60vh] w-full max-w-6xl items-center justify-center px-6 py-24 md:px-12 lg:px-8">
          <div>

          </div>

            <div className="group relative w-full max-w-4xl cursor-pointer rounded-3xl border border-white/10 bg-white/3 p-8 transition-all duration-300 ease-out hover:-translate-y-4 hover:scale-[1.02] hover:border-[#FF6400]/60 hover:shadow-[0_20px_50px_rgba(255,100,0,0.15)] md:p-10">            <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
              
              <div>
                <h3 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
                  Bachelor of Technology
                </h3>

                <h6 className="text-lg font-thin leading-tight tracking-tight text-white md:text-2xl">
                  Information Technology
                </h6>

                <p className="mt-5 text-lg text-gray-400">
                  Noida Institute of Engineering and Technology (NIET), Greater Noida
                </p>

                <p className="mt-3 text-sm font-medium tracking-[0.15em] text-[#FFC200]">
                  2022 – 2026
                </p>
              </div>

              <div className="flex justify-center md:justify-end">
                <img
                  src="/niet_adaptive_logo.svg"
                  alt="NIET logo"
                  className="h-30 w-50 object-contain"
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="relative border-t border-white/10">
        <div className="mx-auto w-full max-w-6xl px-6 py-24 md:px-12 lg:px-8">
          <div className="mb-20 grid gap-8 md:grid-cols-[180px_1fr]">
            <div>

              <h2 className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                Experience & Activities
              </h2>
            </div>

            <div>
              <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
                Experience & Activities
              </h2>
            </div>
          </div>
          <div className="group relative ml-0 md:ml-45">
           

            <div className="absolute left-2 top-2 h-[calc(33.33%-2rem)] w-px origin-top scale-y-0 bg-[#FF6400] transition-transform duration-500 group-hover:[transform:scaleY(1)]" />

            <div className="absolute left-2 top-[calc(33.33%+2rem)] h-[calc(33.33%-2rem)] w-px origin-top scale-y-0 bg-[#FFC200] transition-transform duration-500 group-hover:[transform:scaleY(1)]" />

            <div className="space-y-16">
              {/* Experience 1 */}
              <article className="group/item relative pl-10">
                <div className="absolute -left-1 top-1 h-3 w-3 rounded-full bg-white transition-all duration-300 group-hover/item:scale-125 group-hover/item:bg-[#FF6400] group-hover/item:shadow-[0_0_15px_#FF6400]" />

                <h3 className="text-2xl font-semibold text-white md:text-3xl">
                  Social Winter of Code (SWOC)
                </h3>

                <p className="mt-5 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
                  Contributed to multiple open-source web applications by
                  implementing features, improving user interfaces, fixing bugs,
                  and working with HTML, CSS, and JavaScript.
                </p>
              </article>

              {/* Experience 2 */}
              <article className="group/item relative pl-10">
                <div className="absolute -left-1 top-1 h-3 w-3 rounded-full bg-white transition-all duration-300 group-hover/item:scale-125 group-hover/item:bg-[#FFC200] group-hover/item:shadow-[0_0_15px_#FFC200]" />

                <h3 className="text-2xl font-semibold text-white md:text-3xl">
                  Hacktoberfest
                </h3>

                <p className="mt-5 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
                  Participated in Hacktoberfest and contributed to open-source
                  projects through GitHub pull requests and collaborative
                  development.
                </p>
              </article>

              {/* Experience 3 */}
              <article className="group/item relative pl-10">
                <div className="absolute -left-1 top-1 h-3 w-3 rounded-full bg-white transition-all duration-300 group-hover/item:scale-125 group-hover/item:bg-[#FF6400] group-hover/item:shadow-[0_0_15px_#FF6400]" />

                <h3 className="text-2xl font-semibold text-white md:text-3xl">
                  Project Management Intern
                </h3>

                <p className="mt-5 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
                  Worked as a Project Management Intern at Foruppo, collaborating
                  with the team on the EntranceEdge website and contributing to
                  its development and launch.
                </p>
              </article>
            </div>
          </div>
            
          
          
        </div>
      </section>

      {/* Achievements */}
      <section className="relative border-t border-white/10">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-24 md:grid-cols-[180px_1fr] md:px-12 lg:px-8">
          <div>

            <h2 className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
              Achievements
            </h2>
          </div>

          <div className="max-w-3xl">
            <h2 className="mb-12 text-4xl font-bold tracking-tight md:text-6xl">
              Achievements
            </h2>

            <ul className="space-y-6">
              <li className="group flex items-start gap-5 border-b border-white/10 pb-6">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#FFC200] transition-shadow duration-300 group-hover:shadow-[0_0_15px_rgba(255,194,0,0.6)]" />
                <span className="text-lg text-gray-400 transition-colors duration-300 group-hover:text-white">
                  Open-source contributor through SWOC.
                </span>
              </li>

              <li className="group flex items-start gap-5 border-b border-white/10 pb-6">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#FFC200] transition-shadow duration-300 group-hover:shadow-[0_0_15px_rgba(255,194,0,0.6)]" />
                <span className="text-lg text-gray-400 transition-colors duration-300 group-hover:text-white">
                  Participated in Hacktoberfest.
                </span>
              </li>

              <li className="group flex items-start gap-5 border-b border-white/10 pb-6">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#FFC200] transition-shadow duration-300 group-hover:shadow-[0_0_15px_rgba(255,194,0,0.6)]" />
                <span className="text-lg text-gray-400 transition-colors duration-300 group-hover:text-white">
                  Contributed to multiple GitHub projects.
                </span>
              </li>

              <li className="group flex items-start gap-5 border-b border-white/10 pb-6">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#FFC200] transition-shadow duration-300 group-hover:shadow-[0_0_15px_rgba(255,194,0,0.6)]" />
                <span className="text-lg text-gray-400 transition-colors duration-300 group-hover:text-white">
                  Worked on real-world software development projects.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}