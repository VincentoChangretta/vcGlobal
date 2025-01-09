import { Links } from "shared/data/data";
import { Button } from "../Button";
import { Link } from "react-router-dom";

export const OrderButtons = () => {
  return (
    <div className="flex justify-center items-center gap-[30px]">
        <Link to={Links.TG} className="linkButton" target="_blank">
            <Button >Консультация</Button>
        </Link>
        <Button>Заказать сайт</Button>
    </div>
  );
}
