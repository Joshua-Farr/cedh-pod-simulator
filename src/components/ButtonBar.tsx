import styled from "styled-components";

const Button = styled.button`
  background-color: #c69239;
  color: white;
  border: none;
  border-radius: 15px;
  padding: 5px 20px;

  &:hover {
    cursor: pointer;
    background-color: rgba(198, 146, 57, 0.655);
    transition: 0.33s ease-out;
  }
`;

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

type ButtonProps = {
  toggle: () => void;
  newHand: () => void;
  newCommanders: () => void;
};

export const ButtonBar = (props: ButtonProps) => {
  return (
    <Wrapper>
      {/* <Button onClick={() => props.toggle()}>Change Commander</Button> */}
      <Button onClick={() => props.newCommanders()}>Randomize Pod</Button>
      <Button
        onClick={() => {
          console.log("*** Randomizing Player Hand!");
          props.newHand();
        }}
      >
        Draw New Hand
      </Button>
    </Wrapper>
  );
};
