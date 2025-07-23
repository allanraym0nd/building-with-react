import useState from 'react';

export default function useToggle (initialValue = false) {
    const [value, setValue] = useState(initialValue)

    const toggle = () => {
        setToggle(prev => !prev)
    }

    return {
        toggle, value
    }
}