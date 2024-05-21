import styles from "./NavBar.module.scss";
import { ReactComponent as Logo } from '../../assets/logo.svg';
import classNames from "classnames";
import {
    RiShoppingCart2Line,
    RiShoppingCartFill
} from "react-icons/ri";
import Busca from "components/Busca";
import { Link, useLocation, useNavigate } from "react-router-dom";

const iconesProps = {
    color: "white",
    size: 24,
}

export default function NavBar() {
    const location = useLocation(); // Resgatar parametros
    const navigator = useNavigate(); // Navegar entre as paginas
    return (
        <nav className={styles.nav}>
            <Logo className={styles.logo} onClick={() => navigator("/")} />
            <div className={styles.links}>
                <div>
                    <Link to="/" className={classNames(styles.link, { // Antes da chave é naturalmente true
                        [styles.selected]: location.pathname === "/"
                    })}>Página Inicial</Link>
                </div>
            </div>
            <div className={styles.busca}><Busca /></div>
            <div className={styles.icones}>
                <Link to="/carrinho">
                    {location.pathname === "/carrinho"
                        ? <RiShoppingCartFill {...iconesProps} />
                        : <RiShoppingCart2Line {...iconesProps} />
                    }
                </Link>
            </div>
        </nav>
    )
}