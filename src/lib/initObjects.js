import * as THREE from 'three'

import vertexShader from '../shaders/vertex.glsl'
import fragmentShader from '../shaders/fragment.glsl'

export function initObjects(sketch) {
   const geometry = new THREE.PlaneBufferGeometry( 3, 3, 512, 512 );
   sketch.material = new THREE.ShaderMaterial({ 
      vertexShader,
      fragmentShader,
      side: THREE.DoubleSide,
      uniforms: {
         uTime: { value: 0 }
      }
   })
   const mesh = new THREE.Mesh(geometry, sketch.material)

   sketch.scene.add(mesh)
}