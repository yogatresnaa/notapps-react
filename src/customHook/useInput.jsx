import { useState } from 'react';


function useInput(defaultValue = '') {
    const [value, setValue] = useState(defaultValue);

    const onValueChangeHanler = (event) => {
        setValue(event.target.value);
    };

    return [ value, onValueChangeHanler];
}

export default useInput;