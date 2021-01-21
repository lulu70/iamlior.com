import React from "react"
import Layout from "./Layout"
import styled from "styled-components"

const Section = styled.section`
  min-height: 500px;
`
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    })
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Layout>
          <Section
            id="error-boundary"
            className="row mx-lg-divider align-items-center"
          >
            <div className="col-11 mx-auto text-center">
              <h1 className="mb-3">Something went wrong</h1>
              <p>Please try to refresh the page</p>
            </div>
          </Section>
        </Layout>
      )
    }

    return this.props.children
  }
}
export default ErrorBoundary
