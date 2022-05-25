interface SelectExchangeType{
    exchangeRate: any
    handleClick: any
}

export const SelectExchange: React.FC<SelectExchangeType> = ({exchangeRate, handleClick}) => {
    return (
        <>
            <select className="MainPageSelector" onChange={handleClick}>
                {exchangeRate.map((item: any) =>
                    <option
                        key={item.cc}
                        value={item.cc}
                        id={item.cc}
                    >{item.cc}
                    </option>
                )}
            </select>
        </>
    )
};