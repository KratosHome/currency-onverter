import "./ConverterPage.css"
import {MayInput} from "../../components/MayInput/MayInput";
import {useForm} from "react-hook-form";

interface FormValues {
    email: string;
    name: string;
    surname: string;
    mobile: number;
}


export const ConverterPage: React.FC<{}> = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm<FormValues>({mode: "onBlur"});

    const numberRegularExpressions = /^([+]?[0-9\s-]{3,25})*$/i;

    const onSubmit = handleSubmit((data) => {
        console.log(data);
        reset();
    });
    return (
        <>
            <MayInput
                label={"usd"}
                labelText={"usd"}
                type={"text"}
                register={register}
                required={"Введіть валюту"}
                patternValue={numberRegularExpressions}
                patternMessage={"Введіть правильно валюту"}
                errors={errors}
                mustBeCompleted={true}
            />
        </>
    )
};