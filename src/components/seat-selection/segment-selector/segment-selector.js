import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import './segment-selector.scss';

export default function SegmentSelector(props) {
    // Destructure properties
    const {
        stops,
        flightTime,
        index,
    } = props;

    // Compute the progress bar value
    const getProgress = () => {
        // Force last segment to 100%
        if(index === (stops.length - 2)) {
            return 100;
        }

        // Previous segments are slightly shifted right
        // So we let 2% on the right and 2% on the left to align with first and last cities
        return Number(2 + 96* (index + 1) / (stops.length - 1)).toFixed(0);
    }

    return (
        <div className='segment-selector'>
            <div className='flight-time'>{flightTime}</div>
            <ProgressBar now={getProgress()}/>
            <div className='route'>
                {stops.map((stop, key) => (<div key={key}>{stop}</div>))}
            </div>
        </div>
    )
}