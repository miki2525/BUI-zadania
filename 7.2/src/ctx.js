import React, {createContext, useState, useContext, useEffect} from 'react';
import data from './data.json';

const AppContext = createContext();
export const useAppCtx = () => useContext(AppContext);

export default function AppContextProvider({children}) {

    const [photoList, setPhotos] = useState(data);
    const [deletedPhotos, setDeletedPhotos] = useState([]);
    const [sortPreferences, setOrder] = useState({
        byTitle: 'ASC',
        byDate: 'DES',
    });
    const [alreadyLiked, addIdsLiked] = useState(new Map());

    useEffect(() => {
        const objFromLocal = localStorage.getItem('photoListState');
        if (objFromLocal !== null) {
            setPhotos(JSON.parse(objFromLocal));
        }
    }, []);

    function deletePhoto(id) {
        if (window.confirm('Czy napewno chcesz usunąć to zdjęcie')) {
            const newDeletedPhotos = deletedPhotos;
            const newPhotoList = photoList.filter((photo) => {
                if (photo.id !== id) {
                    return photo;
                } else {
                    newDeletedPhotos.push(photo);
                    setDeletedPhotos(newDeletedPhotos);
                }
            });
            setPhotos(newPhotoList);
        } else {
            console.log('ANULOWANO, idPhoto: ' + id);
        }
    }

    function sortByTitle() {
        const newOrder = sortPreferences;
        //make copy of photoList to trigger re-rendering
        const newSortedPhotoList = [...photoList].sort((a, b) => {
            return a.title.localeCompare(b.title);
        });
        var byDateEl = document.getElementById('byDate');
        var byTitleEl = document.getElementById('byTitle');
        byDateEl.innerHTML = 'Daty dodania';
        switch (sortPreferences.byTitle) {
            case 'ASC':
                byTitleEl.innerHTML = 'Tytułu&#8593';
                newOrder.byTitle = 'DESC';
                setOrder(newOrder);
                setPhotos(newSortedPhotoList);
                break;
            case 'DESC':
                byTitleEl.innerHTML = 'Tytułu&#8595';
                newOrder.byTitle = 'ASC';
                setOrder(newOrder);
                setPhotos(newSortedPhotoList.reverse());
                break;
        }
    }

    function sortByDate() {
        const newOrder = sortPreferences;
        //make copy of photoList to trigger re-rendering
        const newSortedPhotoList = [...photoList].sort((a, b) => {
            return a.date.localeCompare(b.date);
        });
        var byDateEl = document.getElementById('byDate');
        var byTitleEl = document.getElementById('byTitle');
        byTitleEl.innerHTML = 'Tytułu';
        switch (sortPreferences.byTitle) {
            case 'ASC':
                byDateEl.innerHTML = 'Daty dodania&#8593';
                newOrder.byTitle = 'DESC';
                setOrder(newOrder);
                setPhotos(newSortedPhotoList);
                break;
            case 'DESC':
                byDateEl.innerHTML = 'Daty dodania&#8595';
                newOrder.byTitle = 'ASC';
                setOrder(newOrder);
                setPhotos(newSortedPhotoList.reverse());
                break;
        }
    }

    function shuffleList() {
        const newShuffledPhotoList = [...photoList].sort(
            (a, b) => 0.5 - Math.random()
        );
        setPhotos(newShuffledPhotoList);
    }

    function likeIt(id) {
        var likeStatus = alreadyLiked.get(id);
        if (likeStatus === 'LIKE' || likeStatus === undefined) {
            var element = document.getElementById('btnLike#' + id);
            if (!alreadyLiked.has(id)) {
                const newPhotoList = photoList.map((photo) =>
                    photo.id === id ? {...photo, likes: photo.likes + 1} : photo
                );
                element.classList.remove('btn-success');
                alreadyLiked.set(id, 'LIKE');
                const newIdLiked = new Map(alreadyLiked);
                addIdsLiked(newIdLiked);
                setPhotos(newPhotoList);
                save(newPhotoList);
            } else {
                const newPhotoList = photoList.map((photo) =>
                    photo.id === id ? {...photo, likes: photo.likes - 1} : photo
                );
                element.classList.add('btn-success');
                alreadyLiked.delete(id);
                const newIdLiked = new Map(alreadyLiked);
                addIdsLiked(newIdLiked);
                setPhotos(newPhotoList);
                save(newPhotoList);
            }
        } else {
            alert("Najpierw anuluj dislike'a");
        }
    }

    function disLikeIt(id) {
        var likeStatus = alreadyLiked.get(id);
        if (likeStatus === 'DISLIKE' || likeStatus === undefined) {
            var element = document.getElementById('btnDislike#' + id);
            if (!alreadyLiked.has(id)) {
                const newPhotoList = photoList.map((photo) =>
                    photo.id === id ? {...photo, dislikes: photo.dislikes + 1} : photo
                );
                element.classList.remove('btn-danger');
                alreadyLiked.set(id, 'DISLIKE');
                const newIdLiked = new Map(alreadyLiked);
                addIdsLiked(newIdLiked);
                setPhotos(newPhotoList);
                save(newPhotoList);
            } else {
                const newPhotoList = photoList.map((photo) =>
                    photo.id === id ? {...photo, dislikes: photo.dislikes - 1} : photo
                );
                element.classList.add('btn-danger');
                alreadyLiked.delete(id);
                const newIdLiked = new Map(alreadyLiked);
                addIdsLiked(newIdLiked);
                setPhotos(newPhotoList);
                save(newPhotoList);
            }
        } else {
            alert("Najpierw anuluj like'a");
        }
    }

    function rateIt(id, rate) {
        const updatedRatePhotoList = photoList.map((photo) => {
            if (photo.id === id) {
                photo.ratings.push(rate);
            }
            return photo;
        });
        setPhotos(updatedRatePhotoList);
        save(updatedRatePhotoList);
    }

    function save(data) {
        let dataToSave = data;
        if (deletedPhotos.length > 0) {
            dataToSave = data.concat(deletedPhotos);
        }
        dataToSave.sort((el1, el2) => {
            return el1.id - el2.id;
        });
        localStorage.setItem('photoListState', JSON.stringify(dataToSave, null, 2));
    }

    return (
        <AppContext.Provider
            value={{
                photoList,
                deletePhoto,
                sortByTitle,
                sortByDate,
                shuffleList,
                likeIt,
                disLikeIt,
                rateIt
            }}
        >
            {children}
        </AppContext.Provider>
    );
}