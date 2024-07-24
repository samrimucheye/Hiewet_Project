import React from "react";

const Contact = () => {
  return (
    <div className="div_contact">
      <h1>תרגיש בנוח ליצור איתנו קשר!</h1>
      <form action="">
        <input type="text" name="text" id="text" placeholder="תזין שם" />
        <input type="email" name="email" id="email" placeholder="אימייל" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="נא  למלא את הודעתך"
        />
        <button type="submit">שלח</button>
      </form>
    </div>
  );
};

export default Contact;
