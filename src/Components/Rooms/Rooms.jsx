import React, { useEffect, useState } from 'react';

const Rooms = () => {
    const [rooms, setRooms] = useState([])

    useEffect(() => {

        fetch("hotelData.json")
            .then(res => res.json())
            .then(data => setRooms(data))

    }, [])
    return (
        <div>

            {
                rooms.map(room => <div className=''>


                    <div className=''>
                        <div className='border  rounded-md w-3/12 mx-auto text-center'>
                            <img src={room.img} alt="" className='w-screen rounded-md' />
                            
                            <div className='p-4'>
                            <h2>{room.name}</h2>
                            <p>{room.price}</p>
                            <p>{room.info}</p>
                            </div>
                        </div>
                    </div>

                </div>)
            }

        </div>
    );
};

export default Rooms;