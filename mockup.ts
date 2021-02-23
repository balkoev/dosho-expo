import images from './constants/Images';

const data = [
  {
    id: 1,
    title: 'Человек и семья',
    cover: images.family,
    children: [
      {
        id: 11,
        title: 'Семья',
        cover: images.family,
      },
      {
        id: 22,
        title: 'Человек',
        cover: images.family,
      },
      {
        id: 33,
        title: 'Чувства',
        cover: images.family,
      },
      {
        id: 12,
        title: 'Семья',
        cover: images.family,
      },
      {
        id: 23,
        title: 'Человек',
        cover: images.family,
      },
      {
        id: 34,
        title: 'Чувства',
        cover: images.family,
      },
    ],
  },
  {
    id: 2,
    title: 'Природа и животные',
    cover: images.animals,
    children: [
      {
        id: 111,
        title: 'Природа',
        cover: images.family,
      },
      {
        id: 222,
        title: 'Животные',
        cover: images.family,
      },
      {
        id: 333,
        title: 'Природа',
        cover: images.family,
      },
    ],
  },
  {
    id: 3,
    title: 'Дом и быт',
    cover: images.house,
    children: [
      {
        id: 1111,
        title: 'Дом',
        cover: images.family,
      },
      {
        id: 2222,
        title: 'Быт',
        cover: images.family,
      },
      {
        id: 3333,
        title: 'Двор',
        cover: images.family,
      },
    ],
  },
  {
    id: 4,
    title: 'Работа и карьера',
    cover: images.work,
    children: [
      {
        id: 11111,
        title: 'Работа',
        cover: images.family,
      },
      {
        id: 22222,
        title: 'Карьера',
        cover: images.family,
      },
      {
        id: 33333,
        title: 'Что-то',
        cover: images.family,
      },
      {
        id: 11112,
        title: 'Работа',
        cover: images.family,
      },
      {
        id: 22223,
        title: 'Карьера',
        cover: images.family,
      },
      {
        id: 33334,
        title: 'Что-то',
        cover: images.family,
      },
    ],
  },
  {
    id: 5,
    title: 'Человек и семья',
    cover: images.family,
    children: [],
  },
  {
    id: 6,
    title: 'Природа и животные',
    cover: images.animals,
    children: [],
  },
  {
    id: 7,
    title: 'Дом и быт',
    cover: images.house,
    children: [],
  },
  {
    id: 8,
    title: 'Работа и карьера',
    cover: images.work,
    children: [],
  },
];

export default data;
