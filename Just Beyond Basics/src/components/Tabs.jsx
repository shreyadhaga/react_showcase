
export default function Tabs({ buttons, children, buttonsContainer }) {
    let ButtonsContainer = buttonsContainer;
    return (
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {children}
        </>
    )
}