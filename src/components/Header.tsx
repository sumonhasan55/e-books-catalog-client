
import { Link } from 'react-router-dom';
import auth from '../firebase/firebase.auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';



const Header = () => {

  const [user, loading, error] = useAuthState(auth);
  console.log(user, loading, error)

  const logout = () => {
    signOut(auth);
  };



  return (

    <div className="font-bold text-white bg-neutral-900 navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  bg-black text-white hover:text-lg  rounded-box w-52">
            <li><Link to='/contactus'>Contactus</Link></li>
            <li><a>About</a></li>
            <li><Link to='/allbooks'>AllBooks</Link></li>
            <li><Link to='/newbooks'>NewBooks</Link></li>
          </ul>
        </div>
        <Link to='/' className="text-xl normal-case btn btn-ghost">E-Book-Catalog</Link>
      </div>
      <div className="hidden navbar-center lg:flex ">
        <ul className="px-1 menu menu-horizontal">
          <li><Link to='/contactus'>Contactus</Link></li>
          <li><a>About</a></li>
          <li><Link to='/allbooks'>AllBooks</Link></li>
          {
            user?.email ?
              <li><Link to='/newbooks'>NewBooks</Link></li> :
              <li><Link to='/login'>NewBooks</Link></li>
          }
        </ul>
      </div>
      <div className="navbar-end">
        {
          user?.email ?
            <button onClick={logout}>Log out</button> :
            <Link to="/login" className="btn">Login</Link>

        }
      </div>
    </div>
  );
};

export default Header;