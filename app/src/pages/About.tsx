import { Link } from 'react-router';

export default function About() {
  const values = [
    {
      title: 'Faith First',
      description: 'Every design begins with scripture. We create apparel that serves as a daily reminder of God\'s love and truth.'
    },
    {
      title: 'Quality Crafted',
      description: 'Premium fabrics and careful construction ensure our pieces look great and last long — because your faith journey is lifelong.'
    },
    {
      title: 'Bold Expression',
      description: 'We believe faith should be worn confidently. Our designs are modern, stylish, and unapologetically Christian.'
    },
    {
      title: 'Community Driven',
      description: 'Born from a desire to inspire young believers, we exist to strengthen faith and spark meaningful conversations.'
    },
  ];

  return (
    <main className="pt-24 lg:pt-28 pb-16 lg:pb-24 page-enter">
      {/* Hero */}
      <section className="section-container mb-16 lg:mb-24">
        <div className="max-w-3xl">
          <p className="text-[10px] font-semibold text-[#c4956a] uppercase tracking-[2px] mb-4">About Us</p>
          <h1 className="font-display text-4xl lg:text-6xl font-semibold mb-6 leading-[1.1]">
            Wear Your Belief
          </h1>
          <p className="text-muted-foreground text-sm lg:text-base leading-relaxed max-w-2xl">
            Queuette Clothing was founded with a simple but powerful mission: to create fashion that allows young Christians to express their faith boldly, beautifully, and authentically in everyday life.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-container mb-16 lg:mb-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="rounded-xl overflow-hidden aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
              alt="Queuette Clothing"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-2xl lg:text-3xl font-semibold mb-4">
              Our Story
            </h2>
            <div className="space-y-4 text-muted-foreground text-sm lg:text-base leading-relaxed">
              <p>
                Queuette Clothing started as a dream to bridge the gap between faith and fashion. Founded by Kay M., a young believer with a passion for design, the brand was born from the desire to wear one's faith as naturally as wearing a favorite outfit.
              </p>
              <p>
                We noticed that Christian apparel often felt outdated or disconnected from modern style. We set out to change that — creating pieces that are trendy, minimalistic, and deeply meaningful. Each design carries a message rooted in scripture, crafted to fit seamlessly into any wardrobe.
              </p>
              <p>
                Today, Queuette Clothing serves a growing community of young Christians who refuse to compartmentalize their faith. Our apparel is designed for the campus, the workplace, the church, and everywhere in between — because faith isn't just for Sundays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Banner */}
      <section className="bg-[#f5ede4] dark:bg-[#2a2420] py-16 lg:py-20 mb-16 lg:mb-24">
        <div className="section-container text-center max-w-3xl">
          <h2 className="font-display text-2xl lg:text-4xl font-semibold mb-4">Our Mission</h2>
          <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
            To provide high-quality, fashionable Christian apparel that empowers young people to express their faith boldly and beautifully. Every product carries a message that uplifts, inspires, and strengthens faith — reminding the wearer and everyone they encounter of God's enduring love.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="section-container mb-16 lg:mb-24">
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="font-display text-2xl lg:text-4xl font-semibold mb-3">What We Stand For</h2>
          <p className="text-muted-foreground text-sm lg:text-base max-w-lg mx-auto">
            These core values guide every decision we make — from design to delivery.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div key={i} className="p-6 lg:p-8 rounded-xl bg-card border border-border text-center">
              <div className="w-12 h-12 rounded-full bg-[#f5ede4] dark:bg-[#2a2420] flex items-center justify-center mx-auto mb-4 text-[#c4956a] font-display text-xl font-bold">
                {i + 1}
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-container mb-16 lg:mb-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-[10px] font-semibold text-[#c4956a] uppercase tracking-[2px] mb-4">Meet the Founder</p>
            <h2 className="font-display text-2xl lg:text-3xl font-semibold mb-4">
              Kay M.
            </h2>
            <div className="space-y-4 text-muted-foreground text-sm lg:text-base leading-relaxed">
              <p>
                "I started Queuette Clothing because I believe fashion is one of the most powerful forms of self-expression. As a young Christian, I wanted to wear something that reflected what I believed — without sacrificing style."
              </p>
              <p>
                What began as a personal project quickly grew into a movement. Today, we're building a community of young believers who aren't afraid to let their light shine — through what they wear and how they live.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 rounded-xl overflow-hidden aspect-square max-w-md mx-auto w-full bg-[#f5ede4] dark:bg-[#2a2420] flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <div className="w-24 h-24 rounded-full bg-[#c4956a]/20 flex items-center justify-center mx-auto mb-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#c4956a" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <p className="font-display text-lg font-semibold text-foreground">Kay M.</p>
              <p className="text-xs uppercase tracking-wider mt-1">Founder & Creative Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-container text-center">
        <div className="bg-[#c4956a] rounded-2xl py-12 lg:py-16 px-6">
          <h2 className="font-display text-2xl lg:text-4xl font-semibold text-white mb-3">
            Join the Movement
          </h2>
          <p className="text-white/90 text-sm lg:text-base max-w-md mx-auto mb-8">
            Be part of a community that wears their faith with pride. Explore our collection and find pieces that speak to your soul.
          </p>
          <Link to="/shop" className="btn bg-foreground text-background hover:bg-foreground/90">
            Shop the Collection
          </Link>
        </div>
      </section>
    </main>
  );
}
