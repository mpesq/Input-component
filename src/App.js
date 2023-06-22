import logo from './logo.svg';
import './App.css';
import Input from './input/input';

function App() {
  return (
    <div>
      <div className='title'>Input component</div>
      <Input></Input>
      <Input error></Input>
      <Input disabled></Input>
      <div className="row">
        <Input helperText="Some interesting text"></Input>
        <Input helperText="Some interesting text" error></Input>
      </div>
      <div className="row">
        <Input startIcon></Input>
        <Input endIcon></Input>
      </div>
      <Input></Input>
    </div>
  );
}

export default App;
