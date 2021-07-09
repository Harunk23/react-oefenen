function Plan(props) {
  return (
    <div className={props.styleKlas}>
        <img className={props.imgClass} src={props.img}/>
        <h4>{props.hoofdTekst}</h4>
        <p>{props.tekst}</p>
    </div>
  );
}

export default Plan;