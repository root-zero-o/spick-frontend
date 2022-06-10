import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `
* {
    margin: 0;
    padding: 0;
    background: #1B2838;
    background: -moz-linear-gradient(left, #1B2838 0%, #304864 52%, #1B2838 100%);
    background: -webkit-linear-gradient(left, #1B2838 0%, #304864 52%, #1B2838 100%);
    background: linear-gradient(to right, #1B2838 0%, #304864 52%, #1B2838 100%);
}
`;

export default GlobalStyle;