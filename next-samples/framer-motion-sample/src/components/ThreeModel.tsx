import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { useRef } from "react";

const Model = ({
  url,
  scale,
  position,
  rotation,
}: {
  url: string;
  scale: number;
  position: number[];
  rotation: number[];
}) => {
  const groupRef = useRef(null);
  const { scene } = useGLTF(url);
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive
        object={scene}
        scale={scale}
        position={position}
        rotation={rotation}
      />
    </group>
  );
};

const ThreeModel = () => {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", duration: 1.5, delay: 0.5, stiffness: 120 }}
      className="h-[500px]"
    >
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={4} />
        <Model
          url="/src/assets/models/scene.gltf"
          scale={0.5}
          position={[1, -0.5, 0]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        {/* これだけで control できるようになるのえぐい */}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </motion.div>
  );
};

export default ThreeModel;
