import * as React from 'react';
import { CardItem } from '../Common/index.js';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IMG_URL, navLists } from '../../shared/constant.js';
import { linkUrl, shuffleAndSliceArray, classifyAddon } from '../../shared/utils.js';
import { SectionTitle } from '../Common/index.js';

const SectionSlider = ({ films }) => {
  // console.log(films)
  const limitedPhimles = shuffleAndSliceArray(films?.Phimle || [], 12);
  const limitedPhimbos = shuffleAndSliceArray(films?.Phimbo || [], 12);
  const limitedTVShows = shuffleAndSliceArray(films?.TVShows || [], 12);
  const limitedHoathinh = shuffleAndSliceArray(films?.Hoathinh || [], 12);
  const sectionFilms = navLists.slice(1, 5);
  // console.log(limitedPhimbos);
  return (
    <div>
      <div>
        {sectionFilms.map((sectionFilm, index) => {
          let selectedFilms = [];
          switch (sectionFilm) {
            case 'PHIM BỘ':
              selectedFilms = limitedPhimbos;
              break;
            case 'PHIM LẺ':
              selectedFilms = limitedPhimles;
              break;
            case 'TVSHOWS':
              selectedFilms = limitedTVShows;
              break;
            case 'HOẠT HÌNH':
            default:
              selectedFilms = limitedHoathinh;
              break;
          }
          return (
            <div key={index}>
              <div className='w-full !border-b !border-[#1e2732]'>
                <SectionTitle sectionFilm={sectionFilm} />
              </div>
              <div className='mt-2 grid grid-cols-2 gap-2 md:grid-cols-4 md:grid-rows-3 lg:mr-5 min-h-screen mb-5'>
                {selectedFilms &&
                  selectedFilms.map((film, filmindex) => (
                    <div
                      key={filmindex}
                      className='overflow-hidden responsive-item'>
                      <Link to={linkUrl(film)}>
                        <CardItem
                          key={film._id}
                          data={film}
                          image={`${IMG_URL}/${film.thumb_url}`}
                          title={film.name}
                          originalName={film.origin_name}
                          quality={film?.quality}
                          lang={film.lang}
                          addOn={classifyAddon(film)}
                          cardItemQualang='cardItemQualang'
                        />
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
// SectionSlider.propTypes = {
//   films: PropTypes.array,
// };

export default SectionSlider;
