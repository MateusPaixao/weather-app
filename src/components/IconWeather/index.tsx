import React, { Fragment } from 'react';
import * as icons from "react-feather";
import { Sun, Moon, Cloud, CloudDrizzle, CloudRain, CloudLightning, CloudSnow, Wind, } from 'react-feather'

export type IconName = keyof typeof icons;

interface IconWeatherProps {
    name: string,
    size?: string | number,
    color?: string,
}

const IconWeather: React.FC<IconWeatherProps> = ({ name, ...rest }) => {
  // detailed map icons on https://openweathermap.org/weather-conditions
  const IconMap = {
    '01d': Sun,
    '01n': Moon,
    '02d': Cloud, 
    '02n': Cloud,
    '03d': Cloud,
    '03n': Cloud,
    '04d': Cloud,
    '04n': Cloud,
    '09d': CloudDrizzle,
    '09n': CloudDrizzle,
    '10d': CloudRain,
    '10n': CloudRain,
    '11d': CloudLightning,
    '11n': CloudLightning,
    '13d': CloudSnow,
    '13n': CloudSnow,
    '50d': Wind,
    '50n': Wind,
  }

  const Icon = IconMap[name as keyof typeof IconMap]
  return (
    <Fragment>
        <Icon {...rest} />
    </Fragment>
  )
}

export default IconWeather;