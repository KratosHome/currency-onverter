import {useState} from "react";
import {SelectExchange} from "../../ReExports";
import {ExchangeRatePageStyles} from "../../ReExports";
import {useAppSelector} from "../../ReExports";
import {Loader} from "../../ReExports";

export const ExchangeRatePage = () => {
    const {errors, loading, exchangeRate} = useAppSelector(state => state.getExchangeReducerSlice)

    const [state, setState] = useState("")

    const changeInput = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement> | React.MouseEvent<HTMLInputElement>) => {
        setState(e.currentTarget.value)
    }
    const [cc, setCC] = useState("AUD")
    const changeSelect = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement> | React.MouseEvent<HTMLInputElement>) => {
        setCC(e.currentTarget.value)
    }
    let filterExchange2 = exchangeRate.filter((item: any) => item.cc === cc)

    return (
        <ExchangeRatePageStyles>
            <div className="ExchangeRateContainer">
                {errors ? <div>Помилка завантаження {errors}</div> : null}
                {loading ? <Loader/> : null}
                <input
                    type="number"
                    value={state}
                    onChange={changeInput}
                />
                <SelectExchange exchangeRate={exchangeRate} handleClick={changeSelect}/>
                <div>
                    {filterExchange2.map((item: any) =>
                        <div key={item.rate}>сумма: {item.rate * +state} UAH</div>
                    )}
                </div>
            </div>
        </ExchangeRatePageStyles>
    )
};