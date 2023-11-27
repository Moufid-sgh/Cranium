import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, ContactShadows, PresentationControls, Html, useProgress, Environment } from "@react-three/drei";


export default function Skull() {

  function Loader() {
    const { progress } = useProgress()
    return <Html center>{progress.toFixed(0)}% </Html>
  }

  return (
    <div className='h-[360px] md:h-[440px] w-[380px]'>
      <Canvas className='cursor-pointer'camera={{ position: [0, 4.5, 5], fov: 52 }}>
        <ambientLight intensity={0.6} />
        <directionalLight castShadow position={[-2.38, 1.32, 0.74]} />

        <Suspense fallback={<Loader />}>
        <PresentationControls
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 2, tension: 1500 }}
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 2, Math.PI / 2]}
            azimuth={[-Math.PI / 2, Math.PI / 2]}>
          <Model />
          </PresentationControls>
          <Environment preset='city' />
          <ContactShadows position={[0, -2.3, 0]}  opacity={0.5} scale={11} blur={2.5} far={12} />
        </Suspense>

      </Canvas>
    </div>
  )
};


//----Model---------------------------------------------------------//

function Model(props) {

  const modelRef = useRef();

  useFrame((state) => {
    
    modelRef.current.position.x = Math.cos(state.clock.elapsedTime) * 0.06
    modelRef.current.rotation.y = Math.cos(state.clock.elapsedTime) * 0.06

  });

  const { nodes, materials } = useGLTF('/skull.glb')
  return (
    <group {...props} dispose={null} scale={4.5} position={[0, -2.5, 0]} ref={modelRef}>
          <mesh geometry={nodes.defaultMaterial_3.geometry} material={materials.lambert4SG} />     
    </group>
  )
}

useGLTF.preload('/skull.glb')











