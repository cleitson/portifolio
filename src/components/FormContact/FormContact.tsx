import sendMail from "../../api/NodemailerApi"
import { useForm } from "react-hook-form";
import { EmailData } from "../../types";

function FormContact() {
  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault()

  //   const form = event.currentTarget
  //   const formData = new FormData(form)
  //   const data = {
  //     name: formData.get('name') as string,
  //     email: formData.get('email') as string,
  //     message: formData.get('message') as string
  //   }

  //   try {
  //     await sendMail(data)
  //     alert('Mensagem enviada com sucesso!')
  //   } catch (error) {
  //     alert('Erro ao enviar mensagem!')
  //   }
  // }

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm<EmailData>();
  const onSubmit = handleSubmit(async ({ name, email, message }) => {
    const enviar = await sendMail({ name, email, message });
    console.log(name, email, message, errors, enviar);
  });

  return (
    <form onSubmit={onSubmit} className="w-full h-full flex-col flex gap-5 bg-[#070D0D]">
      <input type="text" className="flex h-10 w-full rounded-md border border-input bg-[#070D0D] px-3 py-2 text-sm focus-visible:ring-2 ring-offset-[#9AC8D0] focus-visible:ring-ring focus-visible:ring-offset-2" placeholder="Nome"  {...register("name", {required: true})} />
      <input type="email" className="flex h-10 w-full rounded-md border border-input bg-[#070D0D] px-3 py-2 text-sm focus-visible:ring-2 ring-offset-[#9AC8D0] focus-visible:ring-ring focus-visible:ring-offset-2" placeholder="Email"  required {...register("email")} />
      <textarea className="flex min-h-[140px] w-full rounded-md border border-input bg-[#070D0D] px-3 py-2 text-sm ring-offset-[#9AC8D0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none flex-1 h-full"  placeholder="Escreva sua mensagem aqui!" required {...register("message")} />
      <button 
        className="inline-flex items-center justify-center rounded-md bg-[#9AC8D0] text-black hover:bg-[#BEDADA] h-10 px-4 py-2 w-full text-xl font-medium">
        Enviar
      </button>
    </form>
  )
}

export default FormContact