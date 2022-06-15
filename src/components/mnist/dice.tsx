/**
 * @fileoverview Defines dice.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import * as THREE from 'three';
import * as DOM from '@/utils/dom';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as Container from '@/components/mnist/container';
import frag from '@/assets/shaders/dice.frag';
import vert from '@/assets/shaders/dice.vert';

const easeOutCirc = (x: number): number =>
  Math.sqrt(1 - Math.pow(x - 1, 4));

export const Component: React.FunctionComponent<
  Record<string, never>
> = (): React.ReactElement => {
  const container = React.useRef<HTMLDivElement>(null);

  const [isLoading, setLoading] = React.useState<boolean>(true);

  const [renderer, setRenderer] = React.useState<THREE.WebGLRenderer>(null);

  const [camera, setCamera] = React.useState<THREE.OrthographicCamera>(null);

  const [controls, setControls] = React.useState<OrbitControls>(null);

  const [scene] = React.useState<THREE.Scene>(new THREE.Scene());

  const [target] = React.useState<THREE.Vector3>(new THREE.Vector3(-0.5, 1.2, 0));

  const [initialCameraPosition] = React.useState<THREE.Vector3>(
    new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
  ));

  const handleWindowResize = React.useCallback(() => {
    if (container.current && renderer)
      renderer.setSize(
        container.current.clientWidth,
        container.current.clientHeight);
  }, [renderer]);

  React.useEffect(() => {
    if (container.current && !renderer) {
      const w = container.current.clientWidth;
      const h = container.current.clientHeight;

      const r = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      })
      r.setPixelRatio(window.devicePixelRatio);
      r.setSize(w, h);
      r.outputEncoding = THREE.sRGBEncoding;
      container.current.appendChild(r.domElement);
      setRenderer(r);

      const c = new THREE.OrthographicCamera(
        -1.0 * (h * 0.005 + 4.8),
        h * 0.005 + 4.8,
        h * 0.005 + 4.8,
        -1.0 * (h * 0.005 + 4.8),
        0.01,
        50000
      )
      c.position.copy(initialCameraPosition);
      c.lookAt(target);
      setCamera(c);

      scene.add(new THREE.AmbientLight(0xcccccc, 1));

      const o = new OrbitControls(c, r.domElement);
      o.autoRotate = true;
      o.target = target;
      setControls(o);

      const diceG = new THREE.BoxBufferGeometry(4, 4, 4);
      diceG.setAttribute('side', new THREE.Float32BufferAttribute([
        0, 0, 0, 0, 
        1, 1, 1, 1, 
        2, 2, 2, 2, 
        3, 3, 3, 3, 
        4, 4, 4, 4, 
        5, 5, 5, 5
      ], 1));
      const edges = new THREE.LineSegments(
        new THREE.EdgesGeometry(diceG),
        new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 }));
 
      const diceM = new THREE.RawShaderMaterial({
        uniforms: {
          time: { type: 'f', value: 1.0 }
        },
        vertexShader: vert,
        fragmentShader: frag,
      });
 
      const dice = new THREE.Mesh(diceG, diceM);
      scene.add(dice);
      scene.add(edges);

      let req = null
      let step = 0;
      let frame = 0
      const animate = () => {
        req = requestAnimationFrame(animate);
        step++;
        frame = frame <= 100 ? frame + 1 : frame;

        if (frame <= 100) {
          const pos = initialCameraPosition;
          const rot = -easeOutCirc(frame / 120) * Math.PI * 20;
          c.position.y = 10;
          c.position.x = pos.x * Math.cos(rot) + pos.z * Math.sin(rot);
          c.position.z = pos.z * Math.cos(rot) - pos.x * Math.sin(rot);
          c.lookAt(target);
        } else {
          o.update();
        }

        dice.material.uniforms.time.value = step / 60.0 * 5;
        r.render(scene, c);
      };

      animate();

      setLoading(false);

      return () => {
        cancelAnimationFrame(req);
        renderer.dispose();
      };
    }
  }, []);

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    };
  }, [renderer, handleWindowResize]);

  return (
    <Container.Box ref={container}>{isLoading && <Container.Loader />}</Container.Box>
  );
};
