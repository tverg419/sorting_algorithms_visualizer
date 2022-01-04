import React, {useState, useEffect} from 'react';
import {selectionSort} from '../algorithms/selectionSort'
import {insertionSort} from '../algorithms/insertionSort'

import './Visualizer.css'

function Visualizer(props) {

    const [array, setArray] = useState([])

    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const generateArray = (n) => {
        const newArray = []
        for (let i = 0; i < n; i++){
            newArray.push(randomInteger(2, 70))
        }
        setArray(newArray)
    }
    function testSortingAlgorithm() {
        const sortedArray = insertionSort(array)
        console.log(sortedArray)
        console.log(sortedArray === array.sort((a, b) => a - b))
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
                        style={{height: `${value * 10}px`}}>
                        <div className="array-value">
                            {value}
                        </div>
                    </div>
                )}
            </div>
            <button onClick={() => {generateArray(80)}}>Generate New Array</button>
            <button onClick={(arr) => {selectionSort(arr)}}>Selection Sort</button>
            <button onClick={(arr) => {this.insertionSort(arr)}}>Insertion Sort</button>
            <button onClick={() => {testSortingAlgorithm()}}>Test Sorting Algorithm</button>
        </div>
    );
}

export default Visualizer;