const Footer = () => {
    return (
      <footer className=" bg-gray-100 text-center text-sm text-gray-600 py-6 border-t border-gray-300 w-full relative">
       <p>Crafted with care and code by <span className="font-semibold">Dhiraj Woli</span></p>

        <p>&copy; 2025 Dhiraj Woli. All rights reserved.</p>
        <p>
          <a
            href="mailto:your.email@example.com"
            className="text-blue-500 hover:underline"
          >
           dhirajoli46@gmail.com
          </a>
        </p>
        <p className="mt-2 ">
          <a href="#" className="text-blue-400 hover:text-blue-600">
            ↑ Back to Top
          </a>
        </p>
      </footer>
    );
  };
  
  export default Footer;
  