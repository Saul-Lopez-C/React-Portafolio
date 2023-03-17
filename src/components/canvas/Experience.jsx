import { useState, useEffect } from "react"
import { OrbitControls } from "@react-three/drei"
import Hunter from "./HunterModel"

const Experience = ({ isMobile }) => {
    
    return (
        <>
            <OrbitControls
                enableZoom={false}
                enablePan={false}
                enableRotate={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
            />
            <ambientLight />
            {/* <directionalLight
                position={[-5, 5, 5]}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            /> */}
            <group position={[0, -1, 0]} scale={isMobile ? 0.50 : 0.65}>
                <Hunter isMobile={isMobile}/>
            </group>
            <mesh>
                {/* <planeBufferGeometry args={[10, 10, 1, 1]} /> */}
                {/* <shadowMaterial transparent opacity={0.2} /> */}
            </mesh>
        </>
    );
}

export default Experience