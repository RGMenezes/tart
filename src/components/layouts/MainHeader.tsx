'use client';

import { Dispatch, SetStateAction } from 'react';
import TextLink from '../link/TextLink';
import Logo from '../svg/Logo';
import styles from './MainHeader.module.css';
import IconButton from '../button/IconButton';
import { BsMoon, BsSun } from 'react-icons/bs';
import IconLink from '../link/IconLink';

export default function MainHeader({theme, setTheme}: {theme: string, setTheme: Dispatch<SetStateAction<string>>}){
  const handleTheme = () => {
    const newTheme = theme === 'theme_black' ? 'theme_white' : 'theme_black';
    document.cookie = newTheme;
    setTheme(newTheme);
  };
  return(
    <header className={styles.header}>
      <IconLink to='/sobre'>
        <Logo className={styles.logo}/>
      </IconLink>
      
      <ul className={styles.list_container}>
        <li>
          <TextLink type='strong' to='/'>Home</TextLink>
        </li>
        <li>
          <TextLink type='strong' to='/contato'>Contato</TextLink>
        </li>
        <li>
          <TextLink type='strong' to='/layouts'>Layouts</TextLink>
        </li>
      </ul>

      <IconButton onClick={handleTheme}>
        {theme === 'theme_black' ? 
          <BsSun className={styles.icon}/>
          :
          <BsMoon className={styles.icon}/>
        }
      </IconButton>
    </header>
  );
};