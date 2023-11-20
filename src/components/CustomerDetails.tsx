import Modal from '@components/common/Modal';
import { Tab } from '@headlessui/react';
import { classNames } from '@utils/functions';
import { Form, Formik } from 'formik';
import CustomSelect from './common/CustomSelect';
import CustomInput from './common/CustomInput';

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
    <Modal open={open} closeModal={setOpen} size="max-w-xl">
      <div className="w-full px-2 sm:px-0">
        <Formik initialValues={initialValues} onSubmit={() => {}}>
          {({ isSubmitting }) => (
            <Form>
              <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                  {Object.keys(categories).map((category) => (
                    <Tab
                      key={category}
                      className={({ selected }) =>
                        classNames(
                          selected
                            ? 'bg-purpleColor shadow text-white'
                            : 'hover:bg-white/[0.12] hover:text-white',
                          'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-textColor',
                          'focus:outline-none focus:ring-0'
                        )
                      }
                    >
                      <span className="hidden sm:inline">{category}</span>
                      <span className="sm:hidden">
                        {category.split(' ')[0]}
                      </span>
                    </Tab>
                  ))}
                </Tab.List>
                <Tab.Panels className="mt-2">
                  {Object.values(categories).map((items, idx) => (
                    <Tab.Panel
                      key={idx}
                      className={classNames('rounded-xl p-3', '')}
                    >
                      <ul className="grid sm:grid-cols-2 gap-4">
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
                      </ul>
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>
            </Form>
          )}
        </Formik>
      </div>
    </Modal>
  );
}

const categories: Record<string, IformFields[]> = {
  'Personal & Loan Info': [
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
  ],
  'Disposition Info': [
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
  ],
  'Escalation Info': [
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
