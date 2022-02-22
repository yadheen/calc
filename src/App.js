import { useState } from 'react';
import './App.css';





function App() {

    const [operand1, setop1] = useState(0)
    const [num, setnum] = useState(0)
    const [operator, setop] = useState(null)

    const evaluate = () => {
        if (operator == 0) {
            setop1(operand1 + num)
            setnum(operand1 + num)
        } else if (operator == 1) {
            setop1(operand1 - num)
            setnum(operand1 - num)
        } else if (operator == 2) {
            setop1(operand1 * num)
            setnum(operand1 * num)
        } else if (operator == 3) {
            setop1(operand1 / num)
            setnum(operand1 / num)
        }




    }

    const plus = () => {
        setop1(num)
        setop(0)


        setnum(null)

    }

    const minus = () => {
        setop1(num)
        setop(1)

        setnum(null)

    }
    const mult = () => {
        setop1(num)
        setop(2)

        setnum(null)

    }
    const divide = () => {
        setop1(num)
        setop(3)

        setnum(null)

    }
    const cancel = () => {
        setop1(null)
        setnum(null)
        setop(null)
    }
    return ( <
        div className = "App" >
        <
        div className = 'displaytab' > { num } < /div>

        <
        div className = 'numpad' >



        <
        div > <
        button onClick = {
            () => setnum((num * 10) + 1)
        } > 1 < /button> <
        button onClick = {
            () => setnum((num * 10) + 2)
        } > 2 < /button> <
        button onClick = {
            () => setnum((num * 10) + 3)
        } > 3 < /button>  <
        button onClick = { cancel } > C < /button >< /
        div >



        <
        div >
        <
        button onClick = {
            () => setnum((num * 10) + 4)
        } > 4 < /button> <
        button onClick = {
            () => setnum((num * 10) + 5)
        } > 5 < /button> <
        button onClick = {
            () => setnum((num * 10) + 6)
        } > 6 < /button>  <
        button onClick = { plus } > + < /button> < /
        div >



        <
        div >

        <
        button onClick = {
            () => setnum((num * 10) + 7)
        } > 7 < /button> <
        button onClick = {
            () => setnum((num * 10) + 8)
        } > 8 < /button> <
        button onClick = {
            () => setnum((num * 10) + 9)
        } > 9 < /button> <
        button onClick = { minus } > - < /button> < /
        div >




        <
        div >
        <
        button onClick = {
            () => setnum((num * 10) + 0)
        } > 0 < /button>   <
        button onClick = { mult } > * < /button> <
        button onClick = { divide } > /</button >
        <
        button onClick = { evaluate } > = < /button >  < /
        div >



        <
        /div>



        <
        /
        div >
    );
}

export default App;