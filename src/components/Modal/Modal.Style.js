import styled from 'styled-components'
export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    color: white;
`

export const Container = styled.div`
    background-color: #5497a7;
    border-radius: 10px;
    width: 50vw;
    min-height: 80vh;
    max-height: 80vh;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    padding: 25px;
    position: relative;
`
export const ButtonSave = styled.button`
    border-radius: 15px;
    border: none;
    width: 250px;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #50858b;
    color: white;
    position: absolute;
    bottom: 25px;
`
export const DescriptionTextarea = styled.textarea`
    width: 100%;
    box-sizing: border-box;
    padding: 5px;
    min-height: 70px;
    border-radius: 10px;
`
export const Description = styled.p`
    margin-left: 15px;
`
export const TitleInput = styled.input``
export const Title = styled.h3``
export const ContainerDescription = styled.div`
    display: flex;
    width: 100%;

    flex-direction: column;
`
export const WrapperDescription = styled.div`
    display: flex;
    width: 100%;
    margin: 15px 0px;
    align-items: center;
`
export const ContainerDate = styled.div`
    display: flex;
    margin: 15px;
    width: 100%;
    flex-direction: column;
    & > * {
        margin: 3px;
        p {
            padding: 0;
        }
    }
`
export const ContainerPrioritet = styled.select`
    display: flex;
    width: 52%;
    border: none;
    background-color: #5497a7;

    color: white;
    height: 25px;
    font-size: 18px;
`
export const StartrDate = styled.input`
    border: none;
    background-color: #5497a7;
    width: 50%;
    color: white;
    height: 25px;
    font-size: 18px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
        'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
        'Helvetica Neue', sans-serif;

    color-scheme: dark;
`
export const InWorkDate = styled.h4`
    width: 50%;
    border: none;
    background-color: #5497a7;
    width: 50%;
    color: white;
    height: 25px;
    color-scheme: dark;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
        'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
        'Helvetica Neue', sans-serif;
    font-size: 18px;
`
export const DeadLine = styled.input`
    width: 50%;
    border: none;
    background-color: #5497a7;
    width: 50%;
    color: white;
    color-scheme: dark;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
        'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
        'Helvetica Neue', sans-serif;
    height: 25px;
    font-size: 18px;
`
export const NameFields = styled.h4`
    display: flex;
    align-items: center;
    text-decoration-style: dashed;
    width: 50%;
    & > * {
        margin: 3px;
    }
`
export const WrapperData = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
`
export const Form = styled.form`
    width: 100%;
    display: flex;
    align-items: center;
`
export const LabelForm = styled.label`
    position: relative;
    display: inline-block;
    margin: 0px 10px;
    & input[type='file'] {
        position: absolute;
        z-index: -1;
        opacity: 0;
        display: block;
        width: 100%;
        height: 100%;
    }

    & > svg {
        width: 30px;
        height: 30px;
    }
`
export const ButtomForm = styled.button`
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    text-decoration: none;
    font-size: 14px;
    vertical-align: middle;
    color: rgb(255 255 255);
    text-align: center;
    border-radius: 10px;
    background-color: #50858b;
    line-height: 22px;
    height: 40px;
    padding: 10px 20px;
    box-sizing: border-box;
    border: none;
    margin: 0px 10px;
    transition: background-color 0.2s;
`
export const Option = styled.option``