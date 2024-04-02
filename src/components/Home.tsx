import Button from "./Button"
import CardPallete from "./CardPallete"

import { useAppSelector } from "../utils/hooks";

const Home = () => {

    const isMenuOpen = useAppSelector((state) => state.app.isMenuOpen);

    const classNames = `flex flex-col ${isMenuOpen ? 'w-[85%] mx-56 mr-0' : ''}`;

    return (
        <>
            <div className={classNames}>
                <Button />
                <CardPallete />
            </div>

        </>
    )
}

export default Home
