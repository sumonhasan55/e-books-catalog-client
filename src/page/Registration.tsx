
import { useForm } from 'react-hook-form';
import styles from "../style/Login.module.css";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase/firebase.auth';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';


const Registration = () => {

  const navigate =useNavigate()

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  console.log(user, loading, error)


  const {
    register,
    handleSubmit,
  } = useForm();


  const onSubmit = async (data:any) => {
    try {
      await  createUserWithEmailAndPassword(data.email, data.password);
      navigate(-1); // Navigate back to the previous page
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };



  return (
    <>
      <Header />
      <div className="min-h-screen hero bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div className={styles.form}>
          <h3 className='my-5 text-5xl font-bold'>Register!</h3>
          <hr />
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="">Your Email</label>
            <input {...register('email', { required: true })} type="email" className='text-black bg-white '/>
            <label htmlFor="">Your Password</label>
            <input {...register('password', { required: true })} type="password" className='text-black bg-white '  />
            <button className='btn btn-primary ' type="submit">Register</button><br></br><br></br>
            <Link to="/login" className="my-5 mt-5 underline">Already Have An Account?</Link>
           
          </form>
        </div>
       
      </div>
      <Footer/>
    
    </>
  );
};


export default Registration;























