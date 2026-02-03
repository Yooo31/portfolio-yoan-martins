import { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { TelegramService } from "@/app/services/TelegramService"

interface FormValues {
  last_name: string
  first_name: string
  mail: string
  tel: string
  message: string
}

interface FormViewProps {
  onSubmissionResultChange: (newResult: string | null) => void
}

const FormView: React.FC<FormViewProps> = ({ onSubmissionResultChange }) => {
  const initialValues: FormValues = {
    last_name: "",
    first_name: "",
    mail: "",
    tel: "",
    message: "",
  }

  const [isClicked, setIsClicked] = useState(false)

  const phoneRegExp =
    /^(\+[1-9]{1,4}[ \-]*)?(\([0-9]{2,3}\)[ \-]*)?([0-9]{2,4}[ \-]*){4}[0-9]{2,4}$/
  const validationSchema = Yup.object({
    last_name: Yup.string().required("Le nom est requis..."),
    first_name: Yup.string().required("Le prénom est requis..."),
    mail: Yup.string().email("Le mail n'est pas valide...").required("Le mail est requis..."),
    tel: Yup.string()
      .matches(phoneRegExp, "Le téléphone est invalide")
      .required("Le n° de téléphone est requis..."),
    message: Yup.string().required("Le message est requis..."),
  })

  const onSubmit = async (values: FormValues) => {
    setIsClicked(true)
    try {
      const message = ` \n👫 ${values.last_name} ${values.first_name}\n✉️ ${values.mail}\n📱 ${values.tel}\n\n📝 Contenu :\n${values.message}`
      const response = await TelegramService.sendMessage(message)
      if (response.status === 200) {
        onSubmissionResultChange("success")
        setIsClicked(false)
      } else {
        onSubmissionResultChange("error")
        setIsClicked(false)
      }
    } catch {
      onSubmissionResultChange("error")
      setIsClicked(false)
    }
  }

  return (
    <>
      <h2 className="text-center mb-5 text-xl md:text-3xl">Me contacter</h2>

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form className="w-full z-40">
          <div className="w-full flex flex-wrap">
            <div className="w-full md:w-1/2 lg:w-1/2 py-2.5 px-5">
              <label className="label">
                <span className="label-text">Nom *</span>
              </label>
              <Field
                type="text"
                name="last_name"
                placeholder="Entrez ici"
                className="input input-bordered w-full"
              />
              <ErrorMessage name="last_name" component="div" className="text-red-500 py-2.5" />
            </div>

            <div className="w-full md:w-1/2 lg:w-1/2 py-2.5 px-5">
              <label className="label">
                <span className="label-text">Prénom *</span>
              </label>
              <Field
                type="text"
                name="first_name"
                placeholder="Entrez ici"
                className="input input-bordered w-full"
              />
              <ErrorMessage name="first_name" component="div" className="text-red-500 py-2.5" />
            </div>

            <div className="w-full md:w-1/2 lg:w-1/2 py-2.5 px-5">
              <label className="label">
                <span className="label-text">Mail *</span>
              </label>
              <Field
                type="email"
                name="mail"
                placeholder="Entrez ici"
                className="input input-bordered w-full"
              />
              <ErrorMessage name="mail" component="div" className="text-red-500 py-2.5" />
            </div>

            <div className="w-full md:w-1/2 lg:w-1/2 py-2.5 px-5">
              <label className="label">
                <span className="label-text">Téléphone *</span>
              </label>
              <Field
                type="tel"
                name="tel"
                placeholder="Entrez ici"
                className="input input-bordered w-full"
              />
              <ErrorMessage name="tel" component="div" className="text-red-500 py-2.5" />
            </div>

            <div className="w-full py-2.5 px-5">
              <label className="label">
                <span className="label-text">Message *</span>
              </label>
              <Field
                as="textarea"
                name="message"
                placeholder="Entrez ici"
                className="input input-bordered h-24 w-full"
              />
              <ErrorMessage name="message" component="div" className="text-red-500 py-2.5" />
            </div>

            {isClicked && <span className="loading loading-spinner loading-lg ms-5 mt-5"></span>}
            {!isClicked && (
              <button type="submit" className="btn btn-outline ms-5 mt-5">
                Envoyer
              </button>
            )}
          </div>
        </Form>
      </Formik>
    </>
  )
}

export default FormView
