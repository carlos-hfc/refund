import { zodResolver } from "@hookform/resolvers/zod"
import { AxiosError } from "axios"
import { useForm } from "react-hook-form"
import { Link, useNavigate, useParams } from "react-router"
import z from "zod"

import fileImg from "@/assets/file.svg"
import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { Select } from "@/components/select"
import { Upload } from "@/components/upload"
import { createRefund } from "@/services/create-refund"
import { uploadReceipt } from "@/services/upload-receipt"
import { CATEGORIES, CATEGORIES_KEYS } from "@/utils/categories"

const MAX_FILE_SIZE = 1024 * 1024 * 3 //3MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"]

const refundSchema = z.strictObject({
  name: z.string().nonempty("Informe um nome para sua solicitação"),
  category: z.string().nonempty("Informe a categoria"),
  amount: z.string(),
  file:
    typeof window === "undefined"
      ? z.any()
      : z
          .instanceof(FileList)
          .transform(list => list.item(0))
          .refine(file => !!file, "Imagem do comprovante é obrigatória")
          .refine(
            file => file?.size <= MAX_FILE_SIZE,
            "Arquivo muito grande, use um arquivo com o tamanho de até 3MB",
          )
          .refine(
            file => ACCEPTED_IMAGE_TYPES.includes(file?.type),
            "Apenas arquivos do tipo .jpeg, .jpg ou .png são aceitos",
          ),
})

type RefundSchema = z.infer<typeof refundSchema>

export function Refund() {
  const { id } = useParams<"id">()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    watch,
  } = useForm<RefundSchema>({
    resolver: zodResolver(refundSchema),
  })

  async function handleRefund(data: RefundSchema) {
    try {
      const { filename } = await uploadReceipt({
        file: data.file,
      })

      await createRefund({
        amount: Number(data.amount.replace(",", ".")),
        name: data.name,
        category: data.category,
        filename,
      })

      navigate("/confirm", { state: { fromSubmit: true } })
    } catch (error) {
      if (error instanceof z.ZodError) {
        return alert(error.issues[0].message)
      }

      if (error instanceof AxiosError) {
        return alert(error.response?.data.message)
      }
    }
  }

  const file = watch("file") as FileList

  return (
    <form
      onSubmit={handleSubmit(handleRefund)}
      className="bg-gray-500 w-full rounded-xl flex flex-col p-10 gap-6 lg:w-lg"
    >
      <header>
        <h1 className="text-xl font-bold text-gray-100">
          Solicitação de reembolso
        </h1>
        <p className="text-sm text-gray-200 mt-2 mb-4">
          Dados da despesa para solicitar reembolso.
        </p>
      </header>

      <Input
        legend="Nome da solicitação"
        disabled={!!id}
        {...register("name")}
      />

      <div className="flex gap-4">
        <Select
          legend="Categoria"
          disabled={!!id}
          {...register("category")}
        >
          {CATEGORIES_KEYS.map(category => (
            <option
              key={category}
              value={category}
            >
              {CATEGORIES[category].name}
            </option>
          ))}
        </Select>

        <Input
          legend="Valor"
          disabled={!!id}
          {...register("amount")}
        />
      </div>

      {id ? (
        <Link
          to=""
          target="_blank"
          className="text-sm text-green-100 font-semibold flex items-center justify-center gap-2 my-6 hover:opacity-70 transition ease-linear"
        >
          <img
            src={fileImg}
            alt=""
          />
          Abrir comprovante
        </Link>
      ) : (
        <Upload
          disabled={!!id}
          accept="image/*"
          {...register("file")}
          filename={file?.item(0)?.name}
        />
      )}

      <div className="flex items-center gap-2">
        {id && <Button className="w-full">Voltar</Button>}
        <Button
          className="w-full"
          type="submit"
          isLoading={isSubmitting}
        >
          Enviar
        </Button>
      </div>
    </form>
  )
}
