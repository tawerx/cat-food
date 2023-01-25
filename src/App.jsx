import React from 'react';
import Card from './components/Card';
import './styles/app.scss';

const cardsInfo = [
  {
    id: 1,
    title: 'Сказочное заморское яство',
    taste: 'фуа-гра',
    description: 'Печень утки разварная с артишоками',
    weight: 0.5,
    portion: 10,
    gift: 1,
    available: true,
  },
  {
    id: 2,
    title: 'Сказочное заморское яство',
    taste: 'рыбой',
    description: 'Головы щучьи с чесноком да свежайшая сёмгушка',
    weight: 2,
    portion: 40,
    gift: 2,
    available: true,
  },
  {
    id: 3,
    title: 'Сказочное заморское яство',
    taste: 'курой',
    description: 'Филе из цыплят с трюфелями в бульоне',
    weight: 5,
    portion: 100,
    gift: 5,
    available: false,
  },
];

const App = () => {
  return (
    <div className="wrapper">
      <div className="background"></div>
      <div className="header">Ты сегодня покормил кота?</div>
      <div className="cards">
        {cardsInfo.map((obj) => (
          <Card key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
};

export default App;
