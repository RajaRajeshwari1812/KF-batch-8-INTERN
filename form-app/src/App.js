import "./App.css";

export default function SimpleForm() {
  return (
    <form className="simple-form">
      <label>
        First Name:
        <input type="text" name="firstName" required />
      </label>

      <label>
        Last Name:
        <input type="text" name="lastName" required />
      </label>

      <label>
        Email:
        <input type="email" name="email" required placeholder="@"/>
      </label>

      <label>
        Phone:
        <input type="tel" name="phone" required placeholder="+91"/>
      </label>

      <label>
        Address:
        <input type="text" name="address" required placeholder="No.,Street name,Area"/>
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}
