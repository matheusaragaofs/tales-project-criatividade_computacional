import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Container } from './styles';

import { EffectCoverflow, Pagination } from 'swiper';
import Link from 'next/link';
import { storiesData } from '../../../config/storiesData';

const parentalRatingColors = {
  0: '#20af2c',
  16: '#f32a2a',
  18: '#383737',
};
export default function Carousel() {
  const [currentTale, setCurrentTale] = useState(storiesData[0]);
  return (
    <Container>
      <div className="header-title">
        <div className="ht">Audiobooks Imersivos</div>
        <div className="hd"> Mergulhe em histórias como nunca antes...</div>
      </div>

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        slideToClickedSlide={true}
        fadeEffect={{ crossFade: true }}
        onSlideChange={(swiper) => {
          setCurrentTale(storiesData[swiper.activeIndex]);
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
        {storiesData.map((item, index) => {
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
      {['horror', 'fantasy'].includes(currentTale.story) && (
        <Link href={`/story/${currentTale.story}`}>
          <div className="go-to-history-btn">Ir para história</div>
        </Link>
      )}
      <div className="description">{currentTale.description}</div>

      <div className="characters-list">
        {currentTale?.characters?.map(({ name, description, image }, index) => (
          <div key={name} className="characters">
            {/* <img width={100} height={100} src={image} alt={name} /> */}
            <Image width={100} height={100} src={image} alt={name} />
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
