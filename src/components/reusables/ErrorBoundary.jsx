import React from "react"
import Layout from "./Layout"

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
          <section id="error-boundary" className="mt-32 text-center mx-auto">
            <h1 className="text-4xl font-normal mb-3">Something went wrong</h1>
            <p>Please try to refresh the page</p>
          </section>
        </Layout>
      )
    }

    return this.props.children
  }
}
export default ErrorBoundary
