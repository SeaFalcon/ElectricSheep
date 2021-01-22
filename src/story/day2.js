import store from '../store';
import {changeDay, changeStat} from '../action';

const day2 = [
  {
    sequence: '1',
    content: '새로운 날이 밝았습니다.',
    choices: [
      {
        text: '밀렵꾼과 대화',
        resultText: '아기 코끼리는 쉼없이 걸었어요. 끙끙...',
        // nextSequence: '2-1',
        calculate: () => {
          store.dispatch(changeStat(1));
          alert('더 이상 구현된 것이 없습니다.');
        },
      },
      {
        text: '마시기',
        resultText: '아기 코끼리는 쉼없이 달렸어요. 끙끙...',
        // nextSequence: '2-2',
        calculate: () => {
          store.dispatch(changeStat(1));
          alert('더 이상 구현된 것이 없습니다.');
        },
      },
      {
        text: '똥싸기',
        resultText: '아기 코끼리는 쉼없이 달렸어요. 끙끙...',
        // nextSequence: '2-2',
        calculate: () => {
          store.dispatch(changeStat(1));
          alert('더 이상 구현된 것이 없습니다.');
        },
      },
    ],
  },
];

export default day2;
