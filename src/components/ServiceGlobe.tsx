import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import {
  globeScenes,
  type GlobeVehicle,
  type LatLng,
  type ServiceSceneId,
} from '../data/globeScenes';

const RADIUS = 2;

type Craft = {
  object: any;
  vehicle: GlobeVehicle;
};

type Props = {
  sceneId: ServiceSceneId;
};

function toRad(deg: number) {
  return (deg * Math.PI) / 180;
}

function toDeg(rad: number) {
  return (rad * 180) / Math.PI;
}

function interpolate(a: LatLng, b: LatLng, t: number): LatLng {
  const φ1 = toRad(a.lat);
  const λ1 = toRad(a.lng);
  const φ2 = toRad(b.lat);
  const λ2 = toRad(b.lng);
  const delta =
    2 *
    Math.asin(
      Math.min(
        1,
        Math.sqrt(
          Math.sin((φ2 - φ1) / 2) ** 2 +
            Math.cos(φ1) * Math.cos(φ2) * Math.sin((λ2 - λ1) / 2) ** 2,
        ),
      ),
    );
  if (delta < 1e-6) return a;
  const A = Math.sin((1 - t) * delta) / Math.sin(delta);
  const B = Math.sin(t * delta) / Math.sin(delta);
  const x = A * Math.cos(φ1) * Math.cos(λ1) + B * Math.cos(φ2) * Math.cos(λ2);
  const y = A * Math.cos(φ1) * Math.sin(λ1) + B * Math.cos(φ2) * Math.sin(λ2);
  const z = A * Math.sin(φ1) + B * Math.sin(φ2);
  return {
    lat: toDeg(Math.atan2(z, Math.sqrt(x * x + y * y))),
    lng: toDeg(Math.atan2(y, x)),
  };
}

function samplePath(path: LatLng[], t: number): LatLng {
  const wrapped = ((t % 1) + 1) % 1;
  if (path.length === 1) return path[0];
  const scaled = wrapped * (path.length - 1);
  const index = Math.min(path.length - 2, Math.floor(scaled));
  return interpolate(path[index], path[index + 1], scaled - index);
}

function latLngToVec(lat: number, lng: number, radius: number) {
  const theta = toRad(90 - lat);
  const phi = toRad(lng + 180);
  const sinTheta = Math.sin(theta);
  return new THREE.Vector3(
    -radius * Math.cos(phi) * sinTheta,
    radius * Math.cos(theta),
    radius * Math.sin(phi) * sinTheta,
  );
}

function makeLabel(text: string) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = '600 54px Inter, sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.shadowColor = 'rgba(0,0,0,0.85)';
  ctx.shadowBlur = 12;
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  const sprite = new THREE.Sprite(
    new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false }),
  );
  sprite.userData.label = true;
  return sprite;
}

function makeJet(cargo: boolean) {
  const group = new THREE.Group();
  const white = new THREE.MeshBasicMaterial({ color: cargo ? 0xd5dbe3 : 0xf4f7fb });
  const blue = new THREE.MeshBasicMaterial({ color: cargo ? 0x243140 : 0x0a4ea3 });
  const gold = new THREE.MeshBasicMaterial({ color: cargo ? 0xff6b1a : 0xf5b400 });

  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.26, 1.7, 4, 12), white);
  body.rotation.x = -Math.PI / 2;
  group.add(body);

  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.26, 0.5, 12), blue);
  nose.rotation.x = -Math.PI / 2;
  nose.position.z = -1.15;
  group.add(nose);

  const wing = new THREE.Mesh(new THREE.BoxGeometry(2.5, 0.05, 0.42), blue);
  wing.position.z = 0.15;
  group.add(wing);

  const tail = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.045, 0.28), blue);
  tail.position.set(0, 0.02, 0.82);
  group.add(tail);

  const fin = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.42, 0.32), gold);
  fin.position.set(0, 0.24, 0.92);
  group.add(fin);

  const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.05, 1.55), gold);
  stripe.position.set(0.28, 0.02, -0.05);
  group.add(stripe);

  const engineGeo = new THREE.CylinderGeometry(0.09, 0.1, 0.42, 8);
  [-0.62, 0.62].forEach((x) => {
    const engine = new THREE.Mesh(engineGeo, blue);
    engine.rotation.x = Math.PI / 2;
    engine.position.set(x, -0.12, 0.18);
    group.add(engine);
  });

  group.scale.setScalar(cargo ? 0.11 : 0.09);
  return group;
}

