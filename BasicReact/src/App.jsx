function App() {
  const name = "rajib sk";
  const mul = (a, b) => a * b;
  const division = (a, b) => a / b;
  const specialClass = "this_is_the_class";
  return (
    <section>
      <p>My name is:{name}</p>
      <p>the of multiplication is {mul(12, 3)}</p>
      <p>the result of division is {division(12, 4)}</p>
      <h1>this is the message</h1>
    </section>
  );
}
export default App;
