import React from 'react';
import { Toolbar } from './components/toolbar';
import styles from '../styles/about.module.css';
<style></style>
const AboutMe = () => {
  return (
    
    <div className='page-container'>
    <div>
        <Toolbar></Toolbar>

    </div>
    <div className={styles.about}>
    <h1>About Me</h1>
      <p>Hi, I'm Raghav, and I am a Cheif Editer at Next-News.</p>
      <p>Next-News was founded in 2020 with the aim to provide our readers with accurate and reliable news coverage on a wide range
       of topics, <br></br>from politics and business to science and technology, to help them stay informed and make well-informed decisions.
         <br></br> Our mission is to deliver high-quality journalism that is independent, unbiased, and credible, and to be a 
        trusted source of information for our readers..</p>
      <h1>Our Team</h1>
      <ul>
        <li>[Team Member 1 Name] - [Team Member 1 Role]</li>
        <li>[Team Member 2 Name] - [Team Member 2 Role]</li>
        <li>[Team Member 3 Name] - [Team Member 3 Role]</li>
        <li>[Team Member 4 Name] - [Team Member 4 Role]</li>
      </ul>
      <h1>Connect with Us</h1>
      <p>Follow us on social media:</p>
      <ul>
        <li><a href="https://www.twitter.com">Twitter</a></li>
        <li><a href="https://www.facebook.com">Facebook</a></li>
        <li><a href="https://www.linkedin.com/in/raghav-dang-6b635020a/">LinkedIn</a></li>
      </ul>
    </div>
      
    </div>
  );
};

export default AboutMe;
