import { LocationMarkerIcon, PhoneIcon } from "@heroicons/react/solid";
import { MailIcon } from "@heroicons/react/outline";

const Footer = () => (
  <footer className="grid grid-cols-auto-fit p-12 border-gray-100">
    <div className="flex-grow border-r-2">
      <h1 className="text-5xl font-bold mb-4">Your commerce</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nulla
        voluptatum soluta quia totam aspernatur, repudiandae, deserunt excepturi
        pariatur ipsam eius? Velit, quam. Nostrum et explicabo vero, repellat
        laborum pariatur.
      </p>
    </div>
    <div className="flex-grow border-r-2 p-4 pl-10 border-gray-100">
      <h1 className="text-5xl font-bold">Useful Links</h1>
      <ul className="flex flex-wrap mt-8 text-2xl gap-y-3">
        <li className="flex-basis">Home</li>
        <li className="flex-basis">Man Fashion</li>
        <li className="flex-basis">Accessories</li>
        <li className="flex-basis">Order Tracking</li>
        <li className="flex-basis">Wishlist</li>
        <li className="flex-basis">Cart</li>
        <li className="flex-basis">Woman Fashion</li>
        <li className="flex-basis">My account</li>
        <li className="flex-basis">Wishlist</li>
        <li className="flex-basis">Terms</li>
      </ul>
    </div>
    <address className="flex-grow p-4 flex flex-col gap-6">
      <h2 className="text-5xl font-medium">Contact</h2>
      <div className="flex gap-4">
        <LocationMarkerIcon className="h-10 w-10" />
        Visit us at: 622 Dixie Path, South Tobincester 98336
      </div>
      <div className="flex gap-4">
        <PhoneIcon className="h-10 w-10" />
        <a href="tel:+1-555-555-1212">555-555-1212</a>
      </div>
      <div className="flex gap-4">
        <MailIcon className="h-10 w-10" />
        <a href="mailto:you@somedomain.com">you@somedomain.com</a>
      </div>
    </address>
  </footer>
);

export default Footer;
