import React, { useState } from 'react';
import Link from '@mui/material/Link';

import './signin.css';

const Interests = () => {
  const [interests, setInterests] = useState([]);

  const handleInterestClick = (interest) => {
    if (interests.includes(interest)) {
      // Remove interest if already selected
      setInterests(interests.filter((selectedInterest) => selectedInterest !== interest));
    } else {
      // Add interest if not already selected
      setInterests([...interests, interest]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Implement validation and signup logic here
    // Check if required fields are filled and interests are selected,
    // then make an API call or handle form submission in your application
    console.log('Form submitted with interests:', interests);
  };

  return (
    <div>
      <section className="form-block" style={{ width: '63rem' }}>
        <SignupForm
          interests={interests}
          onInterestClick={handleInterestClick}
          onSubmit={handleSubmit}
        />
      </section>
    </div>
  );
};

const SignupForm = ({ interests, onInterestClick, onSubmit }) => {
  const interestButtons1 = [
    'Mountain',
    'Desert',
    'Nature',
    'Greenery',
  ].map((interest) => (
    <button style= {{color: 'black'}}
      key={interest}
      className={`button button--${interests.includes(interest) ? 'primary' : 'secondary'}`}
      onClick={() => onInterestClick(interest)}
      type="button"
    >
      <span className="button__icon">+</span>
      {interest}
    </button>
  ));

  const interestButtons2 = [
    'Architecture',
    'Seascapes',
    'Forest',
  ].map((interest) => (
    <button style= {{color: 'black'}}
      key={interest}
      className={`button button--${interests.includes(interest) ? 'primary' : 'secondary'}`}
      onClick={() => onInterestClick(interest)}
      type="button"
    >
      <span className="button__icon">+</span>
      {interest}
    </button>
  ));

  return (
    <form onSubmit={onSubmit}>
      {/* ... other form elements, including username, email, password, repeat password ... */}

      <div className="form-block__interests" style={{ width: '57rem' }}>
        <h2 style = {{color : "white", fontFamily: 'Stylish, serif'}}>Select your interests:</h2>
        <div className="interests-container" style={{
          display: "flex",
          justifyContent: 'space-evenly',
          marginBottom: '2rem'
        }}>{interestButtons1}</div>
        <div className="interests-container" style={{
          display: "flex",
          justifyContent: 'space-evenly',
          marginBottom: '2rem'
        }}>{interestButtons2}</div>
        <p>(Please select at least one interest to submit the form)</p>
      </div>

      {/* Submit button with conditional enabling based on interests */}
      <div 
        style={{
          display: "flex",
          alignItems: 'center',
          flexDirection: 'column',
          background: '#f875aa',
        }}
      >
        <Link href="/gallery" className='signupbtn' 
          sx={{
            color: 'white',
            textDecoration: 'none',
            paddingTop: '1rem',
            paddingBottom: '1rem',
          }}
        >
          Sign Up
        </Link>
      </div>
    </form>
  );
};

export default Interests;
