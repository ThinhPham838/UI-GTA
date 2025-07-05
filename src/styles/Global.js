import { createGlobalStyle } from 'styled-components';
import * as theme from './Theme.styled'; // khai báo biến dữ liệu css theme

// có thể thay css main

const GlobalStyles = createGlobalStyle`
body {
  background-color: ${({ theme }) => theme.colors?.background};
  color: ${({ theme }) => theme.colors?.text};
}
// theme buttons color
.light {
  background-color: ${theme.light.colors.background};
}
.dark {
  background-color: ${theme.dark.colors.background};
}
.blue {
  background-color: ${theme.blue.colors.background};
}
.green {
  background-color: ${theme.green.colors.background};
}
.yellow {
  background-color: ${theme.yellow.colors.background};
}
.brown {
  background-color: ${theme.brown.colors.background};
}
.pink {
  background-color: ${theme.pink.colors.background};
}
.ant-menu-submenu-title, .ant-menu-item {
  display: flex !important;
  align-items: center !important;
}
// active theme button
.active-theme{
    border: 2px solid ${({ theme }) => theme.colors?.border};
}

`;

export default GlobalStyles;
