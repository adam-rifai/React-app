// we used 'sfc'+Tab snipped to create component.!

const Nav = () => {
  return (
    <nav className="navbar">
      <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
        <img src="/logo192.png" alt="react logo" width={50} />
      </a>
      <h1>The doge blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create">New blog</a>
      </div>
    </nav>
  );
};

export default Nav;
