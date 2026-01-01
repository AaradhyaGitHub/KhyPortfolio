import { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    instagram: "",
    interests: [],
    message: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === "checkbox") {
      setFormData(prev => ({
        ...prev,
        interests: checked 
          ? [...prev.interests, value]
          : prev.interests.filter(i => i !== value)
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <span className={styles.label}>Get in Touch</span>
          <h1 className={styles.title}>Let's Connect</h1>
          <p className={styles.subtitle}>
            Project ideas, work feedback, or a simple hi :)
          </p>
        </header>

        {/* Form */}
        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Personal Info */}
          <div className={styles.formGrid}>
            <div className={styles.inputGroup}>
              <label htmlFor="fullName" className={styles.inputLabel}>
                Your Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Name"
                className={styles.input}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.inputLabel}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email"
                className={styles.input}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="phone" className={styles.inputLabel}>
                Phone <span className={styles.optional}>(Optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="000-000-0000"
                className={styles.input}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="instagram" className={styles.inputLabel}>
                Instagram <span className={styles.optional}>(Optional)</span>
              </label>
              <input
                type="text"
                id="instagram"
                name="instagram"
                value={formData.instagram}
                onChange={handleChange}
                placeholder="@username"
                className={styles.input}
              />
            </div>
          </div>

          {/* Interest Section */}
          <div className={styles.interestSection}>
            <p className={styles.interestLabel}>Your interest in contacting</p>
            <div className={styles.checkboxGroup}>
              {[
                { id: "collab", label: "Collaborate on a project" },
                { id: "work", label: "Work inquiry" },
                { id: "other", label: "Other" }
              ].map((option) => (
                <label key={option.id} className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    name="interests"
                    value={option.id}
                    checked={formData.interests.includes(option.id)}
                    onChange={handleChange}
                    className={styles.checkboxInput}
                  />
                  <span className={styles.checkboxCustom} />
                  <span className={styles.checkboxText}>{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Message */}
          <div className={styles.inputGroup}>
            <label htmlFor="message" className={styles.inputLabel}>
              Tell me more!
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Please provide as much detail as possible"
              className={styles.textarea}
            />
          </div>

          {/* Submit */}
          <button type="submit" className={styles.submitBtn}>
            Send Message
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}