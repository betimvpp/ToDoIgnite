import styled from "styled-components";

export const Header = styled.div`
    background-color: var(--gray-700);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 12.5rem;
    position: relative;
`;

export const Form = styled.form`
    position: absolute;
    height:3.375rem;
    bottom: calc(-3.375rem/2);
    width: 100%;
    max-width: 46rem;
    display: flex;
    gap: 0.5rem;
    padding: 0 1rem;

    input{
       height:100%;
       flex: 1;
       color: var(--gray-100);
       background-color: var(--gray-500);
       border: 1px solid var(--gray-700);
       border-radius: 0.5rem;
       padding: 0 1rem;
       font-size: 1rem;
    }
    input::placeholder{
        color: var(--gray-300);
    }

    button{
        height: 100%;
        padding: 0 1rem;
        background-color:  var(--blue-dark);
        color: var(--gray-100);
        border-radius: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.375rem;
        font-weight: 700;
        font-size: 0.875rem;
    }
`;