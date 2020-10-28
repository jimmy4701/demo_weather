import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import CityForm from '../components/CityForm'
import { CircularProgress } from '@material-ui/core'

const Article = () => {
    const { id } = useParams()
    const [city, setCity] = useState(id)
    const [weather_result, setWeatherResult] = useState()
    const [display_form, setDisplayForm] = useState(false)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2ccc3fa1e17344768c6e04eaf9271927`)
        .then(res => res.json()).then(result => {
            setWeatherResult(result)
        })
    }, [id, city])

    const change_city = (city_name) => {
        setCity(city_name)
        setDisplayForm(false)
    }

    return(
        <div>
            <h1 onClick={() => setDisplayForm(!display_form)}>{city}</h1>
            {display_form && <CityForm city={city} onCitySubmit={change_city} />}
            {weather_result ?
                <h2>
                    {weather_result.weather[0].description}
                </h2>
            :
                <CircularProgress />
            }
        </div>
    )
}

export default Article