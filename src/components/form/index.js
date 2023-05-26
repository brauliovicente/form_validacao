import React,{useState} from 'react';
import { Button, Formulario } from './style';

export default function Form() {
    const [aluno, setAluno]=useState({
        firstName:'',
        lastName:'',
        genero:'',
        date:'',
        numeroBI:'',
    });


    function onHandleChange(e){
        let newAluno = aluno;
        newAluno[e.target.name]=e.target.value;
        setAluno({...newAluno});
        console.log(aluno);
    }

    function handleSubmit(e){
        e.preventDefault();
       
        
        
    }
  return (
    <Formulario onSubmit={handleSubmit}>
        <nav className='header'>
            <h3>Formulário</h3>
        </nav>
        <nav className='main'>
            <span className='form-group'>
                <label>Primeiro nome</label>
                <input name='firstName' type='text' placeholder='Primeiro Nome' onChange={onHandleChange}/>
            </span>

            <span className='form-group'>
                <label>Último nome</label>
                <input name='lastName' type='text' placeholder='Último nome' onChange={onHandleChange}/>
            </span>

            <span className='form-group'>
                <label>Genero</label>
                <select name='genero' onChange={onHandleChange}>
                    <option value=''>Seleccione o genero</option>
                    <option value='M'>Masculino</option>
                    <option value='F'>Feminino</option>
                </select>
            </span>

            <span className='form-group'>
                <label>Data de Nascimento</label>
                <input name='date' type='date' onChange={onHandleChange}/>
            </span>

            <span className='form-group'>
                <label>Núm. do BI <span>(Opcional)</span></label>
                <input name='numeroBI' type='text' placeholder='Núm. do Bilhete de Identidade' onChange={onHandleChange}/>
            </span>

            <Button type='submit'>Salvar</Button>

        </nav>
    </Formulario>
  )
}
