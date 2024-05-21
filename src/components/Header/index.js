import styles from './Header.module.scss';
import TituloComImagem from './TituloComImagem';
import TituloSemImagem from './TituloSemImagem';

export default function Header({ titulo, descricao, className = '', imagem }) {
    return (
        // Criamos header com estilos diferentes para tela de carrinho e a home
        <header className={styles.header}>
            {titulo && !imagem &&
                <TituloSemImagem
                    titulo={titulo}
                    descricao={descricao}
                />
            }
            {titulo && imagem &&
                <TituloComImagem
                    titulo={titulo}
                    descricao={descricao}
                    imagem={imagem}
                    className={className}
                />
            }
        </header>
    )
}