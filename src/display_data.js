import React, { useState, useEffect } from 'react';

function MyComponent() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const req = { primo_ids: [69420, 69431] }; // Request payload
                const response = await fetch('https://tank-project-glgjkoxnua-uc.a.run.app/tanks', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(req)
                });
                const data = await response.json();
                setData(data.primo);
                console.log('Data fetched successfully???!:', data.primo);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {data ? (
                <div>
                    <p>Returned data from the API!!!:</p>
                    <ul>
                        {data.map((item, index) => (
                            <li key={index}>
                                <strong>Primo ID:</strong> {item.primo_id}<br />
                                <strong>Scada ID:</strong> {item.scada_id}<br />
                                <strong>Tank Type:</strong> {item.tank_type}<br />
                                <strong>Tank Number:</strong> {item.tank_number}<br />
                                <strong>Level in Inches:</strong> {item.level_in_inches}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default MyComponent;
