import React, {useState, useEffect} from 'react';
import {selectionSort} from '../algorithms/selectionSort'
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
        const sortedArray = selectionSort(array)
        console.log(sortedArray)
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
            <button onClick={(arr) => {this.selectionSort(arr)}}>Selection Sort</button>
            <button onClick={() => {testSortingAlgorithm()}}>Test Sorting Algorithm</button>
        </div>
    );
}

export default Visualizer;