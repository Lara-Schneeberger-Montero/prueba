import styled from "styled-components";

export const StyledSpinner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 15px 0;
    .spinner {
        border: 4px solid rgba(0, 0, 0, 0.1);
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border-left-color: var(--db-naranja);

        animation: spin 1s ease infinite;
        }

        @keyframes spin {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
`;