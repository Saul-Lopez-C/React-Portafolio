import { OrbitControls } from "@react-three/drei"
import Hunter from "./HunterModel"

const Experience = () => {
    return (
        <>
            <OrbitControls
                enableZoom={false}
                enablePan={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
            />
            <ambientLight />
            <directionalLight
                position={[-5, 5, 5]}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            />
            <group position={[0, -1, 0]} scale={0.70}>
                <Hunter />
            </group>
            <mesh>
                <planeBufferGeometry args={[10, 10, 1, 1]} />
                <shadowMaterial transparent opacity={0.2} />
            </mesh>
        </>
    );
}

export default Experience