import CustomFileInput from '@components/common/CustomFileInput';
import CustomInput from '@components/common/CustomInput';
import CustomSelect from '@components/common/CustomSelect';
import Modal from '@components/common/Modal';
import { CheckCircleIcon } from '@heroicons/react/20/solid';
import { buckets, projects } from '@utils/mockdata';
import { Formik, Form } from 'formik';
type Props = {
  isOpenAdd: boolean;
  setIsOpenAdd: (x: boolean) => void;
};
const AddNewLead = ({ isOpenAdd, setIsOpenAdd }: Props) => {
  return (
    <Modal
      open={isOpenAdd}
      closeModal={setIsOpenAdd}
      size="max-w-xl"
      title="Add New Lead"
    >
      <Formik
        initialValues={{
          name: '',
          bucket: '',
          project: '',
          file: null,
        }}
        onSubmit={() => {}}
      >
        {({ isSubmitting }) => (
          <Form className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="sm:col-span-2">
              <CustomInput
                label="Lead Name"
                name="name"
                type="text"
                placeholder="e.g November week 4"
                disabled={isSubmitting}
              />
            </div>
            <CustomSelect
              label="Select Project"
              name="project"
              type="select"
              disabled={isSubmitting}
            >
              <option value="">Select Project</option>
              {projects.map((val) => (
                <option key={val.name} value={val.name}>
                  {val.name}
                </option>
              ))}
            </CustomSelect>
            <CustomSelect
              label="Select Bucket"
              name="bucket"
              type="select"
              disabled={isSubmitting}
            >
              <option value="">Select Bucket</option>
              {buckets.map((val) => (
                <option key={val.name} value={val.name}>
                  {val.name}
                </option>
              ))}
            </CustomSelect>
            <div className="sm:col-span-2">
              <CustomFileInput
                label="Upload Document"
                name="file"
                disabled={isSubmitting}
                placeholder="Describe the issue here"
              />
            </div>
            <div className="sm:col-span-2 flex justify-end">
              <button
                type="submit"
                className="flex items-center gap-2 justify-center bg-purpleColor py-1.5 px-3 rounded hover:opacity-80 text-white font-medium shadow-sm"
              >
                <CheckCircleIcon className="h-6 w-6" /> Save
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default AddNewLead;
