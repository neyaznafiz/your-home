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

                    <div className='border w-3/5 rounded-md  mx-auto text-center'>
                        <img src={room.img} alt="" className=' h-60 rounded-t-md mx-auto' />

                        <div className='pt-4 bg-gray-100'>
                            <h2 className='text-xl font-bold'>{room.name}</h2>
                            <p className='font-semibold mb-3'>Price: ${room.price}</p>
                            <p>{room.info.slice(0, 100)}...</p>
                            <button className='mx-auto border rounded-md my-5 py-2 px-4 text-xl text-gray800 font-semibold hover:bg-gray-300 hover:text-gray-700'>Add to checkout</button>
                        </div>

                    </div>

                </div>)
            }

        </div>
    );
};

export default Rooms;