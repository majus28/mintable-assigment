import React from 'react';
import Placeholder from 'assets/images/placeholder.svg';
import { useSelector, useDispatch } from 'react-redux';
import { IRaffle, setActiveId } from 'reducers/raffles/index';
import { getRaffles } from 'reducers/raffles/sagas';
import {
  getRaffles as getRafflesSelector,
  getActiveRaffle,
} from 'reducers/raffles/selector';
import Raffle from './components/Raffle';
import Select from 'components/Select';
import Ticket from 'assets/images/ticket.svg';
import { Listbox, Transition } from '@headlessui/react';

function Home() {
  const raffles: [] = useSelector(getRafflesSelector);
  const selectedRaffle: IRaffle = useSelector(getActiveRaffle);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getRaffles());
  }, [dispatch]);

  console.log(selectedRaffle, 'selectedRaffle');

  return (
    <div>
      <div className="bg-gray-100 flex flex-1 flex-col lg:flex-row p-2">
        <div className="bg-white shadow rounded-lg lg:w-1/5 w-full">
          <div className="flex justify-between items-center border-b lg:p-3 p-1 ">
            <h2 className="font-bold">Get More Tickets</h2>
            <div className="ml-2">
              <button className="px-7 py-3 font-medium bg-blue rounded text-white shadow-sm text-xs">
                Buy
              </button>
            </div>
          </div>
          <div className="p-2 lg:p-9 flex lg:flex-col flex-row items-center">
            {raffles.map((raffle: IRaffle) => (
              <Raffle {...raffle} key={raffle.id} className="mt-3" />
            ))}
          </div>
        </div>
        <div className=" flex flex-col lg:ml-4 flex-1 bg-white shadow rounded order-first md:order-last ">
          <div className="flex-1 lg:p-8 p-2 sm:p-4 flex flex-col">
            <div className="text-center lg:py-8 md:py-8">
              <h1 className="text-2xl font-bold">Collectors Event</h1>
              <p>Participate and win high quality currated NFTs</p>
            </div>

            <div className="flex-1 border-2 border-dashed mt-2 selection-none flex flex-col items-center justify-center">
              <img
                src={selectedRaffle ? selectedRaffle.image : Placeholder}
                alt="Placeholder"
              />
              <p className="mt-3 text-gray-600">
                Drag a ticket or use the button below to draw your tickets
              </p>
            </div>
          </div>

          <div className="border-t hidden lg:flex flex-col">
            <div className="flex  items-center p-6 justify-between">
              <div className="flex items-center">
                <img src={Ticket} alt="Ticket" />
                <div className="ml-3">
                  <h3 className="font-semibold">Draw Tickets</h3>
                  <div>
                    {selectedRaffle ? selectedRaffle.obtained : 0} Tickets found
                  </div>
                  <div>
                    Open your tickets and get a chance to win $1000 worth of
                    high quality NFTs! Learn More
                  </div>
                </div>
              </div>
              <div className="flex items-end flex-col">
                <div className="px-3 py-2 text-center">
                  <Select
                    options={raffles as any}
                    selected={selectedRaffle || null}
                    onChange={(value) => {
                      dispatch(setActiveId(value.id));
                    }}
                  />
                </div>
                <div className="mt-1">
                  <button className="px-7 py-3 font-medium bg-blue rounded text-white shadow-sm text-xs">
                    Draw Tickets
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
