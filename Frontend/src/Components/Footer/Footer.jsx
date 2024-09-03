import { Typography } from "@material-tailwind/react";
 
export function Footer() {
  return (
    <footer className="w-full bg-white p-8 mt-20 ">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <img src="1.jpg" alt="logo-ct" className="w-16 rounded-full" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="montserrat-alternates transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="montserrat-alternates transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="montserrat-alternates transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="montserrat-alternates transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2  justify-center items-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d513.5183612648852!2d91.1819847968567!3d23.462529552351516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1725348837249!5m2!1sen!2sbd"
        width="500"
        height="200"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
      <Typography color="blue-gray" className="font-bold text-center montserrat-alternates">
        &copy; 2024 All Rights Reserved By DOT-iT 
      </Typography>
      </div>
    </footer>
  );               
}