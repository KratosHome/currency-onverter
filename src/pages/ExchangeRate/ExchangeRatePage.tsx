import "./ExchangeRatePage.css"
import {MayInput} from "../../components/MayInput/MayInput";
import {useForm} from "react-hook-form";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {getExchangeRateAction} from "../../redux/action/GetExchangeRateAction";
import {useTypeSelector} from "../../hooks/useTypeSelector";

interface FormValues {
    email: string;
    name: string;
    surname: string;
    mobile: number;
}


export const ExchangeRatePage: React.FC<{}> = () => {


    const dispatch = useDispatch()
    useEffect(() => {
        getExchangeRateAction()(dispatch)
    }, [dispatch]);

    const {exchangeRate, loading} = useTypeSelector((state) => state.ExchangeRate);


    const [cc, setCC] = useState("USD")

    let filterExchange = exchangeRate.filter((item: any) => item.cc == cc)

    console.log(filterExchange)

    const [state, setState] = useState("")

    const handleshenge = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement> | React.MouseEvent<HTMLInputElement>) => {
        setState(e.currentTarget.value)
    }

    return (
        <div className="ExchangeRateContainer">
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