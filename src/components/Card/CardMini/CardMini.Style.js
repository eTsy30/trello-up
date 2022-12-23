import styled from 'styled-components'
export const Wrapper = styled.div`
    background-color: white;
    margin: 5px 5px;
    padding: 3px;
    border-radius: 4px;
    position: relative;
    & > svg {
        position: absolute;
        cursor: default;
        margin: 3px;
        right: 0;
    }
`
export const Status = styled.div.attrs((props) => props)`
    border-radius: 15px;
    text-align: center;
    background-color: ${(props) => {
    

        if (props.prioretty === 'High') {
            return 'red'
        }
        if (props.prioretty === 'Medium') {
            return 'yellow'
        }
        if (props.prioretty === 'Low') {
            return 'green'
        }
    }};
    width: 23%;
    padding: 3px;
`

export const Titul = styled.div`
    display: flex;
    justify-content: space-between;
`
export const Footer = styled.div`
    display: flex;

    & > div {
        display: flex;
        align-items: center;
        margin: 0px 5px 0px;
        & > * {
            margin: 0px 5px 0px;
        }
    }
`

export  const TitleContainer = styled.div``
export const MainContainer = styled.div`
    padding-right: 15px;
`