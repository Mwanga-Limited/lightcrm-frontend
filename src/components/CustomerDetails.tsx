import Modal from '@components/common/Modal';
import { classNames } from '@utils/functions';
import { Form, Formik } from 'formik';
import CustomSelect from './common/CustomSelect';
import CustomInput from './common/CustomInput';
import { CheckCircleIcon } from '@heroicons/react/20/solid';

type Props = {
  open: boolean;
  setOpen: (x: boolean) => void;
};
type IformFields = {
  label: string;
  name: string;
  placeholder: string;
  type: string;
  options?: string[];
};
export default function CustomerDetails({ open, setOpen }: Props) {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    bucket: '',
    loan_id: '',
    loans_taken: '',
    late_fee: '',
    disbursed_date: '',
    amount_disbursed: '',
    amount_repaid: '',
    amount_delinquent: '',
    days_delinquent: '',
    discount_type: '',
    discounted_balance: '',
    repayment_bank_name: '',
    repayment_nuban: '',
    call_disposition_date: '',
    connected: '',
    right_party_contact: '',
    reason_for_delinquency: '',
    ptp_date: '',
    ptp_amount: '',
    method_of_repayment: '',
    comment: '',
    ecalation_type: '',
    ecalation_to: '',
  };
  return (
    <Modal
      open={open}
      closeModal={setOpen}
      size="max-w-5xl"
      title="Customer Details"
    >
      <div className="w-full px-2 sm:px-0">
        <Formik initialValues={initialValues} onSubmit={() => {}}>
          {({ isSubmitting }) => (
            <Form>
              {Object.values(categories).map((items, idx) => (
                <div key={idx} className={classNames('rounded-xl p-3', '')}>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-col gap-x-6 gap-y-2">
                    {items.map((item) =>
                      item.type === 'select' ? (
                        <CustomSelect
                          key={item.name}
                          label={item.label}
                          name={item.name}
                          placeholder={item.placeholder}
                          disabled={isSubmitting}
                        >
                          <option value="">{item.placeholder}</option>
                          {(item.options as string[]).map((val) => (
                            <option key={val} value={val}>
                              {val}
                            </option>
                          ))}
                        </CustomSelect>
                      ) : (
                        <CustomInput
                          key={item.name}
                          label={item.label}
                          name={item.name}
                          type={item.type}
                          placeholder={item.placeholder}
                          disabled={isSubmitting}
                        />
                      )
                    )}
                  </div>
                  <div className="flex justify-end py-2">
                    <button
                      type="submit"
                      className="flex items-center gap-2 justify-center bg-purpleColor py-1.5 px-3 rounded hover:opacity-80 text-white font-medium shadow-sm"
                    >
                      <CheckCircleIcon className="h-6 w-6" /> Save
                    </button>
                  </div>
                </div>
              ))}
            </Form>
          )}
        </Formik>
      </div>
    </Modal>
  );
}

const categories: Record<string, IformFields[]> = {
  'Customer Details': [
    {
      label: 'Customer Name',
      type: 'text',
      name: 'name',
      placeholder: 'Surname first',
    },
    {
      label: 'Email Address',
      type: 'email',
      name: 'email',
      placeholder: 'youremail@gmail.com',
    },
    {
      label: 'Phone number',
      type: 'text',
      name: 'phone',
      placeholder: '+2349012345678',
    },
    {
      label: 'Bucket',
      type: 'text',
      name: 'bucket',
      placeholder: 'Bucket name',
    },
    {
      label: 'Loan ID',
      type: 'text',
      name: 'loan_id',
      placeholder: 'Loan ID',
    },
    {
      label: 'Loans Taken',
      type: 'text',
      name: 'loans_taken',
      placeholder: 'Loans Taken',
    },
    {
      label: 'Late Fee',
      type: 'text',
      name: 'late_fee',
      placeholder: 'Late Fee',
    },
    {
      label: 'Disbursed Date',
      type: 'text',
      name: 'disbursed_date',
      placeholder: 'Disbursed Date',
    },
    {
      label: 'Amount Disbursed',
      type: 'text',
      name: 'amount_disbursed',
      placeholder: 'Amount Disbursed',
    },
    {
      label: 'Amount Repaid',
      type: 'text',
      name: 'amount_repaid',
      placeholder: 'Amount Repaid',
    },
    {
      label: 'Amount Delinquent',
      type: 'text',
      name: 'amount_delinquent',
      placeholder: 'Amount Delinquent',
    },
    {
      label: 'Days Delinquent',
      type: 'number',
      name: 'days_delinquent',
      placeholder: 'Days Delinquent',
    },
    {
      label: 'Discount Type',
      type: 'text',
      name: 'discount_type',
      placeholder: 'Discount Type',
    },
    {
      label: 'Discounted balance',
      type: 'text',
      name: 'discounted_balance',
      placeholder: 'Discounted balance',
    },
    {
      label: 'Repayment Bank Name',
      type: 'text',
      name: 'repayment_bank_name',
      placeholder: 'Repayment Bank Name',
    },
    {
      label: 'Repayment NUBAN',
      type: 'text',
      name: 'repayment_nuban',
      placeholder: 'Repayment NUBAN',
    },
    {
      label: 'Call Disposition Date',
      type: 'text',
      name: 'call_disposition_date',
      placeholder: 'Call Disposition Date',
    },
    {
      label: 'Connected',
      name: 'connected',
      placeholder: 'select',
      type: 'select',
      options: ['Yes', 'No'],
    },
    {
      label: 'Right Party Contact',
      name: 'right_party_contact',
      placeholder: 'select',
      type: 'select',
      options: ['Yes', 'No'],
    },
    {
      label: 'Reason for Delinquency',
      name: 'reason_for_delinquency',
      placeholder: 'select',
      type: 'select',
      options: [
        'Financial Issues',
        'Lost/Damaged phone',
        'Sick/Hospitalized',
        'Waiting for Salary',
        'Travelled to Remote Areas',
        'Unemployed at the moment',
        'Bank Issues',
        'Unable to Pay (Payment Issue)',
        "Doesn't know how to make payment (Customer comprehension)",
      ],
    },
    {
      label: 'PTP Date',
      type: 'datetime',
      name: 'ptp_date',
      placeholder: 'PTP Date',
    },
    {
      label: 'PTP Amount',
      type: 'text',
      name: 'ptp_amount',
      placeholder: 'PTP Amount',
    },
    {
      label: 'Method of Repayment',
      name: 'method_of_repayment',
      placeholder: 'select',
      type: 'select',
      options: [
        'Bank Transfer',
        'Debit Card',
        ' Cash Deposit (GT Collections)',
      ],
    },
    {
      label: 'Comment',
      name: 'comment',
      placeholder: 'select',
      type: 'select',
      options: [
        'No answer',
        'Not reachable',
        'Hung up',
        'Mute',
        'Third party',
        'No commitment',
        'No precise amount',
        'No precise date',
        'Wrong number',
        'Payment not updated',
        'No knowledge of loan',
        'Deceased',
        'Paid',
        'Language barrier',
        'Switched off',
      ],
    },
    {
      label: 'Escalation type',
      name: 'ecalation_type',
      placeholder: 'select',
      type: 'select',
      options: [
        'None',
        'NUBAN Request (SMS/WhatsApp/Email)',
        'Payment not updated',
        'No Knowledge of loan',
        'Wrong Number',
        'Deceased',
      ],
    },
    {
      label: 'Escalate To',
      name: 'ecalation_to',
      placeholder: 'select',
      type: 'select',
      options: ['None', 'Customer Support', 'Team Lead', 'Project Lead'],
    },
  ],
};
