import "./Footer_style.scss";
import Facebook from "../../assets/facebook.svg"
import Instagram from "../../assets/instagram.svg"
import Mastercard from "../../assets/mastercard.svg"
import Paypal from "../../assets/paypal.svg"
import Visa from "../../assets/visa.svg"
export default function Footer() {
  return (
    <footer>
      <section className="firstSectionFooter">
        <nav className="firstNavFooter">
          <ul>
            <li>Contato</li>
            <li>Termos de serviço</li>
            <li>Política de privacidade</li>
            <li>Cancelamento, troca e reembolso</li>
          </ul>
        </nav>
        <div className="notificationBox">
            <label>Newsletter</label>
          <form onSubmit={(e)=>{e.preventDefault()}}>
            <input placeholder="Digite seu melhor e-mail" />
            <button>Inscrever</button>
          </form>
        </div>
      </section>
      <section className="secondSectionFooter">
        <nav className="secondNavFooter">
            <img src={Instagram} alt="instagram icon" />
            <img src={Facebook} alt="facebook icon" />
        </nav>
        <nav className="thirdNavFooter">
            <img src={Mastercard} alt="mastercard icon" />
            <img src={Paypal} alt="paypal icon" />
            <img src={Visa} alt="visa icon" />
        </nav>
      </section>
    </footer>
  );
}
