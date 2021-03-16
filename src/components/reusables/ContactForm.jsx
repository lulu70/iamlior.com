import React from "react"
import { navigate } from "gatsby"
import useTabIsUsed from "../../hooks/useTabIsUsed"
const ContactForm = props => {
  const [state, setState] = React.useState({})
  const [valid, setValid] = React.useState(false)

  React.useEffect(() => {
    function isDirty(inputName) {
      return state?.[inputName]?.length > 0
    }
    if (isDirty("full-name") && isDirty("email") && isDirty("message")) {
      setValid(true)
    } else {
      setValid(false)
    }
  }, [state])

  const tabIsdUsed = useTabIsUsed()

  function handleChange(e) {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => {
        setState({})
        navigate(form.getAttribute("action"))
      })
      .catch(error => {
        throw new Error(error)
      })
  }
  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }
  return (
    <form
      {...props}
      name="contact"
      method="post"
      action="/thanks/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <h4 className="text-xl font-semibold">Send Me A message</h4>
      <div className="space-y-5 mt-5">
        <label className="block">
          <span>Full name: </span>
          <input type="hidden" name="form-name" value="contact" />
          <input
            type="text"
            className="mt-0 block w-full px-0.5 border-0 border-b-2 dark:bg-gray-900 border-gray-200 focus:ring-0 focus:border-yellow-400"
            placeholder="John Doe"
            name="full-name"
            onChange={handleChange}
          />
        </label>
        <label className="block">
          <span>Email address</span>
          <input
            type="email"
            name="email"
            className="mt-0 block w-full px-0.5 border-0 border-b-2 dark:bg-gray-900 border-gray-200 focus:ring-0 focus:border-yellow-400"
            placeholder="john@example.com"
            onChange={handleChange}
          />
        </label>
        <label className="block">
          <span>Your Message</span>
          <textarea
            placeholder="Your message goes here..."
            name="message"
            className="mt-0 block w-full px-0.5 border-0 border-b-2 dark:bg-gray-900 border-gray-200 focus:ring-0 focus:border-yellow-400"
            rows="2"
            onChange={handleChange}
          ></textarea>
        </label>
        <button
          disabled={!valid}
          type="submit"
          className={`bg-gray-200 dark:bg-gray-700 px-2 py-1 border-2 border-black dark:border-white rounded-full w-32 ${
            !valid && "opacity-40 cursor-default"
          } ${tabIsdUsed ? "focus" : "focus:outline-none"}`}
        >
          Send
        </button>
      </div>
    </form>
  )
}

export default ContactForm
