import { useState } from 'react';

const useFormBoard = () => {
    
    const [isShowing, setIsShowing] = useState(false);

    function toggle() {
        setIsShowing(!isShowing);
    }

    return {
        isShowing,
        toggle,
    }
    
};

export default useFormBoard;

