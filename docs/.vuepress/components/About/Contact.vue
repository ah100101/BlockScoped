<template>
  <form name="contact" method="POST" data-netlify="true" netlify>
    <h3>Contact Us</h3>
    <div>
      <p>
        <label>Your Name: <input type="text" name="name" /></label>   
      </p>
      <p>
        <label>Your Email: <input type="email" name="email" /></label>
      </p>
      <p>
        <label>Message: <textarea name="message"></textarea></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </div>
  </form>
</template>
<script>
</script>
<style lang='scss'>

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

label {
  font-weight: 600;
}

input, textarea {
  color: #4e6e8e;
  display: inline-block;
  border: 1px solid #cfd4db;
  border-radius: 2rem;
  font-size: 0.9rem;
  line-height: 2rem;
  padding: 0 0.5rem 0 2rem;
  outline: none;
  background-size: 1rem;
}

textarea {
  display: block;
  border-radius: 1rem;
  width: 100%;
  padding: 0;
}

button {
  background-color: #60bece;
  display: inline-block;
  font-size: 1rem;
  color: #fff;
  background-color: #4eb7c9;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  transition: background-color 0.1s ease;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #3badc0;
  font-weight: inherit;
  margin: .25rem;
}

</style>