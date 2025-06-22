
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

export const SpaceScene = () => {
  return (
    <>
      <Stars radius={100} depth={50} count={3000} factor={4} fade speed={1} />
      <ambientLight intensity={0.1} />
    </>
  );
};

export const SpaceBackground = () => {
  return (
    <Canvas className="stars-canvas">
      <SpaceScene />
    </Canvas>
  );
};

export default SpaceBackground;
