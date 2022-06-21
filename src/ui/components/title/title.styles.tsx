import { styled } from "@mui/material";


export const TitleContainer = styled('h1') `
    font-size: 20px;
    text-align: center;
    margin-top: ${({theme}) => theme.spacing(5)};
`;

export const SubTitleContainer = styled('h2') `
    font-size: 18px;
    font-weight: normal;
    text-align: center;
    color: ${({theme}) => theme.palette.text.secondary};
    margin-bottom: ${({theme}) => theme.spacing(5)};
`;