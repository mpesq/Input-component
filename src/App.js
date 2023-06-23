import logo from './logo.svg';
import './App.css';
import Input from './input/input';

function App() {
  return (
    <div>
      <div className='title'>Input component</div>
      <Input title="<Input />"></Input>
      <Input error title="<Input error />"></Input>
      <Input disabled title="<Input disabled />"></Input>
      <div className="row">
        <Input helperText="Some interesting text" title="<Input disabled />"></Input>
        <Input helperText="Some interesting text" error title="<Input disabled error />"></Input>
      </div>
      <div className="row">
        <Input startIcon title="<Input startIcon />"></Input>
        <Input endIcon title="<Input endIcon />"></Input>
      </div>
      <div className="row">
        <Input size="sm" title="<Input size=”sm” />"></Input>
        <Input size="md" title="<Input size=”md” />"></Input>
      </div>
      <Input fullWidth title="<Input fullWidth />"></Input>
      <Input multiline rows={4} title="<Input multiline row=”4” />"></Input>
      
    </div>
  );
}

export default App;
