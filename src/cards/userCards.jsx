import Card from "./Card";
import CardStack from "./CardStack";
import KaspiCardLogo from "./KaspiCardLogo";

const UserCards = () => {
    return <CardStack
        height={248}
        width={423}
        background='#f8f8f8'
        hoverOffset={25}
        borderRadius={12}
        >

        <Card background='rgba(139,113,82,0.91)'>
            <h1>Number 1</h1>
            <img src={"https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg"} alt="KaspiCardLogo" />
        </Card>

        <Card background='#27AE60'>
            <h1>Number 2</h1>
        </Card>

        <Card background='#27AE60'>
            <h1>Number 2</h1>
        </Card>
        <Card background='#27AE60'>
            <h1>Number 2</h1>
        </Card>

    </CardStack>
};

export default UserCards;