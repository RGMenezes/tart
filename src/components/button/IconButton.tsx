import styles from './IconButton.module.css';

export default function IconButton({children, onClick}: {children: React.ReactNode, onClick: () => void}){
  return(
    <button onClick={onClick} className={styles.button}>{children}</button>
  );
};