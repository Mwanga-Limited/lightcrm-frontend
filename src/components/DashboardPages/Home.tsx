import DashboardLayout from '@components/DashboardPages/DashboardLayout';
import Pagination from '@components/Pagination';
import { PhoneIcon } from '@heroicons/react/20/solid';
import { classNames } from '@utils/functions';
import { cards } from '@utils/mockdata';
import { Link } from 'react-router-dom';

const people = [
  {
    name: 'Lindsay Walton',
    date: 'May 02 2023',
    ptp_amount: '₦4,000',
    amount_delinquent: '₦20,000',
  },
  {
    name: 'Lindsay Walton',
    date: 'May 02 2023',
    ptp_amount: '₦2,000',
    amount_delinquent: '₦10,000',
  },
  {
    name: 'Lindsay Walton',
    date: 'May 02 2023',
    ptp_amount: '₦5,000',
    amount_delinquent: '₦25,000',
  },
  {
    name: 'Lindsay Walton',
    date: 'May 02 2023',
    ptp_amount: '₦4,500',
    amount_delinquent: '₦12,000',
  },
  // More people...
];
const Home = () => {
  return (
    <DashboardLayout page="Dashboard">
      <section>
        <h2 className=" font-medium text-2xl">Overview</h2>
        <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
          {cards.map((card) => (
            <div key={card.name} className="card">
              <div className="py-2.5 px-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex-shrink-0">
                    <card.icon
                      className={classNames(card.iconColor, 'h-6 w-6')}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-5 w-max pr-2">
                    <div className="text-lg font-medium text-textColor">
                      {card.amount}
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <p className="text-sm font-medium text-textColor/80">
                    {card.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-5">
        <div className="card">
          <h2 className="capitalize font-medium">My PTPs To be called</h2>
          <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="text-textColor">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 px-3 text-left text-sm font-semibold  sm:pl-6"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="hidden px-3 py-3.5 text-left text-sm font-semibold  lg:table-cell"
                        >
                          PTP Date
                        </th>
                        <th
                          scope="col"
                          className="hidden px-3 py-3.5 text-left text-sm font-semibold  sm:table-cell"
                        >
                          PTP Amount
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold "
                        >
                          Amount Delinquent
                        </th>
                        <th
                          scope="col"
                          className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                        >
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-textColor/70">
                      {people.map((person) => (
                        <tr key={person.ptp_amount}>
                          <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium sm:w-auto sm:max-w-none sm:pl-6">
                            {person.name}
                            <dl className="font-normal grid grid-cols-2 gap-1 pt-1 lg:hidden">
                              <dt className="font-bold">PTP Date:</dt>
                              <dd className="truncate ">{person.date}</dd>
                              <dt className="font-bold sm:hidden">
                                PTP Amount:
                              </dt>
                              <dd className="truncate sm:hidden">
                                {person.ptp_amount}
                              </dd>
                            </dl>
                          </td>
                          <td className="hidden px-3 py-4 text-sm lg:table-cell">
                            {person.date}
                          </td>
                          <td className="hidden px-3 py-4 text-sm sm:table-cell">
                            {person.ptp_amount}
                          </td>
                          <td className="px-3 py-4 text-sm">
                            {person.amount_delinquent}
                          </td>
                          <td className="py-4 pl-3 pr-4 text-right sm:pr-6">
                            <Link
                              to="#"
                              className="text-indigo-600 hover:text-indigo-900 h-6 w-6"
                            >
                              <PhoneIcon />
                              <span className="sr-only">
                                Call, {person.name}
                              </span>
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <Pagination />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
};

export default Home;
