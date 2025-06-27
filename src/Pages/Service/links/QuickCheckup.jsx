import React from "react";
import "./QuickCheckUp.css";
import Home from '../Home.jsx';
import {
  FaUserDoctor,
  FaNotesMedical,
  FaListCheck,
  FaTruckMedical,
} from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

const quickCheckUps = [
  {
    title: "BMI Check",
    description:
      "Body Mass Index (BMI) is a numerical value derived from a person's weight and height, indicating whether they are underweight, normal weight, overweight, or obese.",
    icon: <FaUserDoctor />,
    link: "/BmiCheck",
    cta: "Click here to check your BMI",
  },
  {
    title: "BMR Check",
    description:
      "Basal Metabolic Rate (BMR) is the number of calories the body needs to perform basic life-sustaining functions. It helps users understand their daily calorie needs based on activity levels.",
    icon: <FaUserDoctor />,
    link: "./bmr.html",
    cta: "Click here to check your BMR",
  },
  {
    title: "Heart Health",
    description:
      "We offer extensive medical procedures for both outbound and inbound patients, ensuring top-quality care by our experienced staff.",
    icon: <FaHeart />,
    link: "./heart.html",
    cta: "Click here to check your Heart Health",
  },
  {
    title: "Medical Notes",
    description:
      "Track and manage your health records with our reliable medical documentation system.",
    icon: <FaNotesMedical />,
    link: "./notes.html",
    cta: "Click here to access your Medical Notes",
  },
  {
    title: "Checklist Services",
    description:
      "Comprehensive checklists to keep your health routines organized and consistent.",
    icon: <FaListCheck />,
    link: "./checklist.html",
    cta: "Click here to manage your Health Checklist",
  },
  {
    title: "Emergency Transport",
    description:
      "Fast and secure medical transportation services for emergency situations.",
    icon: <FaTruckMedical />,
    link: "./transport.html",
    cta: "Click here to request Emergency Transport",
  },
];

const QuickCheckUps = () => {
  return (
    <div className="our-quick-checkups">
      <div className="quick-checkup-heading">
        <h2>Quick Check-ups</h2>
      </div>

      <div className="main-checkups">
        {quickCheckUps.map((checkup, index) => (
          <a
            key={index}
            href={checkup.link}
            className="inner-checkup"
            id="click"
          >
            <div className="checkup-icon">
              <i>{checkup.icon}</i>
            </div>
            <h3>{checkup.title}</h3>
            <p>{checkup.description}</p>
            <p className="checkup-cta">
              <strong>{checkup.cta}</strong>
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default QuickCheckUps;
