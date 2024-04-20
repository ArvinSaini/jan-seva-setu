import React, { useState } from 'react';
import { ChevronDown } from 'react-feather';

const Faq = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className='flex items-center justify-center flex-col h-100vh-h-12'>
      <h1 className="text-2xl font-bold my-4">Frequently Asked Questions</h1>
      <div className="wrapper">



        <div className="faq">
          <button
            className={`accordion flex justify-between items-center w-full p-3 rounded-md bg-gray-100 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 ${activeAccordion === 0 ? 'active' : ''}`}
            onClick={() => toggleAccordion(0)}
          >
            <span className="font-semibold">What is Jan Seva Setu?</span>
            <ChevronDown className={`transition-transform transform ${activeAccordion === 0 ? 'rotate-180' : ''}`} />
          </button>
          <div className={`pannel px-3 py-2 bg-white shadow-md ${activeAccordion === 0 ? 'block' : 'hidden'}`}>
            <p>Jan Seva Setu is an online platform dedicated to providing information about NGOs (Non-Governmental Organizations) and their services to individuals seeking assistance and support.</p>
          </div>
        </div>

        <div className="faq">
          <button
            className={`accordion flex justify-between items-center w-full p-3 rounded-md bg-gray-100 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 ${activeAccordion === 1 ? 'active' : ''}`}
            onClick={() => toggleAccordion(1)}
          >
            <span className="font-semibold">How can I use Jan Seva Setu to find NGOs?</span>
            <ChevronDown className={`transition-transform transform ${activeAccordion === 1 ? 'rotate-180' : ''}`} />
          </button>
          <div className={`pannel px-3 py-2 bg-white shadow-md ${activeAccordion === 1 ? 'block' : 'hidden'}`}>
            <p>You can use Jan Seva Setu to search for NGOs based on various criteria such as location, area of expertise, type of services provided, and target beneficiaries.</p>
          </div>
        </div>



        <div className="faq">
          <button
            className={`accordion flex justify-between items-center w-full p-3 rounded-md bg-gray-100 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 ${activeAccordion === 1 ? 'active' : ''}`}
            onClick={() => toggleAccordion(2)}
          >
            <span className="font-semibold">What types of NGOs are listed on Jan Seva Setu?</span>
            <ChevronDown className={`transition-transform transform ${activeAccordion === 2 ? 'rotate-180' : ''}`} />
          </button>
          <div className={`pannel px-3 py-2 bg-white shadow-md ${activeAccordion === 2 ? 'block' : 'hidden'}`}>
            <p>Jan Seva Setu features a diverse range of NGOs, including those focused on healthcare, education, poverty alleviation, environmental conservation, women's empowerment, child welfare, and more.</p>
          </div>
        </div>



        <div className="faq">
          <button
            className={`accordion flex justify-between items-center w-full p-3 rounded-md bg-gray-100 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 ${activeAccordion === 1 ? 'active' : ''}`}
            onClick={() => toggleAccordion(3)}
          >
            <span className="font-semibold">How do I contact an NGO listed on Jan Seva Setu?</span>
            <ChevronDown className={`transition-transform transform ${activeAccordion === 3 ? 'rotate-180' : ''}`} />
          </button>
          <div className={`pannel px-3 py-2 bg-white shadow-md ${activeAccordion === 3 ? 'block' : 'hidden'}`}>
            <p>Each NGO listing on Jan Seva Setu includes contact information such as phone numbers, address, and description, allowing you to reach out to them directly for inquiries or assistance.</p>
          </div>
        </div>


        <div className="faq">
          <button
            className={`accordion flex justify-between items-center w-full p-3 rounded-md bg-gray-100 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 ${activeAccordion === 1 ? 'active' : ''}`}
            onClick={() => toggleAccordion(4)}
          >
            <span className="font-semibold">How can I support the work of NGOs listed on Jan Seva Setu?</span>
            <ChevronDown className={`transition-transform transform ${activeAccordion === 4 ? 'rotate-180' : ''}`} />
          </button>
          <div className={`pannel px-3 py-2 bg-white shadow-md ${activeAccordion === 4 ? 'block' : 'hidden'}`}>
            <p>You can support the work of NGOs by volunteering your time, making donations, spreading awareness about their causes, and collaborating with them on community initiatives. Jan Seva Setu provides information to help you connect with NGOs and contribute to their efforts.</p>
          </div>
        </div>



        <div className="faq">
          <button
            className={`accordion flex justify-between items-center w-full p-3 rounded-md bg-gray-100 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 ${activeAccordion === 1 ? 'active' : ''}`}
            onClick={() => toggleAccordion(5)}
          >
            <span className="font-semibold">How can I make a donation to support the work of NGOs listed on Jan Seva Setu?</span>
            <ChevronDown className={`transition-transform transform ${activeAccordion === 5 ? 'rotate-180' : ''}`} />
          </button>
          <div className={`pannel px-3 py-2 bg-white shadow-md ${activeAccordion === 5 ? 'block' : 'hidden'}`}>
            <p>To donate to NGOs listed on Jan Seva Setu, simply visit the website of the NGO you wish to support. Look for their "Donate" or "Support Us" section, where you'll find options for making online donations using various payment methods. </p>
          </div>
        </div>



      </div>
    </div>
  );
};

export default Faq;