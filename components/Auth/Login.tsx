import {
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { toast } from "sonner";

export default function Login({
  email,
  setEmail,
  password,
  setPassword,
  isSubmitting,
  setIsSubmitting,
  handleClose,
}: {
  email: string;
  setEmail: any;
  password: string;
  setPassword: any;
  isSubmitting: boolean;
  setIsSubmitting: any;
  handleClose: () => void;
}) {
  const handleLogin = async (e: any) => {
    e.preventDefault();

    if (isSubmitting) {
      console.log("Așteaptă puțin înainte de a mai încerca.");
      return;
    }

    setIsSubmitting(true);

    try {
      // await new Promise((resolve) => setTimeout(resolve, 2000));
      const user = auth.currentUser;

      if (user && user.emailVerified) {
        await signInWithEmailAndPassword(auth, email, password);
        // Resetează starea formularului
        setEmail("");
        setPassword("");
        toast.success("Autentificare reușită!");
        handleClose();
      } else {
        toast.error("Adresa de email nu este verificată!", {
          action: {
            label: "Retrimite",
            onClick: () => {
              sendEmailVerification(user!);
              toast.success("Emailul de verificare a fost trimis din nou!");
            },
          },
        });
      }
    } catch (error: any) {
      toast.error("Numele de utilizator sau parola sunt greșite");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
      {/* Restul codului rămâne neschimbat */}
      <div>
        <label className="block mb-2 text-sm font-medium text-white">
          Email / Nume utilizator
        </label>
        <input
          type="text"
          name="usernameOrEmail"
          id="usernameOrEmail"
          className="border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500"
          placeholder="email@exemple.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-white">
          Parola
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          className="border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {/* Restul codului rămâne neschimbat */}
      <div className="w-fit mx-auto">
        <button
          type="submit"
          className="text-red font-semibold bg-white rounded-lg text-sm py-2 px-6"
        >
          Conecteaza-te
        </button>
      </div>
    </form>
  );
}
