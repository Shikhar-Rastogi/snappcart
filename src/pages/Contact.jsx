import { useLocation } from "react-router-dom";
import "../styles/contact.css"; 
const Contact = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const section = query.get("section");

  return (
    <div className="contact-page">
      <h2>Contact Page</h2>
      {section === "about-us" && (
        <p>This is the About Us section.</p>
      )}
      {section === "faqs" && (
        <p>This is the FAQs section.</p>
      )}

      {/* Main Contact Information */}
      <div className="contact-info-block">
        <h3>Contact Information</h3>
        <ul className="contact-details">
          <li>
            <strong>Address:</strong> abc, Noida, India
          </li>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:contact@1.com">contact@1.com</a>
          </li>
          <li>
            <strong>Phone:</strong>{" "}
            <a href="tel:0000000000">0000000000</a>
          </li>
          <li>
            <strong>Business Hours:</strong> Mon–Sat, 9:00 AM – 6:00 PM IST
          </li>
        </ul>
      </div>

      <div className="contact-extra-links">
        <h3>Need More Help?</h3>
        <ul>
          <li>
            <a href="/privacy-policy">Privacy Policy</a>
          </li>
          <li>
            <a href="/shipping">Shipping Policy</a>
          </li>
          <li>
            <a href="/returns">Returns & Refunds</a>
          </li>
          <li>
            <a href="/help">Help Center</a>
          </li>
        </ul>
      </div>

      <div className="contact-faq">
        <h3>Frequently Asked Questions</h3>
        <details>
          <summary>How can I track my order?</summary>
          <div>You can track your order in your account dashboard or via the tracking link sent to your email after shipping.</div>
        </details>
        <details>
          <summary>How do I return an item?</summary>
          <div>Returns are accepted within 30 days. Please view our <a href="/returns">Returns & Refunds</a> policy.</div>
        </details>
        <details>
          <summary>What is your typical response time?</summary>
          <div>We usually reply within 24 hours on business days.</div>
        </details>
      </div>
    </div>
  );
};

export default Contact;
