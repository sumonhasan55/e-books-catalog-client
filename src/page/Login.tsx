import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import styles from "../style/Login.module.css";
import auth from "../firebase/firebase.auth";
import { useForm } from "react-hook-form";
import Footer from "../components/Footer";



const LoginPage = () => {
  const navigate = useNavigate();

  const [
    signInWithEmailAndPassword,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  console.log(error)

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data:any) => {
    try {
      await signInWithEmailAndPassword(data.email, data.password);
      navigate(-1); // Navigate back to the previous page
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen hero bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className={styles.form}>
          <h3 className="my-5 text-5xl font-bold">Login!</h3>
          <hr />
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">Your Email</label>
            <input {...register('email', { required: true })} type="email" className="text-black bg-white" />
            <label htmlFor="password">Your Password</label>
            <input {...register('password', { required: true })} type="password" className="text-black bg-white" />
            <button className="btn btn-accent" type="submit">
              Login
            </button>
            <br />
            <br />
            <Link to="/registration" className="my-5 mt-5 underline">
              Create a new Account!
            </Link>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
