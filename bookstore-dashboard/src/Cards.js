import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/prva.jpg"
              text="Knjiga je najtiši i najpouzdaniji prijatelj; najpristupačniji i najmudriji savetnik i najstrpljiviji učitelj"
              label="Znanje"
              path="/services"
            />
            <CardItem
              src="images/druga.jpg"
              text="Čitanje na um deluje kao redovno vežbanje na telo. Kada vežbamo čuvamo zdravlje i jačamo; kada čitamo, čuvamo i održavamo čestitost"
              label="Jezik"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/treca.jpg"
              text="Što više čitaš, više ćeš znati. Što više naučiš, na više mesta ćeš otići"
              label="Mašta"
              path="/services"
            />
            <CardItem
              src="images/cetvrta.jpg"
              text="I knjiga može biti zvezda, ’eksplozivna materija koja može uzburkati život’, živa vatra koja otera svaku tamu i vodi ka beskrajnom svemiru"
              label="Kultura"
              path="/products"
            />
            <CardItem
              src="images/peta.jpg"
              text="Ljubav prema knjigama ne zahteva ni pravdanje, ni izvinjenje, ni odbranu."
              label="Istorija"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
