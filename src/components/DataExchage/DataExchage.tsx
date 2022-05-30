import {SataExchangeType} from "./SataExchangeIType";

export const DataExchange: React.FC<SataExchangeType> = ({filterExchange}) => {
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