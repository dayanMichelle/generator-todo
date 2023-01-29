import styles from './Navbar.module.css'
import imgIcon from '../../assets/img/icon.png'
export function Navbar() {
    return (
        <div className={styles.navbar}>
            <div>
                <img width='30px' src={imgIcon} alt="" />
            </div>
            <div className={styles.url}>
                <ul>
                    <li>Home</li>
                    <li>My todos</li>
                    <li>Create todo</li>
                </ul>
            </div>
        </div>
    )
}