import { OrthographicCamera } from "@react-three/drei"
import useSpline from "@splinetool/r3f-spline"
import { useEffect, useState } from "react"

export function BlitechScene({ ...props }) {
  const { nodes, materials } = useSpline(
    "https://prod.spline.design/AdaFccZLflXnvmm5/scene.splinecode"
  )
  const [zoom, setZoom] = useState(0.9)

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 600) {
        setZoom(0.6)
      } else {
        setZoom(1.2)
      }
    }

    window.addEventListener("resize", handleResize)

    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
      <color attach="background" args={["#e7e7e7"]} />
      <group {...props} dispose={null}>
        <mesh
          name="Text"
          geometry={nodes.Text.geometry}
          material={materials["Text Material"]}
          castShadow
          receiveShadow
          position={[-30.26, 100, -101.19]}
        />
        <directionalLight
          name="Light Main"
          castShadow
          intensity={1}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          shadow-camera-left={-500}
          shadow-camera-right={500}
          shadow-camera-top={500}
          shadow-camera-bottom={-500}
          position={[-129.8, 169.47, 157.37]}
        />
        <OrthographicCamera
          name="1"
          makeDefault={true}
          zoom={zoom}
          far={100000}
          near={-100000}
          position={[97.05, 285.89, 868.8]}
          rotation={[-0.24, 0.18, 0.04]}
        />
        <hemisphereLight
          name="Default Ambient Light"
          intensity={0.75}
          color="#eaeaea"
        />
      </group>
    </>
  )
}
