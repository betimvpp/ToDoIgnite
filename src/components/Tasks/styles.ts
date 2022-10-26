import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    max-width: 46rem;
    margin: 0 auto;
    margin-top: 5.625rem;
    padding: 0rem;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-inline-end: 1.5rem;
`;

export const Div = styled.div`
    display:flex;
    align-items: center;
    gap: 0.8rem;
`;

export const P = styled.p`
    color: var(--blue);
    font-size: 0.875rem;
    font-weight: 700;
`;

export const Pr = styled.p`
    color: #8284FA;
    font-size: 0.875rem;
    font-weight: 700;
`;

export const Span =styled.span`
    background-color: var(--gray-400);
    color: var(--gray-200);
    padding: 3px 9px;
    border-radius: 999px;
    font-size: 0.75rem;
    font-weight: 700;
`;

export const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 1.5rem;
`;

export const SectionInv =styled.section`
    margin-top: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
   
    img{
        width:100px;
        height:100px;
        margin-bottom: 15px  
    }
`;

export const Pinv = styled.p`
    font-size: 16px;
    line-height: 22.4px;
    text-align: center;
    font-weight: 700;
    color: #808080
`;

export const SpanInv = styled.span`
    font-size: 16px;
    line-height: 22.4px;
    text-align: center;
    font-weight: 400;
    color: #444444
`;