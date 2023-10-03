import React, { useState, useEffect } from 'react';



const Header = () => {
  //   const [loggedIn, setLoggedIn] = useState<boolean>(!!auth.currentUser);
  //    useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     setLoggedIn(!!user);
  //   });
  //   return () => unsubscribe();
  // }, []);

  // const handleLogout = async () => {
  //   try {
  //     await auth.signOut();
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };

    return (
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Contact</a></li>
        <li>
          <a>Category</a>
          <ul className="p-2">
            <li><a>AllBooks</a></li>
            <li><a>TopBooks</a></li>
          </ul>
        </li>
        <li><a>About</a></li>
      </ul>
    </div>
    <a className="text-xl normal-case btn btn-ghost">E-Book-Catalog</a>
  </div>
  <div className="hidden navbar-center lg:flex">
    <ul className="px-1 menu menu-horizontal">
      <li><a>Contact</a></li>
      <li tabIndex={0}>
        <details>
          <summary>Category</summary>
          <ul className="p-2">
            <li><a href='/allbooks'>AllBooks</a></li>
            <li><a>TopBooks</a></li>
          </ul>
        </details>
      </li>
      <li><a>About</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Login</a>
  </div>
</div>
);
};

export default Header;