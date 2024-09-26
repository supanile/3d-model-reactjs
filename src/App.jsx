import { Suspense } from 'react'
import './App.css'

import { Canvas } from '@react-three/fiber'
import { Stars, OrbitControls } from '@react-three/drei'
import Earth from '../public/Earth'
import Footer from './Footer'

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Discover Our Planet</h1>
        <p>An interactive journey through Earth's wonders</p>
      </header>
      <main className="main-content">
        <div className="earth-model">
          <Canvas>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            <Suspense fallback={null}>
              <Earth />
            </Suspense>
            <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade />
          </Canvas>
        </div>
        <div className="info-section">
          <h2>Earth: Our Home in the Cosmos</h2>
          <p>Earth, the third planet from the Sun, is a world of wonder and the only known harbor of life in the universe. With its vast oceans, lush continents, and dynamic atmosphere, our planet is a testament to the beauty and complexity of the cosmos.</p>
          <div className="fact-grid">
            <div className="fact-item">
              <h3>Diameter</h3>
              <p>12,742 km</p>
            </div>
            <div className="fact-item">
              <h3>Rotation Period</h3>
              <p>23.9 hours</p>
            </div>
            <div className="fact-item">
              <h3>Orbital Period</h3>
              <p>365.25 days</p>
            </div>
            <div className="fact-item">
              <h3>Average Distance from Sun</h3>
              <p>149.6 million km</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App