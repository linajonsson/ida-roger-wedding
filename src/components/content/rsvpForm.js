import React, { useState } from "react"

const RsvpForm = () => {
  const [isAttending, setIsAttending] = useState(true)

  return (
    <div className="container" id="rsvp">
      <h3>OSA</h3>
      <div className="container-text rsvp">
        <form name="RSVP Form" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="RSVP Form" />
          <Input id="name" label="Namn" />

          <div className="radio-buttons">
            <p>Kommer du?</p>
            <label class="radio-button">
              <input
                type="radio"
                name="Kommer du?"
                value="attending"
                onChange={e => {
                  setIsAttending(e.target.value === "attending")
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
                name="Kommer du?"
                value="cantGo"
                onChange={e => {
                  setIsAttending(e.target.value === "attending")
                }}
                checked={!isAttending}
              />
              <span class="label-visible">
                <span class="fake-radiobutton"></span>
                Tyvärr kan jag inte 😢
              </span>
            </label>
          </div>
          {isAttending && (
            <>
              <Input id="foodPreferences" label="Allergier/specialkost:" />
              <Input
                id="song"
                label="Önska en låt som får dig att svänga på höfterna"
              />
            </>
          )}
          <button type="submit">Skicka</button>
        </form>
      </div>
    </div>
  )
}

export default RsvpForm

const Input = ({ label, id }) => (
  <div class="form__group field">
    <input
      type="input"
      className="form__field"
      placeholder={label}
      name={id}
      id={id}
      required
    />
    <label htmlFor={id} class="form__label">
      {label}
    </label>
  </div>
)
