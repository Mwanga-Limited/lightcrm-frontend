import { Link } from 'react-router-dom';
import DashboardLayout from '../DashboardLayout';
import { USERS } from '@utils/mockdata';
import { DISPOSITIONS } from '@utils/routes';
import Pagination from '@components/Pagination';

export default function DispositionPage() {
  return (
    <DashboardLayout page="Dispositions">
      <div className="card">
        <h2 className="capitalize font-Bold text-2xl">My Dispositions</h2>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="text-textColor">
                    <tr>
                      <th
                        scope="col"
                        className="hidden px-3 py-3.5 text-left text-sm font-semibold  lg:table-cell"
                      >
                        Disposition Date
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 px-3 text-left text-sm font-semibold  sm:pl-6"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="hidden px-3 py-3.5 text-left text-sm font-semibold  sm:table-cell"
                      >
                        Comment
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold "
                      >
                        Reason
                      </th>
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                      >
                        <span className="sr-only">View</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-textColor/70">
                    {USERS.map((person) => (
                      <tr key={person.loan_id}>
                        <td className="hidden px-3 py-4 text-sm lg:table-cell">
                          {person.date}
                        </td>
                        <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium sm:w-auto sm:max-w-none sm:pl-6">
                          {person.name}
                          <dl className="font-normal grid grid-cols-2 gap-1 pt-1 lg:hidden">
                            <dt className="font-bold">Disposition Date:</dt>
                            <dd className=" ">{person.date}</dd>
                            <dt className="font-bold sm:hidden">comment:</dt>
                            <dd className=" sm:hidden">{person.comment}</dd>
                          </dl>
                        </td>
                        <td className="hidden px-3 py-4 text-sm sm:table-cell">
                          {person.comment}
                        </td>
                        <td className="px-3 py-4 text-sm">{person.reason}</td>
                        <td className="py-4 pl-3 pr-4 text-right sm:pr-6">
                          <Link
                            to={`${DISPOSITIONS}/${person.loan_id}`}
                            className="text-orangeColor hover:text-purpleColor h-6 w-6"
                          >
                            view
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
    </DashboardLayout>
  );
}
