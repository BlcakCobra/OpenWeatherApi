import { useState } from "react"
import { useAppSelector } from "../../../../hooks"
import { HeaderChaptersComp } from "../../../../types/ComponentsType"
import style from "./HeaderChapters.module.css"

export const HeaderChapters: React.FC<HeaderChaptersComp> = ({chapters,handleSection,section}) => {
    const {weatherNow} =useAppSelector(state => state.currentWeather)

  return (
      <div className={style.chapterInfo}>
      {
          chapters.map((el,index) =>{
            return( 
            <div key={index} className={style.chaptersNames} onClick={() => handleSection(el)}>
              {el}
            </div>
          )
          })
        }
      </div>
  )
}
