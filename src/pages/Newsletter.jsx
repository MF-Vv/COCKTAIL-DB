import { Form, useNavigation } from "react-router-dom"

const Newsletter = () => {
  const navigation = useNavigation()

  const isSubmitting = navigation.state === "submitting"

  return (
    <Form className="form" method="POST">
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Our newsletter
      </h4>

      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-input"
          name="name"
          id="name"
          required
          defaultValue="James"
        />
      </div>

      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          last name
        </label>
        <input
          type="text"
          className="form-input"
          name="lastName"
          id="lastName"
          required
          defaultValue="born"
        />
      </div>

      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="text"
          className="form-input"
          name="email"
          id="email"
          required
          defaultValue="test@test.com"
        />
      </div>
      <button
        type="submit"
        className="btn btn-block"
        disabled={isSubmitting}
        style={{ marginTop: "0.5rem" }}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </Form>
  )
}

export default Newsletter
