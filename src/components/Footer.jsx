import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500 bg-[#F6F9FC]">
      {/* Contenido principal */}
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
        {/* Logo + Descripción + Redes */}
        <div className="md:max-w-96">
          <img
            src={assets.logoVillaMadero}
            alt="logo"
            className="mb-4 h-9 opacity-80"
          />
          <p className="text-sm">
            Discover the great Villa Madero experience, where luxury meets
            comfort. Explore our exclusive offers and make your stay
            unforgettable.
          </p>
          <div className="flex items-center gap-3 mt-4">
            <a
              href="https://www.instagram.com/alojamientoelsalvador/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={assets.instagramIcon}
                alt="instagram-icon"
                className="w-6"
              />
            </a>
            <a
              href="https://www.facebook.com/alojamientoenelsalvador"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={assets.facebookIcon}
                alt="facebook-icon"
                className="w-6"
              />
            </a>
            <a
              href="https://wa.me/50361780430"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={assets.whatsapp}
                alt="whatsapp"
                className="w-6 filter grayscale brightness-65"
              />
            </a>
          </div>
        </div>

        {/* Enlaces y contacto */}
        <div className="flex-1 flex items-start md:justify-end gap-20">
          <div>
            <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
            <ul className="text-sm space-y-2">
              <li><a href="/">Home</a></li>
              <li><a href="/About">About us</a></li>
              <li><a href="/Experience">Experience</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-5 text-gray-800">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>+503 6178-0430</p>
              <p>villamadero@gmail.com</p>
              <p>San Salvador, El Salvador</p>
            </div>
          </div>
        </div>
      </div>

      {/* Derechos de autor */}
      <p className="pt-4 text-center text-xs md:text-sm pb-5">
        © {new Date().getFullYear()} Hotel Villa Madero. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
