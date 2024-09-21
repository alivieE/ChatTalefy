import React, { useState, useEffect } from 'react'
import { Notify } from 'notiflix/build/notiflix-notify-aio'
import s from './CurrentCity.module.css'
const CurrentCity = ({ setWeatherInfo, setShowMore }) => {
  const [currentWeather, setCurrentWeather] = useState(null)
  const [coords, setCoords] = useState(null)
  useEffect(() => {
    async function getWeather5days() {
      function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition)
        } else {
          Notify.failure('Geolocation is not supported by this browser.')
        }
      }

      async function showPosition(e) {
        const lat = e.coords.latitude
        const lon = e.coords.longitude

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=339e1844bebf8f63ab64464700a9c37e&units=metric`,
        )
        const res = await response.json()
        console.log(res)
        if (res.cod !== 200) {
          Notify.failure('Something go wrong!')
          return
        }
        Notify.success('Success!')
        setCurrentWeather(res)
        setCoords({ lat, lon })
      }
      getLocation()
    }
    getWeather5days()
  }, [])

  async function showMoreEvent(e) {
    console.log(coords)
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&appid=339e1844bebf8f63ab64464700a9c37e&units=metric`,
    )
    const res = await response.json()
    if (res.cod !== '200') {
      Notify.failure('Something go wrong!')
      return
    }
    Notify.success('Success!')
    setWeatherInfo(res)
    setShowMore(true)
  }

  return (
    <div>
      {currentWeather && (
        <div className={s.currentInfo}>
          <img
            className={s.weatherIcon}
            src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
            alt=""
          />
          <p className={s.city}>{currentWeather.name}</p>
          <p className={s.temp}>{currentWeather.main.temp}°C</p>
          <button className={s.btn} onClick={showMoreEvent}>
            Show More
          </button>
        </div>
      )}
    </div>
  )
}

export default CurrentCity
