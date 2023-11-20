import { Transition, Dialog } from '@headlessui/react';
import { Fragment } from 'react';
import {
  FiCalendar,
  FiFile,
  FiFolder,
  FiHome,
  FiPieChart,
  FiUsers,
  FiX,
} from 'react-icons/fi';
import { LiaUserEditSolid } from 'react-icons/lia';
import { classNames } from '@utils/functions';
import { IconType } from 'react-icons';
import Logo from '@components/common/Logo';
import { DASHBOARD, DISPOSITIONS, ESCALATIONS } from '@utils/routes';

const navigation = [
  {
    name: 'Dashboard',
    href: DASHBOARD,
    icon: FiHome as IconType,
  },
  { name: 'Contacts', href: '#', icon: FiUsers as IconType },
  {
    name: 'Dispositions',
    href: DISPOSITIONS,
    icon: FiFolder as IconType,
  },
  {
    name: 'Escalations',
    href: ESCALATIONS,
    icon: LiaUserEditSolid as IconType,
  },
  { name: 'Calendar', href: '#', icon: FiCalendar as IconType },
  { name: 'Documents', href: '#', icon: FiFile as IconType },
  { name: 'Reports', href: '#', icon: FiPieChart as IconType },
];

type Props = {
  sidebarOpen: boolean;
  page: string;
  setSidebarOpen: (x: boolean) => void;
  setOpenDetails: (x: boolean) => void;
};

const SideBar = ({
  sidebarOpen,
  setSidebarOpen,
  page,
  setOpenDetails,
}: Props) => {
  const renderNavItems = () => {
    return navigation.map((item) => (
      <li key={item.name}>
        <a
          href={item.href}
          className={classNames(
            item.name === page
              ? 'bg-purpleColor text-white rounded-r-full'
              : 'text-textColor hover:bg-purpleColor hover:rounded-r-full',
            'flex gap-x-3 rounded-md hover:text-white hover:bg-gradient-rev hover:opacity-80 pl-12 py-2 text-sm leading-6 font-semibold transition-all duration-500 ease-in-out'
          )}
        >
          <div className="relative w-6">
            <div className="absolute w-6 inset-0 flex items-center justify-center">
              <item.icon aria-hidden="true" className="w-4 h-4" />
            </div>
          </div>
          {item.name}
        </a>
      </li>
    ));
  };
  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-bgColor2/20 backdrop-blur" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5 bg-bgColor rounded-full shadow"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <FiX
                        className="h-6 w-6 text-textColor"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>

                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-bgColor pb-2 ring-1 ring-white/10">
                  <div className="flex  px-6 h-16 pt-4 shrink-0 items-center">
                    <Logo />
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="-mx-2 flex-1 space-y-4 w-[98%]">
                      {renderNavItems()}
                      <li>
                        <button
                          type="button"
                          className="flex gap-x-3 rounded-md hover:text-white hover:bg-gradient-rev hover:opacity-80 pl-12 py-2 text-sm leading-6 font-semibold transition-all duration-500 ease-in-out"
                          onClick={() => setOpenDetails(true)}
                        >
                          <span className="">Open customer details</span>
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:block lg:w-64 lg:overflow-y-auto lg:bg-bgColor lg:pb-4 drop-shadow-lg min-h-full">
        <nav className="mt-32">
          <ul role="list" className="-mx-2 space-y-4 w-[98%]">
            {renderNavItems()}
            <li>
              <button
                type="button"
                className="flex gap-x-3 rounded-md hover:text-white hover:bg-gradient-rev hover:opacity-80 pl-12 py-2 text-sm leading-6 font-semibold transition-all duration-500 ease-in-out"
                onClick={() => setOpenDetails(true)}
              >
                <span className="">Open customer details</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SideBar;
