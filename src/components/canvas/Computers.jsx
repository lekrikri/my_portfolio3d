import { Suspense, useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { ContactShadows, Environment, Float, OrbitControls, Preload, PresentationControls, useGLTF } from "@react-three/drei"
import CanvasLoader from "../Loader";
// import { profil, screen } from "../../assets";


const Computers = ({ isMobile }) => {
    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
  return (
    <>
    <Environment preset="apartment" />
      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]} //verticale
        azimuth={[-1, 0.75]} //horizontale
        config={{ mass: 2, tension: 400 }} //glisser-deposer
        snap={{ mass: 4, tension: 400 }} //liberation
      >
        <Float speed={4.75} rotationIntensity={2} floatIntensity={2.85}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color={"#b396f1"}
            rotation={[-0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />
          <primitive 
            object={computer.scene} 
   
            position-y={-0.3}
            scale={isMobile ? 3.1 : 1.5}
            // position={isMobile ? [0, -3, -9.2] : [0, -3.25, -1.5]}
            >
            {/* <Html
              transform
              occlude
              wrapperClass="htmlScreen"
              distanceFactor={1.17}
              position={[0, 1.56, -1.39]}
              rotation-x={-0.256}
              
            >
              <iframe src={screen} />
            </Html> */}
          </primitive>

        </Float>
      </PresentationControls>
      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
      </>
  )
}

const ComputersCanvas = () => {
    const [isMobile, setIsMobile ] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia("max-width: 500")

        setIsMobile(mediaQuery.matches)

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches)
        }

        mediaQuery.addEventListener("change", handleMediaQueryChange)

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange)
        }
    }, [])

    return (
        <Canvas
      frameloop='always'
      shadows
      dpr={[1, 2]}
      camera={{ position: [28, 3, 5], fov: 23 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}  />
      </Suspense>
      <Preload all />
    </Canvas>
    )
}

export default ComputersCanvas
