import Input from "@/components/Input";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import { Button, IconButton } from "@mui/material";
import React from "react";

const Contact = () => {
    const form = useRef<HTMLFormElement | null>(null);

    const [open, setOpen] = React.useState(false);
    const [snackbarMessage, setSnackbarMessage] = React.useState<string>("");

    const handleClick = (message: string) => {
        setSnackbarMessage(message);
        setOpen(true);
    };

    const handleClose = (
        _event: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm('service_d3q3l5h', 'template_uzp9bcd', form.current, 'zIJtpQ7rPTbPm6kZQ')
                .then(
                    () => {
                        // On success, show success message
                        handleClick('Message sent successfully!');
                    },
                    (error) => {
                        // On error, show failure message
                        handleClick(`Failed to send message: ${error.text}`);
                    }
                );
        }
    };

    return (
        <div id='contact' className='bg-white text-black flex flex-col items-center py-[5rem] justify-center'>
            <div className='flex items-start justify-center md:gap-4 gap-2 md:pb-[7rem] pb-[3rem]'>
                <div className='flex items-start flex-col justify-center md:gap-2 gap-0'>
                    <h1 className='md:text-7xl text-5xl font-extralight'>Contact</h1>
                    <div className='flex items-center justify-center'>
                        {/* SVG Elements */}
                    </div>
                </div>
                <h1 className='md:text-7xl text-5xl font-extralight'>Us</h1>
            </div>

            <section className='w-[90rem] flex lg:flex-row flex-col items-center lg:items-start h-full justify-center gap-12'>
                <div className="lg:flex hidden flex-col items-start justify-center gap-6">
                    <h1 className="text-xl">Find us on google maps 👇</h1>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204.341947210508!2d82.45560663672565!3d28.034425863564007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399793982f9cee33%3A0xe2d5e5aa154a2e34!2sapple%20montessori%20school!5e1!3m2!1sen!2snp!4v1727347832372!5m2!1sen!2snp" className="w-[30vw] h-[20vw] rounded-xl bg-black" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div className="md:w-[40rem] w-[22.5rem] h-auto flex flex-col items-start justify-start p-6 md:gap-[5rem] gap-[2.5rem] border border-gray-200 rounded-xl">
                    <form ref={form} onSubmit={sendEmail} className="w-full flex flex-col md:gap-6 gap-2">
                        <div className="flex md:flex-row flex-col w-full gap-6">
                            <div className="md:w-1/2 w-full">
                                <Input name="firstName" inputText="First Name" type="text" />
                            </div>
                            <div className="md:w-1/2 w-full">
                                <Input name="lastName" inputText="Last Name" type="text" />
                            </div>
                        </div>
                        <Input name="email" inputText="Your email" type="email" />
                        <div className="flex items-start flex-col justify-center gap-4">
                            <label htmlFor="message" className="text-xl">Your message</label>
                            <textarea className="md:h-64 h-52 focus:outline-blue-600 border border-gray-400 p-3 w-full rounded-lg bg-[#f9fafb]" name="message" style={{ resize: 'none' }}></textarea>
                        </div>

                        <button className="flex items-center justify-center gap-4 cursor-pointer transition-all hover:bg-blue-700 bg-blue-600 h-[55px] rounded-xl text-white" type="submit">Send message
                            <i className="fa-solid fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            </section>

            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message={snackbarMessage}
                action={
                    <React.Fragment>
                        <Button color="primary" size="small" onClick={handleClose}>
                            Close
                        </Button>
                        <IconButton
                            size="small"
                            aria-label="close"
                            color="inherit"
                            onClick={handleClose}
                        >
                        </IconButton>
                    </React.Fragment>
                }
            />
        </div>
    );
}

export default Contact;
