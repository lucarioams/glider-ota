import {FaBed} from "react-icons/fa";
import {IconHotelBed} from '../icons/icons';

import style from "./lodging-info.module.scss"
import React from 'react';
import {format, parseISO} from "date-fns";
import {safeDateFormat} from '../../../utils/offer-utils'
import {IconContext} from "react-icons";

export const LodgingInfo = ({checkInDate, checkOutDate, cityName}) => {
    return (
        <div className={style.adBox}>
            <div className={style.adIcon}><IconHotelBed/></div>
            <div className={style.adDetails}>
                <div className={style.adDate}>
                    {checkInDate && safeDateFormat(checkInDate, 'dd MMM')}
                    {checkInDate && checkOutDate && ('-')}
                    {checkOutDate && safeDateFormat(checkOutDate, 'dd MMM')} </div>
                <div className={style.adCityName}>{cityName}</div>
            </div>
        </div>
    )
}

