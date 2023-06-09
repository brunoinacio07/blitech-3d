import { Float, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { BlitechScene } from "../Scenes/BlitechScene"

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Canvas
        flat
        linear
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <color attach="background" args={["#e7e7e7"]} />
        <Float
          speed={3}
          rotationIntensity={0.4}
          floatIntensity={1}
          floatingRange={[1, 20]}
        >
          <BlitechScene />
        </Float>

        <OrbitControls />
      </Canvas>
    </Suspense>
  )
}
