import { useState } from "react";
import { useNavigate } from "react-router-dom"
import PageContainer from "../components/PageContainer";

export default function Contacts() {
    const navigate = useNavigate();

    // info entered for contact form 
    const [formData, setFormData ] = useState({
        firstName: "",
        lastName: "",
        contactNumber: "",
        email: "",
        message: "",
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    function handleSubmit(event) { 
        event.preventDefault();
        console.log("Contact Form Information:", formData);
        navigate("/");
    }

    return (
        <PageContainer>

            <section className="contact-section">

              <h1> Contact me </h1>

              <div className="contact-container"> 

                <div className="contact-information">

                    <h2> Get in Touch </h2>

                    <p>
                        If you would like to contact me, you can use the information below or send me a message using the contact form. 
                    </p>

                    <div className="contact-detail">
                        <strong>Email</strong>
                        <p>your-email@example.com</p>
                    </div>

                    <div class="contact-detail">
                        <strong>Phone</strong>
                        <p>000-000-0000</p>
                    </div>

                    <div class="contact-detail">
                        <strong>Location</strong>
                        <p> Toronto, Ontario, Canada </p>
                    </div>
                
                </div>

                <form onSubmit={handleSubmit}>

                    <label htmlFor="firstName"> 
                        First Name
                    </label>

                    <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />

                    <label htmlFor="lastName">
                        Last Name
                    </label>

                    <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />

                    <label htmlFor="contactNumber"> 
                        Contact Number 
                    </label>

                    <input type="tel" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />

                    <label htmlFor="email">
                        Email
                    </label>

                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required /> 

                    <label htmlFor="message">
                        Message
                    </label>

                    <textarea id="message" name="message" rows="6" value={formData.message} onChange={handleChange} required> </textarea>

                    <button type="submit">
                        Send Message
                    </button>

                </form>

            </div> 

                    


            </section>

        </PageContainer>
        
    );

}