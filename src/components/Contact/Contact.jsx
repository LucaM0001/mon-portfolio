import React from "react"
import { useForm } from "react-hook-form"
import emailjs from "@emailjs/browser"

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  })

  const serviceID = import.meta.env.VITE_SERVICE_ID
  const templateID = import.meta.env.VITE_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_PUBLIC_KEY

  const onSubmit = (data) => {
    const templateParams = {
      name: data.name,
      email: data.email,
      message: data.message,
      date: new Date().toLocaleDateString(),
    }

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log(templateParams)

        console.log(response)
        // alert("Message envoyé avec succès !")
        // reset()
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi :", error)
        // alert("Une erreur s'est produite, veuillez réessayer.")
      })
  }

  return (
    <section className="container pt-5 pb-2">
      <h2>Contactez-moi</h2>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nom
          </label>
          <input
            {...register("name", {
              required: "Le nom est obligatoire",
              minLength: {
                value: 3,
                message: "Le nom doit avoir au moins 3 caractères",
              },
            })}
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            id="name"
          />
          {errors.name && (
            <div className="invalid-feedback">{errors.name.message}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            {...register("email", {
              required: "L'email est obligatoire",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "L'email doit être valide",
              },
            })}
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            id="email"
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email.message}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            {...register("message", {
              required: "Le message est obligatoire",
              minLength: {
                value: 10,
                message: "Le message doit comporter au moins 10 caractères",
              },
            })}
            className={`form-control ${errors.message ? "is-invalid" : ""}`}
            id="message"
            rows="3"
          ></textarea>
          {errors.message && (
            <div className="invalid-feedback">{errors.message.message}</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary" disabled={!isValid}>
          Envoyer
        </button>
      </form>
    </section>
  )
}

export default Contact
