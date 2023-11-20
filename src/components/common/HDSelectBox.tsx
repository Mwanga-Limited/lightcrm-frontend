import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { classNames } from '@utils/functions';
type Props = {
  options: Record<string, unknown>[];
  label?: string;
  status?: string;
  selected?: Record<string, unknown> | null;
  setSelected: (x: any) => void;
};
const HDSelectBox = ({ options, label = '', selected, setSelected }: Props) => {
  return (
    <div>
      {label && <p className="text-textColor font-medium">{label}</p>}
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className=" text-textColor relative w-full cursor-default rounded-lg min-h-[2.25rem] bg-bgColor py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <div className="flex gap-2 items-center">
              {selected?.status ? (
                <span
                  aria-hidden="true"
                  className={classNames(
                    (selected?.status as string) ?? '',
                    'inline-block h-2 w-2 flex-shrink-0 rounded-full'
                  )}
                />
              ) : null}
              <span className="block truncate">{selected?.name as string}</span>
            </div>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-textColor"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-bgColor py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-10">
              {options?.map((item, itemIdx) => (
                <Listbox.Option
                  key={itemIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-textColor'
                    }`
                  }
                  value={item}
                >
                  {({ selected }) => (
                    <>
                      <div className="flex gap-2 items-center">
                        <span
                          className={`block truncate flex-1 ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {item.name as string}
                        </span>
                        {item?.status ? (
                          <span
                            aria-label={item.name as string}
                            className={classNames(
                              (item.status as string) ?? '',
                              'inline-block h-2 w-2 flex-shrink-0 rounded-full'
                            )}
                          />
                        ) : null}
                      </div>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default HDSelectBox;
