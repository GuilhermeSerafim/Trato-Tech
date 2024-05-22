import styles from "./Item.module.scss";
import {
    AiOutlineHeart,
    AiFillHeart,
} from 'react-icons/ai';
import {
    FaCartPlus
} from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { mudarCarrinho } from "store/reducers/carrinho";
import { mudarFavorito } from "store/reducers/itensDeCadaCategoria";
import classNames from "classnames";

const iconeProps = {
    size: 24,
    color: "#041833"
};

export default function Item({
    titulo,
    foto,
    preco,
    descricao,
    favorito,
    idGerado,
    carrinho,
}) {
    const dispatch = useDispatch();
    const estaNoCarrinho = useSelector(state => state.carrinho.some(itemNoCarrinho => itemNoCarrinho.id === idGerado)); // PARA MUDANÇA DE COR APENAS

    return (
        <div className={classNames(styles.item, {
            [styles.itemNoCarrinho]: carrinho, // Irá sobrepor se estiver na tela carrinho (ou se carrinho for true)
        })}>
            <div className={styles['item-imagem']}>
                <img src={foto} alt={titulo} />
            </div>
            <div className={styles['item-descricao']}>
                <div className={styles['item-titulo']}>
                    <h2>{titulo}</h2>
                    <p>{descricao}</p>
                </div>
                <div className={styles['item-info']}>
                    <div className={styles['item-preco']}>
                        R$ {preco.toFixed(2)}
                    </div>
                    <div className={styles['item-acoes']}>
                        {favorito
                            ? <AiFillHeart {...iconeProps} color='#ff0000' className={styles['item-acao']} onClick={() => dispatch(mudarFavorito(idGerado))} />
                            : <AiOutlineHeart {...iconeProps} className={styles['item-acao']} onClick={() => dispatch(mudarFavorito(idGerado))} />
                        }
                        <FaCartPlus
                            {...iconeProps}
                            color={estaNoCarrinho ? '#1875E8' : iconeProps.color}
                            className={styles['item-acao']}
                            onClick={() => dispatch(mudarCarrinho(idGerado))}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
