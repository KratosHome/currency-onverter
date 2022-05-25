
interface SataExchangeIterfase{
    filterExchange: any
}

export const DataExchange: React.FC<SataExchangeIterfase> = ({filterExchange}) => {
    return (
        <>
            <div>
                {filterExchange.map((item: any) =>
                    <div key={item.cc}>
                        <div>дата: {item.exchangedate}</div>
                    </div>
                )}
            </div>
        </>
    )
};