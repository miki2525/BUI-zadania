import React from 'react';
import './photoStyle.scss';
import {
    HandThumbsUpFill,
    HandThumbsDownFill,
    Trash3,
} from 'react-bootstrap-icons';
import Likes from './likes.js';
import ReactStars from 'react-rating-stars-component';

export default function Photo({
                                  index,
                                  image,
                                  title,
                                  showDetails = (f) => f,
                              }) {
    return (
        <li>
            <section>
                <h1>{title}</h1>
                <img src={image}/>
                <button
                    className="rm btn btn-warning"
                    onClick={() => showDetails(index)}
                >Szczegóły
                </button>
            </section>
        </li>
    );
}
