import styles from "./Item.module.scss";
import {
    AiOutlineHeart,
    AiFillHeart,
    AiFillMinusCircle,
    AiFillPlusCircle,
} from 'react-icons/ai';
import {
    FaCartPlus
} from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { mudarCarrinho, mudarQuantidadeDoItem } from "store/reducers/carrinho";
import { mudarFavorito } from "store/reducers/itensDeCadaCategoria";
import classNames from "classnames";

const iconeProps = {
    size: 24,
    color: "#041833"
};

const qtdItensCarrinhoProps = {
    size: 32,
    color: "#1875e8",
};

export default function Item({
    titulo,
    foto,
    preco,
    descricao,
    favorito,
    idGerado,
    carrinho, // Verifacação booleana
    quantidade,
}) {
    const dispatch = useDispatch();
    // PARA MUDANÇA DE COR APENAS
    const estaNoCarrinho = useSelector(state => state.carrinho.some(itemNoCarrinho => itemNoCarrinho.id === idGerado));

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
                        {carrinho
                            ? (
                                <div className={styles.quantidade}>
                                    Quantidade:
                                    <AiFillMinusCircle
                                        {...qtdItensCarrinhoProps}
                                        onClick={() => {
                                            if (quantidade >= 1) {
                                                dispatch(mudarQuantidadeDoItem({ idGerado, quantidade: -1 }));
                                            }
                                        }}
                                    />
                                    {/* str.padStart(targetLength [, padString]) */}
                                    <span>{String(quantidade || 0).padStart(2, '0')}</span>
                                    <AiFillPlusCircle {...qtdItensCarrinhoProps} onClick={() => dispatch(mudarQuantidadeDoItem({ idGerado, quantidade: +1 }))} />
                                </div>
                            )
                            : (
                                <FaCartPlus
                                    {...iconeProps}
                                    color={estaNoCarrinho ? '#1875E8' : iconeProps.color}
                                    className={styles['item-acao']}
                                    onClick={() => dispatch(mudarCarrinho(idGerado))}
                                />
                            )
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
