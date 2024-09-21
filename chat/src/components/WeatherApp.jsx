import React, { useEffect, useState } from 'react'
import s from './WeatherApp.module.css'
import { LineChart } from '@mui/x-charts/LineChart';
import CurrentCity from './CurrentCity/CurrentCity'
import FindCity from './FindCity/FindCity'

const WeatherApp = () => {
  const [weatherInfo, setWeatherInfo] = useState(null)
  const [showMore, setShowMore] = useState(false)
const [temps, settemps] = useState([]);


  const res = weatherInfo?.list?.map((el)=>{
      return el.main.temp
    }).slice(0,10) || [1,2,4]

  console.log(weatherInfo?.list?.map((el)=>{
    return el.main.temp
  }).slice(0,10));


  return (
    <>
      <header className={s.header}>
        <div className={s.logoWrap}>
          <img
            className={s.logo}
            src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png"
            alt=""
          />
        </div>
        <FindCity  setWeatherInfo={setWeatherInfo} setShowMore={setShowMore}/>
        <CurrentCity
          setWeatherInfo={setWeatherInfo}
          setShowMore={setShowMore}
        />
        
      </header>
      {temps && <LineChart
  xAxis={[{ data: [1, 2, 3, 4, 5, 6,7, 8, 9, 10,] }]}
  series={[
    {
      data: res,
    },
  ]}
  width={500}
  height={300}
/> }
      <div className={s.moreInfoWrap}>
        <h2 className={s.subtitle}>Weather Info</h2>
        {weatherInfo && showMore && (
          <ul className={s.weatherList}>
            {weatherInfo.list.map((dayTime) => {
              const date = new Date(dayTime.dt * 1000)

              const month = [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
              ]

              return (
                <li key={dayTime.dt} className={s.weatherItem}>
                  <img
                    className={s.weatherIcon}
                    src={`https://openweathermap.org/img/wn/${dayTime.weather[0].icon}@2x.png`}
                    alt=""
                  />
                  <p className={s.city}>{weatherInfo.city.name}</p>
                  <p className={s.date}>{`${date.getDate()} ${
                    month[date.getMonth()]
                  }`}</p>
                  <p className={s.time}>{`${date.getHours()}:00`}</p>
                  <p className={s.temp}>{dayTime.main.temp}°C</p>
                  <p className={s.pressure}>{dayTime.main.pressure} mm</p>
                  <p className={s.humidity}>{dayTime.main.humidity} %</p>
                </li>

                
              )
            })}
          </ul>
        )}

        {(!weatherInfo || !showMore) && <p>No info</p>}

        
      </div>
    </>
  )
}

export default WeatherApp
