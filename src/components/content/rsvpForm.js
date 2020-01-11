import React from "react"

const RsvpForm = () => (
  <>
    <h1>OSA</h1>

    <form name="RSVP Form" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="RSVP Form" />
      <div>
        <label>Namn</label>
        <input type="input" name="name" />
      </div>
      <div>
        <label>Kan du komma?</label>
        <input type="radio" />
        Självklart!
        <input type="radio" /> Tyvärr kan jag inte 😢
      </div>
      <div>
        <label>Allergier/specialkost:</label>
        <input type="text" name="foodPreferences" />
      </div>
      <div>
        <label>Önska en låt till dansgolvet</label>
        <input type="text" name="song" />
      </div>
      <button type="submit">Send</button>
    </form>
  </>
)

export default RsvpForm
