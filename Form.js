import React from 'react'
import { useState } from 'react'

export default function Form() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
      });
    
      const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
    

      // validation for variables
      const validateForm = () => {
        let valid = true;
        const newErrors = {
          name: '',
          email: '',
          password: '',
        };
    
        if (formData.name.trim() === '') {
          newErrors.name = 'Name is required';
          valid = false;
        }
    
        if (formData.email.trim() === '') {
          newErrors.email = 'Email is required';
          valid = false;
        } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.email)) {
          newErrors.email = 'Invalid email format';
          valid = false;
        }
    
        if (formData.password.trim() === '') {
          newErrors.password = 'Password is required';
          valid = false;
        }
    
        setErrors(newErrors);
        return valid;
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
          
        // calling api:-  
       const response = await fetch ('http://localhost:4000/',{
        method:'POST',
        body:JSON.stringify(formData),
        headers:{
          'Content-Type' :'application/json'            //additional information        
        }

      })

      const data =await response.json();
      console.log(data);


        if (validateForm()) {
          // Perform necessary actions here, such as sending the data to an API
          // For demonstration purposes, we'll just display a success message and clear the form fields
          alert('Registration successful');
          setFormData({
            name: '',
            email: '',
            password: '',
          });
          setErrors({
            name: '',
            email: '',
            password: '',
          });
        }
      };


  return (
    <div  className='cont' >
       <h2 >User Registration Form</h2>
      <form  className='container' onSubmit={handleSubmit}>
        <br></br>
        <div >
          <label >Name:</label>
          <input type="text"id="name" name="name" value={formData.name} onChange={handleInputChange} />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <br></br>
        <div>
          <label >Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange}  />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
      <br></br>
        <div>
          <label >Password:</label>
          <input type="password"  id="password" name="password" value={formData.password} onChange={handleInputChange} />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <br></br>
        <button  type="submit">Register</button>
      </form>
    </div>
  )
}
