import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Rhino } from "./Rhino";
import { Canvas } from "@react-three/fiber";
import CameraAnimation from "./CameraAnimation";

export const Scene = () => {
  return (
    <Canvas
      camera={{
        fov: 64,
        position: [0.8, 0.5, 2.1],
      }}
    >
      <ambientLight intensity={1} />
      <OrbitControls enableZoom={false} />
      <Rhino />
    </Canvas>
  );
};
