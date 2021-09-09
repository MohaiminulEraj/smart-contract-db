export interface Event {
  title: string;
  description: string;
  startDate: Date | string;
  endDate: Date | string;
  location: string;
  link: string;
}

export const events: { [id: string]: Event } = {
  'connecting-the-blockchain-ecosystem-global': {
    title: 'Connecting the Blockchain Ecosystem',
    description: '',
    startDate: '09-06-2021',
    endDate: '09-06-2021',
    location: 'Business Design Centre | London',
    link: 'https://blockchain-expo.com/global/',
  },
  'connecting-the-blockchain-ecosystem-north-america': {
    title: 'Connecting the Blockchain Ecosystem',
    description: '',
    startDate: '09-29-2021',
    endDate: '09-30-2021',
    location: 'Virtual',
    link: 'https://blockchain-expo.com/northamerica/',
  },
  'coin-agenda-europe': {
    title: 'CoinAgenda | Europe',
    description: '',
    startDate: '09-27-2021',
    endDate: '09-29-2021',
    location: 'Le Méridien Beach Plaza | Monaco, Monaco',
    link: 'https://blockchain-expo.com/northamerica/',
  },
};