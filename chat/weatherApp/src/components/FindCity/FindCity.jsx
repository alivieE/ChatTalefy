import React,{useState} from 'react';
import s from './FindCity.module.css'
import { Notify } from 'notiflix/build/notiflix-notify-aio'

const FindCity = ({setWeatherInfo,setShowMore}) => {
    const [inputValue, setInputValue] = useState('')
    const [favCity, setFavCity] = useState(() => {
        return (
          JSON.parse(localStorage.getItem('FavoriteCities')) || []
        )
      })
    function handleInput(e) {
        setInputValue(e.target.value)
      }

      
    async function fetchData(query) {
        if(query === ''){
Notify.failure('Enter City!')
return
        }
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=339e1844bebf8f63ab64464700a9c37e&units=metric`,
          )
          const res = await response.json()
          console.log(res)
          if (res.cod !== '200') {
            Notify.failure('City not found!')
            return
          }
          Notify.success('Success!')
          setWeatherInfo(res)
          setShowMore(true)
  const prevFavoriteCities =  JSON.parse(localStorage.getItem('FavoriteCities')) || []
  console.log(query);
  console.log(!favCity.includes(query.toLowerCase()));
  if(!favCity.includes(query.toLowerCase())){

      prevFavoriteCities.push(query.toLowerCase())
      setFavCity(prevFavoriteCities)
      localStorage.setItem('FavoriteCities',JSON.stringify(prevFavoriteCities))
  }
          setInputValue('')
    }

   function onSubmitForm(e) {
        e.preventDefault()
       fetchData(inputValue)
      }

function findFavCity(city) {

    fetchData(city)
}

function delFav(city) {
const newFavCity = favCity.filter((oldCity)=>{
    return city.toLowerCase() !== oldCity
})
setFavCity(newFavCity)
localStorage.setItem('FavoriteCities',JSON.stringify(newFavCity))
}
    return (
        <div>
            <form className={s.form} onSubmit={onSubmitForm} action="submit">
          <input
            onChange={handleInput}
            className={s.input}
            value={inputValue}
            type="text"
          />
          <button className={s.btnFind} type="submit">
            Find
          </button>
        </form>
        
{
    favCity.length > 0 ? <ul className={s.favList}>
{favCity.map((city)=>{
    return(<li  className={s.cityWrap}><p className={s.favCity} onClick={(e)=>{
        e.preventDefault()
        findFavCity(city)}}>{city}</p>
        <img onClick={()=>{
            delFav(city)
        }} className={s.close}  alt="" />
        </li>)
})}

    </ul>:<p>no fav city</p>
}
        
        </div>
    );
}

export default FindCity;
