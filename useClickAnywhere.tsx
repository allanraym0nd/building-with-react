import {useRef,useEffect} from 'react'

export default function useClickAnywhere(handler: (event:MouseEvent) => void) {
    const handlerRef = useRef(handler)

    useEffect(() => {
        handlerRef.current = handler
    }, [handler])

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            handlerRef.current(event)
        }

        window.addEventListener('click', handleClick)

        return () => {
            window.removeEventListener('click', handleClick)
        }
    }, [])
}