import Modal from '@components/common/Modal';

type Props = {
  open: boolean;
  setOpen: (x: boolean) => void;
};

export default function LogOutModal({ open, setOpen }: Props) {
  function closeModal() {
    setOpen(false);
  }

  return (
    <Modal open={open} closeModal={setOpen}>
      <div className="mt-2">
        <p className="text-lg font-medium leading-6">
          Are you sure you want to Sign out?
        </p>
      </div>

      <div className="mt-9 sm:mt-8 sm:flex sm:flex-row-reverse gap-2">
        <button
          type="button"
          className="inline-flex justify-center rounded-full border border-transparent bg-[#F85D5D] px-4 py-2 text-sm font-medium text-white hover:bg-gradient-rev hover:text-white focus:outline-none focus-visible:ring-0 mr-2 sm:mr-0"
          onClick={closeModal}
        >
          Yes Please!
        </button>
        <button
          type="button"
          className="inline-flex justify-center rounded-full border border-transparent bg-bgColor2 shadow px-4 py-2 text-sm font-medium text-primary-dark  hover:bg-gradient-rev hover:text-white focus:outline-none focus-visible:ring-0"
          onClick={closeModal}
        >
          No, Cancel
        </button>
      </div>
    </Modal>
  );
}
