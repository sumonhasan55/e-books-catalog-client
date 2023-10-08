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