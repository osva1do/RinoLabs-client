import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Scene } from "../../components/Scene";
import { LandingOverlay } from "../../components/landing overlay/LandingOverlay";

const Landing = () => {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 0, 80], fov: 64 }}>
        <fog attach="fog" args={["#e0e0e0", 8, 50]} />
        <Suspense>
          <Scene />
        </Suspense>
      </Canvas>

      <LandingOverlay />
    </>
  );
};
export default Landing;
