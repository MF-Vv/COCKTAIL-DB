import PropTypes from "prop-types"
import Wrapper from "../wrappers/SearchForm"
import { Form, useNavigation } from "react-router-dom"

const SearchForm = ({ searchTerm }) => {
  const navigation = useNavigation()

  const isSubmitting = navigation.state === "submitting"

  return (
    <Wrapper>
      <Form className="form">
        <input
          type="search"
          name="search"
          className="form-input"
          defaultValue={searchTerm}
        />
        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? "Searching..." : "Search"}
        </button>
      </Form>
    </Wrapper>
  )
}
SearchForm.propTypes = {
  searchTerm: PropTypes.string.isRequired,
}

export default SearchForm
