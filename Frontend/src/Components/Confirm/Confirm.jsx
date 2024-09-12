import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import { Link, useLocation } from "react-router-dom";

export default function Confirm() {
  const location = useLocation();
  const { email } = location.state || {};
  const [value, setValue] = useState(0);

  // Define sendEmail before using it
  const sendEmail = () => {
    emailjs.send(
      'service_4efg4y6',
      'template_cxmidqn',
      {
        user_email: email,
      },
      'ezQr7KTFX-86-UrPt'
    )
    .then((response) => {
      toast.success("Message Sent!");
      console.log("Email sent successfully!", response.status, response.text);
    })
    .catch((err) => {
      console.error("Failed to send email. Error:", err);
    });
  };

  // Use useEffect to handle side effects like sending email when the component mounts
  useEffect(() => {
    if (value === 0) {
      sendEmail();
      setValue(1);
    }
  }, [value]); // Runs when `value` changes

  return (
    <div>
      <div className="text-[goldenrod] montserrat-alternates flex flex-col justify-center items-center m-10 py-10 rounded-xl border border-[goldenrod]">
        <h1 className="font-bold">Thanks for choosing us.</h1>
        <p>A mail has been sent to your email: {email}</p>
        <Link to="/">
          <p className="m-2 font-bold p-2 border border-[goldenrod] rounded-xl">Return</p>
        </Link>
      </div>
    </div>
  );
}
