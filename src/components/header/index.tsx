
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSidebarContext } from "../../context/SidebarContext";
import Icon from "../icon";
import "./style.scss";

const Header = (props: React.ComponentProps<"header">) => {
    const outerClassName = props.className;
    const { dispatch } = useSidebarContext();

    useEffect(() => {
        function handleClick(this: HTMLElement, e: Event):any{
            if (
                (e.target as HTMLElement)?.classList.contains('overlay')||
                (e.target as HTMLElement)?.classList.contains('nav-menu__item-link')
            ) {
                dispatch({type: "toggle"})
            }
        }

        document.addEventListener('click', handleClick)

        return () => document.removeEventListener('click', handleClick)
    }, [dispatch])
    
    return (
        <header className={"header " + outerClassName}>
            <Link className="header__link" to="/">
                <div className="brand">
                    <Icon name="logo" />
                    <div className="brand__title">Wrench CRM</div>
                </div>
            </Link>
            <Link className="header__link" to="#" onClick={() => dispatch({type: "toggle"})}>
                <div className="user-profile">
                    <Icon name="user-profile" />
                    <div className="user-profile__title">Имя Фамилия</div>
                </div>
            </Link>
        </header>
    )
}

export default Header;