import Header from "components/Header";
import styles from "./Carrinho.module.scss";
import { useDispatch, useSelector } from "react-redux";
import Item from "components/Item";
import { resetarCarrinho } from "store/reducers/carrinho";
import { useNavigate } from "react-router-dom";

export default function Carrinho() {
    const navigator = useNavigate();
    const dispatch = useDispatch();
    const { carrinho, total } = useSelector(state => { // Estado global do Redux, que contém todos os slices (partes) do estado definidos na store.
        let total = 0;
        // reduce -> array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)
        // Primeiro parametro: O acumulador que começa como um array vazio e coleta os itens processados.
        // Segundo parametro: O item atual do array (state.carrinho) sendo processado.
        const carrinhoReducer = state.carrinho.reduce((arrInitial, itemAtualNoCarrinho) => {
            // Retorna o primeiro item que corresponde ao critério de pesquisa ou undefined se nenhum item for encontrado.
            const itemCategoria = state.itensCategoria.find(itemCategoria => itemCategoria.idGerado === itemAtualNoCarrinho.id);
            total += (itemCategoria.preco * itemAtualNoCarrinho.quantidade);
            // Esse array vai ter todos os elementos que correspondam ao id do itemAtualNoCarrinho, pois quando disparamos mudarCarrinho, 
            // Enviamos o idGerado, que será usado como critério de inclusão no array através de uma comparação mcom find
            arrInitial.push({
                ...itemCategoria,
                quantidade: itemAtualNoCarrinho.quantidade,
            })
            return arrInitial;
        }, []);
        return {
            carrinho: carrinhoReducer,
            total,
        };
    });
    return (
        <div>
            <Header
                titulo="Carrinhos de compras"
                descricao="Confira os produtos que você adicionou no carrinho"

            />
            <div className={styles.carrinho}>
                {carrinho.map(item => <Item key={item.idGerado} {...item} carrinho />)} {/* O carrinho aqui só é uma condicional bool */}
                <div className={styles.total}>
                    <strong>
                        Resumo da compra
                    </strong>
                    <span>
                        Total: <strong> R${total.toFixed(2)}</strong>
                    </span>
                    <button
                        className={styles.finalizar}
                        onClick={() => {
                            dispatch(resetarCarrinho())
                            navigator("/");
                        }}
                    >Finalizar Compra</button>
                </div>
            </div>
        </div>
    )
}