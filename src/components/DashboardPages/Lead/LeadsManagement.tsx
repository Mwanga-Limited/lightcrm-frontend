import { buckets, leadsArr, projects } from '@utils/mockdata';
import DashboardLayout from '../DashboardLayout';
import { PlusCircleIcon } from '@heroicons/react/20/solid';
import AddNewLead from './AddNewLead';
import { useState } from 'react';
import HDSelectBox from '@components/common/HDSelectBox';
import EmptyState from '@components/common/EmptyState';
import { LuPackageOpen } from 'react-icons/lu';
import ToggleActive from '@components/common/Toggle';

const LeadsManagement = () => {
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [project, setProject] = useState<Record<string, unknown> | null>(null);
  const [bucket, setBucket] = useState<Record<string, unknown> | null>(null);

  return (
    <DashboardLayout page="Lead Management">
      <section className="flex flex-col h-full min-h-[80vh]">
        <div className="card">
          <div className="flex justify-between gap-2 flex-wrap">
            <h2 className="capitalize font-Bold text-2xl">Lead Management</h2>
            <div>
              <button
                onClick={() => setIsOpenAdd(true)}
                className="flex items-center gap-2 justify-center bg-purpleColor py-1.5 px-3 rounded hover:opacity-80 text-white font-medium shadow-sm"
              >
                <PlusCircleIcon className="h-6 w-6" /> New Lead
              </button>
            </div>
          </div>
          <p>
            Select a project and then select bucket from the list below to view
            asociated leads
          </p>
        </div>
        <div className="mt-4 flow-root">
          <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8 px-3.5 py-2.5">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 space-y-8">
              <div className="flex gap-3 flex-wrap">
                <div className="w-72">
                  <HDSelectBox
                    options={projects}
                    selected={project}
                    setSelected={setProject}
                    label="Select a project"
                  />
                </div>
                {project && (
                  <div className="w-72">
                    <HDSelectBox
                      options={buckets}
                      selected={bucket}
                      setSelected={setBucket}
                      label="Select a Bucket"
                      disabled={!project}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="card mt-4 flex-1 relative">
          {!leadsArr || !bucket || !project ? (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <EmptyState
                icon={
                  <LuPackageOpen className="mx-auto h-12 w-12 text-gray-400" />
                }
                text={
                  !bucket
                    ? 'uh oh! Please select a prject and bucket to view leads'
                    : 'No Lead associated with the project/bucket combination selected. Refine choices and try again'
                }
              />
            </div>
          ) : (
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
                            Date
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
                            Entries
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold "
                          >
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 text-textColor/70">
                        {leadsArr.map((lead) => (
                          <tr key={lead.id}>
                            <td className="hidden px-3 py-4 text-sm lg:table-cell">
                              {lead.created_at}
                            </td>
                            <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium sm:w-auto sm:max-w-none sm:pl-6">
                              {lead.name}
                              <dl className="font-normal grid grid-cols-2 gap-1 pt-1 lg:hidden">
                                <dt className="font-bold">Date:</dt>
                                <dd className=" ">{lead.created_at}</dd>
                                <dt className="font-bold sm:hidden">
                                  Entries:
                                </dt>
                                <dd className=" sm:hidden">
                                  {lead.number_of_entries}
                                </dd>
                              </dl>
                            </td>
                            <td className="hidden px-3 py-4 text-sm sm:table-cell">
                              {lead.number_of_entries}
                            </td>
                            <td className="px-3 py-4 text-sm">
                              <ToggleActive isActive={lead.is_active} />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <AddNewLead isOpenAdd={isOpenAdd} setIsOpenAdd={setIsOpenAdd} />
    </DashboardLayout>
  );
};

export default LeadsManagement;
