import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div className="p-5">
        <h2 className='px-3'>O nama</h2>
        <p className='py-4'>Dobrodošli na stranicu naše kompanije, lidera u unutrašnjem transportu manjih razmera.
        <br/>Naša kompanija se već dugi niz godina bavi transportom različitih tereta unutar skladišta, proizvodnih postrojenja i drugih industrijskih objekata.
        <br/>Naš tim stručnjaka osigurava brz, efikasan i pouzdan transport koji odgovara svim potrebama naših klijenata.</p>
        <p>Naša kompanija se ističe po:</p>
        <ul className="listaIsticanja">
          <li>Visokom nivou pouzdanosti i bezbednosti u transportu
            <p>Naša kompanija se ponosi visokim nivoom pouzdanosti i bezbednosti u transportu. Kada se oslonite na nas, možete biti sigurni da će vaš teret biti pažljivo zaštićen tokom celog transportnog procesa. Bez obzira na vrstu tereta, naša posvećena ekipa se brine o njegovoj sigurnosti, pružajući vam mir uma dok se vaša roba kreće ka odredištu.</p>
          </li>
          <li>Prilagođenim rešenjima za različite vrste tereta
            <p>Sa našim prilagođenim rešenjima za različite vrste tereta, nema prepreke koju ne možemo prevazići. Bez obzira da li je u pitanju osetljiv teret, teški tereti ili specifični zahtevi pakovanja, naš tim ima stručnost i resurse da efikasno upravlja svakim aspektom vašeg transporta.</p>
          </li>
          <li>Brzim i efikasnim uslugama koje štede vaše vreme i resurse
            <p>Naša usluga se zasniva na brzim i efikasnim isporukama koje štede vaše vreme i resurse. Sa optimizovanim rutama, modernom tehnologijom praćenja i posvećenim timom, garantujemo da će vaš teret biti isporučen na vreme, svaki put. Vaša efikasnost je naš prioritet</p>
          </li>
          <li>Profesionalnom i predanom timu koji se brine o vašim potrebama
            <p>Kada sarađujete sa nama, dobijate podršku profesionalnog i predanog tima koji se brine o vašim potrebama. Naši stručnjaci su tu da vam pruže personalizovanu podršku i rešenja, radeći zajedno sa vama kako bi osigurali da vaš transportni proces protekne glatko i bez problema. Vaše zadovoljstvo je naša misija.</p>
          </li>
        </ul>
        <p>Naši klijenti su naša najveća referenca, a njihovo zadovoljstvo naš je glavni cilj. Bez obzira na veličinu vašeg poslovanja ili vrstu tereta koji transportujete, mi smo tu da vam pružimo rešenja koja će vaše poslovanje učiniti još uspešnijim.</p>      
        <p className='fw-bolder pt-3'>Ako vam je potreban pouzdan partner za unutrašnji transport, kontaktirajte nas i saznajte kako možemo unaprediti vaše poslovanje.</p>
      </div>
    )
  }
}
