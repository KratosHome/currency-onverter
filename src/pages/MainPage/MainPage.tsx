import {useState} from "react";
import {SelectExchange} from "../../components/SelectExchange/SelectExchange";
import {Loader} from "../../components/Loader/Loader";
import {MainPageStyle} from "./MainPageStyles";
import {useAppSelector} from "../../hooks/useRdex";


export const MainPage = () => {

    const {errors, loading, exchangeRate}  = useAppSelector(state => state.getExchangeReduserSlise)


    const [cc, setCC] = useState("AUD")
    const handleClick2 = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement> | React.MouseEvent<HTMLInputElement>) => {
        setCC(e.currentTarget.value)
    }
    let filterExchange = exchangeRate.filter((item: any) => item.cc === cc)

    return (
        <>
            {errors ? <div>Помилка завантаження{errors}</div> : null}
            {loading ? <Loader/> : null}
            <MainPageStyle>
                <div className="MainPageBlok">
                    <SelectExchange exchangeRate={exchangeRate} handleClick={handleClick2}/>
                    {
                        exchangeRate.map((ite: any) =>
                            <div key={ite.rate} className="MainPageBlok2">
                                <div>1 {ite.txt} =</div>
                                {filterExchange.map((item: any) =>
                                    <div key={item.rate}>{ite.rate / item.rate} {cc}.</div>
                                )}
                            </div>
                        )
                    }
                </div>
            </MainPageStyle>
        </>
    )
};