import React from 'react';
import Card from './Card';



function List(props) {
  return (
    <div className='flex flex-col mt-8 gap-10 justify-center items-center'>

        <div className='flex flex-col gap-8 justify-center items-center'>
            <h1 className='text-green text-5xl'>List of Property </h1>
            <h2 className='text-gris text-xl'>Find all Property</h2>
        </div>
        
        <div className='grid grid-cols-1 gap-6 w-full px-40 lg:grid-cols-2 xl:grid-cols-3 '>
            {
                props.property.map((item) => {
                    return (
                        <div  key={item.id}>
                            <Card item={item} mylist={props.mylist} setMylist={props.setMylist}/>
                        </div>
                    )
                })
            }
        </div>
    </div>
  );
};

export default List