import React, { useEffect, useState } from 'react';

const Rooms = () => {
    const [rooms, setRooms] = useState([])

    useEffect(() => {

        fetch("hotelData.json")
            .then(res => res.json())
            .then(data => setRooms(data))

    }, [])
    return (
        <div className='grid grid-cols-3 gap-5 mx-10 my-10'>

            {
                rooms.map(room => <div className=''>

                    <div className='border w-60 rounded-md  mx-auto text-center'>
                        <img src={room.img} alt="" className='w-60 h-60 rounded-md mx-auto' />

                        <div className='p-4'>
                            <h2>{room.name}</h2>
                            <p>{room.price}</p>
                            <p>{room.info.slice(0, 100)}...</p>
                        </div>
                    </div>

                </div>)
            }

        </div>
    );
};

export default Rooms;