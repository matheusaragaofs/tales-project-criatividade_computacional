import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Container } from './styles';

import { EffectCoverflow, Pagination } from 'swiper';
export const data = [
  {
    cover: '/characters/fantasy/poster.png',
    title: 'A Busca do Trio Encantado',
    gender: 'Fantasia',
    parentalRating: 0,
    description:
      'Três amigos improváveis aventuram-se na mística floresta de Eldoria em busca do Coração de Eldoria, uma joia mágica que pode trazer prosperidade ao reino de Aeronvale. Juntos, enfrentam desafios sobrenaturais, provando sua coragem, sabedoria e unidade',
    characters: [
      {
        name: 'Aric',
        description: 'O mago sábio',
        image: '/characters/fantasy/aric.png',
      },
      {
        name: 'Lyra',
        description: 'A arqueira ágil',
        image: '/characters/fantasy/lyra.png',
      },
      {
        name: 'Gareth',
        description: 'O cavaleiro valente',
        image: '/characters/fantasy/gareth.png',
      },
    ],
  },
  {
    cover: '/characters/horror/poster.png',
    title: ' A Assombração da Mansão Blackwood',
    gender: 'Terror',
    parentalRating: 18,
    description:
      'Três amigos exploram a assombrada Mansão Blackwood, enfrentando fenômenos sobrenaturais e descobrindo a trágica história da família que ali viveu. Com coragem e união, realizam um ritual para libertar os espíritos presos, transformando a atmosfera sinistra em calma e paz.',
    characters: [
      {
        name: 'Emma',
        description: 'A líder',
        image: '/characters/horror/emma.png',
      },
      {
        name: 'Alex',
        description: 'O cético',
        image: '/characters/horror/alex.png',
      },
      {
        name: 'Lily',
        description: 'A sensisitva',
        image: '/characters/horror/lily.png',
      },
    ],
  },
  {
    cover: '/characters/action/poster.png',
    title: 'A Última Resistência em Ember Ridge',
    gender: 'Ação',
    parentalRating: 16,
    description:
      'Três amigos com poderes únicos defendem Ember Ridge em meio a uma batalha devastadora. Elias cura feridos, Mara controla a eletricidade e Ryan usa supervelocidade para superar o inimigo. Juntos, enfrentam o caos e o perigo, tornando-se lendas de coragem e amizade.',
    characters: [
      {
        name: 'Elias',
        description: 'O curandeiro',
        image: '/characters/action/elias.png',
      },
      {
        name: 'Mara',
        description: 'A menina elétrica',
        image: '/characters/action/mara.png',
      },
      {
        name: 'Ryan',
        description: 'O lépido',
        image: '/characters/action/ryan.png',
      },
    ],
  },
];

const parentalRatingColors = {
  0: '#20af2c',
  16: '#f32a2a',
  18: '#383737',
};
export default function Carousel() {
  const [currentTale, setCurrentTale] = useState(data[0]);
  return (
    <Container>
      <div className="header-title">
        <div className="ht">Audiobooks Imersivos</div>
        <div className="hd"> Mergulhe em histórias como nunca antes...</div>
      </div>

      <Swiper
        effect={'coverflow'}
        grabCursor={false}
        slideToClickedSlide={true}
        fadeEffect={{ crossFade: true }}
        onSlideChange={(swiper) => {
          setCurrentTale(data[swiper.activeIndex]);
        }}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        loop={false}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="header">{item.gender || `${index}`}</div>
              <div className="image">
                <img height={250} width={400} src={item.cover} alt="" />
                <div
                  className="rating"
                  style={{
                    backgroundColor:
                      parentalRatingColors[
                        item.parentalRating as keyof typeof parentalRatingColors
                      ],
                  }}
                >
                  {item.parentalRating === 0 ? 'L' : item.parentalRating}
                </div>
                <div className="title">
                  <div>{item.title}</div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <a target="_blank" href="https://www.youtube.com/watch?v=VVHJk35NHBs">
        <div className="go-to-history-btn">Ir para história</div>
      </a>
      <div className="description">{currentTale.description}</div>

      <div className="characters-list">
        {currentTale?.characters?.map(({ name, description, image }, index) => (
          <div className="characters">
            <img width={100} height={100} src={image} alt={name} />
            <div>
              <div>{name}</div>
              <div
                style={{
                  width: '10rem',
                  height: '3rem',
                }}
              >
                {description}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="credits">
        <div>
          Projeto Autoral na cadeira de Criatividade Computacional, ministrada
          pelo professor Filipe Calegario.
        </div>
        <div
          style={{
            margin: '1rem 0',
          }}
        >
          Matheus Aragão, Natan Frederico, Guilherme Maciel, Erlan Liran, Sérgio
          Leonardo e Otávio Augusto
        </div>
        <div>{`{ mafs4, nfsl, gmm7, elsj, slbp, oamo }@cin.ufpe.br`}</div>
        <div>Jun 2024</div>
      </div>
    </Container>
  );
}
