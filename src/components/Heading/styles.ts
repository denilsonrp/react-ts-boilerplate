import styled, { css } from 'styled-components'

export const Heading = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    font-weight: ${theme.fonts.weights.bold};
  `}
`
