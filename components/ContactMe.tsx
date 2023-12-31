import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";


type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
  };

type Props = {};


function ContactMe({}: Props) {
    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:jason.kh.choi@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} ${formData.email}`;
    };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl mb-10">
            Contact Me
        </h3>
        <div className="flex flex-col space-y-10">
            <h4 className="text-4xl font-semibold text-center pt-10">
                Looking to hire? Want to collab?{" "}
                <span className="decoration-[#89F819]/100 underline"> Let&apos;s Talk.</span>
            </h4>

            <div>
                <div className="flex items-center space-x-5 justify-center">
                    <PhoneIcon className="text-[#89F819] h-7 w-7 animate-pulse" />
                    <p className="text-2xl"> 818-307-1535 </p>
                </div>

                <div className="flex items-center space-x-5 justify-center">
                    <EnvelopeIcon className="text-[#89F819] h-7 w-7 animate-pulse" />
                    <p className="text-2xl">jason.kh.choi@gmail.com</p>
                </div>
                
                <div className="flex items-center space-x-5 justify-center">
                    <MapPinIcon className="text-[#89F819] h-7 w-7 animate-pulse" />
                    <p className="text-2xl"> 01010 Developer Ln </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
                    <div className="flex space-x-2">

                        <input {...register("name")} placeholder="Name" className="contactInput" type="text" />
                        
                        <input {...register("email")} placeholder="Email" className="contactInput" type="email" />

                    </div>

                    <input {...register("subject")} placeholder="Subject" className="contactInput" type="text" />
                    
                    <textarea {...register("message")} placeholder="Message" className="contactInput" />
                    <button
                        type="submit"
                        className="bg-[#89F819]/80 py-5 px-10 rounded-md text-black font-bold text-lg"
                    >
                        Submit
                    </button>
                </form>


            </div>
        </div>
    </div>
  );
}

export default ContactMe;