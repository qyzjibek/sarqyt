export const CardLogo = ({ style, cardNumber, expiryDate }) => {
    return (
        <div style={style}>
            <h1 style={{ marginTop: 173, fontSize: 24, marginLeft: 20, color: 'white' }}>{cardNumber}</h1>
            <h1 style={{ fontSize: 15, marginLeft: 20, color: 'white' }}>{expiryDate}</h1>
        </div>
    )
};
