import ".././style.css";
export const FormInput = (props) => {
    const { onChange, ...restprops } = props;
    return (
        <div>
            <input
                {...restprops}
                onChange={onChange}
            />
        </div>
    );
};
