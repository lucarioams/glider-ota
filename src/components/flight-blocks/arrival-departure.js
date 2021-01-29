import style from "./arrival-departure.module.scss"
import React from 'react';
import {safeDateFormat} from '../../utils/offer-utils'
import {IconContext} from "react-icons";
import {IconPlaneArrival, IconPlaneDeparture} from '../icons/icons';

export const ADTYPES = {
    ARRIVAL: 'arrival',
    DEPARTURE: 'departure',
    NONE: 'none'
}

/**
 * Renders information about departure (or arrival) date, city name, city code
 * @param cityName
 * @param cityCode
 * @param date
 * @param adType
 * @returns {JSX.Element}
 * @constructor
 */
export const ArrivalDeparture = ({cityName, cityCode, date, adType = ADTYPES.NONE}) => {
    const renderIcon = () => {
        if (adType === ADTYPES.ARRIVAL)
            return (<IconPlaneArrival/>)
        if (adType === ADTYPES.DEPARTURE)
            return (<IconPlaneDeparture/>)
        return (<></>)
    }

    return (

        <div className={style.adBox}>
            <IconContext.Provider value={{ className: "icon-primary-color" }}>
                <div className={style.adIcon}>{renderIcon()}</div></IconContext.Provider>
            <div className={style.adDetails}>
                <div className={style.adDate}>{safeDateFormat(date, 'dd MMM, EE')}</div>
                <div><span className={style.adTime}>{safeDateFormat(date, 'HH:mm')}</span> <span
                    className={style.adCityName}>{cityName},</span> <span className={style.adCityCode}>{cityCode}</span>
                </div>
            </div>
        </div>

    )
}

