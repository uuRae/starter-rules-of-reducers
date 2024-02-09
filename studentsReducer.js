const initialState = [
  { id: 1, firstName: 'Ahmad', lastName: 'Salim', enrolled: false },
  { id: 2, firstName: 'Gabriel', lastName: 'Carlos', enrolled: true },
  { id: 3, firstName: 'Cassandra', lastName: 'Williams', enrolled: false },
];

const studentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'students/addStudent': {
      return [...state, action.payload];
    }
    case 'students/removeStudent': {
      return state.filter((note) => note.id !== action.payload.id);
    }
    default: {
      return state;
    }
  }
};

console.log(
  studentsReducer(initialState, {
    type: 'students/addStudent',
    payload: {
      id: 4,
      firstName: 'Ming',
      lastName: 'Chan',
      enrolled: true,
    },
  })
);

// Prints [
//   { id: 1, firstName: 'Ahmad', lastName: 'Salim', enrolled: false },
//   { id: 2, firstName: 'Gabriel', lastName: 'Carlos', enrolled: true },
//   {
//     id: 3,
//     firstName: 'Cassandra',
//     lastName: 'Williams',
//     enrolled: false
//   },
//   { id: 4, firstName: 'Ming', lastName: 'Chan', enrolled: true }
// ]

console.log(
  studentsReducer(initialState, {
    type: 'students/removeStudent',
    payload: { id: 2 },
  })
);

// Prints [
//   { id: 1, firstName: 'Ahmad', lastName: 'Salim', enrolled: false },
//   {
//     id: 3,
//     firstName: 'Cassandra',
//     lastName: 'Williams',
//     enrolled: false,
//   },
// ];