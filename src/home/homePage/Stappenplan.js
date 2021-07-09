import Plan from './Plan';
import Approved from './images/approved.png';
import Contract from './images/contract.png';
import Trophy from './images/trophy.png';

function Stappenplan() {
  return (
    <div className="">
      <Plan
        styleKlas="float"
        img={Approved}
        imgClass="plan-icon"
        hoofdTekst="Beslis welk verzekering u wilt kiezen"
        tekst="
        Is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
      <Plan
        styleKlas="float"
        img={Contract}
        imgClass="plan-icon-r"
        hoofdTekst="Voer uw gegevens in"
        tekst="
        Is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
      <Plan
        styleKlas="float"
        img={Trophy}
        imgClass="plan-icon"
        hoofdTekst="Kies de beste en goedkoopste verzekering"
        tekst="
        Is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
    </div>
  );
}

export default Stappenplan;