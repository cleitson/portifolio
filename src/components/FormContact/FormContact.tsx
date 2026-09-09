import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { EmailData } from "../../types";
import { sendEmail } from "../../Api/Nodemailer";
import { useContext } from "react";
import Context from "../../context/Context";
import { CircleLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialData = {
  name: "",
  email: "",
  message: "",
};

const schema = yup
  .object({
    name: yup.string().required("Nome não deve estar vazio"),
    email: yup
      .string()
      .email("Email inválido")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "O campo deve possuir um email valido",
      )
      .required("O campo deve possuir um email valido"),
    message: yup
      .string()
      .min(10, "deve possuir entre 10 e 1000 caracteres")
      .max(1000, "deve possuir entre 10 e 1000 caracteres")
      .required(
        "O campo de mensagem não deve estar vazio e deve ter entre 10 e 1000 caracteres",
      ),
  })
  .required();

function FormContact() {
  const { loading, setLoading } = useContext(Context);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailData>({
    resolver: yupResolver(schema),
    defaultValues: initialData,
  });

  const onSubmit = handleSubmit(async ({ name, email, message }) => {
    setLoading(true);
    const r = await sendEmail({ name, email, message });
    console.log(r);
    if (r.message === "Email enviado com sucesso!") {
      toast.success("Email enviado com sucesso!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      reset();
      setLoading(false);
    } else {
      toast.error("Houve um erro, tente novamente mais tarde!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setLoading(false);
    }
  });

  if (loading) {
    return (
      <div className="flex w-full justify-center items-center">
        <CircleLoader color="#BEDADA" size={100} />
      </div>
    );
  }

  return (
    <>
      <ToastContainer />
      <form
        onSubmit={onSubmit}
        className="flex h-full w-full flex-col rounded-2xl border border-white/10 bg-[#0d1b1b] p-5 md:p-7"
      >
        {errors.name && (
          <p role="alert" className="text-red-400 text-sm">
            {errors.name.message}
          </p>
        )}
        <input
          type="text"
          className={`mb-5 flex h-11 w-full rounded-xl border border-white/10 bg-[#091111] px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-[#63d5cc] ${errors.name ? "border-red-500" : ""}`}
          placeholder="Nome"
          {...register("name")}
        />

        {errors.email && (
          <p role="alert" className="text-red-400 text-sm">
            {errors.email.message}
          </p>
        )}
        <input
          type="text"
          className={`mb-5 flex h-11 w-full rounded-xl border border-white/10 bg-[#091111] px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-[#63d5cc] ${errors.email ? "border-red-500" : ""}`}
          placeholder="Email"
          {...register("email")}
        />

        {errors.message && (
          <p role="alert" className="text-red-400 text-sm">
            {errors.message.message}
          </p>
        )}
        <textarea
          className={`mb-5 flex min-h-[140px] w-full flex-1 resize-none rounded-xl border border-white/10 bg-[#091111] px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#63d5cc] ${errors.message ? "border-red-500" : ""}`}
          placeholder="Escreva sua mensagem aqui!"
          {...register("message")}
        />
        <button
          type="submit"
          className="mb-0 inline-flex h-11 w-full items-center justify-center rounded-full bg-[#63d5cc] px-4 py-2 text-lg font-semibold text-[#071010] transition hover:bg-[#91ece4]"
        >
          Enviar
        </button>
      </form>
    </>
  );
}

export default FormContact;
