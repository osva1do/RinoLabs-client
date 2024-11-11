import {
  CameraControls,
  Environment,
  Float,
  RenderTexture,
  Text,
  useFont,
} from "@react-three/drei";
import { Rhino } from "./3d models/Rhino";
import { Island } from "./3d models/Island";
import { Lab } from "./3d models/Lab";
import { useEffect, useRef } from "react";
import { degToRad } from "three/src/math/MathUtils.js";

export const Scene = () => {
  const controls = useRef();
  const meshFitCamera = useRef();

  const fitCamera = async () => {
    controls.current.fitToBox(meshFitCamera.current, true);
  };

  const introAnim = async () => {
    controls.current.dolly(-22);
    controls.current.smoothTime = 1.3;
    fitCamera();
  };

  useEffect(() => {
    introAnim();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", fitCamera);
    return () => window.addEventListener("resize", fitCamera);
  });

  return (
    <>
      <CameraControls
        ref={controls}
        minPolarAngle={degToRad(10)}
        maxPolarAngle={degToRad(90)}
        minAzimuthAngle={degToRad(-10)}
        maxAzimuthAngle={degToRad(10)}
        minDistance={12}
        maxDistance={50}
      />

      <mesh ref={meshFitCamera} position-z={0.5} visible={false}>
        <boxGeometry args={[20, 2, 8.5]} />
        <meshBasicMaterial color={"red"} />
      </mesh>
      <Text
        font={"fonts/Kanit.ttf"}
        position-x={-0.4}
        position-y={-3}
        position-z={5}
        rotation-y={degToRad(35)}
        fontSize={2}
        textAlign="center"
        anchorY={"bottom"}
      >
        RINOLABS
        <meshBasicMaterial>
          <RenderTexture attach={"map"}>
            <color attach="background" args={["#ececec"]} />
            <Environment preset="sunset" />
            <Float floatIntensity={4} rotationIntensity={3}>
              <Lab
                scale={12}
                rotation-y={-degToRad(25)}
                rotation-x={degToRad(40)}
                position-y={0.1}
              />
            </Float>
          </RenderTexture>
        </meshBasicMaterial>
      </Text>
      <Island scale={0.1} rotation={[0, 0.3, 0]} position={[0, -3, 0]} html />
      <Rhino
        scale={2.3}
        rotation={[0, -0.9, 0]}
        position={[4, -1.55, 7.8]}
        html
      />
      <Environment preset="sunset" />
    </>
  );
};

useFont.preload("fonts/Kanit.ttf");
