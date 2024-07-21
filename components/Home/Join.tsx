import Link from "next/link";
import { JoinSidebar } from "../Shared";

export default function Join() {
  return (
    <div className="flex sm:flex-row flex-col first-letter:items-center lg:justify-between lg:gap-32 gap-6 lg:mx-auto">
      <div className="sm:w-2/3 w-full">
        <Link
          href={
            "https://docs.google.com/forms/d/e/1FAIpQLSeYj2hqu6AcL9-K0wI2SzupoH-wDxPnIqGeFKC9-mBKGzCVeg/viewform"
          }
          target="_blank"
        >
          <h2 className="text-4xl font-black hover:text-gray-500">
            Alătură-te
          </h2>
        </Link>

        <h4 className="my-4 text-base">
          {" "}
          LEFT este o platformă civico-politică ce îsi propune să coaguleze
          organizații civice și politice curate, organizații sindicale oneste,
          persoane fizice, activiști pentru a construi o alternativă puternică
          în vederea alegerilor din 2024. Așteptăm alături organizații și
          persoane cu viziune, cu dorință de a îndrepta lucrurile, oferindu-le o
          platformă de liberă exprimare, democratică, nouă. Aducem în discuție
          valorile, ideile și soluțiile tehnice, legislative și constituționale,
          pentru a depăși criza complexă actuală și a trece la o societate nouă,
          post-capitalistă preocupată să asigure oamenilor și planetei
          sustenabilitate și durabilitate astfel încât viața să merite să fie
          trăită, cu demnitate, empatie, respect. Pentru că este posibil. <br />{" "}
          <br /> Noi vrem sa înaintăm spre un orizont pașnic, sănătos și prosper
          pentru fiecare dintre noi. Prosperitatea nu trebuie sa depindă de
          trimiterea sau păstrarea în precaritate a altora, aceasta este
          dezumanizare. Sănătatea fiecăruia depinde în mare măsură de sănătatea
          celor din jur și de calitatea mediului. Iar pacea este absoluta și
          poate exista doar pentru toți sau pentru nimeni. <br /> <br />{" "}
          Siguranță, sănătate, educație, servicii publice robuste și gratuite,
          un mediu sănătos și un echilibru ecologic echitabil sunt necesare
          pentru o viață trăită cu demnitate. <br /> <br /> Ne organizam pentru
          a construi un viitor pașnic în care toți oamenii vor avea spațiul și
          libertatea de a se dezvolta și de a-și exprima propria individualitate
          și opiniile în armonie cu animalele sălbatice și mediul înconjurător.
        </h4>

        <Link
          href={
            "https://docs.google.com/forms/d/e/1FAIpQLSeYj2hqu6AcL9-K0wI2SzupoH-wDxPnIqGeFKC9-mBKGzCVeg/viewform"
          }
          target="_blank"
        >
          <h5 className="text-lg my-4 hover:text-gray-500">
            -&gt; Dacă vrei să te alături în această construcție completează
            acest formular.
          </h5>
        </Link>
      </div>

      <div className="sm:w-1/3 w-full flex flex-col gap-10 py-4 h-fit xl:mr-0 lg:mr-4 md:mr-20 sm:mr-32 mr-0">
        <JoinSidebar />
      </div>
    </div>
  );
}
