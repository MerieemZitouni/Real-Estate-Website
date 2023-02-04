import React, { useEffect, useState } from 'react';
import Like from './Like.svg';
import heart from './heart.svg';
import map from './map.svg';

function Card({item,mylist,setMylist}) {
    let color;
    item.favorit ? color = Like : color = heart;

    const [tab,setTab] = useState(color);

    const addFavorite = () => { 
        if(tab === Like) {
            item.favorit=false;
            setTab(heart);
            setMylist(mylist.filter(item => item.favorit));
        }
        if(tab === heart) {
            item.favorit=true;
            setTab(Like);
            setMylist([...mylist,item]);
        }
        
    }
    
  return (
    <div className='flex flex-col shadow-2xl rounded-xl w-full'>
        <img className='rounded-xl mb-2' src= {item.image} alt={item.id}/>
        <div className='flex justify-between items-center py-2 px-4'>
            <button className='bg-greenlight px-2 py-1 text-green text-xl'>{item.destination}</button>
            <h1>{item.id}</h1>
            <img src={tab} onClick={addFavorite}/>
        </div>
        <div className='px-2 pb-4'>
            <h1 className='text-2xl text-dark p-2'>Fairmount Properties</h1>
            <div className='flex justify-start items-center gap-2 p-2'>
                <img src={map} alt='map.svg'/>
                <h1 className='text-lg text-gris'>{item.location}</h1>
            </div>
        </div>
        <div className='flex justify-between items-center py-8 px-4 border-t border-t-gris'>
            <button className='bg-bleulight text-bleu text-xl px-2 py-1'>{item.price} DA</button>
            <h1 className='text-2xl text-dark'>{item.type}</h1>
        </div>
    </div>
  )
}

export default Card