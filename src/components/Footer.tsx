import Logo from 'assets/images/logo.svg';
import { name } from 'config/env';
import type { ReactNode } from 'react';

function Footer() {
  return (
    <footer className="bg-primary text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="lg:px-8  py-12 px-4 sm:px-6 lg:py-16 mx-auto">
        <div className="xl:gap-8 xl:grid xl:grid-cols-3 ">
          <div className="xl:col-span-2 grid grid-cols-2 gap-8 ">
            <div className=" md:gap-8 md:grid md:grid-cols-2">
              <div>
                <h3 className="font-bold tracking-wider">My account</h3>
                <div className="lg:flex">
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a href="#" className="text-base">
                        Create a store
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base">
                        List an Item for sale
                      </a>
                    </li>
                  </ul>
                  <ul className="mt-4 space-y-4 lg:ml-6">
                    <li>
                      <a href="#" className="text-base">
                        My Profile
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base">
                        Browse
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="font-bold tracking-wider">Need Help?</h3>
                <div className="lg:flex">
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a href="#" className="text-base">
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base">
                        Mintable guide
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="font-bold tracking-wider">Buy an Item</h3>
                <div className="lg:flex">
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a href="#" className="text-base">
                        Digital Items
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base">
                        Stores
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="font-bold tracking-wider">Legal</h3>
                <div className="lg:flex">
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a href="#" className="text-base">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base">
                        Terms of use
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 mt-12 md:mt-0  order-last xl:col-span-1  lg:order-first">
            <div className="flex items-center">
              <img className="h-10" src={Logo} alt={name} />
              <h2 className="ml-3 text-xl">Mintable</h2>
            </div>
            <a className="flex text-base font-bold" href="/">
              Join our community
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
