import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { toast } from "sonner";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { format } from "date-fns";

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth, db } from "../../utils/firebase";

export default function Register({
  formData,
  errors,
  setFormData,
  setErrors,
  maxDate,
  DatePicker,
  setIsLogin,
  setIsRegister,
}: {
  formData: any;
  errors: any;
  setFormData: any;
  setErrors: any;
  maxDate: Date;
  DatePicker: any;
  setIsLogin: any;
  setIsRegister: any;
}) {
  const handleDateChange = (date: Date | null) => {
    setFormData((prevData: any) => ({
      ...prevData,
      birthDate: date,
    }));
  };

  const handleChange = (event: any) => {
    const { name, value, type } = event.target;
    const newValue =
      type === "checkbox" ? (event.target as HTMLInputElement).checked : value;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    // Inițializăm o variabilă pentru a ține evidența validității
    let isValid = true;

    // Validare pentru username
    if (formData.username.length < 4) {
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        username: "Numele de utilizator trebuie să aibă cel puțin 4 caractere.",
      }));
      isValid = false;
    } else {
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        username: "",
      }));
    }

    // Validare pentru birthDate
    if (!formData.birthDate) {
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        birthDate: "Data de naștere este obligatorie.",
      }));
      isValid = false;
    } else {
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        birthDate: "",
      }));
    }

    // Validare pentru email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        email: "Introduceți o adresă de email validă.",
      }));
      isValid = false;
    } else {
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        email: "",
      }));
    }

    // Validare pentru parolă
    if (formData.password.length < 6) {
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        password: "Parola trebuie să aibă cel puțin 6 caractere.",
      }));
      isValid = false;
    } else {
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        password: "",
      }));
    }

    // Validare pentru confirmarea parolei
    if (formData.password !== formData.confirmPassword) {
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        confirmPassword: "Parola și confirmarea parolei trebuie să coincidă.",
      }));
      isValid = false;
    } else {
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        confirmPassword: "",
      }));
    }

    // Verificăm acum starea de isValid după toate validările
    if (isValid) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
        const user = userCredential.user;
        const formattedDate = format(formData.birthDate, "dd/MM/yyyy");

        const docRef = await addDoc(collection(db, "users"), {
          username: formData.username,
          birthDate: formattedDate,
          email: formData.email,
          password: formData.password,
          subscribe: formData.subscribe,
        });
        const generatedId = docRef.id;
        await updateDoc(doc(db, "users", generatedId), { id: generatedId });

        await sendEmailVerification(user);

        setErrors({
          username: "",
          birthDate: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        setFormData({
          username: "",
          password: "",
          email: "",
          confirmPassword: "",
          subscribe: false,
          birthDate: "",
        });

        setIsRegister(false);
        setIsLogin(true);

        toast.success(
          "Un link de verificare a contului a fost trimis pe adresa de e-mail specificată. Vă rugăm să activați contul."
        );
        // Puteți adăuga și navigarea aici dacă este cazul
      } catch (error) {
        const firebaseError = error as any; // Type assertion to FirebaseError
        if (firebaseError.code === "auth/email-already-in-use") {
          toast.error(
            "Acest e-mail este folosit deja. Încercați alta adresă de e-mail."
          );
        } else {
          console.error("Eroare în timpul înregistrării:", firebaseError);
          toast.error(
            "O eroare s-a întâmplat în timpul înregistrării. Vă rugăm să încercați din nou."
          );
        }
      }
    }
  };

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
      <div className="flex space-x-2 w-full">
        <div className="w-full">
          <label className="block mb-2 text-sm font-medium text-white">
            Nume de utilizator
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
            className="border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white text-black focus:ring-blue-500 placeholder-gray-400 focus:border-blue-500"
            placeholder="NumeUtilizator"
          />
        </div>
        <div className="w-full">
          <label className="block mb-2 text-sm font-medium text-white">
            Gen
          </label>
          <input
            type="text"
            name="gender"
            id="gender"
            value={formData.gender}
            onChange={handleChange}
            className="border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500"
            placeholder="Non-binar"
          />
        </div>
      </div>

      <div>
        <div className="flex space-x-2 w-full">
          <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-white">
              Data nașterii
              <InformationCircleIcon
                className="w-6 h-6 ml-1 inline-block"
                title="Trebuie să ai cel puțin 14 ani pentru a te putea înregistra."
              />
            </label>

            <DatePicker
              name="birthDate"
              id="birthDate"
              maxDate={maxDate}
              dateFormat="dd/MM/yyyy"
              placeholderText="Zi/Luna/An"
              selected={formData.birthDate}
              onChange={(date: any) => handleDateChange(date)}
              className="border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2 bg-white placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500 w-full"
            />
          </div>
          <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500"
              placeholder="email@exemple.com"
            />
          </div>
        </div>
      </div>

      <div className="flex space-x-2 w-full">
        <div className="w-full">
          <label className="block mb-2 text-sm font-medium text-white">
            Parolă
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            className="border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="w-full">
          <label className="block mb-2 text-sm font-medium text-white">
            Confirmă parola
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="••••••••"
            className="border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <div>
        <p className="text-gray-900 text-sm m-0">{errors.username}</p>
        <p className="text-gray-900 text-sm m-0">{errors.email}</p>
        <p className="text-gray-900 text-sm m-0">{errors.password}</p>
        <p className="text-gray-900 text-sm m-0">{errors.confirmPassword}</p>
        <p className="text-gray-900 text-sm m-0">{errors.birthDate}</p>
      </div>

      <h3 className="text-sm text-gray-100">
        Creează-ți un cont și beneficiezi instant de posibilitatea de a comenta
        la articole și campanii. Personalizează-ți profilul pentru a participa
        activ la campaniile noastre.
      </h3>
      <div className="flex items-center cursor-pointer">
        <input
          id="subscribe"
          name="subscribe"
          type="checkbox"
          checked={formData.subscribe}
          onChange={handleChange}
          className="w-4 h-4 border rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 border-gray-600 focus:ring-primary-600 ring-offset-gray-800 cursor-pointer"
        />
        <label
          htmlFor="subscribe"
          className="ml-3 text-sm text-white cursor-pointer"
        >
          Doresc să mă abonez la newsletter.
        </label>
      </div>

      <div className="w-fit mx-auto">
        <button
          type="submit"
          onClick={(e: any) => handleSubmit(e)}
          className="text-red font-semibold bg-white rounded-lg text-sm py-2 px-6"
        >
          Înregistreaază-te
        </button>
      </div>
    </form>
  );
}
