import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Rhino(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("3d_models/rhino.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && actions["idle"]) {
      actions["idle"].play();
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Sketchfab_model"
          position={[0, -0.463, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="Sketchfab_model_87"
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.196}
              >
                <group name="root_86">
                  <group
                    name="GLTF_SceneRootNode_85"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="RootNode0_0_84" scale={0.01}>
                      <group name="skeletal3_3_83">
                        <group name="GLTF_created_0_82">
                          <group name="GLTF_created_0">
                            <skinnedMesh
                              name="Object_12"
                              geometry={nodes.Object_12.geometry}
                              material={materials.material_0}
                              skeleton={nodes.Object_12.skeleton}
                            />
                            <group name="Object_87_79" />
                            <primitive
                              object={nodes.GLTF_created_0_rootJoint}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("3d_models/rhino.glb");
