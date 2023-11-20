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

function createRandomUser() {
  return {
    id: faker.string.uuid(),
    loan_id: faker.string.uuid(),
    name: faker.person.fullName(),
    date: 'May 02 2023',
    type: faker.helpers.arrayElement([
      'NUBAN Request (SMS/WhatsApp/Email)',
      'Payment not updated',
      'No Knowledge of loan',
      'Wrong Number',
      'Deceased',
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
