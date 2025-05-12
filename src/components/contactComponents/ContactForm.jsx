import { Form } from "react-router-dom";
import classes from "./ContactForm.module.css";

export default function ContactForm() {
  return (
    <div className={classes.formContainer}>
      <div className={classes.formHeader}>
        <h1>Let's get in touch!</h1>
        <p>Project ideas, work feedback or a simple hi :)</p>
      </div>

      <Form className={classes.form}>
        <section className={classes.personalInfo}>
          <div className={classes.inputGroup}>
            <label htmlFor="fullName">Your Name</label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              required
              placeholder="Name"
              className={classes.textInput}
            />
          </div>

          <div className={classes.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Email"
              className={classes.textInput}
            />
          </div>

          <div className={classes.inputGroup}>
            <label htmlFor="phone">
              Phone Number <span className={classes.optional}>(Optional)</span>
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="000-000-0000"
              className={classes.textInput}
            />
          </div>

          <div className={classes.inputGroup}>
            <label htmlFor="instagram">
              Instagram Handle{" "}
              <span className={classes.optional}>(Optional)</span>
            </label>
            <input
              type="text"
              name="instagram"
              id="instagram"
              placeholder="@instagram_handle"
              className={classes.textInput}
            />
          </div>
        </section>

        <section className={classes.interestSection}>
          <p className={classes.sectionTitle}>Your interest in contacting</p>
          <div className={classes.checkboxGroup}>
            <label htmlFor="collab" className={classes.checkboxLabel}>
              <input type="checkbox" name="collab" value="collab" id="collab" />
              <span className={classes.customCheckbox}></span>
              <span>Collab on a project</span>
            </label>

            <label htmlFor="work" className={classes.checkboxLabel}>
              <input type="checkbox" name="work" value="work" id="work" />
              <span className={classes.customCheckbox}></span>
              <span>Work Inquiry</span>
            </label>

            <label htmlFor="other" className={classes.checkboxLabel}>
              <input type="checkbox" name="other" value="other" id="other" />
              <span className={classes.customCheckbox}></span>
              <span>Other</span>
            </label>
          </div>
        </section>

        <section className={classes.messageSection}>
          <div className={classes.inputGroup}>
            <label htmlFor="more-info">Tell me more!</label>
            <textarea
              name="more-info"
              id="more-info"
              required
              rows={5}
              placeholder="Please provide as much detailed info as possible"
              className={classes.textarea}
            />
          </div>
        </section>

        <button type="submit" className={classes.submitButton}>
          <span>Submit</span>
        </button>
      </Form>
    </div>
  );
}
