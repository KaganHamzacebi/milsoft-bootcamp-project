import styles from './Header.module.scss';

const Header = () => {

  return (
    <header className={styles.main}>
      <span onClick={() => window.location.href = '/'}>MilSOFT E-Commerce</span>
    </header>
  );
};

export default Header;