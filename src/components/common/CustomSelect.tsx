/* eslint-disable @typescript-eslint/no-explicit-any */
import { useField } from 'formik';
import { classNames } from 'utils/functions';
type Props = {
  label?: string;
  name: string;
  [x: string]: any;
};
const CustomSelect = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);

  return (
    <div>
      {label && (
        <label
          htmlFor={props.name}
          className="block text-base text-textColor font-medium"
        >
          {label}
        </label>
      )}
      <div className="mt-2">
        <select
          {...field}
          {...props}
          id={props.name}
          className={classNames(
            meta.touched && meta.error
              ? 'ring-red-500 focus:ring-red-600 text-red-600 placeholder:text-red-600'
              : 'ring-purpleColor focus:ring-purpleColor text-dark dark:text-white placeholder:text-dark/50',
            'block w-full rounded-md border-0 py-2 px-2.5 shadow-sm ring-1 ring-inset placeholder:italic focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 bg-transparent'
          )}
        />
        {meta.touched && meta.error && (
          <div className="text-red-500">{meta.error}</div>
        )}
      </div>
    </div>
  );
};
export default CustomSelect;
