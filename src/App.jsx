const iconPaths = {
  github:
    "M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49v-1.72c-2.78.62-3.37-1.2-3.37-1.2-.45-1.2-1.1-1.52-1.1-1.52-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 7.13c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.64c0 .27.18.59.69.49A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z",
  send:
    "M21.63 2.37a1.2 1.2 0 0 0-1.25-.27L2.82 8.85a1.2 1.2 0 0 0 .1 2.28l7.15 2.32 2.32 7.15a1.2 1.2 0 0 0 2.28.1l6.75-17.56a1.2 1.2 0 0 0-.27-1.25ZM11.1 12.9 5.02 10.92 18.04 5.9 13.02 18.93l-1.98-6.08 5.07-5.07-5.02 5.12Z",
  twitter:
    "M18.9 2.8h3.05l-6.66 7.61 7.83 10.35h-6.13l-4.8-6.28-5.5 6.28H3.64l7.13-8.15L3.25 2.8h6.29l4.34 5.74 5.02-5.74Zm-1.07 16.14h1.69L8.62 4.52H6.8l11.03 14.42Z",
  arrow: "M7 17 17 7M9 7h8v8",
  cpu: "M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3M7 5h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm3 5h4v4h-4z",
  network: "M12 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM5 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM19 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM10 8l-4 7M14 8l4 7M8 18h8",
  shield:
    "M12 3 5 6v5.5c0 4.32 2.86 8.06 7 9.5 4.14-1.44 7-5.18 7-9.5V6l-7-3Z",
  terminal:
    "m4 17 6-6-6-6M12 19h8",
};

const products = [
  {
    name: "Jambda",
    label: "JAM Protocol Client",
    desc: "A low-level client implementation for JAM, focused on correctness, conformance, and protocol execution.",
    icon: "cpu",
    href: "https://github.com/ArcheLabs",
  },
  {
    name: "Vibly",
    label: "Agent Social Coordination Platform",
    desc: "A coordination layer for autonomous agents: discussion, work, review, reputation, staking, and incentives.",
    icon: "network",
    href: "https://github.com/ArcheLabs",
  },
];

const links = [
  { name: "GitHub", href: "https://github.com/ArcheLabs", icon: "github" },
  { name: "X", href: "https://vibly.network/", icon: "twitter" },
  // { name: "Telegram", href: "https://t.me/ArcheLabs", icon: "send" },
];

const heroTitleLines = ["Singing Life Through", "Computation"];
const titleMotion = [
  [-7, -2],
  [4, 1],
  [-3, 0],
  [8, -3],
  [-5, 2],
  [3, -1],
  [-8, 1],
  [6, -2],
  [-2, 2],
  [5, 0],
  [-6, -1],
  [2, 2],
];

function Icon({ name, className = "" }) {
  const filled = name === "github" || name === "twitter";

  return (
    <svg
      className={`icon ${className}`}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={iconPaths[name]} />
    </svg>
  );
}

function RhythmicTitle() {
  let letterIndex = 0;

  return (
    <h1
      id="hero-title"
      className="rhythmic-title"
      aria-label={heroTitleLines.join(" ")}
    >
      {heroTitleLines.map((line) => (
        <span className="title-line" key={line}>
          {line.split(" ").map((word, wordIndex) => (
            <span className="title-word" key={`${line}-${word}`}>
              {Array.from(word).map((char, charIndex) => {
                const currentIndex = letterIndex;
                letterIndex += 1;
                const [rotate, y] =
                  titleMotion[currentIndex % titleMotion.length];

                return (
                  <span
                    key={`${word}-${char}-${charIndex}`}
                    className="title-letter"
                    aria-hidden="true"
                    style={{
                      "--tilt": `${rotate}deg`,
                      "--sway": `${rotate * -0.38}deg`,
                      "--rise": `${y}px`,
                      "--delay": `${currentIndex * 42}ms`,
                    }}
                  >
                    {char}
                  </span>
                );
              })}
              {wordIndex < line.split(" ").length - 1 ? (
                <span className="title-gap" aria-hidden="true" />
              ) : null}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}

function ExternalLink({ href, children, className = "" }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

function ProductCard({ product }) {
  return (
    <ExternalLink href={product.href} className="product-card">
      <span className="card-topline" />
      <span className="card-head">
        <span className="product-icon">
          <Icon name={product.icon} />
        </span>
        <Icon name="arrow" className="arrow-icon" />
      </span>
      <span className="eyebrow">{product.label}</span>
      <span className="product-name">{product.name}</span>
      <span className="product-copy">{product.desc}</span>
    </ExternalLink>
  );
}

export default function App() {
  return (
    <main className="site-shell">
      <div className="ambient-grid" aria-hidden="true" />

      <header className="site-header">
        <a href="#" className="brand-link" aria-label="ArcheLabs home">
          <img
            className="brand-mark"
            src="/assets/archelabs-mark-clean.svg"
            alt=""
            aria-hidden="true"
          />
          <img
            className="brand-wordmark"
            src="/assets/archelabs-wordmark-modern.svg"
            alt="ArcheLabs"
          />
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#products">Products</a>
          <ExternalLink href="https://github.com/ArcheLabs">GitHub</ExternalLink>
        </nav>
      </header>

      <section className="hero-section" aria-labelledby="hero-title">
        <img
          className="hero-bg-mark"
          src="/assets/archelabs-mark-clean.svg"
          alt=""
          aria-hidden="true"
        />
        <div className="hero-content">
          <RhythmicTitle />
          <p className="hero-copy">
            ArcheLabs builds low-level protocol clients and agent coordination
            infrastructure for open, verifiable, long-horizon collaboration.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#products">
              Explore Products
              <Icon name="arrow" />
            </a>
            <ExternalLink
              className="button button-secondary"
              href="https://github.com/ArcheLabs"
            >
              <Icon name="github" />
              GitHub
            </ExternalLink>
          </div>
        </div>
      </section>

      <section id="products" className="content-section products-section">
        <p className="section-kicker products-kicker">Products</p>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </section>

      <section className="contact-band" aria-label="ArcheLabs links">
        <div className="contact-links">
          {links.map((link) => (
            <ExternalLink key={link.name} href={link.href} className="social-link">
              <Icon name={link.icon} />
              {link.name}
            </ExternalLink>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <span>© ArcheLabs</span>
        <span>Protocol clients and coordination systems.</span>
      </footer>
    </main>
  );
}
