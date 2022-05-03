import { IconBaseProps } from "react-icons";
import { IoMdMoon } from "react-icons/io";
import React from "react";

interface Props extends IconBaseProps {}

const Moon = (props: Props) => <IoMdMoon {...props} />;

export default Moon;
