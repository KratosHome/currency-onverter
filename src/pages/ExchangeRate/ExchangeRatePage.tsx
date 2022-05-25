import "./ExchangeRatePage.css"
import {useState} from "react";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {Loader} from "../../components/Loader/Loader";
import {SelectExchange} from "../../components/SelectExchange/SelectExchange";


export const ExchangeRatePage: React.FC<{}> = () => {
    const {exchangeRate, loading} = useTypeSelector((state) => state.ExchangeRate);

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
        <div className="ExchangeRateContainer">
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
    )
};