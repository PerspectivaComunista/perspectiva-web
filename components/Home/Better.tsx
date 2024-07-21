import { Post } from "../../utils/types";
import Image from "next/image";
import Link from "next/link";

export default function Better({ lastPost }: { lastPost: Post }) {
  return (
    <div className="flex sm:flex-row flex-col first-letter:items-center lg:justify-between lg:gap-10 gap-6 lg:mx-auto">
      <Link
        href={lastPost.url}
        target="_blank"
        className="sm:hidden block shadow-2xl relative group overflow-hidden"
      >
        <Image
          src={lastPost.imageUrl}
          className="md:w-1/2 w-full object-contain"
          width={100}
          height={100}
          alt={"lastPosts"}
          priority
        />
        <div className="absolute bg-gray-700 bg-opacity-0 bottom-0 w-full h-3/4 p-4 pt-2 transition-all duration-700 ease-in-out transform translate-y-full group-hover:translate-y-0 group-hover:bg-opacity-85">
          {lastPost.description && (
            <p
              className="text-white text-xs whitespace-break-spaces h-full overflow-hidden"
              dangerouslySetInnerHTML={{ __html: lastPost.description }}
            />
          )}
        </div>
        <p className="text-white bg-red text-lg absolute bottom-0 py-1 pl-4 w-full transition-all duration-1000 ease-in-out transform -translate-x-full group-hover:translate-x-0">
          Vezi postarea &gt;&gt; &gt;
        </p>
      </Link>

      <div className="sm:w-2/3 w-full">
        <Link href="/manifest">
          <h2 className="text-4xl font-black hover:text-gray-500">
            Ne mai facem bine? DA!
          </h2>
        </Link>

        <h4 className="my-4 text-base">
          Auzim tot mai des expresia ”nu ne mai facem bine!”, dar resemnarea nu
          este o soluție, pentru că da, ne putem face bine. Suntem prea ocupați
          de probleme, ca să mai căutăm soluții, dar ele există și încep cu
          câteva momente de reflecție, cu încercarea de a avea încredere că mai
          există oameni onești care acum, în ceasul al 12-lea, pot construi o
          alternativă. Nu e chiar atât de greu, trebuie doar să ne găsim busola,
          iar ea se află chiar lângă noi, în jurul nostru, este familia,
          anturajul, sunt cei pentru care sărim imediat în ajutor la greu și cu
          care împărțim momentele de bucurie. Hai sa extindem toate astea la
          nivel de comunitate, de societate, să reclădim încrederea în cel mai
          transparent mod posibil pentru a implementa aceste principii ale
          fraternității în toate aspectele societății.
        </h4>

        <Link href="/manifest">
          <h5 className="text-lg underline hover:text-gray-500">
            -&gt; Manifestul nostru
          </h5>
        </Link>
      </div>

      <Link
        href={lastPost.url}
        target="_blank"
        className="sm:flex items-center justify-center sm:w-1/3 w-1/2 hidden shadow-xl relative group overflow-hidden"
      >
        <Image
          src={lastPost.imageUrl}
          className="object-contain"
          width={500}
          height={500}
          alt={"lastPosts"}
          priority
        />
        <div className="absolute bg-gray-700 bg-opacity-0 bottom-0 w-full h-3/4 p-4 pt-2 transition-all duration-700 ease-in-out transform translate-y-full group-hover:translate-y-0 group-hover:bg-opacity-85">
          {lastPost.description && (
            <p
              className="text-white text-xs whitespace-break-spaces h-full overflow-hidden"
              dangerouslySetInnerHTML={{ __html: lastPost.description }}
            />
          )}
        </div>
        <p className="text-white bg-red text-lg absolute bottom-0 py-1 pl-4 w-full transition-all duration-1000 ease-in-out transform -translate-x-full group-hover:translate-x-0">
          Vezi postarea &gt;&gt; &gt;
        </p>
      </Link>
    </div>
  );
}
