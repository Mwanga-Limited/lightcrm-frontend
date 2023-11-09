import { FiBell, FiChevronDown, FiMenu } from 'react-icons/fi';
import ToggleSwitch from './ToggleSwitch';
import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { classNames } from '@utils/functions';
import LogOutModal from './LogOutModal';
import Logo from '@components/common/Logo';

type Props = {
  setSidebarOpen: (x: boolean) => void;
};

const AppHeader = ({ setSidebarOpen }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-bgColor w-full flex justify-between px-4 lg:px-16 text-textColor transition-all duration-500 linear py-6 h-max ">
      <div className="flex items-center gap-x-4">
        <button
          type="button"
          className="-m-2.5 p-2.5 lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <FiMenu className="h-6 w-6" aria-hidden="true" />
        </button>

        <div
          className="h-6 w-px bg-border-light dark:bg-border-light/50 lg:hidden"
          aria-hidden="true"
        />
        <Logo />
      </div>
      <div className="flex items-center gap-x-8">
        <ToggleSwitch />
        <button
          type="button"
          className="-m-2.5 p-2.5 text-grey-light dark:text-primary-light hover:text-gray-300"
        >
          <span className="sr-only">View notifications</span>
          <FiBell className="h-6 w-6" aria-hidden="true" />
        </button>
        <Menu as="div" className="relative">
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
            <Menu.Items className="absolute right-0 z-10 mt-2.5 w-56 divide-y divide-border-light origin-top-right rounded-md bg-primary-light dark:bg-primary-dark py-2 shadow-lg ring-1 ring-border-light/50 focus:outline-none">
              <div className="px-4 py-3">
                <p className="text-sm">Signed in as</p>
                <p className="truncate text-sm font-medium">
                  projManager@lightcrm.ng
                </p>
              </div>
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => setOpen(true)}
                      className={classNames(
                        active ? 'bg-gradient-linear text-white' : '',
                        'block px-3 py-1 text-sm leading-6 w-full text-left'
                      )}
                    >
                      Sign out
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <LogOutModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default AppHeader;
