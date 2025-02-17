const Header = () => {
  return (
    <>
      <header>
        <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
          <img src="/logo192.png" alt="react logo" />
        </a>
        <nav>
          <ul className="nav-list">
            <li>
              <a
                href="http://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="http://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="http://www.x.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Why should I be excited about learning React?</h1>
        <ol>
          <li>High Demand & Career Opportunities</li>
          <li>Component-Based Architecture</li>
          <li>Fast & Efficient Performance</li>
          <li>Huge Ecosystem & Community Support</li>
          <li>Great for Modern Web & Mobile Apps</li>
        </ol>
      </main>
    </>
  );
};

export default Header;
