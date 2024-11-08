import './style.css'

const ListButton = (props) => {
  
  return (
    <a href={props.href} className="list-button">{props.text}</a>
  );
};
export default ListButton;