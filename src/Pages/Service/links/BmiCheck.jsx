import React, { useState } from 'react';
import './BmiCheck.css';

const PatientForm = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmiData, setBmiData] = useState(null);

  const calculateBMI = (e) => {
    e.preventDefault();

    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    let bmiCategory = '';
    let imageUrl = '';
    let precautions = '';

    if (bmi < 18.5) {
      bmiCategory = 'Underweight';
      imageUrl = 'src/pages/service/images2/thin.png';
      precautions = 'Consider a balanced diet with more calories.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      bmiCategory = 'Normal weight';
      imageUrl = 'src/pages/service/images2/normal.png';
      precautions = 'Maintain your current lifestyle.';
    } else if (bmi >= 25 && bmi < 29.9) {
      bmiCategory = 'Overweight';
      imageUrl = 'src/pages/service/images2/fatman.png';
      precautions = 'Consider regular exercise and a healthy diet.';
    } else {
      bmiCategory = 'Obesity';
      imageUrl = 'src/pages/service/images2/obesity.png';
      precautions = 'Consult a healthcare provider for advice.';
    }

    setBmiData({ height, weight, bmi, bmiCategory, imageUrl, precautions });
    setHeight('');
    setWeight('');
  };

  return (
    <main className="main">
      <h1 className="bmi-heading">BMI Check</h1>

      <div className={`form-details-wrapper ${bmiData ? 'with-result' : ''}`}>
        <form onSubmit={calculateBMI} className="form">
          <div>
            <label htmlFor="height">Height (cm):</label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="weight">Weight (kg):</label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
          </div>
          <div>
            <button type="submit" className="btn-submit">
              Submit
            </button>
          </div>
        </form>

        {bmiData && (
          <div className="details">
            <div className="patient-review">
              <div>
                <h3>Patient Details:</h3>
                <p><strong>Height:</strong> {bmiData.height} cm</p>
                <p><strong>Weight:</strong> {bmiData.weight} kg</p>
                <p><strong>BMI:</strong> {bmiData.bmi} ({bmiData.bmiCategory})</p>
                <p><strong>Precautions:</strong> {bmiData.precautions}</p>
              </div>
              <img src={bmiData.imageUrl} alt={bmiData.bmiCategory} />
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default PatientForm;
