import React from 'react';
import emailjs from 'emailjs-com';
import MapContact from './mapContact';

export default function contact() {

    // managed by EmailJS - react
    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_23f7jbg', 'template_atypikhouse', e.target, 'user_BAcVyykn1VMCWhWqL16o1')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        
        // resets the fields 
        e.target.reset();
        alert(
            <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
  <div class="flex">
    <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
    <div>
      <p class="font-bold">Our privacy policy has changed</p>
      <p class="text-sm">Make sure you know how these changes affect you.</p>
    </div>
  </div>
</div>
        );
    };


    return (
        <div>
            {/* Header*/}

            {/* Main*/}
            <main className="flex flex-wrap ">
                <section className='pl-10'>
                    <nav class="flex flex-wrap -mx-10 mb-10 " aria-label="Breadcrumb">
                        <ol class="inline-flex items-center space-x-1 md:space-x-3">
                            <li class="inline-flex items-center">
                                <a href="#" class="text-gray-700 hover:text-gray-900 inline-flex items-center">
                                    <svg class="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                                    Acceuil
                                </a>
                            </li>
                            <li aria-current="page">
                                <div class="flex items-center">
                                    <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                    <span class="text-pink-800 ml-1 md:ml-2 text-sm font-medium">Contact</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                    <h1 className="text-3xl font-semibold mt-1 mb-4">Nous Contacter</h1>
                    <form onSubmit={sendEmail} className="w-full max-w-lg pl-20">
                        <div className="flex flex-wrap ">
                            <div className="w-full pl-10">
                                <input className="appearance-none block w-full bg-white-200 
                                text-black-200 border border-white-200 rounded-full py-2 px-4 mb-3 
                                leading-tight focus:outline-none  focus:border-green-100 " id="name" type="text" placeholder="Nom" name="name" />
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-full pl-10">
                                <input className="appearance-none block w-full bg-white-200 
                                text-black-200 border border-white-200 rounded-full py-2 px-4 mb-3 
                                leading-tight focus:outline-none  focus:border-green-100" id="email" type="email" placeholder="Mail" name="mail" />
                            </div>

                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-full pl-10">
                                <input className="appearance-none block w-full bg-white-200 
                                text-black-200 border border-white-200 rounded-full py-2 px-4 mb-3 
                                leading-tight focus:outline-none  focus:border-green-100" id="object" type="text" placeholder="Objet" name="subject" />
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-full pl-10">
                                <textarea
                                    className=" no-resize appearance-none block w-full bg-white-200 border border-white-200 rounded
                                        py-3 px-4 mb-4 pl-5 items-center leading-tight focus:outline-none focus:bg-white-200 focus:border-green-100 h-48 resize-none"
                                    id="message"
                                    placeholder="Votre message svp!"
                                    name="message"></textarea>
                            </div>
                        </div>
                        <div className="md:flex md:items-center relative bottom-0 left-10 right-0 pl-20">
                            <div className="md:w-1/3">
                                <button className="bg-green-800  text-gray-200 py-2 px-5 rounded-full shadow-md text-lg hover:bg-gray-800 over:border-red">
                                    Envoyer
                                </button>
                            </div>
                            <div className="flex flex-wrap md:w-2/3"></div>
                        </div>
                    </form>

                </section>

                {/* carter + information*/}
                <section className='pl-10'>
                    <div className="relative w-full max-w-lg pl-10 top-20  pt-10">
                        <div className="flex flex-wrap col-span-2">
                            <div className="w-full px-3">
                            <a href='https://www.google.fr/maps/dir//13+Bd+de+Beaubourg,+77183+Croissy-Beaubourg/@48.8163088,2.6224499,15z/data=!4m17!1m7!3m6!1s0x47e60f87370e1411:0x86203560adcdc90c!2s13+Bd+de+Beaubourg,+77183+Croissy-Beaubourg!3b1!8m2!3d48.816295!4d2.6311832!4m8!1m0!1m5!1m1!1s0x47e60f87370e1411:0x86203560adcdc90c!2m2!1d2.6311832!2d48.816295!3e3'>
                                <img className="object-right-bottom w-150 h-150 border-0 border-opacity-5" src="./images/paris-map.jpg"></img>
                            </a>
                            </div>
                            <div className="flex w-full px-3">
                                <div className="flex w-full hover:text-green-800 hover:rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
                                        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                    </svg>
                                    <a href='https://www.google.fr/maps/dir//13+Bd+de+Beaubourg,+77183+Croissy-Beaubourg/@48.8163088,2.6224499,15z/data=!4m17!1m7!3m6!1s0x47e60f87370e1411:0x86203560adcdc90c!2s13+Bd+de+Beaubourg,+77183+Croissy-Beaubourg!3b1!8m2!3d48.816295!4d2.6311832!4m8!1m0!1m5!1m1!1s0x47e60f87370e1411:0x86203560adcdc90c!2m2!1d2.6311832!2d48.816295!3e3'>
                                        13 Boulevard de beaubourg Croissy 
                                    </a>
                                </div>
                                <div className="flex w-full px-3 hover:text-green-800 hover:rounded-full'">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                    <a href='https://mail.google.com/'>
                                        atypikhpise.zahi@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            {/* Footer*/}

        </div >
    )
}
