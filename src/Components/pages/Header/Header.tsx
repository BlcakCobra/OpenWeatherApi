import  { ChangeEvent, useEffect, useState } from 'react'
import { SearchBar } from './SearchBar/SearchBar'
import { useAppDispatch, useAppSelector} from '../../../hooks';
import { AsyncCall5Day, AsyncCurrentWeather } from '../../../store/Slices/CurrentWeatherSlice';
import { images } from '../../../images';
import style from "./Header.module.css"
import { Sound } from './SoundComp/Sound';
import { HeaderChapters } from './HeaderChapters/HeaderChapters';
import { Main } from './Main/Main';


export default function Header() {
  const dispatch = useAppDispatch();
  const {weather5Days,weatherNow} = useAppSelector(state => state.currentWeather)
  console.log(weather5Days,weatherNow);
  
  const [search, setSearch] = useState({ lat: "", lon: "" });
  const [volume, setVolume] = useState(25);
  const [section, setSection] = useState("CurrentWeather");
  const chapters = ["CurrentWeather", "5 Day / 3 Hour Forecast"];

  useEffect(() => {
    if (search.lat !== "" && search.lon !== "") {
      dispatch(AsyncCurrentWeather(search));
      dispatch(AsyncCall5Day(search));
    }
  }, [search, dispatch]);

  const controlledSearchBar = (e: ChangeEvent<HTMLInputElement>, field: string) => {
    setSearch(prevState => ({
      ...prevState,
      [field]: e.target.value
    }));
  };

  const changeVolume = (event: ChangeEvent<HTMLInputElement>) => {
    setVolume(parseInt(event.target.value));
  };


  const handleSection = (section: string) => {
    setSection(section);
    console.log(section);
  };

  return (
    <header className={style.header} style={{ backgroundImage: `url(${images[0].image})` }}>
      <div className={style.upMenu}>
        <div className={style.Bar}>
          <div className={style.SearchBar}>
            <SearchBar
              search={search}
              controlledSearchBar={controlledSearchBar}
              onSubmit={() => {
                if (search.lat !== "" && search.lon !== "") {
                  dispatch(AsyncCurrentWeather(search));
                  dispatch(AsyncCall5Day(search));
                }
              }}
            />
          </div>

          <div className={style.soundBar}>
            <Sound
              volume={volume}
              changeVolume={changeVolume}
            />
          </div>
        </div>
      </div>
      <HeaderChapters
        chapters={chapters}
        section={section}
        handleSection={handleSection}
      />
      <Main
        section={section}
      />
    </header>
  );
}