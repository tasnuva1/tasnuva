import React from "react";
import "./ContactPage.scss";
import Headings from "../../Components/Headings/Headings";

const ContactPage = () => {
  return (
    <div className="contact-whole-container">
      <div className="contact-container">
        <Headings heading1="CONTACT —" heading2="Look Who’s Here " />
        <div className="contact-info">
          <Headings
            heading1="EMAIL📧"
            heading2="adeolaonigegeara@gmail.com"
            heading3FontSize="2.7rem"
          />
          <div className="contact-phone">
            <Headings
              heading1="PHONE🇳🇬"
              heading2="+(234) 906 638 3763"
              heading3FontSize="2.5rem"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
