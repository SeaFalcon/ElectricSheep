export function changeStat(stat) {
  return {
    type: 'changeStat',
    payload: {stat},
  };
}

export function changeSequence(sequence) {
  return {
    type: 'changeSequence',
    payload: {sequence},
  };
}

export function changeDay(day) {
  return {
    type: 'changeDay',
    payload: {day},
  };
}

export function changeContent(currentContent) {
  return {
    type: 'changeContent',
    payload: {currentContent},
  };
}

export function setFunction(func) {
  return {
    type: 'setFunction',
    payload: {func},
  };
}
