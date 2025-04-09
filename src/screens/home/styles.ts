
import styled from 'styled-components/native';

export const Container = styled.View`
flex:1;
align-items: center;
background-color: ${({ theme }) => theme.COLORS.GRAY_600}
`;

export const Title = styled.Text`
font-size:20px;
font-weight: 400;
color: ${({ theme }) => theme.COLORS.GRAY_100};
`;