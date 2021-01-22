import store from './../store';
import {changeDay, changeStat} from './../action';

const day1 = [
  {
    sequence: '1',
    content:
      '아기 코끼리가 눈을 떠보니 주변에는 아무도 없었어요. 그래서 아기 코끼리는 코끼리 무리를 찾아서 떠나기로 결심했답니다.',
    choices: [
      {
        text: '걷는다',
        resultText: '아기 코끼리는 쉼없이 걸었어요. 끙끙...',
        nextSequence: '2-1-1',
        calculate: () => {
          store.dispatch(changeStat(1));
        },
      },
      {
        text: '달린다',
        resultText: '아기 코끼리는 쉼없이 달렸어요. 끙끙...',
        nextSequence: '2-2-1',
        calculate: () => {
          store.dispatch(changeStat(1));
        },
      },
    ],
  },
  {
    sequence: '2-1-1',
    content: '아기 코끼리는 쉼없이 걸었어요. 끙끙...',
    choices: [
      {
        text: 'Next',
        nextSequence: '2-1',
        calculate: () => {},
        btnStyle: {backgroundColor: 'grey'},
      },
    ],
  },
  {
    sequence: '2-2-1',
    content: '아기 코끼리는 쉼없이 달렸어요. 끙끙...',
    choices: [
      {
        text: 'Next',
        nextSequence: '2-2',
        calculate: () => {},
        btnStyle: {backgroundColor: 'grey'},
      },
    ],
  },

  {
    sequence: '2-1',
    content: '아기 코끼리는 걷다보니 너무 힘들었어요. 그래서...',
    choices: [
      {
        text: '뭘 먹을래!',
        resultText: '마침 건초 더미가 있어서 맛나게 냠냠했어용. 오이시!',
        nextSequence: '3-1-1',
        calculate: () => {
          store.dispatch(changeStat(1));
        },
      },
      {
        text: '뭘 마쉴래!',
        resultText: '아기 코끼리는 근처 강가에서 목을 축였어요. 시원해!',
        nextSequence: '3-2-1',
        calculate: () => {
          store.dispatch(changeStat(1));
        },
      },
      {
        text: '쉴래!',
        resultText: '인생 뭐 있나 그냥 쉬다보면 하루가 가는거지~',
        nextSequence: '3-3-1',
        calculate: () => {
          store.dispatch(changeStat(1));
        },
      },
    ],
  },
  {
    sequence: '2-2',
    content: '아기 코끼리는 달리다보니 너무 힘들었어요. 그래서...',
    choices: [
      {
        text: '뭘 먹을래!',
        resultText: '마침 건초 더미가 있어서 맛나게 냠냠했어용. 오이시!',
        nextSequence: '3-1-1',
        calculate: () => {
          store.dispatch(changeStat(1));
        },
      },
      {
        text: '뭘 마쉴래!',
        resultText: '아기 코끼리는 근처 강가에서 목을 축였어요. 시원해!',
        nextSequence: '3-2-1',
        calculate: () => {
          store.dispatch(changeStat(1));
        },
      },
      {
        text: '쉴래!',
        resultText: '인생 뭐 있나 그냥 쉬다보면 하루가 가는거지~',
        nextSequence: '3-3-1',
        calculate: () => {
          store.dispatch(changeStat(1));
        },
      },
    ],
  },
  {
    sequence: '3-1-1',
    content: '마침 건초 더미가 있어서 맛나게 냠냠했어용. 오이시!',
    choices: [
      {
        text: 'Next',
        nextSequence: '3-1',
        calculate: () => {},
        btnStyle: {backgroundColor: 'grey'},
      },
    ],
  },
  {
    sequence: '3-2-1',
    content: '아기 코끼리는 근처 강가에서 목을 축였어요. 시원해!',
    choices: [
      {
        text: 'Next',
        nextSequence: '3-2',
        calculate: () => {},
        btnStyle: {backgroundColor: 'grey'},
      },
    ],
  },
  {
    sequence: '3-3-1',
    content: '인생 뭐 있나 그냥 쉬다보면 하루가 가는거지~',
    choices: [
      {
        text: 'Next',
        nextSequence: '3-3',
        calculate: () => {},
        btnStyle: {backgroundColor: 'grey'},
      },
    ],
  },

  {
    sequence: '3-1',
    content: '아기 코끼리는 먹다보니 너무 힘들었어요. 그래서...',
    choices: [
      {
        text: '계속 쉴래!',
        resultText: '인생 뭐 있나 그냥 쉬다보면 하루가 가는거지~',
        nextSequence: '4',
        calculate: () => {
          store.dispatch(changeStat(1));
        },
      },
      {
        text: '운동할래!',
        resultText: '아기 코끼리는 근처 강가에서 브레이크 댄스를 췄어요',
        nextSequence: '4',
        calculate: () => {
          store.dispatch(changeStat(1));
        },
      },
      {
        text: '계속 마쉴래!',
        resultText: '아기 코끼리는 근처 강가에서 목을 축였어요. 시원해!',
        nextSequence: '4',
        calculate: () => {
          store.dispatch(changeStat(1));
        },
      },
      {
        text: '계속 먹을래!',
        resultText: '마침 건초 더미가 있어서 맛나게 냠냠했어용. 오이시!',
        nextSequence: '4',
        calculate: () => {
          store.dispatch(changeStat(1));
        },
      },
    ],
  },
  {
    sequence: '3-2',
    content: '아기 코끼리는 마시다보니 너무 힘들었어요. 그래서...',
    choices: [
      {
        text: '계속 쉴래!',
        resultText: '인생 뭐 있나 그냥 쉬다보면 하루가 가는거지~',
        nextSequence: '4',
        calculate: () => {
          store.dispatch(changeStat(1));
        },
      },
      {
        text: '운동할래!',
        resultText: '아기 코끼리는 근처 강가에서 브레이크 댄스를 췄어요',
        nextSequence: '4',
        calculate: () => {
          store.dispatch(changeStat(1));
        },
      },
      {
        text: '계속 마쉴래!',
        resultText: '아기 코끼리는 근처 강가에서 목을 축였어요. 시원해!',
        nextSequence: '4',
        calculate: () => {
          store.dispatch(changeStat(1));
        },
      },
      {
        text: '계속 먹을래!',
        resultText: '마침 건초 더미가 있어서 맛나게 냠냠했어용. 오이시!',
        nextSequence: '4',
        calculate: () => {
          store.dispatch(changeStat(1));
        },
      },
    ],
  },
  {
    sequence: '3-3',
    content: '아기 코끼리는 쉬다보니 너무 힘들었어요. 그래서...',
    choices: [
      {
        text: '계속 쉴래!',
        resultText: '인생 뭐 있나 그냥 쉬다보면 하루가 가는거지~',
        nextSequence: '4',
        calculate: () => {
          store.dispatch(changeStat(1));
        },
      },
      {
        text: '운동할래!',
        resultText: '아기 코끼리는 근처 강가에서 브레이크 댄스를 췄어요',
        nextSequence: '4',
        calculate: () => {
          store.dispatch(changeStat(1));
        },
      },
      {
        text: '계속 마쉴래!',
        resultText: '아기 코끼리는 근처 강가에서 목을 축였어요. 시원해!',
        nextSequence: '4',
        calculate: () => {
          store.dispatch(changeStat(1));
        },
      },
      {
        text: '계속 먹을래!',
        resultText: '마침 건초 더미가 있어서 맛나게 냠냠했어용. 오이시!',
        nextSequence: '4',
        calculate: () => {
          store.dispatch(changeStat(1));
        },
      },
    ],
  },
  {
    sequence: '4',
    content: '1일차 종료',
    choices: [
      {
        text: '2일차 진행하기',
        resultText: '마침 건초 더미가 있어서 맛나게 냠냠했어용. 오이시!',
        nextSequence: '1',
        calculate: () => {
          store.dispatch(changeDay(2));
        },
      },
    ],
  },
];

export default day1;
