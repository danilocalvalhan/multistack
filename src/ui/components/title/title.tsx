import { jsx } from "@emotion/react";
import { useSlotProps } from "@mui/base";
import { JSXElementConstructor } from "react";
import { TitleContainer, SubTitleContainer} from "./title.styles";

interface TitleGeneratorProps {
    firstTitle: string;
    secondTitle?: string | JSX.Element;
} 

export default function TitleGenerator(props: TitleGeneratorProps) {
  return (
    <>
      <TitleContainer>{props.firstTitle}</TitleContainer>
      <SubTitleContainer>{props.secondTitle}</SubTitleContainer>
    </>
  );
}
