import { ReactNode } from 'react';

type props = {
  icon: ReactNode;
  text: string;
};

export default function EmptyState({ icon, text }: props) {
  return (
    <button
      type="button"
      className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 max-w-md mx-auto"
    >
      {icon}
      <span className="mt-2 block text-sm font-semibold ">{text}</span>
    </button>
  );
}
