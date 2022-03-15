import { LightPinIcon, PinIcon, MoreIcon } from '@/public/assets/dashboard/navBarIcon';

const transactData = [
  {
    date: 'Today - 11.30 AM',
    firstIcon: <PinIcon />,
    text: 'Turpis ullamcorper tristique duis..',
    secondIcon: <MoreIcon />,
    title: 'Priority'
  },
  {
    date: 'Today - 10.30 AM',
    firstIcon: <LightPinIcon />,
    text: 'Dui risus curabitur magnis convallis.',
    secondIcon: <MoreIcon />,
    title: 'Other'
  },
  {
    date: 'Today - 09.15 AM',
    firstIcon: <LightPinIcon />,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec lorem.',
    secondIcon: <MoreIcon />
  },
  {
    date: 'Today - 08.45 AM',
    firstIcon: <PinIcon />,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec lorem.',
    secondIcon: <MoreIcon />
  }
];
export default transactData;
