

const Header = () => {
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Contact</a></li>
            <li tabIndex={0}>
              <details>
                <summary>Category</summary>
                <ul className="p-2">
                  <li><a>All Books</a></li>
                  <li><a>Recently Added</a></li>
                </ul>
              </details>
            </li>
            <li><a href="/">About</a></li>
            </ul>
          </div>
          <a className="text-xl normal-case btn btn-ghost">E_Books_Catalog</a>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">
            <li><a>Contact</a></li>
            <li tabIndex={0}>
              <details>
                <summary>Category</summary>
                <ul className="p-2">
                  <li><a>All Books</a></li>
                  <li><a>Recently Added</a></li>
                </ul>
              </details>
            </li>
            <li><a href="/">About</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a href="/login" className="btn">Login</a>
        </div>
      </div>
    );
};

export default Header;