import "./ExchangeRatePage.css"
import {useState} from "react";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {Loader} from "../../components/Loader/Loader";


export const ExchangeRatePage: React.FC<{}> = () => {
    const {exchangeRate, loading} = useTypeSelector((state) => state.ExchangeRate);

    const [cc] = useState("USD")
    let filterExchange = exchangeRate.filter((item: any) => item.cc === cc)

    const [state, setState] = useState("")

    const handleshenge = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement> | React.MouseEvent<HTMLInputElement>) => {
        setState(e.currentTarget.value)
    }

    return (
        <div className="ExchangeRateContainer">
            {loading ? <Loader/> : null}
            <input
                type="number"
                value={state}
                onChange={handleshenge}
            /> <span>UAH</span>
            <div>
                {filterExchange.map((item: any) =>
                    <div key={item.rate}>сумма: {item.rate * +state} USD</div>
                )}
            </div>
        </div>
    )
};