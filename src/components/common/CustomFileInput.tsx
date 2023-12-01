/* eslint-disable @typescript-eslint/no-explicit-any */
import { FiUpload } from 'react-icons/fi';
import { classNames } from 'utils/functions';

type Props = {
  label?: string;
  name: string;
  [x: string]: any;
};
const CustomFileInput = ({ label, ...props }: Props) => {
  return (
    <>
      <div className="relative cursor-pointer rounded-md focus-within:outline-none focus-within:ring-0 focus-within:ring-transaparent focus-within:ring-offset-0 hover:text-indigo-500 ">
        {label && (
          <span className="block text-base text-textColor font-medium">
            {label}
          </span>
        )}
        <label
          role="label"
          htmlFor="file-upload"
          className={classNames(
            props.inputStyle ?? '',
            props.disabled ? 'opacity-40' : '',
            'rounded-md bg-orangeColor px-6 py-1.5 text-base font-medium leading-6 text-white shadow-sm hover:bg-primary-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orangeColor inline-flex items-center gap-2'
          )}
        >
          <FiUpload />
          Choose file
        </label>
        <input id="file-upload" type="file" {...props} className="sr-only" />
      </div>
    </>
  );
};

export default CustomFileInput;
