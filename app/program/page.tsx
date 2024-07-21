import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programul electoral al partidului Demos pentru Bucuresti",
  description:
    "In București coexistă bogăția și sărăcia. Intr-un astfel de oras ar trebui sa primeze masurile sociale si de stanga. In ce credem? - Extras din programul nostru politic",
};

export default function page() {
  return (
    <main className="max-w-screen-xl mx-auto p-3 mb-10">
      <div className="flex flex-col justify-between gap-4 relative">
        <h2 className="text-4xl font-black pt-8 text-demos">
          În București coexistă bogăția și sărăcia. Intr-un astfel de oras ar
          trebui sa primeze masurile sociale si de stanga.
        </h2>

        <h2 className="text-3xl font-black pt-8">
          In ce credem? - Extras din programul nostru politic
        </h2>
        <ol className="list-decimal text-lg">
          <li>
            Reînființăm policlinici – Centre de medicină primară și ambulatorie
            multifuncționale, cu medici de familie, medici specialiști,
            asistenți, mediatori sanitari pentru promovarea prevenției și
            tratamentului. Centrele vor oferi servicii cu precădere celor
            neasigurați și persoanelor cu venituri mici pentru boli cronice,
            dependențe și afecțiuni stomatologice;
          </li>
          <li>
            Înființăm o farmacie socială municipală care funcționează în regim
            non-profit și care oferă medicamente la preț accesibil persoanelor
            vârstnice, celor vulnerabile și celor cu boli cronice, dizabilități
            și dependențe;
          </li>
          <li>
            Înființăm Centrul de sprijin pentru lucrători, care oferă sprijin
            logistic și legal pentru toți cei care muncesc în București, pentru
            protejarea drepturilor lor și încurajarea organizării la locul de
            muncă;
          </li>
          <li>
            Vom sprijini construcția/achiziția de unități locative cu caracter
            social;
          </li>
          <li>
            Acordăm o atenție mărită și protejăm de abuzuri lucrătorii
            vulnerabili: cei din sectorul construcțiilor, serviciilor (mai ales
            livratorii) și comerțului, inclusiv cetățenii străini
            extra-comunitari;
          </li>
          <li>
            Extindem zonele pietonale în centrul orașului și în cartiere, în
            sistem mixt: pietonalizare permanentă și de weekend;
          </li>
          <li>
            Susținem transportul incluziv prin reduceri și scutiri la
            transportul public pentru șomeri, persoane fără loc de muncă,
            familii cu mulți copii, familii monoparentale.
          </li>
          <li>
            Vom accesibiliza trotuarele pentru concetățenii cu nevoi speciale
          </li>
          <li>
            Subvenționăm chiria sediilor cu destinație culturală – librării,
            anticariate, galerii de artă, ateliere de creație individuală și
            colectivă, spații pentru repetiții, hub-uri creative etc. și pentru
            ONG-uri culturale și spații de evenimente care găzduiesc evenimente
            culturale – lansări de carte, expoziții, cenacluri, concerte,
            printr-un program dedicat cheltuielilor operaționale din cultura
            independentă;
          </li>
          <li>
            Asigurăm educație incluzivă în școlile aflate în comunitățile
            vulnerabile din București;
          </li>
        </ol>
        <h2 className="text-2xl font-black pt-8">
          Pentru a pune in practica propunerile noastre avem nevoie si de
          ajutorul tau.
          <br />
          <Link href="/signatures" className="text-demos underline">
            Semneaza pentru candidatura Demos cu sustinerea LEFT la Consiliul
            General al Municipiului Bucuresti
          </Link>
        </h2>
        <h2 className="text-3xl font-black pt-8">
          Programul nostru electoral complet:
        </h2>
        <h2 className="text-2xl font-black pt-8">
          ORAȘUL ÎN CARE SE POATE TRĂI
        </h2>
        <p className="text-xl underline"> Mai mult spațiu verde</p>
        <ul className="list-disc text-lg">
          <li>Reabilităm și amenajăm spațiile verzi existente.</li>
          <li>
            Achiziționăm și convertim terenuri virane în parcuri și grădini
            publice.
          </li>
          <li>
            Creăm coridoare între spațiile verzi ale Capitalei. Conectăm
            habitate și ecosisteme pentru o mai bună difuzie a speciilor și
            pentru noi posibilități de recreere ale oamenilor. Realizăm
            conectarea naturală și civilă între ariile protejate urbane și
            periurbane (de pildă Delta Văcărești);
          </li>
          <li>
            Niciun arbore de pe marginea bulevardelor și șoselelor nu va mai fi
            tăiat, cu excepția celor în pericol de cădere iminentă. Fiecare
            arbore tăiat va fi înlocuit cu unul nou în aceeași zonă. Plantăm
            arbori și plante pentru a izola zonele limitrofe de zgomot, poluare
            și încălzire excesivă;
          </li>
          <li>
            Acces egal la spații verzi! Luptăm împotriva fenomenului de
            excluziune socială și gentrificare prin accesibilizarea parcurilor
            și crearea de noi spații verzi în cartiere mărginașe și sărace;
          </li>
          <li>
            Punem stop plantelor sezoniere decorative în parcuri și ghivece.
            Dezvoltăm pajiști cu plante perene, nepretențioase, neinvazive,
            specifice bioregiunii orașului;
          </li>
          <li>
            Susținem crearea și extinderea centurilor verzi în jurul
            Bucureștiului;
          </li>
          <li>
            Dezvoltăm soluții bazate pe natură (nature based solutions) pentru
            atenuarea efectelor schimbărilor climatice;
          </li>
          <li>
            Propunem un program pentru amenajarea de acoperișuri verzi pe
            blocuri;
          </li>
          <li>
            Stabilim noi spații protejate din punct de vedere natural pentru
            valorificarea biodiversității și a peisajului;
          </li>
          <li>
            Îmbunătățim managementul parcurilor Capitalei și realizăm Inventarul
            verde al arborilor orașului.
          </li>
        </ul>
        <p className="text-xl underline">Transport ecologic și accesibil</p>
        <ul className="list-disc text-lg">
          <li>
            Susținem o investiție majoră în infrastructură: un inel feroviar
            care să înconjoare capitala, cuplat cu sistemul de metrou;
          </li>
          <li>Reabilităm complet rețeaua de tramvaie și troleibuze;</li>
          <li>
            Extindem rețeaua de piste de biciclete, inclusiv stații și parcaje;
          </li>
          <li>
            Extindem zonele pietonale în centrul orașului și în cartiere, în
            sistem mixt: pietonalizare permanentă și de weekend;
          </li>
          <li>
            Pietonalizarea definitivă a Căii Victoriei pe perioada sfârșitului
            de săptămână;
          </li>
          <li>
            Facilităm renunțarea la automobil printr-un pachet ce include:
            creșterea calității transportului în comun, taxarea suplimentară a
            vehiculelor poluante, impozitarea progresivă în funcție de numărul
            de automobile deținute de familie, gestionarea inteligentă a
            traficului;
          </li>
          <li>
            Susținem transportul incluziv prin reduceri și scutiri la
            transportul public pentru șomeri, persoane fără loc de muncă,
            familii cu mulți copii, familii monoparentale.
          </li>
        </ul>
        <p className="text-xl underline">
          Eliberăm trotuarele și spațiul public
        </p>
        <ul className="list-disc text-lg">
          <li>
            Niciun trotuar al Capitalei nu va mai fi îngustat. Trotuarele vor fi
            eliberate de mașini;
          </li>
          <li>
            Vom accesibiliza trotuarele pentru concetățenii cu nevoi speciale;
          </li>
          <li>
            Înființăm multiple parcări subterane pentru a putea elibera spațiul
            pietonal și carosabil;
          </li>
          <li>
            Convertim imobile nefolosite în parcări supraetajate pentru a putea
            elibera spațiul pietonal și carosabil.
          </li>
        </ul>
        <p className="text-xl underline">Gata cu haosul imobiliar</p>
        <ul className="list-disc text-lg">
          <li>NU se mai construiește nerespectându-se regimul de înălțime;</li>
          <li>NU se mai construiește în zonele ultra aglomerate;</li>
          <li>NU se mai construiește în zonele protejate;</li>
          <li>NU se mai dărâmă nicio clădire protejată;</li>
          <li>
            Realizăm Planul de urbanism general și Planurile de urbanism de
            sector în mod transparent, în colaborare cu societatea civilă,
            specialiști competenți și integri și comunitățile de la nivel de
            stradă și micro-cartiere, nu în complicitate cu dezvoltatorii
            imobiliari!
          </li>
        </ul>
        <p className="text-xl underline">Oprim haosul publicitar</p>
        <ul className="list-disc text-lg">
          <li>
            Orașul, clădirile sale și spațiul public nu sunt suport publicitar;
          </li>
          <li>Tot afișajul publicitar dispare de pe clădiri;</li>
          <li>
            Numărul panourilor publicitare instalate pe domeniul public și
            privat va scădea semnificativ iar acestea vor găzdui anunțuri
            educaționale, culturale și de interes public.
          </li>
        </ul>
        <h2 className="text-2xl font-black pt-8">
          SERVICII PUBLICE ÎN FAVOAREA TUTUROR
        </h2>
        <p className="text-xl underline">Sănătate accesibilă</p>
        <ul className="list-disc text-lg">
          <li>
            Reînființăm policlinici – Centre de medicină primară și ambulatorie
            multifuncționale, cu medici de familie, medici specialiști,
            asistenți, mediatori sanitari pentru promovarea prevenției și
            tratamentului. Centrele vor oferi servicii cu precădere celor
            neasigurați și persoanelor cu venituri mici pentru boli cronice,
            dependențe și afecțiuni stomatologice;
          </li>
          <li>
            Înființăm o farmacie socială municipală care funcționează în regim
            non-profit și care oferă medicamente la preț accesibil persoanelor
            vârstnice, celor vulnerabile și celor cu boli cronice, dizabilități
            și dependențe;
          </li>
          <li>
            Prioritizam reabilitarea de urgență a unităților medicale existente
            din subordinea Primăriei Generale.
          </li>
        </ul>
        <p className="text-xl underline">Locuire decentă și accesibilă</p>
        <ul className="list-disc text-lg">
          <li>
            Vom sprijini construcția/achiziția de unități locative cu caracter
            social;
          </li>
          <li>
            Susținem o formă de urbanism integrator orientat către
            accesibilitate și utilizare comunitară;
          </li>
          <li>
            Vom sprijini refacerea infrastructurii în cartierele cu o calitate a
            vieții redusă;
          </li>
          <li>
            Subvenționăm chiriile pentru familiile/persoanele aflate în situație
            de risc locativ imediat (condiții periculoase pentru siguranță și
            sănătate, evacuare din cauza chiriei prea mari, solicitanți de
            locuințe sociale, persoane evacuate prin decizii ale justiției).
          </li>
          <li>
            Redefinim criteriile de acces la locuință socială pentru a
            simplifica procesul de obținere.
          </li>
        </ul>
        <p className="text-xl underline">Muncă decentă și sigură</p>
        <ul className="list-disc text-lg">
          <li>
            Înființăm Centrul de sprijin pentru lucrători, care oferă sprijin
            logistic și legal pentru toți cei care muncesc în București, pentru
            protejarea drepturilor lor și încurajarea organizării la locul de
            muncă;
          </li>
          <li>
            Acordăm o atenție mărită și protejăm de abuzuri lucrătorii
            vulnerabili: cei din sectorul construcțiilor, serviciilor (mai ales
            livratorii) și comerțului, inclusiv cetățenii străini
            extra-comunitari;
          </li>
          <li>
            Organizăm campanii de informare privind drepturile lucrătorilor și
            oferim sprijin instituțional Inspectoratului Teritorial de Muncă;
          </li>
          <li>
            Introducem condiționalități – clauze sociale de inserție a
            lucrătorilor vulnerabili în toate contractele Primăriei – obligații
            pentru furnizori cu privire la salarii decente, condiții optime de
            muncă și de organizare la locul de muncă, integrare în muncă a
            lucrătorilor vulnerabili.
          </li>
        </ul>
        <p className="text-xl underline">Cultura la putere</p>
        <ul className="list-disc text-lg">
          <li>
            Subvenționăm chiria sediilor cu destinație culturală – librării,
            anticariate, galerii de artă, ateliere de creație individuală și
            colectivă, spații pentru repetiții, hub-uri creative etc. și pentru
            ONG-uri culturale și spații de evenimente care găzduiesc evenimente
            culturale – lansări de carte, expoziții, cenacluri, concerte,
            printr-un program dedicat cheltuielilor operaționale din cultura
            independentă;
          </li>
          <li>
            Încurajăm arta în spațiul public, formele de artă democratică și mai
            ales accesul la practica artistică pentru copii, tineri și persoane
            cu dizabilități. O atenție deosebită vom acorda în special accesului
            la artă și cultură pentru persoanele din medii defavorizate;
          </li>
          <li>
            Valorificarea patrimoniului arhitectural și cultural al
            Bucureștiului, inclusiv cel de natură industrială;
          </li>
          <li>
            Oprim hemoragia fondurilor alocate de primărie prin atribuire
            directă pentru evenimente de tip concert și festival fără o
            componentă artistică și culturală solidă.
          </li>
        </ul>
        <h2 className="text-2xl font-black pt-8">GRIJĂ PENTRU OAMENI</h2>
        <p className="text-xl underline">Avem grijă de copii</p>
        <ul className="list-disc text-lg">
          <li>
            Mărim semnificativ numărul de creșe publice, câte una la 50.000 de
            locuitori;
          </li>
          <li>
            Mărim semnificativ numărul de grădinițe publice, câte una la 30.000
            de locuitori;
          </li>
          <li>
            În zonele în care este nevoie, suplimentăm locurile. Niciun copil nu
            va rămâne în afara acestora;
          </li>
          <li>
            Protejăm copiii din familii vulnerabile prin oferirea de servicii de
            sănătate, de educație, de protecție socială și protecția copilului;
          </li>
          <li>
            Asigurăm educație incluzivă în școlile aflate în comunitățile
            vulnerabile din București;
          </li>
          <li>Extindem și adaptăm rețeaua de transport public pentru elevi.</li>
        </ul>
        <p className="text-xl underline">Protejăm femeile vulnerabile</p>
        <ul className="list-disc text-lg">
          <li>
            Înființăm și extindem centrele de sprijin pentru victimele violenței
            domestice și violenței sexuale, câte unul la 200.000 de mii de
            locuitori și în funcție de necesități;
          </li>
          <li>
            Creăm un program de prevenție, protecție și reabilitare pentru
            victimele traficului de persoane, în colaborare cu alte instituții
            ale statului și în parteneriat cu ONG-uri specializate;
          </li>
          <li>
            Asigurăm întâietatea mamelor singure la acordarea locurilor în creșe
            și grădinițe.
          </li>
        </ul>
        <p className="text-xl underline">
          Viață demnă pentru vârstnicii noștri
        </p>
        <ul className="list-disc text-lg">
          <li>
            Înființăm cluburi pentru seniori, câte unul la 100.000 de locuitori,
            care să asigure spații pentru îmbătrânire activă, relaxare,
            socializare și învățare în colaborare cu asociațiile vârstnicilor –
            casele de ajutor reciproc ale pensionarilor;
          </li>
          <li>
            Creăm un program de asistență socio-medicală la domiciliu destinată
            persoanelor nedeplasabile, persoanelor vârstnice și celor cu
            afectiuni cronice, în colaborare cu organizații ale vârstnicilor,
            ONG-urile și comunitățile locale;
          </li>
          <li>
            Acordăm tichete de masă pentru toate persoanele vârstnice cu
            venituri mici.
          </li>
        </ul>
        <h2 className="text-2xl font-black pt-8">
          O VIAȚĂ MAI BUNĂ E POSIBILĂ
        </h2>
        <p className="text-xl underline">
          Hrană bună și accesibilă de la sursă
        </p>
        <ul className="list-disc text-lg">
          <li>
            Masa caldă în toate școlile din București – gratuit pentru familiile
            cu mulți copii și venituri mici;
          </li>
          <li>
            Înființăm o rețea de piețe țărănești volante deschise exclusiv
            micilor producători și cooperativelor agricole;
          </li>

          <li>
            Cel puțin 50% din tarabele din piețele publice vor fi destinate
            produselor agricole din lanțurile scurte de aprovizionare;
          </li>
          <li>
            Înființăm o bancă de alimente pentru fiecare 200.000 de locuitori,
            în colaborare cu organizațiile societății civile;
          </li>
          <li>
            Dezvoltăm rețeaua de cantine sociale destinate persoanelor cu
            venituri mici.
          </li>
        </ul>
        <p className="text-xl underline">Apă curată și accesibilă</p>
        <ul className="list-disc text-lg">
          <li>
            Reabilităm și extindem rețeaua de cișmele publice, cel puțin 500,
            răspândite uniform pe tot teritoriul capitalei, în special în
            locurile aglomerate. Gata cu plasticul!
          </li>
          <li>
            Monitorizăm calitatea apei potabile și obligăm furnizorii să asigure
            o calitate superioară a acesteia;
          </li>
          <li>
            Subvenționăm total sau parțial conectarea la rețeaua de apă pentru
            gospodăriile cu venituri mici;
          </li>
          <li>
            Nu mai acceptăm creșterile de prețuri pentru furnizarea apei fără o
            justificare solidă;
          </li>
          <li>
            Apa pluvială din zone necontaminate va fi colectată și menținută în
            zone umede amenajate care să permită filtrarea naturală și
            conectarea cu pânza freatică.
          </li>
        </ul>
        <p className="text-xl underline">Colectare selectivă și reciclare</p>
        <ul className="list-disc text-lg">
          <li>Accelerăm procesul de colectare selectivă și reciclare;</li>
          <li>
            Nicio groapă de deșeuri neautorizată nu va mai funcționa pe
            teritoriul sau în proximitatea capitalei;
          </li>
          <li>
            Se va interveni energic împotriva gropilor de deșeuri neautorizate
            și împotriva incinerărilor ilegale;
          </li>
        </ul>
        <p className="text-xl underline">Sport în fiecare cartier</p>
        <ul className="list-disc text-lg">
          <li>
            (Re)construim spațiile sportive de cartier și oferim acces gratuit
            copiilor, tinerilor și vârstnicilor;
          </li>
          <li>
            Înființăm și finanțăm cluburi sportive pentru copii și juniori, în
            special pentru sporturile de echipă;
          </li>
          <li>
            Punem în aplicare legea prin care curțile școlilor vor trebui să
            stea deschise permanent în beneficiul tuturor.
          </li>
        </ul>
        <h2 className="text-2xl font-black pt-8">
          AJUTĂM COMUNITĂȚILE LOCALE SĂ SE DEZVOLTE
        </h2>
        <ul className="list-disc text-lg">
          <li>
            Extinderea și armonizarea durabilă a Zonei Metropolitane București,
            pentru o dezvoltare pe orizontală cât mai amplă;
          </li>
          <li>
            Planificăm distribuția infrastructurii și serviciilor publice la
            nivelul de micro-cartiere;
          </li>
          <li>
            Promovăm consultarea extinsă în luarea deciziilor locale și
            transparentizarea totală a activității și actelor emise de
            autorități;
          </li>
          <li>
            Principalele servicii publice să nu fie mai departe de 15 minute de
            mers pe jos;
          </li>
          <li>
            Creăm o relație partenerială între autoritățile locale și
            asociațiile de proprietari;
          </li>
          <li>
            Sprijinim protecția animalelor (spații de joacă dedicate, acțiuni de
            sterilizare și microcipare, colaborare extinsă cu asociațiile pentru
            protecția animalelor etc.);
          </li>
          <li>
            Oprim finanțarea lucrărilor la lăcașe de cult existente, cu excepția
            clădirilor monument și a celor care reprezintă un risc pentru
            siguranța clădirilor și cetățenilor.{" "}
          </li>
        </ul>
      </div>
    </main>
  );
}
