import { Fragment, ReactNode } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { classNames } from '@utils/functions';
import { XMarkIcon } from '@heroicons/react/20/solid';

type Props = {
  open: boolean;
  closeModal: (x: boolean) => void;
  children: ReactNode;
  size?: 'max-w-lg' | 'max-w-md' | 'max-w-sm' | 'max-w-xl';
};

export default function Modal({ open, closeModal, children, size }: Props) {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-bgColor2/70 backdrop-blur" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={classNames(
                  size ?? 'max-w-sm',
                  'text-textColor w-full transform overflow-hidden rounded-2xl bg-bgColor p-6 text-left align-middle shadow-xl transition-all'
                )}
              >
                <div className="py-4">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => closeModal(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div>{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
