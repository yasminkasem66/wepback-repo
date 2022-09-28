import './hello.css' ;

export default class helloWorldBtn {
  render() {
    const btn = document.createElement("button");
    const body = document.querySelector("body");
    btn.innerHTML = "hello world ";
    btn.classList.add("hello-world-btn");
    body.appendChild(btn)
  }
  // console.log("Hello WOrld");
}
