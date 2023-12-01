import { FiBell, FiChevronDown, FiMenu } from 'react-icons/fi';
import ToggleSwitch from './ToggleSwitch';
import { FormEvent, Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import LogOutModal from '../LogOutModal';
import Logo from '@components/common/Logo';
import HDSelectBox from '@components/common/HDSelectBox';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { useNavigate } from 'react-router-dom';
import CustomerDetails from '@components/CustomerDetails';

type Props = {
  setSidebarOpen: (x: boolean) => void;
  openDetails: boolean;
  setOpenDetails: (x: boolean) => void;
};

const statusArr = [
  {
    name: 'Available',
    status: 'bg-green-500',
  },
  {
    name: 'Away',
    status: 'bg-red-500',
  },
  {
    name: 'At Lunch',
    status: 'bg-yellow-200',
  },
  {
    name: 'On a Trip',
    status: 'bg-gray-500',
  },
];

const AppHeader = ({ setSidebarOpen, openDetails, setOpenDetails }: Props) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [status, setStatus] = useState<Record<string, unknown> | null>(
    statusArr[0]
  );
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchTerm) return;
    navigate(`/search/${searchTerm}`);
  };
  return (
    <div className="bg-bgColor w-full flex justify-between px-4 lg:px-16 text-textColor transition-all duration-500 linear py-6 h-max shadow">
      <div className="flex items-center gap-x-2">
        <button
          type="button"
          className="-m-2.5 p-2.5 lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <FiMenu className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true" />
        <div className="hidden sm:block">
          <Logo />
        </div>
      </div>
      <div className="flex items-center gap-x-8">
        <form className="relative flex flex-1" onSubmit={handleSearch}>
          <label htmlFor="search-field" className="sr-only">
            Search
          </label>
          <MagnifyingGlassIcon
            className="pointer-events-none absolute inset-y-0 left-2 h-full w-5 "
            aria-hidden="true"
          />
          <input
            id="search-field"
            className="block h-full w-full border-0 py-2 pl-8 pr-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm bg-bgColor2 rounded ring-0 focus:outline-purpleColor"
            placeholder="Enter Loan id to search..."
            title="Enter Loan id to search"
            type="search"
            name="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
        <div
          className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"
          aria-hidden="true"
        />
        <button
          type="button"
          className="-m-2.5 p-2.5 text-grey-light dark:text-primary-light hover:text-gray-300"
        >
          <span className="sr-only">View notifications</span>
          <FiBell className="h-6 w-6" aria-hidden="true" />
        </button>
        <div
          className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"
          aria-hidden="true"
        />
        <ToggleSwitch />
        <div
          className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"
          aria-hidden="true"
        />
        <Menu as="div" className="relative flex-shrink-0">
          <Menu.Button className="-m-1.5 flex items-center p-1.5">
            <span className="sr-only">Open user menu</span>
            <img
              className="h-8 w-8 rounded-full bg-gray-50"
              src={
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              }
              alt=""
            />
            <span className="hidden lg:flex lg:items-center">
              <span
                className="ml-4 text-sm font-semibold leading-6 "
                aria-hidden="true"
              >
                Project Manager
              </span>
              <FiChevronDown
                className="ml-2 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2.5 w-56 divide-y divide-border-light origin-top-right rounded-md bg-bgColor py-2 shadow-lg ring-1 ring-border-light/50 focus:outline-none">
              <div className="px-4 py-3">
                <p className="text-sm">Signed in as</p>
                <p className="truncate text-sm font-medium">
                  projManager@lightcrm.ng
                </p>
              </div>
              <div>
                <Menu.Item>
                  <div className="px-4 py-3">
                    {' '}
                    <p className="text-sm">Set status as</p>
                    <HDSelectBox
                      options={statusArr}
                      selected={status}
                      setSelected={setStatus}
                    />
                  </div>
                </Menu.Item>
              </div>
              <div className="py-1">
                <Menu.Item>
                  <button
                    onClick={() => setOpen(true)}
                    className="block px-3 py-1 text-sm leading-6 w-full text-left hover:font-medium"
                  >
                    Sign out
                  </button>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <LogOutModal open={open} setOpen={setOpen} />
      <CustomerDetails open={openDetails} setOpen={setOpenDetails} />
    </div>
  );
};

export default AppHeader;
