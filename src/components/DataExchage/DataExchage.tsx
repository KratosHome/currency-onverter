import {SataExchangeType} from "../../ReExports";

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