import { Disclosure, Menu } from '@headlessui/react';
import { SearchIcon } from '@heroicons/react/solid';
import { XIcon, MenuIcon, ChevronDownIcon } from '@heroicons/react/outline';
import classNames from 'classnames';
import Logo from 'assets/images/logo.svg';

const menus = [
  { name: 'Browse', route: '/browse', current: false },
  { name: 'Discover ', route: '/discover', current: false },
  { name: 'Mint an item', route: '/mint', current: false },
  { name: 'Vote/DAO', route: '/vote', current: false },
  { name: 'My Account', route: '/account', current: false },
  { name: 'Ethereum', route: '/ethereum', current: false },
];
function Header() {
  return (
    <Disclosure as="nav" className="bg-white shadow-sm z-10">
      {({ open }) => (
        <>
          <div className="mx-auto px-16 sm:px-4 lg:px-16">
            <div className="flex justify-between h-16">
              <div className="flex px-2 lg:px-0">
                <div className="flex-shrink-0 flex items-center">
                  <div className="bg-brand p-1 rounded">
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src={Logo}
                      alt="Logo"
                    />
                    <img
                      className="hidden lg:block h-8 w-auto"
                      src={Logo}
                      alt="Logo"
                    />
                  </div>
                </div>
                <div className="ml-6 flex items-center justify-center">
                  <div className="max-w-lg w-full lg:max-w-xs">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative flex">
                      <input
                        id="search"
                        name="search"
                        className="block w-full py-2 border border-gray-300 rounded-l leading-5 bg-white placeholder-gray-500
                         focus:outline-none focus:placeholder-gray-400
                          sm:text-sm overflow-hidden"
                        placeholder="Search for anything"
                        type="search"
                      />

                      <div className="z-10 bg-indigo-100 inset-y-0 right-0 pr-3 flex items-center pointer-events-none rounded-r">
                        <Menu>
                          <Menu.Button className="p-2 flex items-center justify-center">
                            <span className="hidden lg:flex">Type</span>
                            <ChevronDownIcon
                              className="h-5 w-5 text-gray-400 ml-2"
                              aria-hidden="true"
                            />
                          </Menu.Button>
                          <Menu.Items>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  className={`${active && 'bg-blue-500'}`}
                                  href="/account-settings"
                                >
                                  Account settings
                                </a>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Menu>

                        <SearchIcon
                          className="h-5 w-5 text-gray-400 hidden lg:flex"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center lg:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
              <div className="hidden flex-1 lg:flex px-2 lg:ml-6 lg:justify-end lg:space-x-8">
                {menus.map((item) => (
                  <a
                    key={item.name}
                    href={item.route}
                    className={classNames(
                      'border-transparent  inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium',
                      [item.current ? 'text-indigo-600' : 'text-gray-500']
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {menus.map((item) => (
                <a
                  key={item.name}
                  href={item.route}
                  className={classNames(
                    'border-transparent block pl-3 pr-4 py-2 border-l-4 text-base font-medium',
                    [
                      item.current
                        ? 'text-indigo-600'
                        : 'text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800',
                    ]
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Header;
