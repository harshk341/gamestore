import React, { memo, useState } from 'react';
import { platformIcon } from 'src/helpers/platformIcon';
import { Swiper, SwiperSlide } from 'swiper/react';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import {
  IMAGE_URL,
  LARGE_IMAGE_URL,
  MEDIUM_IMAGE_URL
} from 'src/constants/api';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper';
import { Link } from 'react-router-dom';
dayjs.extend(localizedFormat);

const RenderGame = ({ game, screenshots }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [short, setShort] = useState(true);
  const shortRequired = game.descriptionRaw.length > 270 && short;
  const shortDescription = shortRequired
    ? `${game.descriptionRaw.slice(0, ~~(game.descriptionRaw.length / 2))}... `
    : game.descriptionRaw;
  const releasedDate = dayjs(game.released).format('ll');
  const toggleDescription = () => {
    setShort(prev => !prev);
  };

  return (
    <div className="game">
      <div className="game__info">
        <div className="game__head">
          <span className="game__released">{releasedDate}</span>
          <div className="game__platform">
            {game.parentPlatforms.map(({ platform }) => (
              <span key={platform.id}>{platformIcon(platform.slug)}</span>
            ))}
          </div>
        </div>
        <h2 className="game__title">{game.name}</h2>
        <img
          src={game.backgroundImage.replace(IMAGE_URL, LARGE_IMAGE_URL)}
          alt={game.slug}
        />
        <div className="game__screenshots">
          <Swiper
            spaceBetween={10}
            navigation={true}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
            }}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {screenshots.map(({ id, image }, indx) => (
              <SwiperSlide key={id}>
                <img
                  src={image.replace(IMAGE_URL, LARGE_IMAGE_URL)}
                  alt={`screenshots-${indx}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {screenshots.map(({ id, image }, indx) => (
              <SwiperSlide key={id}>
                <img
                  src={image.replace(IMAGE_URL, MEDIUM_IMAGE_URL)}
                  alt={`screenshots-${indx}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="game__content">
          <h2 className="heading-3">About</h2>
          <p className="game__description">
            {shortDescription}
            {game.descriptionRaw.length > 270 && (
              <button className="read__more" onClick={toggleDescription}>
                Read {short ? 'more' : 'less'}
              </button>
            )}
          </p>
          <div className="game__meta">
            <div className="game__meta__info__block">
              <h4 className="heading-4">Genre</h4>
              <p>
                {game.genres.map((item, indx, arr) =>
                  indx !== arr.length - 1 ? `${item.name}, ` : item.name
                )}
              </p>
            </div>
            <div className="game__meta__info__block">
              <h4 className="heading-4">Metascore</h4>
              <p>{game.metacritic}</p>
            </div>
            <div className="game__meta__info__block">
              <h4 className="heading-4">Average Playtime</h4>
              <p>{game.playtime}</p>
            </div>
            <div className="game__meta__info__block">
              <h4 className="heading-4">Release date</h4>
              <p>{releasedDate}</p>
            </div>
            <div className="game__meta__info__block expanded">
              <h4 className="heading-4">website</h4>
              <p>
                <a href={game.website}>{game.website}</a>
              </p>
            </div>
            <div className="game__meta__info__block expanded">
              <h4 className="heading-4">Tags</h4>
              <p>
                {game.tags.map(item => (
                  <Link
                    className="game__meta_tag"
                    key={item.slug}
                    to={`/games?tags=${item.slug}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(RenderGame);
