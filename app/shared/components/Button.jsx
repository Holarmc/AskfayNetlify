function withStyles(Component) {
  return (props) => {
    const className =
      "rounded-r-md bg-pink-200 text-light text-sm leading-6 hover:bg-pink-300 transition ease-in-out delay-150 active:scale-95 active:bg-pink-300";
    return <Component style={className} {...props} />;
  };
}

export const Button = ({ children, value, name, noStyle }) => {
  const style =
    "p-2 w-max bg-pink-200 rounded-md text-sm text-light shadow-md hover:bg-pink-300 transition ease-in-out active:scale-95 active:bg-pink-300";
  const className =
    "py-2  px-6 w-max  rounded-md text-sm  shadow-md active:scale-95";
  return (
    <button
      type="submit"
      name={name}
      value={value}
      className={noStyle ? className : style}
    >
      {children}
    </button>
  );
};

export const styledButton = withStyles(Button);
