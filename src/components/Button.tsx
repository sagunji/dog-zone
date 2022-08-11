import { Button, styled, Icon } from "@mui/material";
import { Box } from "@mui/system";

interface IAppButton {
  icon: string;
  label: string;
  onClick: () => void;
  [key: string]: any;
}

const ButtonContentWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const AppButton = ({ icon, label, onClick, ...rest }: IAppButton) => {
  return (
    <Button {...rest} onClick={onClick}>
      <ButtonContentWrapper>
        <Icon>{icon}</Icon>
        {label}
      </ButtonContentWrapper>
    </Button>
  );
};

export default AppButton;
