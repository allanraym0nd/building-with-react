import {useState,useEffect} from 'react';

export default function App() {
    const[progressBars,setProgressBars] = useState([])
    const[nextId,setNextId] = useState(0)

    const addProgressBar = () => {
        const newBar = {
            id:nextId,
            progress: 0,
            time: Date.now()
        }

        setProgressBars(prev => [...prev,newBar])
        setNextId(prev => prev + 1)
    } // <-- Added missing brace

    return (
        <div style={{ padding: '20px' }}>
            <button
                onClick={addProgressBar}
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    marginBottom: '20px',
                    cursor: 'pointer'
                }}
            >
                Add
            </button>

            {progressBars.map(bar => (
                <ProgressBar key={bar.id} id={bar.id}/>
            ))}
        </div>
    );
}

function ProgressBar({id}) {
    const [progress,setProgress] = useState(0)

    useEffect(() => {
        const startTime = Date.now()
        const duration = 2000;

        const updateProgress = () => {
            const elapsed = Date.now() - startTime
            const newProgress = Math.min((elapsed/duration) * 100,100)

            setProgress(newProgress)

            if(newProgress < 100 ) { // <-- Fixed: < instead of >
                requestAnimationFrame(updateProgress)
            }
        }

        requestAnimationFrame(updateProgress)
    }, []) // <-- Added missing closing

    return ( // <-- Moved return INSIDE the function
        <div style={{
            width: '100%',
            height: '20px',
            backgroundColor: '#f0f0f0',
            border: '1px solid #ccc',
            marginBottom: '10px',
            overflow: 'hidden'
        }}>
            <div style={{
                width: `${progress}%`,
                height: '100%',
                backgroundColor: '#4CAF50',
                transition: 'width 16ms linear'
            }} />
            <div style={{
                fontSize: '12px',
                textAlign: 'center',
                lineHeight: '20px',
                position: 'relative',
                top: '-20px',
                color: 'black'
            }}>
                {Math.round(progress)}%
            </div>
        </div>
    );
}