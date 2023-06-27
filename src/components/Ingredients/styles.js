import styled from "styled-components";

export const Container = styled.div`

    p {
        padding: 0.25rem 0.5rem;
        font-size: 1.8rem;
        font-weight: 400;
        line-height: 140%;
        text-align: center;
        border-radius: 5px;
        background-color: ${({ theme }) => theme.COLORS.BLUE_300};
    }
`;