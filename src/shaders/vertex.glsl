varying vec2 vUv;
varying vec3 vPos;

uniform float uTime;

void main() {
   vec3 pos = position;

   pos.z += sin(cos(pos.y * 2.0) * sin(uTime) * 10.0) * 0.1;

   vec4 mvPosition = modelViewMatrix * vec4( pos, 1.0 );

   gl_Position = projectionMatrix * mvPosition;

   vPos = pos;
   vUv = uv;
}