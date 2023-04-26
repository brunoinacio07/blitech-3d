import { OrthographicCamera } from "@react-three/drei"
import useSpline from "@splinetool/r3f-spline"
import { useEffect, useState } from "react"

export function TimerScene({ ...props }) {
  const { nodes, materials } = useSpline(
    "https://prod.spline.design/I-z6u-AEKTUzDR-H/scene.splinecode"
  )
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunnig] = useState(false)
  const [zoom, setZoom] = useState(0.9)

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 600) {
        setZoom(0.65)
      } else {
        setZoom(1.35)
      }
    }

    window.addEventListener("resize", handleResize)

    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    let interval

    if (isRunning) {
      interval = setInterval(() => {
        setTime((time) => time + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isRunning])

  function handlePlay() {
    setIsRunnig(true)
  }

  function handlePause() {
    setIsRunnig(false)
  }

  function handleStop() {
    setTime(0)
    setIsRunnig(false)
  }

  return (
    <>
      <color attach="background" args={["#e7e7e7"]} />
      <group {...props} dispose={null}>
        <group
          name="playButton"
          position={[-230, 40, 99.25]}
          onClick={handlePlay}
        >
          <mesh
            name="Text 2"
            geometry={nodes["Text 2"].geometry}
            material={materials["Text 2 Material"]}
            castShadow
            receiveShadow
            position={[-3, -0.63, 12.75]}
          />
          <mesh
            name="Rectangle"
            geometry={nodes.Rectangle.geometry}
            material={materials["Rectangle Material"]}
            castShadow
            receiveShadow
            position={[0, 0, -13.75]}
          />
        </group>

        <group
          name="pauseButton"
          position={[0, 40, 99.25]}
          onClick={handlePause}
        >
          <mesh
            name="Text 21"
            geometry={nodes["Text 21"].geometry}
            material={materials["Text 21 Material"]}
            castShadow
            receiveShadow
            position={[-3, -0.63, 12.75]}
          />
          <mesh
            name="Rectangle1"
            geometry={nodes.Rectangle1.geometry}
            material={materials["Rectangle1 Material"]}
            castShadow
            receiveShadow
            position={[0, 0, -13.75]}
          />
        </group>

        <group
          name="stopButton"
          position={[230, 40, 99.25]}
          onClick={handleStop}
        >
          <mesh
            name="Text 22"
            geometry={nodes["Text 22"].geometry}
            material={materials["Text 22 Material"]}
            castShadow
            receiveShadow
            position={[-3, -0.63, 12.75]}
          />
          <mesh
            name="Rectangle2"
            geometry={nodes.Rectangle2.geometry}
            material={materials["Rectangle2 Material"]}
            castShadow
            receiveShadow
            position={[0, 0, -13.75]}
          />
        </group>
        <mesh
          name="minuteFirstChar"
          geometry={
            nodes[
              String(Math.floor(time / 60))
                .padStart(2, "0")
                .split("")[0]
            ].geometry
          }
          material={materials["Text Material"]}
          castShadow
          receiveShadow
          position={[-230, 150, 10.43]}
        />
        <mesh
          name="minuteLastChar "
          geometry={
            nodes[
              String(Math.floor(time / 60))
                .padStart(2, "0")
                .split("")[1]
            ].geometry
          }
          material={materials["Text Material"]}
          castShadow
          receiveShadow
          position={[-100, 150, 10.43]}
        />
        <mesh
          name="dots"
          geometry={nodes.dots.geometry}
          material={materials["Text Material"]}
          castShadow
          receiveShadow
          position={[0, 150, 10.43]}
        />
        <mesh
          name="secondFirstChar"
          geometry={nodes[String(time).padStart(2, "0").split("")[0]].geometry}
          material={materials["Text Material"]}
          castShadow
          receiveShadow
          position={[100, 150, 10.43]}
        />
        <mesh
          name="secondLastChar"
          geometry={nodes[String(time).padStart(2, "0").split("")[1]].geometry}
          material={materials["Text Material"]}
          castShadow
          receiveShadow
          position={[230, 150, 10.43]}
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
        <directionalLight
          name="Key Light"
          castShadow
          intensity={0.2}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          shadow-camera-left={-500}
          shadow-camera-right={500}
          shadow-camera-top={500}
          shadow-camera-bottom={-500}
          position={[138.73, 169.47, -75.64]}
        />
        <mesh
          name="Floor"
          geometry={nodes.Floor.geometry}
          material={materials["Floor Material"]}
          castShadow
          receiveShadow
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <OrthographicCamera
          name="10"
          makeDefault={true}
          zoom={zoom}
          far={100000}
          near={-100000}
          position={[398.3, 271.47, 1002.39]}
          rotation={[-0.05, 0.04, 0]}
          scale={1}
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
