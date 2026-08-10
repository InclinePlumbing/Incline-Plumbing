import Image from "next/image";

const services = [
  ["Plumbing Repairs", "Leaks, fixtures, toilets, faucets and everyday plumbing repairs handled with care."],
  ["Drain Cleaning", "Professional drain clearing for slow, clogged or backed-up drains."],
  ["Water Heaters", "Repair and replacement support for dependable hot water in your home."],
  ["Sewer & Drain", "Residential drain and sewer solutions designed to get your home flowing again."],
  ["Fixture Installation", "Clean, professional installation of sinks, faucets, toilets and household fixtures."],
  ["Home Plumbing", "Reliable residential plumbing service for homeowners throughout the Colorado Springs area."],
];

const areas = ["Colorado Springs", "Old Colorado City", "Manitou Springs", "Monument", "Fountain", "Security-Widefield"];

function Icon({ type }) {
  if (type === "shield") return <span className="icon">✓</span>;
  if (type === "mountain") return <span className="icon">▲</span>;
  return <span className="icon">◆</span>;
}

export default function Home() {
  return (
    <main>
      <div className="topbar">Colorado Native • Locally Owned • Residential Plumbing & Drain</div>
      <header className="header shell">
        <a className="brand" href="#top" aria-label="Incline Plumbing and Drain home">
          <Image src="/incline-logo.png" alt="Incline Plumbing & Drain" width={170} height={170} priority />
        </a>
        <nav className="nav" aria-label="Main navigation">
          <a href="#services">Services</a><a href="#about">About</a><a href="#areas">Service Area</a><a href="#contact">Contact</a>
        </nav>
        <a className="button button-small" href="tel:+17195025709">Call (719) 502-5709</a>
      </header>

      <section className="hero" id="top">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">PROUDLY SERVING COLORADO SPRINGS</div>
            <h1>Local plumbing service with <span>peak-performance</span> standards.</h1>
            <p>Honest, dependable residential plumbing and drain solutions from a Colorado-native team committed to taking care of our community.</p>
            <div className="hero-actions"><a className="button" href="tel:+17199223350">Call Now</a><a className="button button-outline" href="#contact">Request Service</a></div>
            <div className="trust-row">
              <div><Icon type="shield" /><span><b>Honest</b><small>straightforward service</small></span></div>
              <div><Icon type="wrench" /><span><b>Dependable</b><small>professional workmanship</small></span></div>
              <div><Icon type="mountain" /><span><b>Local</b><small>Colorado roots</small></span></div>
            </div>
          </div>
          <div className="hero-card"><Image src="/incline-logo.png" alt="Incline Plumbing & Drain logo" width={520} height={520} priority /><p>Keeping Your Home at Peak Performance</p></div>
        </div>
      </section>

      <section className="quick-strip"><div className="shell strip-grid"><div><strong>Residential</strong><span>Plumbing Specialists</span></div><div><strong>Local</strong><span>Colorado Springs Roots</span></div><div><strong>Quality</strong><span>Service You Can Trust</span></div></div></section>

      <section className="section shell" id="services">
        <div className="section-heading"><div className="eyebrow red">OUR SERVICES</div><h2>Plumbing solutions built around your home.</h2><p>From the small fixes to the jobs that cannot wait, Incline Plumbing & Drain is here to help keep your home running smoothly.</p></div>
        <div className="service-grid">{services.map(([title, copy], i) => <article className="service-card" key={title}><div className="service-number">0{i + 1}</div><h3>{title}</h3><p>{copy}</p><a href="#contact">Request service →</a></article>)}</div>
      </section>

      <section className="about" id="about"><div className="shell about-grid"><div className="mountain-panel"><div className="sun"/><div className="peaks">▲ ▲ ▲</div><div className="state-mark">COLORADO<br/><span>PROUD</span></div></div><div className="about-copy"><div className="eyebrow">ROOTED HERE. READY TO HELP.</div><h2>Owned and operated by Colorado natives.</h2><p>Incline Plumbing & Drain was built around a simple idea: provide homeowners with honest communication, dependable workmanship and the kind of service we would want for our own homes.</p><p>We are proud to serve Colorado Springs and surrounding communities with local care and professional plumbing solutions.</p><div className="checklist"><span>✓ Honest recommendations</span><span>✓ Dependable scheduling</span><span>✓ Residential plumbing focus</span><span>✓ Community-first service</span></div></div></div></section>

      <section className="section shell" id="areas"><div className="section-heading compact"><div className="eyebrow red">SERVICE AREA</div><h2>Proudly serving Colorado Springs and nearby communities.</h2></div><div className="areas">{areas.map((area) => <span key={area}>{area}</span>)}</div><p className="fineprint">Don’t see your neighborhood listed? Give us a call to confirm availability.</p></section>

      <section className="cta"><div className="shell cta-grid"><div><div className="eyebrow">NEED A PLUMBER?</div><h2>We show up. We solve it. You get back to what matters.</h2></div><div className="cta-actions"><a className="button light" href="tel:+17199223350">Call (719) 922-3350</a><a className="text-link" href="#contact">Request service online →</a></div></div></section>

      <section className="section shell contact" id="contact"><div className="contact-copy"><div className="eyebrow red">CONTACT US</div><h2>Tell us how we can help.</h2><p>Use this form to request service. Call or send us a message to request service.</p><div className="contact-lines"><a href="tel:+17199223350">(719) 922-3350</a><a href="mailto:inclineplumbinganddrain@gmail.com">inclineplumbinganddrain@gmail.com</a><span>Colorado Springs, Colorado</span></div></div><form className="form" action="mailto:inclineplumbinganddrain@gmail.com" method="post" encType="text/plain"><label>Name<input name="name" required placeholder="Your name" /></label><label>Phone<input name="phone" required placeholder="(719) 555-0000" /></label><label>Email<input name="email" type="email" placeholder="you@email.com" /></label><label>How can we help?<textarea name="message" required rows={5} placeholder="Tell us what is going on..." /></label><button className="button" type="submit">Request Service</button></form></section>

      <footer className="footer"><div className="shell footer-grid"><div className="footer-brand"><Image src="/incline-logo.png" alt="Incline Plumbing & Drain" width={145} height={145} /><p>Keeping Your Home at Peak Performance</p></div><div><b>Services</b><a href="#services">Plumbing Repairs</a><a href="#services">Drain Cleaning</a><a href="#services">Water Heaters</a></div><div><b>Company</b><a href="#about">About</a><a href="#areas">Service Area</a><a href="#contact">Contact</a></div><div><b>Get Service</b><a href="tel:+17195025709">(719) 502-5709</a><a href="mailto:inclineplumbinganddrain@gmail.com">Email Us</a></div></div><div className="shell footer-bottom">© 2026 Incline Plumbing & Drain. All rights reserved.</div></footer>
      <a className="mobile-call" href="tel:+17195025709">Call Incline Plumbing</a>
    </main>
  );
}
