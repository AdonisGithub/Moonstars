import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { Spin as Hamburger } from "hamburger-react";
import { Link } from "react-scroll";

export default function HumburgerMenu() {
  return (
    <div className="text-right  flex items-center">
      <Menu as="div" className="relative inline-block text-left">
        {({ open }) => (
          <>
            <div>
              <Menu.Button className=" flex items-center">
                <Hamburger
                  size={30}
                  duration={0.8}
                  color="white"
                  toggled={open}
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="fixed right-0 w-full mt-[11px] origin-top-right shadow-lg ring-1 ring-black ring-opacity-5">
                <div>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        delay={100}
                      >
                        <button
                          className={`${
                            active
                              ? "bg-[rgb(23,32,54)] bg-opacity-60 text-[#00F4F9]"
                              : "bg-[rgb(23,32,54)] bg-opacity-60 text-white "
                          } flex items-center w-full px-2 py-2 text-sm`}
                        >
                          HOME
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        activeClass="active"
                        to="whatisthemoonstas"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        delay={100}
                      >
                        <button
                          className={`${
                            active
                              ? "bg-[rgb(23,32,54)] bg-opacity-60 text-[#00F4F9]"
                              : "bg-[rgb(23,32,54)] bg-opacity-60 text-white "
                          } flex items-center w-full px-2 py-2 text-sm`}
                        >
                          WHAT IS THE MOONSTAS
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        activeClass="active"
                        to="roadmap"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        delay={100}
                      >
                        <button
                          className={`${
                            active
                              ? "bg-[rgb(23,32,54)] bg-opacity-60 text-[#00F4F9]"
                              : "bg-[rgb(23,32,54)] bg-opacity-60 text-white "
                          } flex items-center w-full px-2 py-2 text-sm`}
                        >
                          ROADMAP
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        activeClass="active"
                        to="theteam"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        delay={100}
                      >
                        <button
                          className={`${
                            active
                              ? "bg-[rgb(23,32,54)] bg-opacity-60 text-[#00F4F9]"
                              : "bg-[rgb(23,32,54)] bg-opacity-60 text-white "
                          } flex items-center w-full px-2 py-2 text-sm`}
                        >
                          THE TEAM
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        activeClass="active"
                        to="utility"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        delay={100}
                      >
                        <button
                          className={`${
                            active
                              ? "bg-[rgb(23,32,54)] bg-opacity-60 text-[#00F4F9]"
                              : "bg-[rgb(23,32,54)] bg-opacity-60 text-white "
                          } flex items-center w-full px-2 py-2 text-sm`}
                        >
                          UTILITY
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        activeClass="active"
                        to="lore"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        delay={100}
                      >
                        <button
                          className={`${
                            active
                              ? "bg-[rgb(23,32,54)] bg-opacity-60 text-[#00F4F9]"
                              : "bg-[rgb(23,32,54)] bg-opacity-60 text-white "
                          } flex items-center w-full px-2 py-2 text-sm`}
                        >
                          LORE
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a href="https://discord.gg/eYRHGvze" target="_blank" rel="noreferrer">
                        <button
                          className={`${
                            active
                              ? "bg-[rgb(23,32,54)] bg-opacity-60 text-[#00F4F9]"
                              : "bg-[rgb(23,32,54)] bg-opacity-60 text-white "
                          } flex items-center w-full px-2 py-2 text-sm`}
                        >
                          DISCORD
                        </button>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a href="https://www.instagram.com/TheMoonstas" target="_blank" rel="noreferrer">
                        <button
                          className={`${
                            active
                              ? "bg-[rgb(23,32,54)] bg-opacity-60 text-[#00F4F9]"
                              : "bg-[rgb(23,32,54)] bg-opacity-60 text-white "
                          } flex items-center w-full px-2 py-2 text-sm`}
                        >
                          INSTAGRAM
                        </button>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a href="https://twitter.com/TheMoonstas" target="_blank" rel="noreferrer">
                        <button
                          className={`${
                            active
                              ? "bg-[rgb(23,32,54)] bg-opacity-60 text-[#00F4F9]"
                              : "bg-[rgb(23,32,54)] bg-opacity-60 text-white "
                          } flex items-center w-full px-2 py-2 text-sm`}
                        >
                          TWITTER
                        </button>
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
}
