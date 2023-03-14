import styles from "./Button.module.css";


interface Props {
  // allow the passing of strings to children of its component
  children: string;
  // make sure color can't be set to anything outside these 3
  color?: 'primary' | 'secondary' | 'danger';
  // set onclick to nothing
  onClick: () => void;
}
// takes in props from interface: Props
 const Button = ({ children, onClick, color="primary"}: Props) => {
  return(
    <button
      onClick={onClick}
      // to access btn, and color of button, then stringify them with .join
      className={[styles.btn, styles['btn-' + color]].join(' ')}>{children}</button>
  )
}

export default Button;
