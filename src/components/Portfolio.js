import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <>
            <div className="my-4 py-4" id='portfolio'>
                <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Meet our Team</h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-blue-900 mb-8'></div>
                </div>

                <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">                            
                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Scooter G.</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                Scooter G is a seasoned cybersecurity professional with over 5 years of industry experience, 
                                having worked for renowned companies in the field. With a passion for protecting digital assets 
                                and a relentless pursuit of excellence, Scooter brings a wealth of knowledge and expertise to our team. 
                                With a sharp analytical mindset and a commitment to staying ahead of emerging threats, Scooter is dedicated to providing top-notch cybersecurity services.
                    
                                </p>
                                <div className="flex justify-center my-4">
        
                                </div>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Hank J.</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                Alex R is a highly skilled encryption analysis specialist with government cybersecurity experience. With a keen eye for detail and deep expertise in cryptographic protocols, Alex excels in uncovering vulnerabilities and devising robust security strategies. Their commitment to data privacy and staying ahead of encryption technologies strengthens our clients' digital defenses                                </p>
                                <div className="flex justify-center my-4">

                                </div>
                                

                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Pedro M.</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                Pedro is a highly certified web penetration testing expert, holding industry-renowned certifications 
                                including OSCP, OSWE, GWAPT, and GPEN. With a proven track record of excellence, Pedro brings a wealth of knowledge and expertise in 
                                identifying and mitigating web application vulnerabilities. His comprehensive skill set and meticulous approach enable him to deliver top-notch security assessments, 
                                empowering our clients with actionable insights to fortify their web applications. 
                                </p>
                                {/* <div className="flex justify-center my-4">
                                    <Link to="/get-demo" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        Schedule Demo
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div> */}
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Tony H.</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                Meet Tony H, an exceptional professional in the field of digital forensics and incident response, 
                                holding numerous industry certifications that speak to his expertise. With a proven track record in handling complex 
                                investigations and orchestrating effective response strategies, 
                                Tony brings a wealth of knowledge and skill to our team.                                </p>
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;