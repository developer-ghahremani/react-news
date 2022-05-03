import { Switch, SwitchProps } from "@mui/material";

import React from "react";

interface Props extends SwitchProps {}

const ISwitch = (props: Props) => <Switch {...props} />;

export default ISwitch;
