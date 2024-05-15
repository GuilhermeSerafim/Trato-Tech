import styles from "./Footer.module.scss";
import {
    FaFacebook,
    FaTwitter,
    FaInstagram
} from "react-icons/fa";

const iconesProps = {
    color: "white",
    size: 24,
}

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <FaFacebook {...iconesProps} />
                <FaTwitter {...iconesProps} />
                <FaInstagram {...iconesProps} />
            </div>
            <span>
                Desenvolvido por Guilherme
            </span>
        </footer>
    )
}