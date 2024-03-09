export function withStyles(Component) {
  return (props) => {
    const className =
      "rounded-r-md bg-pink-200 text-light text-sm leading-6 hover:bg-pink-300 transition ease-in-out delay-150 active:scale-95 active:bg-pink-300";
    return <Component style={className} {...props} />;
  };
}
