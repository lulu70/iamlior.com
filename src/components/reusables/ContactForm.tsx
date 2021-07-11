import React from "react"
import { navigate } from "gatsby"
import styled, { css } from "styled-components"
import tw from "twin.macro"
import getClassNamesByTabIsUsedState from "../../helpers/getClassNamesByTabIsUsedState"
import MainContext from "../../context/MainContext"

const inputStyles = css`
  ${tw`mt-1 block w-full p-2 bg-lightTheme-bg dark:bg-darkTheme-bg border-0 border-b-4 dark:border-b-2 border-lightTheme-bg dark:border-darkTheme-bg focus:border-accent focus:ring-0`}
`
const StyledInput = styled.input`
  ${inputStyles}
`
const StyledTextArea = styled.textarea`
  ${inputStyles}
`

const ContactForm = (props: { className: string }) => {
  const initialState = {
    "full-name": "",
    email: "",
    message: "",
  }
  const [state, setState] = React.useState(initialState)
  const [valid, setValid] = React.useState(false)

  React.useEffect(() => {
    function isDirty(inputName: "full-name" | "email" | "message") {
      return state?.[inputName]?.length > 0
    }
    if (isDirty("full-name") && isDirty("email") && isDirty("message")) {
      setValid(true)
    } else {
      setValid(false)
    }
  }, [state])
  const { tabIsUsed } = React.useContext(MainContext)
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const nameAttribute = form.getAttribute("name")
    if (nameAttribute) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": nameAttribute,
          ...state,
        }),
      })
        .then(() => {
          setState(initialState)
          const actionAttribute = form.getAttribute("action")
          if (actionAttribute) {
            navigate(actionAttribute)
          }
        })
        .catch(error => {
          throw new Error(error)
        })
    }
  }
  function encode(data: { [index: string]: string; message: string }) {
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
      <h4 className="text-2xl font-normal">Send Me A message</h4>
      <div className="space-y-5 mt-5">
        <label className="block" htmlFor="full-name">
          <span>Full name: </span>
          <input type="hidden" name="form-name" value="contact" />
          <StyledInput
            type="text"
            placeholder="John Doe"
            id="full-name"
            name="full-name"
            onChange={handleChange}
          />
        </label>
        <label className="block" htmlFor="email">
          <span>Email address</span>
          <StyledInput
            id="email"
            type="email"
            name="email"
            placeholder="john@example.com"
            onChange={handleChange}
          />
        </label>
        <label className="block" htmlFor="message">
          <span>Your Message</span>
          <StyledTextArea
            id="message"
            placeholder="Your message goes here..."
            name="message"
            rows={2}
            onChange={handleChange}
          ></StyledTextArea>
        </label>
        <button
          disabled={!valid}
          type="submit"
          className={`bg-lightTheme-bg dark:bg-darkTheme-bg px-2 py-1 rounded-full w-32 ${
            !valid && "opacity-40 cursor-default"
          } ${getClassNamesByTabIsUsedState(tabIsUsed)}`}
        >
          Send
        </button>
      </div>
    </form>
  )
}

export default ContactForm
