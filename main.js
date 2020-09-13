import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hi there 👋</h3>
    <div>
      <h2>My name is Redouane</h2>
      <h3>I use .NET and NodeJS to build stuff. 🚀</h3>
    </div>
    <br />
    <p class="read-the-docs">
      <ul class="no-bullet">
        <li>🔭 I’m currently working on Hoory AI platform full-time as Back-end engineer</li>
        <li>🌱 I’m currently learning some Frontend Framework and Flutter</li>
        <li>👯 I’m looking to collaborate on FinTech projects</li>
        <!-- <li>🤔 I’m looking for help with ...</li> -->
        <li>💬 Ask me about Back-end engineering</li>
        <li>📫 How to reach me on Twitter: <a target="blank" href="https://twitter.com/__redouane">@__redouane</a></li>
        <!-- <li>⚡ Fun fact: ...</li> -->
      </ul>
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
