import styled from "styled-components";
import styles from './module.styles.css';

type Complete = {
    complete:boolean;
}

export const Div = styled.div`
    width: 100%;
    background-color: var(--gray-500);
    border: 1px solid var(--gray-400);
    padding: 1rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
`;

export const Button = styled.button`
    width: 1.125rem;
    height: 1.125rem;
    background: none;
    border: none;

    div{
        min-width: 100%;
        height: 100%;
        border: 2px solid var(--blue);
        border-radius: 50%;
    }
`;

export const P = styled.p(({complete}:Complete)=>(
` 
    font-size: 0.875rem;
    line-height: 1.18rem;
    color:${complete ? 'var(--gray-300)' : 'var(--gray-100)'};
    text-decoration: ${complete ? 'line-through' : 'initial'}
`   
));   

export const Pl = styled.p`
    margin-right: auto;
`;

export const DelButton = styled.button`
    background: none;
    border: none;
    color: var(--gray-300);
`;