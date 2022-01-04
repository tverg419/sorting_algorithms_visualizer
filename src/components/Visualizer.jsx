import React, {useState, useEffect} from 'react';
import {selectionSort} from '../algorithms/selectionSort'
import {insertionSort} from '../algorithms/insertionSort'

import './Visualizer.css'

function Visualizer(props) {

    const [array, setArray] = useState([])
    const [input, setInput] = useState([20])

    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const generateArray = (size) => {
        const newArray = []
        for (let i = 0; i < size; i++){
            newArray.push(randomInteger(2, 50))
        }
        setArray(newArray)
    }
    function testSortingAlgorithm() {
        const sortedArray = insertionSort(array)
        console.log(sortedArray)
        console.log(sortedArray === array.sort((a, b) => a - b))
    }

    useEffect(() => {
        generateArray(input)
    }, [])

    return (
        <div className="visualizer">
            <div className='array-container'>
                {array.map((value, index) => 
                    <div 
                        className="array-bar" 
                        key={index}
                        style={{height: `${value * 9}px`}}>
                        <div className="array-value">
                            {value}
                        </div>
                    </div>
                )}
            </div>
            <button onClick={() => {generateArray(input)}}>Generate New Array</button>
            <button onClick={() => {console.log(selectionSort(array))}}>Selection Sort</button>
            <button onClick={() => {console.log(insertionSort(array))}}>Insertion Sort</button>
            <button onClick={() => {testSortingAlgorithm()}}>Test Sorting Algorithm</button>
        </div>
    );
}

export default Visualizer;