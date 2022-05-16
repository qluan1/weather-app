import React, {useState} from 'react';

function UserForm(props) {
    const [queryName, setQueryName] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        props.getWeatherData(queryName);
    }

    function handleChange(e) {
        setQueryName(e.target.value);
    }

    return (
        <form onSubmit = {(e) => {handleSubmit(e);}}>
            <label>
                City:
                <input 
                    type="text" 
                    onChange = {(e) => {handleChange(e);}}
                    value = {queryName}
                />
            </label>

            <input 
                type="submit"
                value="Submit"
            />
        </form>
    );
}

export default UserForm;