export default {
  backgroundImage: '/img/dragon.png',
  person: {
    location: [50, 10],
    name: 'Me',
    parents: [
      {
        location: [25, 20],
        name: 'Father',
        parents: [
          {
            location: [12.5, 30],
            name: 'Grandfather',
            parents: []
          },
          {
            location: [40, 37],
            name: 'Grandmother',
            parents: []
          }
        ]
      },
      {
        location: [75, 20],
        name: 'Mother',
        parents: [
          {
            location: [60, 30],
            name: 'Grandfather',
            parents: []
          },
          {
            location: [87.5, 37],
            name: 'Grandmother',
            parents: []
          }
        ]
      }
    ]
  }
};
