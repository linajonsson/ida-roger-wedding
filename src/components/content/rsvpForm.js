import React, { useState } from "react"

const RsvpForm = () => {
  const [numberOfPeople, setNumberOfPeople] = useState(2)

  const renderForm = numberOfPeople => {
    const forms = []
    for (var i = 1; i <= numberOfPeople; i++) {
      forms.push(<FormFields index={i} />)
    }
    return forms
  }

  return (
    <div className="container" id="rsvp">
      <h3>OSA</h3>
      <div className="container-text rsvp">
        <p>Hur många vill du anmäla?</p>
        <select
          value={numberOfPeople}
          onChange={e => setNumberOfPeople(e.target.value)}
        >
          <option>1</option>
          <option>2</option>
        </select>
        <form name="RSVP Form" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="RSVP Form" />

          {renderForm(numberOfPeople)}
          <button type="submit">Skicka</button>
        </form>
      </div>
    </div>
  )
}

export default RsvpForm

const FormFields = ({ index }) => {
  const [isAttending, setIsAttending] = useState(true)

  return (
    <>
      <p>Person {index}</p>
      <Input label="Namn" id={`name-${index}`} />

      <div className="radio-buttons">
        <p>Kommer du?</p>
        <label class="radio-button">
          <input
            type="radio"
            name={`Kommer du? ${index}`}
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
            name={`Kommer du? ${index}`}
            value="cantGo"
            onChange={e => {
              setIsAttending(e.target.value === "attending")
            }}
            checked={!isAttending}
          />
          <span class="label-visible">
            <span class="fake-radiobutton"></span>
            Tyvärr kan jag inte
          </span>
        </label>
      </div>
      {isAttending && (
        <>
          <Input
            id={`foodPreferences-${index}`}
            label="Allergier/specialkost:"
          />
          <Input
            id={`song-${index}`}
            label={`Önska en låt som får dig att svänga på höfterna-${index}`}
          />
        </>
      )}
    </>
  )
}

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
