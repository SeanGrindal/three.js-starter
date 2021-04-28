import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export function initControls(sketch) {
   sketch.controls = new OrbitControls(sketch.camera, sketch.canvas)
   sketch.controls.enableDamping = true
}
