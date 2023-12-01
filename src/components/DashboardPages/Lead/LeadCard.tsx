import { Link } from 'react-router-dom';

type Props = {
  [x: string]: any;
};

const LeadCard = ({ ...props }: Props) => {
  return (
    <div className="card">
      <div className="py-2.5 px-1.5">
        <div className="flex items-center justify-between">
          <div className="ml-5 w-max pr-2">
            <div className="text-textColor">
              <h3 className="text-orangeColor text-lg font-medium">
                Bucket Name: {props.name}
              </h3>
              <p>No of Leads: {props.length}</p>
            </div>
          </div>
        </div>
        <div className="mt-5 text-right">
          <Link
            to={props.url}
            className="text-sm font-medium text-purpleColor/80 dark:text-yellowColor hover:text-orangeColor dark:hover:text-orangeColor"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeadCard;
