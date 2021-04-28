varying vec2 vUv;
varying vec3 vPos;

varying float vElevation;

void main() {
   vec3 color = mix(vec3(vUv.x, 1.0, vUv.y), vec3(vUv.x, 0.0, 1.0), vPos.z * 2.0);

   gl_FragColor = vec4(color, 1.0);
}