

import * as THREE from 'three'
import React, { useState, useCallback, useRef } from 'react'
import { Canvas } from 'react-three-fiber'
import Effects from './Effects'
import Particles from './Particles'
import style from './ParticleBlock.module.css'

const ParticleBlock = () => {
  const [down, set] = useState(false)
  const mouse = useRef([0, 0])
  const onMouseMove = useCallback(({ clientX: x, clientY: y }) => (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]), [])
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  return (
      <Canvas
        pixelRatio={2}
        camera={{ fov: 100, position: [0, 0, 30] }}
        onMouseMove={onMouseMove}
        onMouseUp={() => set(false)}
        onMouseDown={() => set(true)}
        onTouchStart={() => set(true)}
        onTouchEnd={() => set(false)}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping
          gl.setClearColor(new THREE.Color('#020207'))
        }}>
        <Particles count={isMobile ? 10000 : 20000} mouse={mouse} />
        <Effects down={down} />
      </Canvas>
  )
}

export default ParticleBlock