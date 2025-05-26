const Footer = () => (
  <footer className="fixed bottom-0 w-full bg-gray-800 text-white py-2 sm:py-3 flex flex-col items-center gap-2 text-sm z-50">
    <div className="flex gap-3 sm:gap-6 text-lg sm:text-xl">
      <a href="https://instagram.com" target="_blank"><i className="fab fa-instagram"></i></a>
      <a href="https://facebook.com" target="_blank"><i className="fab fa-facebook"></i></a>
      <a href="https://youtube.com" target="_blank"><i className="fab fa-youtube"></i></a>
      <a href="https://spotify.com" target="_blank"><i className="fab fa-spotify"></i></a>
    </div>
    <p className="text-xs text-gray-400">© {new Date().getFullYear()} Los Irregulares de Baker Street</p>
  </footer>
);
export default Footer;
