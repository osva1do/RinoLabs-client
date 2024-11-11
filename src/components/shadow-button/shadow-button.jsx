import "./style.css";

const ShadowButton = (props) => {
  return (
    <a className="shadow-button" href={props.href}>
      <span className="button-content">{props.text}</span>
    </a>
  );
};
export default ShadowButton;
