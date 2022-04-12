// import React from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';
// import Rooms from '../../Rooms/Rooms';

// const DataFetch = () => {

//     const [data, setData] = useState([])

//     useEffect(() => {

//         fetch("hotelData.json")
//             .then(res => res.json())
//             .then(data => setData(data))

//     }, [])

//     return (
//         <div>
//             {
//                 data.map(room => <Rooms
//                     key={room.id}
//                     room={room}
//                 ></Rooms>)
//             }
//         </div>
//     );
// };

// export default DataFetch;