function makeShip() {
  const group = new THREE.Group();
  const hull = new THREE.Mesh(
    new THREE.BoxGeometry(0.72, 0.26, 2.5),
    new THREE.MeshBasicMaterial({ color: 0x16324f }),
  );
  group.add(hull);

  const colors = [0xff6b1a, 0x1d4e89, 0xeef3f8, 0xc45512];
  let i = 0;
  for (let z = -0.55; z <= 0.45; z += 0.42) {
    for (const x of [-0.18, 0.18]) {
      const box = new THREE.Mesh(
        new THREE.BoxGeometry(0.32, 0.26, 0.38),
        new THREE.MeshBasicMaterial({ color: colors[i % colors.length] }),
      );
      box.position.set(x, 0.26, z);
      group.add(box);
      i += 1;
    }
  }

  const bridge = new THREE.Mesh(
    new THREE.BoxGeometry(0.48, 0.32, 0.38),
    new THREE.MeshBasicMaterial({ color: 0xf7f9fb }),
  );
  bridge.position.set(0, 0.3, 0.9);
  group.add(bridge);
  group.scale.setScalar(0.12);
  return group;
}

function arcPoints(from: LatLng, to: LatLng, peak: number) {
  const points = [];
  const steps = 72;
  for (let i = 0; i <= steps; i += 1) {
    const t = i / steps;
    const place = interpolate(from, to, t);
    const lift = Math.sin(Math.PI * t) * peak;
    points.push(latLngToVec(place.lat, place.lng, RADIUS * (1.012 + lift)));
  }
  return points;
}

function disposeTree(object: any) {
  object.traverse((child: any) => {
    child.geometry?.dispose?.();
    const materials = child.material ? [].concat(child.material) : [];
    materials.forEach((material: any) => {
      material.map?.dispose?.();
      material.dispose?.();
    });
  });
}

function cameraDistance(altitude: number) {
  return 2.45 + altitude * 1.7;
}

