import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold mb-4">404 - Not Found</h2>
      <p className="text-lg text-gray-600 mb-8">
        Sorry, the requested resource could not be found.
        {/* {console.log(process.env.NODE_ENV)} */}
      </p>
      <Link href="/">
        <a className="flex items-center text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out">
          <FaHome className="mr-2" />
          Return Home
        </a>
      </Link>
    </div>
  );
}
