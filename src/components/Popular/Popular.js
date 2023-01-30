import "./Popular.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons";
const Popular = () => {
  //firebase den tour datasını al sepete ekle butonu oluştur sepette görüntüle
  return (
    <div className="popular">
     <div className="popular__container">
       <div className="container-header">
        <div className="header-title">
          <h2>Popüler Rotalar</h2>
          <p>
            En popüler rotalar listelenmiştir.
          </p>
        </div>
        <div className="container-header__icons">
           <FontAwesomeIcon icon={faArrowAltCircleLeft} className="icon"></FontAwesomeIcon>
           <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon"></FontAwesomeIcon>
        </div>
       </div>
       <div className="container-main">
        <div className="single-tour">
          <div className="tour-img">
            <img alt=""></img>
            <div className="tour-infor">
            <h3>Some text</h3>
            <p>lorem ipsum</p>
            <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon>
            </div>
          </div>
          <div className="tour-footer">
            <div className="number">
              01
            </div>
            <div className="tour-text">
              <h6>London</h6>
              <span></span>
            </div>
          </div>
        </div>
       </div>
     </div>
    </div>
  )
}

export default Popular;