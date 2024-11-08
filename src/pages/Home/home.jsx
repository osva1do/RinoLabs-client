import LandingOverlay from "../../components/landing overlay/overlay";
import Overlay from "../../components/landing overlay/overlay";
import { Scene } from "../../components/Scene";
import "./style.css";
import { Canvas } from "@react-three/fiber";

const Home = () => {
  return (
    <>
      <Overlay />
      <Scene />
    </>
  );
};

export default Home;
