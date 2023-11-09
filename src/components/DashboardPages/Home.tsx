import DashboardLayout from '@components/DashboardPages/DashboardLayout';
import { ScaleIcon } from '@heroicons/react/20/solid';
const cards = [
  {
    name: 'Initialized Calls',
    href: '#',
    icon: ScaleIcon,
    amount: '$30,659.45',
  },
  { name: 'Ringing Calls', href: '#', icon: ScaleIcon, amount: '$30,659.45' },
  {
    name: 'Connected calls',
    href: '#',
    icon: ScaleIcon,
    amount: '$30,659.45',
  },
  {
    name: 'Queued Calls',
    href: '#',
    icon: ScaleIcon,
    amount: '$30,659.45',
  },
  {
    name: 'Dispostions',
    href: '#',
    icon: ScaleIcon,
    amount: '$30,659.45',
  },
  // More items...
];
const Home = () => {
  return (
    <DashboardLayout>
      <section>
        <h2 className=" font-medium text-2xl">Overview</h2>
        <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
          {cards.map((card) => (
            <div
              key={card.name}
              className="overflow-hidden rounded-lg bg-white shadow"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <card.icon
                      className="h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="truncate text-sm font-medium text-gray-500">
                        {card.name}
                      </dt>
                      <dd>
                        <div className="text-lg font-medium text-gray-900">
                          {card.amount}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-5 py-3">
                <div className="text-sm">
                  <a
                    href={card.href}
                    className="font-medium text-cyan-700 hover:text-cyan-900"
                  >
                    View all
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </DashboardLayout>
  );
};

export default Home;
