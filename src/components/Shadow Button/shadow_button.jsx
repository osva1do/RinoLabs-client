import "./style.css";

const ShadowButton = ({ text }) => {
  return (
    <button className="shadow-button">
      <span className="button-content">{text}</span>
    </button>
  );
};
export default ShadowButton;
