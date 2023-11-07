import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TelegramService } from '@/app/services/TelegramService';


interface FormValues {
  last_name: string;
  first_name: string;
  mail: string;
  tel: string;
  message: string;
}

const FormView: React.FC = () => {
  const initialValues: FormValues = {
    last_name: '',
    first_name: '',
    mail: '',
    tel: '',
    message: '',
  };

  const validationSchema = Yup.object({
    last_name: Yup.string().required('Le nom est requis...'),
    first_name: Yup.string().required('Le prénom est requis...'),
    mail: Yup.string().email('Le mail n\'est pas valide...').required('Le mail est requis...'),
    tel: Yup.string().required('Le n° de téléphone est requis...'),
    message: Yup.string().required('Le message est requis...'),
  });

  const onSubmit = (values: FormValues) => {
    let message = `👫 ${values.last_name} ${values.first_name}\n✉️ (${values.mail}\n📱 ${values.tel}):\n${values.message}`;
    TelegramService.sendMessage(message);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Nom *</span>
            </label>
            <Field type="text" name="last_name" placeholder="Entrez ici" className="input input-bordered w-full max-w-xs" />
            <ErrorMessage name="last_name" component="div" className="text-red-500" />

            <label className="label">
              <span className="label-text">Prénom *</span>
            </label>
            <Field type="text" name="first_name" placeholder="Entrez ici" className="input input-bordered w-full max-w-xs" />
            <ErrorMessage name="first_name" component="div" className="text-red-500" />

            <label className="label">
              <span className="label-text">Mail *</span>
            </label>
            <Field type="email" name="mail" placeholder="Entrez ici" className="input input-bordered w-full max-w-xs" />
            <ErrorMessage name="mail" component="div" className="text-red-500" />

            <label className="label">
              <span className="label-text">Téléphone *</span>
            </label>
            <Field type="text" name="tel" placeholder="Entrez ici" className="input input-bordered w-full max-w-xs" />
            <ErrorMessage name="tel" component="div" className="text-red-500" />

            <label className="label">
              <span className="label-text">Message *</span>
            </label>
            <Field as="textarea" name="message" placeholder="Entrez ici" className="input input-bordered w-full max-w-xs" />
            <ErrorMessage name="message" component="div" className="text-red-500" />

            <button type="submit" className="btn btn-primary mt-4">Envoyer</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default FormView;
