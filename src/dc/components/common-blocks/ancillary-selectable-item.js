import React,{useState} from 'react';
import style from "./ancillary-selectable-item.module.scss"
import {Col,Row, Form} from 'react-bootstrap'

export const AncillarySelectableItem = ({id, name, price, description, items, isSelected, isDisabled, onSelect}) => {
    const [selected, setSelected] = useState(isSelected)
    items = items || [];

    const onChange = (e) => {
        setSelected(true)
        if(onSelect) {
            onSelect(id);
        }else{
            console.warn('onSelect is undefined!')
        }
    }

    return (
        <div className={style.ancillaryContainer} onClick={onSelect}>
            <Row>
            <Col sm={6}>{name && <Form.Check type={'radio'} label={name} className={style.ancillaryName} checked={selected} onChange={onChange} disabled={isDisabled}/>}</Col>
            <Col sm={4} className={style.ancillaryDescription}>{description}</Col>
            <Col sm={2} className={style.ancillaryPrice}>{price}</Col>
            </Row>
            <div className={style.ancillaryList}>
            {
                items.map((item) =>(<div className={style.ancillaryItem}>{item}</div>))
            }
            </div>
    </div>)
}
