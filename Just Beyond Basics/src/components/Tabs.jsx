
export default function Tabs({ buttons, children, ButtonsContainer="menu" }) {
    // let ButtonsContainer = buttonsContainer;
    return (
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {children}
        </>
    )
}