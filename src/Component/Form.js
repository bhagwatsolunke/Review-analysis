import React, { useState } from 'react';

const Form = () => {
    const [textInput, setTextInput] = useState('');

    const handleTextChange = (event) => {
        setTextInput(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Perform any validation if needed

        // Send data to the backend
        sendDataToBackend(textInput);
    };

    const sendDataToBackend = (textData) => {
        // Perform the POST request to your backend
        fetch('your-backend-api-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ textData }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Response from backend:', data);
                // Handle the response as needed
            })
            .catch(error => {
                console.error('Error sending data to backend:', error);
                // Handle errors
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div class="mb-3" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <input type="text" class="form-control" id="exampleInputPassword1" value={textInput}  onChange={handleTextChange} style={{ width: '100%', height: '100px', padding: '10px', margin: '5px' }}></input>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Form;
