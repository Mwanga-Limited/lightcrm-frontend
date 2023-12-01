import { useNavigate, useParams } from 'react-router-dom';
import DashboardLayout from '../DashboardLayout';
import { Tab } from '@headlessui/react';
import { classNames } from '@utils/functions';
import { ChevronLeftIcon } from '@heroicons/react/20/solid';

export default function SingleDisposition() {
  const navigate = useNavigate();
  const { loanId } = useParams();

  return (
    <DashboardLayout page="Dispositions">
      <div className="card">
        <div className="flex justify-between gap-2">
          <div className="px-4 sm:px-0">
            <h3 className="text-base font-semibold leading-7 text-textColor">
              Customer Information
            </h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-textColor/80">
              Personal details.
            </p>
          </div>
          <div>
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 justify-center bg-purpleColor py-1.5 px-3 rounded hover:opacity-80 text-white font-medium shadow-sm"
            >
              <ChevronLeftIcon className="h-4 w-4" /> Back
            </button>
          </div>
        </div>
        <div className="mt-6">
          <dl className="grid grid-cols-1 sm:grid-cols-2">
            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-textColor">
                Full name
              </dt>
              <dd className="mt-1 text-sm leading-6 text-textColor/90 sm:mt-2">
                Margot Foster
              </dd>
            </div>
            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-textColor">
                Loan Id
              </dt>
              <dd className="mt-1 text-sm leading-6 text-textColor/90 sm:mt-2">
                {loanId}
              </dd>
            </div>
            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-textColor">
                Email address
              </dt>
              <dd className="mt-1 text-sm leading-6 text-textColor/90 sm:mt-2">
                margotfoster@example.com
              </dd>
            </div>
            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-textColor">
                Bucket
              </dt>
              <dd className="mt-1 text-sm leading-6 text-textColor/90 sm:mt-2">
                L
              </dd>
            </div>
            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-textColor">
                About
              </dt>
              <dd className="mt-1 text-sm leading-6 text-textColor/90 sm:mt-2">
                Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
                consequat sint. Sit id mollit nulla mollit nostrud in ea officia
                proident. Irure nostrud pariatur mollit ad adipisicing
                reprehenderit deserunt qui eu.
              </dd>
            </div>
            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
              <div className="w-full px-2 sm:px-0">
                <Tab.Group>
                  <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                    {Object.keys(categories).map((category) => (
                      <Tab
                        key={category}
                        className={({ selected }) =>
                          classNames(
                            selected
                              ? 'bg-purpleColor shadow text-white'
                              : 'hover:bg-white/[0.12] hover:text-white',
                            'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-textColor',
                            'focus:outline-none focus:ring-0'
                          )
                        }
                      >
                        <span className="hidden sm:inline">{category}</span>
                        <span className="sm:hidden">
                          {category.split(' ')[0]}
                        </span>
                      </Tab>
                    ))}
                  </Tab.List>
                  <Tab.Panels className="mt-2">
                    {Object.values(categories).map((posts, idx) => (
                      <Tab.Panel key={idx} className="rounded-xl p-3">
                        <ul>
                          {posts.map((post) => (
                            <li
                              key={post.id}
                              className="relative rounded-md p-3"
                            >
                              <h3 className="text-sm font-medium leading-5">
                                {post.title}
                              </h3>

                              <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-textColor/80">
                                <li>{post.date}</li>
                                <li>&middot;</li>
                                <li>{post.commentCount} comments</li>
                                <li>&middot;</li>
                                <li>{post.shareCount} shares</li>
                              </ul>

                              <a
                                href="#"
                                className={classNames(
                                  'absolute inset-0 rounded-md',
                                  'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                                )}
                              />
                            </li>
                          ))}
                        </ul>
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </DashboardLayout>
  );
}
const categories = {
  'Loan Information': [
    {
      id: 1,
      title: 'Does drinking coffee make you smarter?',
      date: '5h ago',
      commentCount: 5,
      shareCount: 2,
    },
    {
      id: 2,
      title: "So you've bought coffee... now what?",
      date: '2h ago',
      commentCount: 3,
      shareCount: 2,
    },
  ],
  Dispositions: [
    {
      id: 1,
      title: 'Is tech making coffee better or worse?',
      date: 'Jan 7',
      commentCount: 29,
      shareCount: 16,
    },
    {
      id: 2,
      title: 'The most innovative things happening in coffee',
      date: 'Mar 19',
      commentCount: 24,
      shareCount: 12,
    },
  ],
  Escalations: [
    {
      id: 1,
      title: 'Ask Me Anything: 10 answers to your questions about coffee',
      date: '2d ago',
      commentCount: 9,
      shareCount: 5,
    },
    {
      id: 2,
      title: "The worst advice we've ever heard about coffee",
      date: '4d ago',
      commentCount: 1,
      shareCount: 2,
    },
  ],
};
