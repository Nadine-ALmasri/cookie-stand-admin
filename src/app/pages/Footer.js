function Footer() {
    return (
      <footer className="bg-green-600 text-black py-4 text-center  bottom-0 ">
        <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Cookie Stand Inc. | All rights reserved
        </p></div>
      </footer>
    );
  }
  export default Footer;