import './App.css'
import HomePage from 'pages/HomePage/HomePage'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css'

AOS.init()

function App() {
    return (
        <div className="App">
            <HomePage />
        </div>
    )
}

export default App
