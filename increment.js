function Hello() {
    return <h1>My First React App</h1>;
  }

const Counter = ()=>{
    const [count, setCount] = React.useState(0);
 
    return(
        <div id="counter">
        <h1 id="textShow">{count}</h1>
        <button id="click" onClick={()=>{setCount(count+1)}}>Click</button>
        </div>
    );
}
// Main Component
const App = () => {
    return (
      <div id="main">
        <Counter />
        <Counter />
      </div>
    );
}

const root = document.getElementById('root');
  ReactDOM.render(<App/>, root);

// use direct DOM 

// const handleClick = ()=>{
//     const textShowValue = document.getElementById('textShow').textContent;
//     console.log(textShowValue);
//     const countNumber = parseInt(textShowValue);
//     const textShow = document.getElementById('textShow');
//     textShow.textContent = countNumber + 1};
  

  