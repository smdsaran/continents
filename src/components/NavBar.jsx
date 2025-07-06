import { useState } from 'react'
import { Container } from 'react-bootstrap';
import styles from "./Home.module.css";
import { setFilter } from '../redux-slice/continentsSlice';
import { useDispatch } from 'react-redux';
import HamburgerMenu from './HamburgerMenu';

const NavBar = () => {
    const dispatch = useDispatch();
    const [activeNav, setActiveNav] = useState("All");
    const navRegions = ["All", "Asia", "Europe"];

    const onClickHandler = (e) => {
        setActiveNav(e.target?.innerText);
        dispatch(setFilter(e.target?.innerText));
    }
  return (
    <Container className={styles.navContainer}>
        <p className={styles.navTitle}>Countries</p>
        <div className={styles.navItemsDiv}>
            {
                navRegions.map((region , i) => {
                    return (
                        <div onClick={onClickHandler} className={styles.navItemClick} key={`${region}-${i}`}>
                            <p  className={styles.navItems} style={{color: region === activeNav ? '#3D3D3D' : '#8B8B8B'}}>{region}</p>
                            {region === activeNav && <div className={styles.navTextBar} style={{color: '#3D3D3D', borderColor: '#3D3D3D'}}/>}
                        </div>
                    )
                })
            }
        </div>

        <HamburgerMenu navRegions={navRegions} onClickHandler={onClickHandler}/>
    </Container>
  )
}

export default NavBar;