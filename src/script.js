import './style.css'

import * as THREE from 'three'

import { initCamera } from './lib/initCamera'
import { initObjects } from './lib/initObjects'
import { initEvents } from './lib/initEvents'
import { initControls } from './lib/initControls'

class Sketch {
    constructor() {
        this.sizes = {
            width: window.innerWidth, 
            height: window.innerHeight
        }

        this.canvas = document.querySelector('canvas.webgl')
        this.renderer = new THREE.WebGLRenderer({
           canvas: this.canvas,
           alpha: true,
           antialias: true
        })

        this.renderer.setSize(this.sizes.width, this.sizes.height)
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

        this.scene = new THREE.Scene()

        this.threeClock = new THREE.Clock()

        initCamera(this)
        initObjects(this)
        initEvents(this)
        initControls(this)

        this.tick()
    }

    tick() {
        this.elapsedTime = this.threeClock.getElapsedTime()
    
        this.controls.update()
    
        this.renderer.render(this.scene, this.camera)

        this.updateRequest = window.requestAnimationFrame(this.tick.bind(this))
    }

    destroy() {
        cancelAnimationFrame(this.updateRequest)

        this.threeClock = null
        this.scene = null
        this.renderer = null

        window.removeEventListener('resize', this.onWindowResize)
    }
}

const sketch = new Sketch()