export default function ServiceGlobe({ sceneId }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const sceneIdRef = useRef(sceneId);
  sceneIdRef.current = sceneId;
  const scene = globeScenes[sceneId];

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(wrap.clientWidth, wrap.clientHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.display = 'block';
    wrap.appendChild(renderer.domElement);

    const scene3 = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 80);
    const opening = globeScenes[sceneIdRef.current];
    camera.position.copy(latLngToVec(opening.lat, opening.lng, cameraDistance(opening.altitude)));
    camera.lookAt(0, 0, 0);

    const earth = new THREE.Group();
    scene3.add(earth);

    const colorMap = new THREE.TextureLoader().load('/earth-day.jpg');
    colorMap.colorSpace = THREE.SRGBColorSpace;
    const bumpMap = new THREE.TextureLoader().load('/earth-topology.png');
    const earthMat = new THREE.MeshPhongMaterial({
      map: colorMap,
      bumpMap,
      bumpScale: 0.045,
      specular: new THREE.Color(0x1a1a1a),
      shininess: 6,
    });
    earth.add(new THREE.Mesh(new THREE.SphereGeometry(RADIUS, 96, 96), earthMat));

    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(RADIUS * 1.12, 64, 64),
      new THREE.ShaderMaterial({
        vertexShader: `
          varying vec3 vNormal;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          varying vec3 vNormal;
          void main() {
            float intensity = pow(0.45 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 3.0);
            gl_FragColor = vec4(0.03, 0.07, 0.12, 1.0) * intensity;
          }
        `,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        transparent: true,
        depthWrite: false,
      }),
    );
    scene3.add(atmosphere);

    scene3.add(new THREE.AmbientLight(0xffffff, 0.62));
    const sun = new THREE.DirectionalLight(0xfff4e5, 1.55);
    sun.position.set(6, 2.2, 4);
    scene3.add(sun);

    const overlay = new THREE.Group();
    scene3.add(overlay);

    let crafts: Craft[] = [];
    let pulses: any[] = [];
    let builtId: ServiceSceneId | null = null;
    let spinLng = opening.lng;
    let stopped = false;
    let raf = 0;

    const rebuild = (id: ServiceSceneId) => {
      while (overlay.children.length) {
        const child = overlay.children[0];
        overlay.remove(child);
        disposeTree(child);
      }
      crafts = [];
      pulses = [];
      const spec = globeScenes[id];

      spec.markers.forEach((marker, index) => {
        const position = latLngToVec(marker.lat, marker.lng, RADIUS * 1.015);
        const dot = new THREE.Mesh(
          new THREE.SphereGeometry(0.028, 14, 14),
          new THREE.MeshBasicMaterial({ color: 0xff6b1a }),
        );
        dot.position.copy(position);
        overlay.add(dot);

        const ring = new THREE.Mesh(
          new THREE.RingGeometry(0.03, 0.048, 40),
          new THREE.MeshBasicMaterial({
            color: 0xff6b1a,
            transparent: true,
            opacity: 0.85,
            side: THREE.DoubleSide,
            depthWrite: false,
          }),
        );
        ring.position.copy(position);
        ring.lookAt(0, 0, 0);
        ring.userData.phase = index * 0.7;
        overlay.add(ring);
        pulses.push(ring);

        if (marker.showLabel !== false) {
          const label = makeLabel(marker.name);
          if (label) {
            label.position.copy(latLngToVec(marker.lat, marker.lng, RADIUS * 1.09));
            overlay.add(label);
          }
        }
      });

      spec.arcs.forEach((arc) => {
        const points = arcPoints(
          { lat: arc.startLat, lng: arc.startLng },
          { lat: arc.endLat, lng: arc.endLng },
          arc.alt * 0.55,
        );
        const curve = new THREE.CatmullRomCurve3(points);
        const tube = new THREE.Mesh(
          new THREE.TubeGeometry(curve, 80, 0.008, 6, false),
          new THREE.MeshBasicMaterial({ color: 0xff6b1a }),
        );
        overlay.add(tube);
      });

      spec.vehicles.forEach((vehicle) => {
        const object =
          vehicle.kind === 'ship' ? makeShip() : makeJet(vehicle.kind === 'cargo');
        overlay.add(object);
        crafts.push({ object, vehicle });
      });

      builtId = id;
      spinLng = spec.lng;
    };

    const resize = () => {
      const width = wrap.clientWidth;
      const height = wrap.clientHeight;
      if (!width || !height) return;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(wrap);

    const clockStart = performance.now();
    const frame = () => {
      if (stopped) return;
      const spec = globeScenes[sceneIdRef.current];
      if (builtId !== spec.id) rebuild(spec.id);

      spinLng += spec.spin * 1.35;
      const desired = latLngToVec(spec.lat, spinLng, cameraDistance(spec.altitude));
      camera.position.lerp(desired, builtId === spec.id ? 0.12 : 0.08);
      camera.lookAt(0, 0, 0);

      const now = performance.now();
      const elapsed = (now - clockStart) / 1000;
      pulses.forEach((ring) => {
        const wave = (Math.sin(elapsed * 2.4 + ring.userData.phase) + 1) / 2;
        const scale = 1 + wave * 2.4;
        ring.scale.set(scale, scale, scale);
        ring.material.opacity = 0.75 * (1 - wave);
      });

      const viewDistance = camera.position.length();
      overlay.children.forEach((child: any) => {
        if (child.userData?.label) {
          const s = viewDistance * 0.11;
          child.scale.set(s, s * 0.25, 1);
        }
      });

      crafts.forEach(({ object, vehicle }) => {
        const t = (now / vehicle.duration + vehicle.phase) % 1;
        const current = samplePath(vehicle.path, t);
        const next = samplePath(vehicle.path, t + 0.015);
        const altitude = RADIUS * (1.03 + vehicle.alt);
        object.position.copy(latLngToVec(current.lat, current.lng, altitude));
        object.lookAt(latLngToVec(next.lat, next.lng, altitude));
      });

      renderer.render(scene3, camera);
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      stopped = true;
      cancelAnimationFrame(raf);
      observer.disconnect();
      disposeTree(overlay);
      earthMat.dispose();
      colorMap.dispose();
      bumpMap.dispose();
      renderer.dispose();
      wrap.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="absolute inset-0">
      <div
        ref={wrapRef}
        className="absolute inset-0 [mask-image:radial-gradient(ellipse_78%_72%_at_62%_46%,#000_28%,transparent_74%)] [-webkit-mask-image:radial-gradient(ellipse_78%_72%_at_62%_46%,#000_28%,transparent_74%)]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/55 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-brand-navy/45" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-navy" />
      <div className="pointer-events-none absolute bottom-2 left-0 right-0 flex items-end justify-between gap-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
            {scene.kicker}
          </p>
          <p className="mt-1 max-w-xs text-sm font-medium text-white/85">{scene.caption}</p>
        </div>
        <p className="hidden text-right text-[10px] font-black uppercase leading-relaxed tracking-[0.22em] text-white/35 sm:block">
          {scene.footnote}
        </p>
      </div>
    </div>
  );
}
