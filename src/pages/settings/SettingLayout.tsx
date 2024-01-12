
import HeaderSettings from "./HeaderSettings";
import SettingsListLayout from "./SettingsListLayout";
import { Container } from "@mui/material";

const SettingLayout = () => {
    return (
        <Container>
            <HeaderSettings />
            <SettingsListLayout />
        </Container>
    );
};

export default SettingLayout;
