import { useState } from 'react';

function Dashboard() {
    //Mock data for relational groups; DB resting
    const [rooms, setRooms] = useState([
        { id: 1, name: 'Close Friends', description: 'Strictly inner circle. No context mixing.', members: 4 },
        { id: 2, name: 'University Project', description: 'Academic discussions only.', members: 6 },
    ])
}