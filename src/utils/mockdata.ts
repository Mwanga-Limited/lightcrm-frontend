import { PhoneIcon } from '@heroicons/react/20/solid';
import { faker } from '@faker-js/faker';
import {
  FiList,
  FiMail,
  FiPhone,
  FiPhoneCall,
  FiPhoneMissed,
  FiUserX,
} from 'react-icons/fi';

export const dialType = [{ name: 'Auto Dial' }, { name: 'Manual' }];

export const cards = [
  {
    name: 'Avg. No. of Calls',
    href: '#',
    icon: FiPhone,
    amount: '14',
    iconColor: 'text-purpleColor',
  },
  {
    name: 'Inactive accounts',
    href: '#',
    icon: FiUserX,
    amount: '45',
    iconColor: 'text-orangeColor',
  },
  {
    name: 'Avg. No of SMS',
    href: '#',
    icon: FiMail,
    amount: '1',
    iconColor: 'text-yellowColor',
  },
  {
    name: 'Connected Calls - Today',
    href: '#',
    icon: FiPhoneCall,
    amount: '3',
    iconColor: 'text-green-500',
  },
  {
    name: 'Unanswered Calls - Today',
    href: '#',
    icon: FiPhoneMissed,
    amount: '50',
    iconColor: 'text-orangeColor',
  },
  {
    name: 'PTP (To be called)',
    href: '#',
    icon: FiList,
    amount: '50',
    iconColor: 'text-blue-500',
  },
  {
    name: 'Callback -Today',
    href: '#',
    icon: PhoneIcon,
    amount: '50',
    iconColor: 'text-purpleColor',
  },
];

function createRandomLead() {
  return {
    id: faker.string.uuid(),
    created_at: faker.date.past().toLocaleDateString(),
    name: faker.lorem.words({ min: 1, max: 5 }),
    number_of_entries: faker.number.int({ min: 2, max: 10000 }),
    is_active: faker.datatype.boolean(),
    project: faker.helpers.arrayElement([
      'Branch',
      'Carbon',
      'UMBA',
      'FCMB',
      'Black Copper',
    ]),
  };
}

function createRandomUser() {
  return {
    id: faker.string.uuid(),
    loan_id: faker.string.uuid(),
    name: faker.person.fullName(),
    date: 'May 02 2023',
    dateFuture: faker.date.future().toLocaleDateString(),
    type: faker.helpers.arrayElement([
      'NUBAN Request (SMS/WhatsApp/Email)',
      'Payment not updated',
      'No Knowledge of loan',
      'Wrong Number',
      'Deceased',
    ]),
    reason: faker.helpers.arrayElement([
      'Financial Issues',
      'Lost/Damaged phone',
      'Sick/Hospitalized',
      'Waiting for Salary',
      'Travelled to Remote Areas',
      'Unemployed at the moment',
      'Bank Issues',
      'Unable to Pay (Payment Issue)',
      "Doesn't know how to make payment (Customer comprehension)",
    ]),
    comment: faker.helpers.arrayElement([
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
    ]),
    to: faker.helpers.arrayElement([
      'Customer Support',
      'Team Lead',
      'Project Lead',
    ]),
  };
}
export const USERS = faker.helpers.multiple(createRandomUser, {
  count: 15,
});

export const leadsArr = faker.helpers.multiple(createRandomLead, {
  count: 4,
});

const leadsArrToo = faker.helpers.multiple(createRandomLead, {
  count: 5,
});

export const buckets = [
  { name: 'Early', leads: leadsArr },
  { name: 'A', leads: leadsArrToo },
  { name: 'B', leads: leadsArr },
  { name: 'C', leads: leadsArrToo },
  { name: 'D', leads: leadsArr },
  { name: 'E', leads: leadsArrToo },
];

export const projects = [
  { name: 'Branch', leads: leadsArr },
  { name: 'Carbon', leads: leadsArrToo },
  { name: 'UMBA', leads: leadsArr },
  { name: 'FCMB', leads: leadsArrToo },
  { name: 'Black Copper', leads: leadsArr },
];
