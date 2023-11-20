import { useState } from 'react';
import HDSelectBox from './common/HDSelectBox';
import { useNavigate } from 'react-router-dom';
import { DASHBOARD } from 'utils/routes';

const BucketPage = () => {
  const navigate = useNavigate();
  const [dialtype, setDialType] = useState<Record<string, unknown> | null>(
    null
  );
  const [project, setProject] = useState<Record<string, unknown> | null>(null);
  const [bucket, setBucket] = useState<Record<string, unknown> | null>(null);
  return (
    <div className="min-h-screen bg-gradient-to-br from-purpleColor to-orangeColor/60 flex flex-col gap-8 justify-center items-center w-full px-4 py-16">
      <h1 className="text-dark font-bold text-2xl">
        To Proceed Please make your selections below
      </h1>
      <div className="top-16 w-full gap-6 flex flex-wrap items-center justify-center">
        <div className="w-72">
          <HDSelectBox
            options={projects}
            selected={project}
            setSelected={setProject}
            label="Select a project"
          />
        </div>
        <div className="w-72">
          <HDSelectBox
            options={buckets}
            selected={bucket}
            setSelected={setBucket}
            label="Select a Bucket"
          />
        </div>
        <div className="w-72">
          <HDSelectBox
            options={dialType}
            selected={dialtype}
            setSelected={setDialType}
            label="Select a dial type"
          />
        </div>
      </div>
      <div>
        <button
          onClick={() => navigate(DASHBOARD)}
          disabled={!dialtype || !project || !bucket}
          className="disabled:cursor-not-allowed flex w-full justify-center items-center gap-2 rounded-md bg-purpleColor px-6 py-3 text-2xl font-bold leading-6 text-white shadow-sm hover:bg-purpleColor/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purpleColor"
        >
          proceed
        </button>
      </div>
    </div>
  );
};
const projects = [
  { name: 'Branch' },
  { name: 'Carbon' },
  { name: 'UMBA' },
  { name: 'FCMB' },
  { name: 'Black Copper' },
];
const buckets = [
  { name: 'L' },
  { name: 'A' },
  { name: 'B' },
  { name: 'C' },
  { name: 'D' },
];
const dialType = [{ name: 'Auto Dial' }, { name: 'Manual' }];

export default BucketPage;
