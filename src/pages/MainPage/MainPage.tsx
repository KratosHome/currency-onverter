import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getExchangeRateAction} from "../../redux/action/GetExchangeRateAction";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import "./MainPage.css"

export const MainPage = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        getExchangeRateAction()(dispatch)
    }, [dispatch]);


    const {exchangeRate, loading} = useTypeSelector((state) => state.ExchangeRate);


    const [cc, setCC] = useState("AUD")


    const handleClick = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement> | React.MouseEvent<HTMLInputElement>) => {
        setCC(e.currentTarget.value)

    }

    let filterExchange = exchangeRate.filter((item: any) => item.cc == cc)

    const [ccBase, setCcBase] = useState("UAH")
    let filterExchangeBase = exchangeRate.filter((item: any) => item.cc == ccBase)





    return (
        <>
            <div className="MainPageBlokSelect">
                <div>
                    {filterExchange.map((item: any) =>
                        <div key={item.cc}>
                            <div>дата: {item.exchangedate}</div>
                        </div>
                    )}
                </div>
                <div className="MainPageText">міняю:</div>
                <select className="MainPageSelector" onChange={handleClick}>
                    {exchangeRate.map((item: any) =>
                        <option
                            key={item.cc}
                            value={item.cc}
                            id={item.cc}
                        >{item.cc}</option>
                    )}
                </select>
                <div className="MainPageText">отримую:</div>
                <select className="MainPageSelector" onChange={handleClick}>
                    {exchangeRate.map((item: any) =>
                        <option
                            key={item.cc}
                            value={item.cc}
                            id={item.cc}
                        >{item.cc}</option>
                    )}
                </select>
            </div>
            <div>
                {filterExchange.map((item: any) =>
                    <div key={item.cc} className="MainPageFilter">
                        <div>1 {item.txt} =</div>
                        <div>{item.rate} грн.</div>
                    </div>
                )}
            </div>
        </>
    )
};