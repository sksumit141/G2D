import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!open);

  return (
    <nav className="fixed w-full top-6 z-50">
      <div className="mx-4 rounded-3xl border border-gray-200 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between p-3">
          <div className="text-2xl font-bold text-blue-600 mt-2">
            <NavLink to="/">Dr . Pabitra Pal</NavLink>
          </div>

          <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <button className=" p-3 rounded-xl">
              {/* <NavLink
                to="/about"
                className={({ isActive }) =>
                  `hover:text-blue-600 text-lg transition ${
                    isActive ? "text-blue-600 font-bold" : "text-gray-600"
                  }`
                }
              >
                About
              </NavLink> */}
              <div className="relative inline-block">
                <div
                  onMouseEnter={toggleDropdown}
                  className="cursor-pointer select-none"
                >
                  <NavLink
                    className={`hover:text-blue-600 text-lg transition 
                      ${setOpen ? "text-blue-600 font-bold" : "text-gray-600"}`}
                  >
                    About
                  </NavLink>
                </div>

                {open && (
                  <div className="absolute left-0 mt-2 bg-white shadow-md rounded-md py-2 w-40 z-10">
                    <NavLink
                      to="/students"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setOpen(false)}
                    >
                      Students
                    </NavLink>
                    <NavLink
                      to="/teaching"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setOpen(false)}
                    >
                      Teaching
                    </NavLink>
                  </div>
                )}
              </div>
            </button>

            <button className=" p-3 rounded-xl">
              <NavLink
                to="/publication"
                className={({ isActive }) =>
                  `hover:text-blue-600 text-lg transition ${
                    isActive ? "text-blue-600 font-bold" : "text-gray-600"
                  }`
                }
              >
                Publication
              </NavLink>
            </button>
            <button className=" px-3 rounded-xl">
              <NavLink
                to="/talks"
                className={({ isActive }) =>
                  `hover:text-blue-600 text-lg transition ${
                    isActive ? "text-blue-600 font-bold" : "text-gray-600"
                  }`
                }
              >
                Talks
              </NavLink>
            </button>
            <button className=" p-3 rounded-xl">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `hover:text-blue-600 text-lg transition ${
                    isActive ? "text-blue-600 font-bold" : "text-gray-600"
                  }`
                }
              >
                Contact
              </NavLink>
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden w-40 ml-[70%] mt-2 rounded-xl flex flex-col gap-3   px-4 pb-4 space-y-1 border-2  border-gray-400  bg-gray-200  text-end pr-10 ">
          {/* <NavLink
            to="/about"
            className={({ isActive }) =>
              `block  hover:text-blue-600 mr-3 hover:text-lg hover:underline transition ${
                isActive ? "text-blue-600 font-bold" : "text-gray-600"
              }`
            }
          >
            About
          </NavLink> */}
          <div className="relative inline-block">
            <div
              onMouseEnter={toggleDropdown}
              className="cursor-pointer select-none"
            >
              <NavLink
                className={`hover:text-blue-600 text-lg transition 
                      ${setOpen ? "text-blue-600 font-bold" : "text-gray-600"}`}
              >
                About
              </NavLink>
            </div>

            {open && (
              <div className="absolute left-0 mt-2 bg-white text-start shadow-md rounded-md py-2 w-40 z-10">
                <NavLink
                  to="/students"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  Students
                </NavLink>
                <NavLink
                  to="/teaching"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  Teaching
                </NavLink>
              </div>
            )}
          </div>
          <NavLink
            to="/publication"
            className={({ isActive }) =>
              `block  hover:text-blue-600 ml-6 hover:text-lg hover:underline transition ${
                isActive ? "text-blue-600 font-bold" : "text-gray-600"
              }`
            }
          >
            Publication
          </NavLink>

          <NavLink
            to="/talks"
            className={({ isActive }) =>
              `block  hover:text-blue-600 mr-3 hover:text-lg hover:underline transition ${
                isActive ? "text-blue-600 font-bold" : "text-gray-600"
              }`
            }
          >
            Talks
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block  hover:text-blue-600 mr-1 hover:text-lg hover:underline transition ${
                isActive ? "text-blue-600 font-bold" : "text-gray-600"
              }`
            }
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
