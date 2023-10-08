import { useForm } from 'react-hook-form';
import styles from "../style/Login.module.css";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase/firebase.auth';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {

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

  const onSubmit = (data: any) => {
    createUserWithEmailAndPassword(data.email, data.password)
    navigate( "/")
    
   

  }



  return (
    <>
      <Header />
      <div className="min-h-screen hero bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div className={styles.form}>
          <h3 className='my-5 text-5xl font-bold'>Login!</h3>
          <hr />
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="">Your Email</label>
            <input {...register('email', { required: true })} type="email" className='text-black bg-white '/>
            <label htmlFor="">Your Password</label>
            <input {...register('password', { required: true })} type="password" className='text-black bg-white '  />
            <button className='btn btn-primary ' type="submit">Login</button><br></br>
           
          </form>
        </div>
       
      </div>
      <Footer/>
    
    </>
  );
};


export default LoginPage;







