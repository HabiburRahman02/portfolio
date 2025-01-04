import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Fade } from "react-awesome-reveal";
import { toast } from 'react-toastify';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_56itn08', 'template_ov83yb6', form.current, {
                publicKey: 'vTI5ds9ggoPe7F9dp',
            })
            .then(() => {
                console.log('SUCCESS!');
                toast.success('Send message to admin')
                e.target.reset();
            },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <div>
            <form ref={form} onSubmit={sendEmail} className="card-body dark:text-gray-500 rounded-xl border-2 border-gray-200 shadow-lg hover:shadow-xl duration-500 transition-all">
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="text-xl font-medium text-indigo-500 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
                            Your Name
                        </span>
                    </label>
                    <Fade direction="up" duration={1000}>
                        <input
                            name="user_name"
                            type="text"
                            placeholder="Enter your name"
                            className="w-full border border-gray-300 p-4 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                            required
                        />
                    </Fade>
                </div>

                <div className="form-control mb-4">
                    <label className="label">
                        <span className="text-xl font-medium text-indigo-500 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
                            Your Email
                        </span>
                    </label>
                    <Fade direction="up" duration={1000}>
                        <input
                            name="user_email"
                            type="email"
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 p-4 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                            required
                        />
                    </Fade>
                </div>

                <div className="form-control mb-6">
                    <label className="label">
                        <span className="text-xl font-medium text-indigo-500 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
                            Your Message
                        </span>
                    </label>
                    <Fade direction="up" duration={1000}>
                        <textarea
                            name="message"
                            rows={4}
                            placeholder="Enter your message"
                            className="w-full border border-gray-300 p-4 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                            required
                        ></textarea>
                    </Fade>
                </div>

                <div className="form-control">
                    <Fade direction="up" duration={1000}>
                        <button
                            className="w-full duration-500 p-4 text-white rounded-md bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-pink-500 hover:to-indigo-500 transition-all"
                        >
                            Send Message
                        </button>
                    </Fade>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;