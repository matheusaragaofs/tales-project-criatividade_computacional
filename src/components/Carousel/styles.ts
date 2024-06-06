import styled, { css } from 'styled-components';

export const Container = styled.div`
  background: rgba(13, 0, 28, 0.833);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .header-title {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .ht {
      font-size: 2rem;
    }
    .hd {
      color: #ff67bd;
      text-shadow: 0 0 2px #ff27a1;
      transition: 0.5s;
      font-size: 1.3rem;
    }
  }

  .characters-list {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 5rem;
    margin-top: 2rem;
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 3rem;
    }
    .characters {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: 1rem;
      img {
        border-radius: 50%;
      }
    }
  }
  .go-to-history-btn {
    padding: 0.5rem 1rem;
    margin-bottom: 3rem;
    background-color: #f92797;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      background-color: #ff67bd;
    }
  }

  .swiper-pagination {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
  }
  .swiper-pagination-bullet {
    background-color: white;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: 0 0.5rem;
  }
  .swiper-pagination-bullet-active {
    background-color: #ff67bd;
  }
  .swiper {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    /* width: 400px;
  height: 300px; */
    max-width: 400px;
    filter: blur(4px);
  }

  .swiper-slide-active {
    filter: blur(0px);
  }
  .swiper-slide img {
    display: block;
    width: 100%;
  }


  position: relative;
  width: fit-content;
  margin: auto;
  /* cursor: pointer; */

  .image {
    overflow: hidden;
    position: relative;
    border-radius: 6px;
  }

  .header {
    text-align: center;
    font-size: 22px;
    font-weight: bold;
  }

  .title {
    text-align: center;
    height: 50px;
    width: 100%;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0)
    );
    position: absolute;
    bottom: 0;
    font-size: 18px;
    text-shadow: 4px 1px 8px black;
    padding: 5px 0 0 5px;

    background: rgba(0, 0, 0, 0.6);
    padding: 2px 10px;
    box-shadow: 0px -20px 16px #00000094;
  }
  .title > div {
    width: fit-content;
    margin: auto;
    cursor: pointer;
  }

  .title:hover {
    color: #ff67bd;
    text-shadow: 0 0 2px #ff27a1;
    transition: 0.5s;
  }

  .rating {
    display: flex;
    margin: 5px 5px 0 0;
    position: absolute;
    /* transform: translate(-30px,-30px); */
    top: 0;
    right: 0;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    width: 36px;
    height: 36px;
    background: red;
  }

  .description {
    margin-bottom: 2rem;
    width: 50%;
    align-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 6rem;
    @media (max-width: 768px) {
      width: 100%;
      height:100%
    }
  }
  .credits {
    gap: 3;
    text-align: center;
    margin-top: 10rem;
    font-size: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
