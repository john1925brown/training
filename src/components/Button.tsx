type ButtonType = {
  name: string;
};

export const Button = (props: ButtonType) => {
  const onClickHandler = (name: string) => {
    console.log(name);
  };

  return (
    <button
      onClick={() => {
        onClickHandler(props.name);
      }}
    >
      {props.name}
    </button>
  );
};
