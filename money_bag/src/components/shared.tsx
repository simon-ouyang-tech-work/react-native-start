import styled from "styled-components/native";
import { Dimensions } from "react-native"
import { colors } from "./colors";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color: ${colors.white};
`

const ScreenWidth = Dimensions.get("screen").width;
const ScreenHeight = Dimensions.get("screen").height;