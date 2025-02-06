export default function MissionStatement() {
    return (
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-light text-[rgb(var(--color-text-light))] mb-8 md:mb-12">
            Main Focus/Mission Statement
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <div className="relative">
              <span className="absolute -left-4 md:-left-16 top-0 text-6xl md:text-8xl font-light text-[rgb(var(--color-secondary))] z-0">
                1
              </span>
              <p className="relative z-10 text-[rgb(var(--color-primary))] pl-8 md:pl-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.
              </p>
            </div>
            <div className="relative">
              <span className="absolute -left-4 md:-left-16 top-0 text-6xl md:text-8xl font-light text-[rgb(var(--color-secondary))] z-0">
                2
              </span>
              <p className="relative z-10 text-[rgb(var(--color-primary))] pl-8 md:pl-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat,
                magna mauris porttitor tortor, a auctor est felis ut nisl.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  