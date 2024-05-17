import React from 'react';
import { SearchBarComp } from '../../../../types/ComponentsType';
import style from "./SearchBar.module.css";

export const SearchBar: React.FC<SearchBarComp> = ({ search, controlledSearchBar, onSubmit }) => {

  return (
    <form>
      <input
        name="lat"
        onChange={(e) => controlledSearchBar(e, "lat")}
        placeholder='Latitude'
        className={style.input}
      />
      <span className={style.divider}>/</span>
      <input
        name="lon"
        onChange={(e) => controlledSearchBar(e, "lon")}
        placeholder='Longitude'
        className={style.input}
      />
      <button type="button" onClick={() => onSubmit(search.lat, search.lon)} className={style.button}>Search</button>
    </form>
  );
};