import React, { useEffect, useState } from 'react'
import './App.css'
import axios from './axios'
import MenuAppBar from './components/MenuAppBar'

function App() {
    const [result, setResult] = useState('')
    const [testImage, setTestImage] = useState('')
    useEffect(() => {
        axios.get('api/hello').then((response) => {
            setResult(response.data)
        })

        axios.get('dev/testimage').then((response) => {
            console.log(response.data.testImage)
            setTestImage(response.data.testImage)
        })
    }, [])

    return (
        result && (
            <>
                <MenuAppBar />
                <h1>{result}</h1>
                <img src={testImage} alt="testImage" width={250} />
            </>
        )
    )
}

export default App
