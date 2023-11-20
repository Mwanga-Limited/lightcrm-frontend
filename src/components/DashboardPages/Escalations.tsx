import { USERS } from '@utils/mockdata';
import DashboardLayout from './DashboardLayout';

const Escalations = () => {
  return (
    <DashboardLayout page={'Escalations'}>
      <div className="card">
        <h2 className="capitalize font-Bold text-2xl">My Escalations</h2>
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
                        Escalation Date
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
                        Escalation Type
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold "
                      >
                        Escalation To
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-textColor/70">
                    {USERS.map((person) => (
                      <tr key={person.loan_id}>
                        <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium sm:w-auto sm:max-w-none sm:pl-6">
                          {person.name}
                          <dl className="font-normal grid grid-cols-2 gap-1 pt-1 lg:hidden">
                            <dt className="font-bold">Escalation Date:</dt>
                            <dd className="truncate ">{person.date}</dd>
                            <dt className="font-bold sm:hidden">
                              Escalation Type:
                            </dt>
                            <dd className="truncate sm:hidden">
                              {person.type}
                            </dd>
                          </dl>
                        </td>
                        <td className="hidden px-3 py-4 text-sm lg:table-cell">
                          {person.date}
                        </td>
                        <td className="hidden px-3 py-4 text-sm sm:table-cell">
                          {person.type}
                        </td>
                        <td className="px-3 py-4 text-sm">{person.to}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Escalations;
