import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Logo from "../../assets/Logo.png";
import HomeBg from "../../assets/bg-hero.jpg";
import { languages, navLinks, type SectionId } from "../../types/type";
import { CustomLink } from "./CustomLink";

 const NavBar = () => {
  const [activeSection, setActiveSection] = useState<SectionId | null>(null);

  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const [isBurgerMenu, setIsBurderMenu] = useState<boolean>(
    window.innerWidth < 768,
  );
  const handleClick = (section: SectionId) => setActiveSection(section);

  useEffect(() => {
    const handleResize = () => {
      setIsBurderMenu(window.innerWidth < 768);
      if (window.innerWidth > 768) {
        setIsMenuToggled(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="m-5 xl:p-0">
      <div className="relative">
         <div className="absolute -z-10 right-0 -top-30">
          <img src={HomeBg} alt="" />
        </div>
        <div className="flex justify-between h-[37px] gap-3">
          <img className="max-h-full" src={Logo} alt="Logo" />
          {isBurgerMenu ? (
            <div>
              <button onClick={() => setIsMenuToggled((prev) => !prev)}>
                {" "}
                <Bars3Icon className="h-6 w-6"></Bars3Icon>
              </button>
            </div>
          ) : (
            <div className="gap-5 lg:gap-20 flex text-[17px] items-center">
              {navLinks.map((n) => (
                <CustomLink
                  key={n.id}
                  section={n.id}
                  activeSection={activeSection}
                  handleClick={handleClick}
                >
                  {n.label}
                </CustomLink>
              ))}
              <div className="gap-3 flex justify-between">
                <button
                  className="px-4 cursor-pointer py-1 border-2 border-transparent hover:rounded-md hover:border-nav-btn 
               transition-all duration-300 ease-in-out"
                >
                  Login
                </button>
                <button className="px-4 cursor-pointer py-1 border-2 rounded-md border-nav-btn">
                  Sign up
                </button>
              </div>
              <div className="content-center">
                <select name="" id="">
                  {languages.map((l) => (
                    <option value={l.value}>{l.id}</option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>
        <AnimatePresence>
          {isMenuToggled && (
            <motion.div
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1 }}
              className="fixed top-0 right-0 z-40 flex flex-col gap-10 w-[300px] h-screen bg-white p-2.5 rounded-tl-3xl rounded-bl-3xl shadow-[0_15px_30px_rgba(0,0,0,0.3)]"
            >
            <div className="flex gap-1.5 justify-between items-center">
              <div className="w-[113px] h-[33px]"> <img className="w-full h-full" src={Logo} alt="Logo" /></div>
                <button onClick={() => setIsMenuToggled(false)} className=" self-end cursor-pointer">
                  {" "}
                  <XMarkIcon className="h-7 w-7 text-gray-600"></XMarkIcon>
                </button>
            </div>
              <div className="flex flex-col gap-5 font-medium uppercase text-[20px] ">
                {navLinks.map((n) => (
                  <CustomLink
                    key={n.id}
                    sectio n={n.id}
                    activeSection={activeSection}
                    handleClick={handleClick}
                  >
                    {n.label}
                  </CustomLink>
                ))}
              </div>
              <div className="flex gap-2 mt-auto mb-2.5 justify-between">
                 <div className="gap-3 flex justify-between">
                <button
                  className="px-4 cursor-pointer py-1 border-2 rounded-md border-nav-btn
               transition-all duration-300 ease-in-out"
                >
                  Login
                </button>
                <button className="px-4 cursor-pointer py-1 border-2 rounded-md border-nav-btn">
                  Sign up
                </button>
              </div>
                 <div className="content-center">
                <select name="" id="">
                  {languages.map((l) => (
                    <option value={l.value}>{l.id}</option>
                  ))}
                </select>
              </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};


export default NavBar

