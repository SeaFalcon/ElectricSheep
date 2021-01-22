const initialState = {
  currentDay: 1,
  currentSequence: '1',
  currentContent: '',
  stats: {
    stat: 0,
    talk: 0,
    tech: 0,
    think: 0,
    ghost: 0,
  },
  func: null,
};

const reducers = {
  setFunction: (state, {payload: {func}}) => {
    return {
      ...state,
      func,
    };
  },
  changeStat: (state, {payload: {stat}}) => {
    const {stats} = state;

    return {
      ...state,
      stats: {
        ...stats,
        stat: stats.stat + stat,
      },
    };
  },
  changeSequence: (state, {payload: {sequence}}) => {
    return {
      ...state,
      currentSequence: sequence,
    };
  },
  changeDay: (state, {payload: {day}}) => {
    return {
      ...state,
      currentDay: day,
    };
  },
  changeContent: (state, {payload: {currentContent}}) => {
    return {
      ...state,
      currentContent,
    };
  },
};

const defaultReducer = (state) => state;

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
