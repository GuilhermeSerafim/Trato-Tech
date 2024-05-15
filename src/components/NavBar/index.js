import styles from "./NavBar.module.scss";
import { ReactComponent as Logo } from '../../assets/logo.svg';
import classNames from "classnames";
import {
    RiShoppingCart2Line,
    RiShoppingCartFill
} from "react-icons/ri";
import Busca from "components/Busca";

const iconesProps = {
    color: "white",
    size: 24,
}

export default function NavBar() {
    return (
        <nav className={styles.nav}>
            <Logo className={styles.logo} />
            <div className={styles.links}>
                <div>
                    <a href="/" className={classNames(styles.link, { // Antes da chave é naturalmente true
                        [styles.selected]: window.location.pathname === "/"
                    })}>Página Inicial</a>
                </div>
            </div>
            <div className={styles.busca}><Busca/></div>
            <div className={styles.icones}>
                <a href="/carrinho">
                    {window.location.pathname === "/carrinho"
                        ? <RiShoppingCartFill {...iconesProps} />
                        : <RiShoppingCart2Line {...iconesProps} />
                    }
                </a>
            </div>
        </nav>
    )
}