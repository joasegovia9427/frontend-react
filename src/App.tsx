import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function Home() {
    return <h1 className="text-3xl font-bold">Home Page</h1>
}

function About() {
    return <h1 className="text-3xl font-bold">About Page</h1>
}

function Test() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="flex items-center justify-center">
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount(count => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>

            <div className="flex flex-col gap-4 text-white  font-sans">
                {/* // Background colors */}
                <div className="bg-primary dark:bg-primary-dark">
                    Primary background
                </div>
                <div className="bg-accent dark:bg-accent-dark">
                    Accent background
                </div>
                <div className="bg-secondary dark:bg-secondary-dark">
                    Secondary background
                </div>
                <div className="bg-secondary-accent dark:bg-secondary-accent-dark">
                    Secondary accent background
                </div>
                <div className="bg-neutral dark:bg-neutral-dark text-primary">
                    Neutral background
                </div>

                {/* // Text colors */}
                <h1 className="text-primary dark:text-primary-dark">
                    Primary text
                </h1>
                <p className="text-accent dark:text-accent-dark">Accent text</p>

                {/* // Border colors */}
                <button className="border border-primary text-primary">
                    Primary border
                </button>

                {/* // Hover states */}
                <button className="bg-primary! hover:bg-accent! dark:!hover:!bg-accent-dark text-white">
                    Hover effect
                </button>
            </div>
        </>
    )
}

function App() {
    return (
        <BrowserRouter>
            <nav className="bg-neutral p-4 gap-4 flex items-center justify-center ">
                <Link to="/" className=" text-primary hover:text-accent">
                    Home
                </Link>
                <Link to="/about" className="text-primary hover:text-accent">
                    About
                </Link>
                <Link to="/test" className="text-primary hover:text-accent">
                    Test
                </Link>
            </nav>
            <div className="p-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/test" element={<Test />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
