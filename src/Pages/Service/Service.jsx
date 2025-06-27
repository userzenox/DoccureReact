import React from "react";
import "./Service.css";
import Home from '../Home.jsx';
import {
  FaUserDoctor,
  FaNotesMedical,
  FaListCheck,
  FaTruckMedical,
} from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

const services = [
  {
    title: "BMI Check",
    description:
      "Body Mass Index (BMI) is a numerical value derived from a person's weight and height, indicating whether they are underweight, normal weight, overweight, or obese.",
    icon: <FaUserDoctor />,
    link: "/BmiCheck",
     },
  {
    title: "BMR Check",
    description:
      "Basal Metabolic Rate (BMR) is the number of calories the body needs to perform basic life-sustaining functions. It helps users understand their daily calorie needs based on activity levels.",
    icon: <FaUserDoctor />,
    link: "#",
    
  },
  {
    title: "Heart Health",
    description:
      "We offer extensive medical procedures for both outbound and inbound patients, ensuring top-quality care by our experienced staff.",
    icon: <FaHeart />,
    link: "#",
   
  },
  {
    title: "Medical Notes",
    description:
      "Track and manage your health records with our reliable medical documentation system.",
    icon: <FaNotesMedical />,
    link: "#",
  
  },
  {
    title: "Checklist Services",
    description:
      "Comprehensive checklists to keep your health routines organized and consistent.",
    icon: <FaListCheck />,
    link: "#",
 
  },
  {
    title: "Emergency Transport",
    description:
      "Fast and secure medical transportation services for emergency situations.",
    icon: <FaTruckMedical />,
    link: "#",
    
  },
];

const Services = () => {
  return (
    <div className="our-service">
      <div className="service-heading">
        <h2>Our Services</h2>
      </div>

      <div className="main-services">
        {services.map((service, index) => (
          <a
            key={index}
            href={service.link}
            className="inner-services"
            id="click"
          >
            <div className="service-icon">
              <i>{service.icon}</i>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          
          </a>
        ))}
      </div>
    </div>
  );
};

export default Services;
