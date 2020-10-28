import React, {useState} from 'react'
import { Input } from '@material-ui/core'

const CityForm = (props) => {
    const [city_name, setCityName] = useState(props.city)

    const submit = (e) => {
        e.preventDefault()
        props.onCitySubmit(city_name)
    }

    return(
        <form onSubmit={submit}>
            <Input 
                type="text"
                autoFocus={true}
                onChange={e => setCityName(e.target.value)}
                value={city_name}
            />
        </form>
    )
}

export default CityForm