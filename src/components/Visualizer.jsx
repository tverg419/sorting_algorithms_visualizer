import React, {useState, useEffect} from 'react';
import './Visualizer.css'

function Visualizer(props) {

    const [array, setArray] = useState([])

    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const generateArray = (n) => {
        const newArray = []
        for (let i = 0; i < n; i++){
            newArray.push(randomInteger(1, 100))
        }
        setArray(newArray)
    }

    useEffect(() => {
        generateArray(10)
    }, [])

    return (
        <div>
            <div className='array-container'>
                {array.map((value, index) => 
                    <div 
                        className="array-bar" 
                        key={index}
                        style={{height: `${value}px`}}>
                            
                        {value}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Visualizer;