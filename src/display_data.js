import React, { useEffect, useState } from 'react';

function MyComponent() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:8000/tanks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "primo_ids": [98745, 69431] })
            });
            const responseData = await response.json();
            setData(responseData);
        };

        fetchData();
    }, []);

    return (
        <div>
            {data ? (
                <div>
                    <h2>Fetched Data:</h2>
                    <ul>
                        {data.map((item, index) => (
                            <li key={index}>
                                <p>Primo ID: {item.primo_id}</p>
                                <p>Scada ID: {item.scada_id}</p>
                                <p>Tank Type: {item.tank_type}</p>
                                <p>Tank Number: {item.tank_number}</p>
                                <p>Level in Inches: {item.level_in_inches}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div>PP</div>
            )}
        </div>
    );
}

export default MyComponent;
