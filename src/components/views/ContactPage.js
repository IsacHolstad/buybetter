import React from 'react';
import ContactForm from "../ContactForm";

const ContactPage = () => {
    return (
        <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative bg-white">
                    <div className="lg:absolute lg:inset-0 lg:left-1/2">
                        <img className="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full"
                             src="https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg?w=2000"
                             alt=""/>
                    </div>
                    <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
                        <div className="px-6 lg:px-8">
                            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Let's work together</h2>
                                <ContactForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ContactPage;
