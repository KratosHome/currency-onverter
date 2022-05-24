import "./MayInput.css"

interface inputeProps {
    label: string;
    labelText: string;
    type: string
    register: any
    required: string
    patternValue: any
    patternMessage: string
    errors: any
    mustBeCompleted?: boolean
}

export const MayInput: React.FC<inputeProps> = ({
                                                    label,
                                                    labelText,
                                                    type,
                                                    register,
                                                    required,
                                                    patternValue,
                                                    patternMessage,
                                                    errors,
                                                    mustBeCompleted
                                                }) => {
    return (
        <div className="mayInputContainer">
            <label
                htmlFor={label}
            >
                {labelText}
                {mustBeCompleted ? <span>*</span> : null}
            </label>
            <input
                id={label}
                type={type}
                {...register(label, {
                    required: patternMessage,
                    pattern: {
                        value: patternValue,
                        message: patternMessage,
                    },
                })}
            />
            {errors?.[label]?.message && <div>{errors?.[label]?.message}</div>}
        </div>
    );
};

