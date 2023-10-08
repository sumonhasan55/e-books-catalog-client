import { Link } from "react-router-dom";
import Header from "../components/Header";


const ContactUs = () => {
    return (
        <div>
            <Header />
            <div className="min-h-screen hero bg-gradient-to-r from-cyan-500 to-blue-500">
                <div className="flex-col hero-content lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-white">Contact Us!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                     <div className="">
                    H M Sumon Hasan 
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-circle btn-ghost btn-xs text-info">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </label>
                            <div tabIndex={0} className="card compact dropdown-content z-[1] shadow bg-base-100 rounded-box w-64">
                                <div className="card-body">
                                    <h2 className="card-title">You needed more info?</h2>
                                    <Link to="https://sumon-hasan-portfolio-nextjs.vercel.app/" className="btn bnt-link">https://sumon-hasan-portfolio-nextjs.vercel.app/</Link>
                                </div>
                            </div>
                        </div>
                     </div>

                    </div>





                    <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Subject</span>
                                </label>
                                <input type="text" placeholder="subject" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <input type="text" placeholder="message" className="input input-bordered" required />

                            </div>
                            <div className="mt-6 form-control">
                                <button className="btn btn-accent">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContactUs;