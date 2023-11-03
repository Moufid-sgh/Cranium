import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls, ContactShadows, PresentationControls } from "@react-three/drei";


export default function Skull() {
  return (
    <div className='h-[440px] w-[380px]'>
      <Canvas className='cursor-pointer'camera={{ position: [0, 4.5, 5], fov: 52 }}>
        <ambientLight intensity={3} />
        <spotLight position={[0, 2, 1]} />

        <Suspense fallback={null}>
        <PresentationControls
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 2, tension: 1500 }}
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 2, Math.PI / 2]}
            azimuth={[-Math.PI / 2, Math.PI / 2]}>
          <Model />
          </PresentationControls>
        </Suspense>

        <ContactShadows position={[0, -2.3, 0]}  opacity={0.5} scale={11} blur={2.5} far={12} />
      </Canvas>
    </div>
  )
};


//----Model---------------------------------------------------------//

function Model(props) {

  const modelRef = useRef();

  useFrame((state) => {
    
    modelRef.current.position.x = Math.cos(state.clock.elapsedTime) * 0.05
    modelRef.current.rotation.y = Math.cos(state.clock.elapsedTime) * 0.05

  });

  const { nodes, materials } = useGLTF('/skull.glb')
  return (
    <group {...props} dispose={null} scale={4.5} position={[0, -2.5, 0]} ref={modelRef}>
      <group >
        {/* <group rotation={[Math.PI / 2, 0, 0]}> */}
          {/* <mesh geometry={nodes.defaultMaterial.geometry} material={materials.Lambert} />
          <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials.Lambert} />
          <mesh geometry={nodes.defaultMaterial_2.geometry} material={materials.Lambert} /> */}
          <mesh geometry={nodes.defaultMaterial_3.geometry} material={materials.lambert4SG} />
          {/* <mesh geometry={nodes.defaultMaterial_4.geometry} material={materials.lambert4SG} /> */}
        {/* </group> */}
      </group>
    </group>
  )
}

useGLTF.preload('/skull.glb')











