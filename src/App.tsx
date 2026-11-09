import "./App.css";
import MyComponentFoto from "./components/MyComponentFoto";
import MyComponentInfo from "./components/MyComponentInfo";
import MyComponent1 from "./components/MyComponent1";
import MyComponentGeografy from "./components/MyComponentGeografy";
import MyComponentPlace from "./components/MyComponentPlace";





export default function App() {
  return (
    <main className="container">
    

        <MyComponentFoto />
       <MyComponentInfo />
       <MyComponent1 />
       <MyComponentGeografy />
       <MyComponentPlace />
      

    </main>
  );
}