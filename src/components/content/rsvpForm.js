import React, { useState } from "react"

const RsvpForm = () => {
  return (
    <div className="container">
      <span className="anchor" id="rsvp" />
      <h3>OSA</h3>
      <div className="container-text rsvp">
        <form name="RSVP Form" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="RSVP Form" />
          <FormFields />
          <button type="submit">Skicka</button>
        </form>
        <p>Vi är tacksamma för ert svar senast den 28 februari 2021.</p>
        <div className="rsvp-kids">
          Barn är underbara (har vi hört), men vår bröllopshelg ser vi fram emot
          att fira i sällskap med våra vuxna vänner.
        </div>
      </div>
    </div>
  )
}

export default RsvpForm

const FormFields = () => {
  const [isAttending, setIsAttending] = useState(true)

  return (
    <>
      <Input label="Namn 1" id="name-1" required />
      <Input label="Namn 2" id="name-2" />
      <Input label="Email" id="email" required />

      <div className="radio-buttons">
        <p>Kommer du/ni?</p>
        <label class="radio-button">
          <input
            type="radio"
            name="Kommer du/ni?"
            value="yes"
            onChange={e => {
              setIsAttending(e.target.value === "yes")
            }}
            checked={isAttending}
          />
          <span class="label-visible">
            <span class="fake-radiobutton"></span>
            Självklart!
          </span>
        </label>

        <label class="radio-button">
          <input
            type="radio"
            name="Kommer du/ni?"
            value="no"
            onChange={e => {
              setIsAttending(e.target.value === "yes")
            }}
            checked={!isAttending}
          />
          <span class="label-visible">
            <span class="fake-radiobutton"></span>
            Tyvärr kan jag/vi inte
          </span>
        </label>
      </div>
      {/* {isAttending && (
        <>
          <Input id="foodPreferences" label="Allergier/specialkost:" required />
          <Input
            id="song"
            label="Önska en låt som får dig/er att svänga på höfterna"
            required
          />
        </>
      )} */}
    </>
  )
}

const Input = ({ label, id, required }) => (
  <div class="form__group field">
    <input
      type="input"
      className="form__field"
      placeholder={label}
      name={id}
      id={id}
      required={required}
    />
    <label htmlFor={id} class="form__label">
      {label}
    </label>
  </div>
)
