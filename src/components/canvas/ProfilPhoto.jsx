import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { MeshDistortMaterial, OrbitControls, Preload, Sphere  } from "@react-three/drei"

import CanvasLoader from "../Loader"



const ProfilPhoto = () => {
  return (
    <>
    <OrbitControls enableZoom={false}/>
    <ambientLight intensity={0.2}/>
    <directionalLight position={[3,2,1]}/>
    <Sphere args={[1,100,200]} scale={2.5}>
        <MeshDistortMaterial
             color="#915EFF"
             attach="material"
             distort={0.45}
             speed={1.25}
                    />
    </Sphere>
    </>
  )
}

const ProfilPhotoCanvas = () => {
    return (
        <Canvas
        shadows
        frameloop="always"
        gl={{ preserveDrawingBuffer: true }}
        camera={{ }}>
            <Suspense fallback={<CanvasLoader />}>
                <ProfilPhoto />
            </Suspense>
            <Preload all />
        </Canvas>
    )
}

export default ProfilPhotoCanvas