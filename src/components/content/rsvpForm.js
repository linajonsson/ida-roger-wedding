import React from "react"

const RsvpForm = () => (
  <div className="rsvp" id="rsvp">
    <h3>OSA</h3>
    <form name="RSVP Form" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="RSVP Form" />
      <Input id="name" label="Namn" />
      {/* <div>
        <label>Kan du komma?</label>
        <div>
          <input type="radio" />
          Självklart!
          <input type="radio" /> Tyvärr, kan jag inte 😢
        </div>
      </div> */}
      <label class="radio-button">
        <input type="radio" name="radio" />
        <span class="label-visible">
          <span class="fake-radiobutton"></span>
          Självklart!
        </span>
      </label>

      <label class="radio-button">
        <input type="radio" name="radio" />
        <span class="label-visible">
          <span class="fake-radiobutton"></span>
          Tyvärr kan jag inte 😢
        </span>
      </label>
      <Input id="foodPreferences" label="Allergier/specialkost:" />
      <Input id="song" label="Önska en låt till dansgolvet" />

      <button type="submit">Skicka</button>
    </form>
  </div>
)

export default RsvpForm

const Input = ({ label, id }) => (
  <div class="form__group field">
    <input
      type="input"
      class="form__field"
      placeholder={label}
      name={id}
      id={id}
      required
    />
    <label for={id} class="form__label">
      {label}
    </label>
  </div>
)
