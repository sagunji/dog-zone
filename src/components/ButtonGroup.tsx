import { styled } from "@mui/material";
import { Box } from "@mui/system";

interface IAppButton {
  children: JSX.Element | JSX.Element[];
}

const ButtonGroupWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const ButtonGroup: React.FC<IAppButton> = ({ children }) => {
  return <ButtonGroupWrapper>{children}</ButtonGroupWrapper>;
};

export default ButtonGroup;
