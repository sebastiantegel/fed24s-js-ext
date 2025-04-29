type ChildProps = {
  greeting: string;
  time?: number;
};

export const Child = (props: ChildProps) => {
  return (
    <h2>
      {props.greeting} - {props.time}
    </h2>
  );
};
