import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShield, faPhone, faMoneyCheck } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__security">
      <FontAwesomeIcon className="icon" icon={faShield} />
      <span>Tatiliniz güvende!</span>
      </div>
      <div className="footer__phone">
      <FontAwesomeIcon className="icon" icon={faPhone} />
      <span>444 444 44</span>
      </div>
      <div className="footer__money">
      <FontAwesomeIcon className="icon" icon={faMoneyCheck} />
      <span>Erken rezervasyon fırsatları</span>
      </div>
    </div>
  )
}

export default Footer