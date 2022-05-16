import { Button } from "react-bootstrap";
import React from "react";
import './button.scss'

const MyButton = (props) => {
    return (
        <Button variant={props.color}>
            {props.text}
        </Button>
    )
}

export default MyButton;