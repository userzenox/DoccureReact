import React from "react";
import "./Service.css";
import { FaUserDoctor, FaNotesMedical, FaListCheck, FaTruckMedical } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

const services = [
  {
    title: "BMI Check",
    description:
      "Body Mass Index (BMI) is a numerical value derived from a person's weight and height, indicating whether they are underweight, normal weight, overweight, or obese.",
    icon: <FaUserDoctor />,
    link: "./bmi.html",
  },
  {
    title: "BMR Check",
    description:
      "Basal Metabolic Rate (BMR) is the number of calories the body needs to perform basic life-sustaining functions. It helps users understand their daily calorie needs based on activity levels.",
    icon: <FaUserDoctor />,
    link: "./bmr.html",
  },
  {
    title: "Heart Health",
    description:
      "We offer extensive medical procedures for both outbound and inbound patients, ensuring top-quality care by our experienced staff.",
    icon: <FaHeart />,
  },
  {
    title: "Medical Notes",
    description:
      "Track and manage your health records with our reliable medical documentation system.",
    icon: <FaNotesMedical />,
  },
  {
    title: "Checklist Services",
    description:
      "Comprehensive checklists to keep your health routines organized and consistent.",
    icon: <FaListCheck />,
  },
  {
    title: "Emergency Transport",
    description:
      "Fast and secure medical transportation services for emergency situations.",
    icon: <FaTruckMedical />,
  },
];

const Services = () => {
  return (
    <div className="our-service">
      <div className="service-heading">
        <h2>Our Services</h2>
      </div>

      <div className="main-services">
        {services.map((service, index) => {
          const ServiceWrapper = service.link ? "a" : "div";
          const wrapperProps = service.link ? { href: service.link, className: "inner-services", id: "click" } : { className: "inner-services" };

          return (
            <ServiceWrapper key={index} {...wrapperProps}>
              <div className="service-icon">
                <i>{service.icon}</i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </ServiceWrapper>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
