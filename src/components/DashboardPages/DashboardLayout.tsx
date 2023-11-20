import { ReactNode, useState } from 'react';
import AppHeader from './AppHeader';
import SideBar from './SideBar';

type Props = {
  children: ReactNode;
  page: string;
};

const DashboardLayout = ({ children, page }: Props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);
  return (
    <div>
      <div className="fixed w-full inset-0 z-50 h-max">
        <AppHeader
          setSidebarOpen={setSidebarOpen}
          openDetails={openDetails}
          setOpenDetails={setOpenDetails}
        />
      </div>
      <div>
        <SideBar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          page={page}
          setOpenDetails={setOpenDetails}
        />
        <div className="lg:pl-60 mt-20">
          <main>
            <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6 text-textColor bg-bgColor2 min-h-[calc(100vh-5rem)]">
              {/* Main area */}
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
