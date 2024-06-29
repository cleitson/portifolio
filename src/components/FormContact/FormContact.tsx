import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { EmailData } from "../../types";
import { sendEmail } from "../../Api/Nodemailer";
import { useContext } from "react";
import Context from "../../context/Context";
import { CircleLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


const initialData = {
  name: "",
  email: "",
  message: "",
}

const schema = yup
  .object({
    name: yup.string().required("Nome não deve estar vazio"),
    email: yup.string().email("Email inválido").matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "O campo deve possuir um email valido").required("O campo deve possuir um email valido"),
    message: yup.string().min(10, "deve possuir entre 10 e 1000 caracteres").max(1000, "deve possuir entre 10 e 1000 caracteres").required("O campo de mensagem não deve estar vazio e deve ter entre 10 e 1000 caracteres"),
  })
  .required()


function FormContact() {

  const { loading, setLoading } = useContext(Context)

  const { register, reset, handleSubmit, formState: { errors } } = useForm<EmailData>({ resolver: yupResolver(schema), defaultValues: initialData },);

  const onSubmit = handleSubmit(async ({ name, email, message }) => {
    setLoading(true);
    const r = await sendEmail({ name, email, message });    
    console.log(r);
    if(r.message === 'Email enviado com sucesso!'){
      toast.success('Email enviado com sucesso!', {
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
        toast.error('Houve um erro, tente novamente mais tarde!', {
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
    )
  }
  
  return (
    <>
    <ToastContainer />
    <form onSubmit={onSubmit} className="w-full h-full flex-col flex bg-[#070D0D]">
      {errors.name && <p role="alert" className="text-red-400 text-sm">{errors.name.message}</p>}
      <input type="text" className={`flex h-10 w-full mb-5 rounded-md border border-input bg-[#070D0D] px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${errors.name ? 'ring-offset-red-500 border-red-500' : 'ring-offset-[#9AC8D0]'}`}
        placeholder="Nome"
        {...register("name")}
      />

      {errors.email && <p role="alert" className="text-red-400 text-sm">{errors.email.message}</p>}
      <input type="text" className={`flex h-10 w-full mb-5 rounded-md border border-input bg-[#070D0D] px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${errors.email ? 'ring-offset-red-500 border-red-500' : 'ring-offset-[#9AC8D0]'}`}
        placeholder="Email"
        {...register("email")}
      />

      {errors.message && <p role="alert" className="text-red-400 text-sm">{errors.message.message}</p>}
      <textarea className={`flex min-h-[140px] mb-5 w-full rounded-md border border-input bg-[#070D0D] px-3 py-2 text-sm ${errors.message ? 'ring-offset-red-500 border-red-500' : 'ring-offset-[#9AC8D0]'} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none flex-1 h-full`}
        placeholder="Escreva sua mensagem aqui!"
        {...register("message")}
      />
      <button type="submit"
        className="inline-flex items-center justify-center rounded-md bg-[#9AC8D0] text-black hover:bg-[#BEDADA] h-10 px-4 py-2 w-full text-xl font-medium">
        Enviar
      </button>
    </form>
    </>
  )
}

export default FormContact