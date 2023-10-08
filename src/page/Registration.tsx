import { Link } from "react-router-dom";
import Header from "../components/Header";


const Registration = () => {
  return (
   <>
     <Header/>
   <div className="min-h-screen hero bg-gradient-to-r from-violet-500 to-fuchsia-500">
  <div className="flex-col hero-content lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-white">Register now!</h1>
      <p className="py-6">If You Get All Services from E-Book Catalog!.plz login Or Register!</p>
    </div>
    <div className="flex-shrink-0 w-full max-w-sm border-b-8 border-r-8 border-black shadow-2xl card bg-base-100 ">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="mt-6 form-control">
          <button className="btn btn-primary">Register</button>
          
        </div>
      </form>
    <Link to={"/registration"}>  <button className="mx-auto my-5 ml-10 btn btn-active btn-link " >create a new account!</button></Link>
    </div>
  </div>
</div>
   </>
  );
};

export default Registration;

