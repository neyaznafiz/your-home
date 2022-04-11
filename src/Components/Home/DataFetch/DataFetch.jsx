import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Rooms from '../../Rooms/Rooms';

const DataFetch = () => {

    const [rooms, setRooms] = useState([])

    useEffect(() => {

        fetch("HotelData.json")
            .then(res => res.json())
            .then(data => setRooms(data))

    }, [])

    return (
        <div>
            {
                rooms.map(room => <Rooms
                    key={room.id}
                    room={room}
                ></Rooms>)
            }
        </div>
    );
};

export default DataFetch;