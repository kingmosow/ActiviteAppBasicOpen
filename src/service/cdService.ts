import {Cd} from "../models/cd";

export class cdService {
  cdList: Cd[] = [
    {
      title: 'Royalty',
      date: '2015',
      author: 'Chris Brown',
      description: [
        'nombre de title: 6',
        'album vendu: 5..'
      ],
      isOn: false
    },
    {
      title: 'Macina',
      date: '2018',
      author: 'Elzo',
      description: [
        'nombre de title: 15',
        'album vendu: 15..'
      ],
      isOn: true
    },
    {
      title: 'Fortune',
      date: '2012',
      author: 'Chris Brown',
      description: [
        'nombre de title: 25',
        'album vendu: 25..'
      ],
      isOn: false
    }
    ,
    {
      title: 'Perfect',
      date: '2018',
      author: 'Trey',
      description: [
        'nombre de title: 25',
        'album vendu: 25..'
      ],
      isOn: false
    }
  ];
}
