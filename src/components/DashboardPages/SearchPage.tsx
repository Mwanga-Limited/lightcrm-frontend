import { Link, useParams } from 'react-router-dom';
import DashboardLayout from './DashboardLayout';
import { USERS } from '@utils/mockdata';
import { DISPOSITIONS } from '@utils/routes';

export default function SearchPage() {
  const { searchTerm } = useParams();

  return (
    <DashboardLayout page="Search">
      <div className="card mb-4">
        Viewing Search results for {searchTerm?.toUpperCase()}
      </div>
      <div>
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {USERS?.map((person) => (
            <li
              key={person.loan_id}
              className="col-span-1 divide-y divide-gray-200 rounded-lg bg-bgColor shadow"
            >
              <div className="flex w-full items-center justify-between space-x-6 p-6">
                <div className="flex-1 truncate">
                  <div className="flex items-center justify-between space-x-3">
                    <h3 className="truncate text-sm font-medium ">
                      {person.name}
                    </h3>
                    <span>
                      <Link
                        to={`${DISPOSITIONS}/${person.loan_id}`}
                        className="font-medium text-purpleColor hover:opacity-80"
                      >
                        view
                      </Link>
                    </span>
                  </div>
                  <p className="mt-1 truncate text-sm text-textColor/70">
                    Loan Id: {person.loan_id}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </DashboardLayout>
  );
}
