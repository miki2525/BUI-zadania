import React, {useState} from 'react';
import Photo from './photo.js';
import {ArrowRepeat} from 'react-bootstrap-icons';

export default function PhotoList({
                                      photoList = [],
                                      deletePhoto = (f) => f,
                                      sortByTitle = (f) => f,
                                      sortByDate = (f) => f,
                                      shuffleList = (f) => f,
                                      onLikeIt = (f) => f,
                                      onDisLikeIt = (f) => f,
                                      onRate = (f) => f,
                                      showDetails = (f) => f
                                  }) {
    if (!photoList.length) {
        return <div>List is empty</div>;
    }

    return (
        <div>
            <ul>
                <div>
                    Sortuj według:
                    <button id="byTitle" className="btn" onClick={sortByTitle}>
                        Tytułu
                    </button>
                    <button id="byDate" className="btn" onClick={sortByDate}>
                        Daty dodania
                    </button>
                    <button className="shuffle btn btn-info" onClick={shuffleList}>
                        <ArrowRepeat/> PRZETASUJ LISTĘ <ArrowRepeat/>
                    </button>
                </div>
                {photoList.map((photo, index) => (
                    <Photo
                        index={index}
                        key={photo.title}
                        {...photo}
                        onRemovePhoto={deletePhoto}
                        onLikeIt={onLikeIt}
                        onDislikeIt={onDisLikeIt}
                        rateIt={onRate}
                        showDetails={showDetails}
                    />
                ))}
            </ul>
        </div>
    );
}
